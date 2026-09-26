import { ReactElement, ReactNode } from 'react'
import { act, render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import {
    columnOrderKey,
    readColumnOrder,
    readColumnWidths,
    writeColumnOrder,
    writeColumnWidths
} from '../DataGrid/layout'
import { CrudTable, CrudTablePaging, CrudTableProps } from './CrudTable'
import { GRID_HEADER_GROUND_VAR, GRID_PAGE_SIZE } from './useGridPresentation'

// The DataGrid is tested upstream; mock it to capture the props the wrapper feeds it and test
// the wrapper's own logic (selection, pagination, empty state).
interface CapturedGridProps {
    rows: DeviceRow[]
    columns: {
        key: string
        name: string
        width?: number | string
        sortable?: boolean
        renderCell?: (props: { row: DeviceRow }) => ReactNode
    }[]
    selectedRows?: string[]
    onSelectedRowsChange?: (ids: string[]) => void
    columnWidths?: Map<string, { type: string; width: number }>
    onColumnWidthsChange?: (widths: Map<string, { type: string; width: number }>) => void
    loading?: boolean
    noDataMessage?: ReactNode
    defaultSortColumns?: { columnKey: string; direction: 'ASC' | 'DESC' }[]
    sortColumns?: { columnKey: string; direction: 'ASC' | 'DESC' }[]
    onSortColumnsChange?: (columns: { columnKey: string; direction: 'ASC' | 'DESC' }[]) => void
    sortRowsLocally?: boolean
    theme?: Record<string, unknown>
    headerRowHeight?: number
    rowHeight?: number | ((row: DeviceRow) => number)
    visibilityColumnFeature?: {
        enabled?: boolean
        localStorageKey?: string
        visibilityFeatureDisabledFor?: string[]
        hiddenByDefault?: string[]
        onHiddenColumnsChange?: (hiddenColumns: string[]) => void
        onColumnOrderChange?: (columnKeys: string[]) => void
        onReset?: () => void
    }
    rowGestures?: {
        onClick?: (row: DeviceRow) => void
        excludedColumns?: string[]
    }
    pagination?: {
        enabled?: boolean
        defaultPageSize?: number
        totalLabel?: (count: number) => string
        rowsPerPageOptions?: number[]
        remotePagination?: {
            currentPage: number
            setCurrentPage: (page: number) => void
            pageSize: number
            setPageSize: (pageSize: number) => void
            totalCount: number
        }
    }
}
let lastGrid: CapturedGridProps
vi.mock('../DataGrid/DataGrid', async (importOriginal) => ({
    ...(await importOriginal<typeof import('../DataGrid/DataGrid')>()),
    DataGrid: (props: CapturedGridProps) => {
        lastGrid = props
        // mirror the real grid: the noDataMessage renders only when there are no rows
        return <div data-testid='grid'>{props.rows.length === 0 ? props.noDataMessage : null}</div>
    }
}))

interface DeviceRow {
    id: string
    nameWithExtraInfos: string
}
const livingRoom: DeviceRow = { id: 'd1', nameWithExtraInfos: 'Living room AABB' }
const kitchen: DeviceRow = { id: 'd2', nameWithExtraInfos: 'Kitchen CCDD' }
const devices: DeviceRow[] = [livingRoom, kitchen]

const table = (props: Partial<CrudTableProps<DeviceRow>> = {}): ReactElement => (
    <ThemeProvider theme={lightTheme}>
        <CrudTable<DeviceRow>
            columnVisibilityKey='crudTableTest'
            rows={devices}
            columns={[{ key: 'nameWithExtraInfos', name: 'Name' }]}
            {...props}
        />
    </ThemeProvider>
)

const renderTable = (props: Partial<CrudTableProps<DeviceRow>> = {}): RenderResult =>
    render(table(props))

// the stored per-table layouts (hidden columns, widths, order) must not leak between tests
beforeEach(() => localStorage.clear())

afterEach(() => {
    vi.useRealTimers()
})

describe('CrudTable', () => {
    it('forwards rows and columns to the grid', () => {
        renderTable()
        expect(lastGrid.rows).toEqual(devices)
        expect(lastGrid.columns).toHaveLength(1)
    })

    it('maps pagination to the grid remotePagination shape', () => {
        const onPageChange = vi.fn()
        const onPageSizeChange = vi.fn()
        renderTable({
            paging: {
                mode: 'server' as const,
                total: 100,
                pageSize: 20,
                currentPage: 1,
                onPageChange,
                onPageSizeChange
            }
        })
        expect(lastGrid.pagination?.enabled).toBe(true)
        expect(lastGrid.pagination?.remotePagination?.totalCount).toBe(100)
        lastGrid.pagination?.remotePagination?.setCurrentPage(2)
        expect(onPageChange).toHaveBeenCalledWith(2)
    })

    /**
     * The footer's rows-per-page dropdown is drawn whether or not anyone answers it — the library
     * hands it to MUI and offers no way to hide it — so a server-paged table used to ship a live
     * control that changed nothing. Every consumer answers it now, and the type says so.
     */
    it('carries the rows-per-page choice back to the consumer under server paging', () => {
        const onPageSizeChange = vi.fn()
        renderTable({
            paging: {
                mode: 'server' as const,
                total: 100,
                pageSize: 20,
                currentPage: 1,
                onPageChange: vi.fn(),
                onPageSizeChange
            }
        })
        lastGrid.pagination?.remotePagination?.setPageSize(50)
        expect(onPageSizeChange).toHaveBeenCalledWith(50)
    })

    // A table holding a whole fleet may want a page the four default sizes do not offer
    it('hands the rows-per-page options to the grid, url-paged and server-paged alike', () => {
        renderTable({
            paging: {
                mode: 'url' as const,
                page: 0,
                onPageChange: vi.fn(),
                pageSize: 50,
                onPageSizeChange: vi.fn(),
                rowsPerPageOptions: [10, 50, 500]
            }
        })
        expect(lastGrid.pagination?.rowsPerPageOptions).toEqual([10, 50, 500])

        renderTable({
            paging: {
                mode: 'server' as const,
                total: 100,
                pageSize: 20,
                currentPage: 1,
                onPageChange: vi.fn(),
                onPageSizeChange: vi.fn(),
                rowsPerPageOptions: [20, 200]
            }
        })
        expect(lastGrid.pagination?.rowsPerPageOptions).toEqual([20, 200])

        // unsaid, the grid keeps its own
        renderTable()
        expect(lastGrid.pagination?.rowsPerPageOptions).toBeUndefined()
    })

    it('paginates locally when the consumer gives no server pagination', () => {
        renderTable()
        expect(lastGrid.pagination?.enabled).toBe(true)
        expect(lastGrid.pagination?.remotePagination).toBeUndefined()
        expect(lastGrid.pagination?.defaultPageSize).toBe(GRID_PAGE_SIZE)
    })

    // The count at the footer's left end rides the pager, so it reaches BOTH paging shapes — and a
    // table that turns the pager off has nowhere to put it.
    it('hands the footer count to the grid, server-paged and locally paged alike', () => {
        const totalLabel = (count: number): string => `${count} devices`
        renderTable({ totalLabel })
        expect(lastGrid.pagination?.totalLabel).toBe(totalLabel)

        renderTable({
            totalLabel,
            paging: {
                mode: 'server' as const,
                total: 100,
                pageSize: 20,
                currentPage: 1,
                onPageChange: vi.fn(),
                onPageSizeChange: vi.fn()
            }
        })
        expect(lastGrid.pagination?.totalLabel).toBe(totalLabel)

        renderTable({ totalLabel, paging: { mode: 'off' as const } })
        expect(lastGrid.pagination?.enabled).toBe(false)
        expect(lastGrid.pagination?.totalLabel).toBeUndefined()
    })

    it('applies the shared grid presentation, selection colours included', () => {
        renderTable()
        expect(lastGrid.headerRowHeight).toBe(40)
        expect(lastGrid.rowHeight).toBe(50)
        // a selected row is tinted on every table, and it is the SAME tint hovered — the checkbox
        // already answers for the hover
        expect(lastGrid.theme).toMatchObject({
            '--rdg-background-color': lightTheme.surface.row,
            // read through the ground variable, so a dialog can stand the band on its own paper
            '--rdg-header-background-color': `var(${GRID_HEADER_GROUND_VAR}, ${lightTheme.backgroundDark})`,
            '--rdg-row-selected-background-color': lightTheme.surface.rowSelected,
            '--rdg-row-selected-hover-background-color': lightTheme.surface.rowSelected,
            '--rdg-row-selected-color': lightTheme.surface.text
        })
    })

    // The one table whose rows are not all the same height is the license page, whose cells grow
    // with the grants they show
    it('lets a table size its own rows, and keeps the shared rhythm for every other', () => {
        const rowHeight = (row: DeviceRow): number => (row.id === 'd1' ? 88 : 50)
        renderTable({ rowHeight })
        expect(lastGrid.rowHeight).toBe(rowHeight)
    })

    it('reports a column the user hid, so sibling tables over one schema can follow', () => {
        const onHiddenColumnsChange = vi.fn()
        renderTable({ onHiddenColumnsChange, hiddenColumnsByDefault: ['nameWithExtraInfos'] })
        expect(lastGrid.visibilityColumnFeature?.hiddenByDefault).toEqual(['nameWithExtraInfos'])
        lastGrid.visibilityColumnFeature?.onHiddenColumnsChange?.(['other'])
        expect(onHiddenColumnsChange).toHaveBeenCalledWith(['other'])
    })

    it('hands the grid the sort it should open on', () => {
        renderTable({
            sorting: {
                mode: 'local' as const,
                opening: [{ columnKey: 'nameWithExtraInfos', direction: 'ASC' as const }]
            }
        })
        expect(lastGrid.defaultSortColumns).toEqual([
            { columnKey: 'nameWithExtraInfos', direction: 'ASC' }
        ])
        // nothing to say about the ordering: the grid owns the value, so it orders by it anyway
        expect(lastGrid.sortRowsLocally).toBeUndefined()
    })

    /**
     * The `url` arm's whole point, as three props: the page holds the value, and the grid is told to
     * keep ordering the rows anyway. Handing over `onSortColumnsChange` alone turns the library's own
     * sort off, which is a header that moves over rows that do not.
     */
    it('lets the page hold the sort while the grid still orders the rows', () => {
        const onChange = vi.fn()
        const columns = [{ columnKey: 'nameWithExtraInfos', direction: 'ASC' as const }]
        renderTable({ sorting: { mode: 'url' as const, columns, onChange } })

        expect(lastGrid.sortColumns).toEqual(columns)
        expect(lastGrid.onSortColumnsChange).toBe(onChange)
        expect(lastGrid.sortRowsLocally).toBe(true)
        // the opening value belongs to the arm that has no other way to state one
        expect(lastGrid.defaultSortColumns).toBeUndefined()
    })

    // Putting the sort in the URL does not make ordering ONE PAGE honest — the strip covers it too.
    it('still strips a sortable column when a server-paged table sorts from the URL', () => {
        renderTable({
            columns: [{ key: 'nameWithExtraInfos', name: 'Name', sortable: true }],
            sorting: { mode: 'url' as const, columns: [], onChange: vi.fn() },
            paging: {
                mode: 'server' as const,
                total: 60,
                pageSize: 25,
                currentPage: 0,
                onPageChange: vi.fn(),
                onPageSizeChange: vi.fn()
            }
        })
        expect(lastGrid.columns[0]?.sortable).toBe(false)
        // and the rows are not ordered either: a link carrying `sort=` would otherwise order the
        // 25 rows in hand, which is exactly the reading the strip exists to prevent
        expect(lastGrid.sortRowsLocally).toBeUndefined()
    })

    // A local sort over a server-paged table orders the 25 rows in hand while reading as though it
    // had ordered the table, so the header is not offered at all.
    it('strips a sortable column on a server-paged table that does not sort server-side', () => {
        renderTable({
            columns: [{ key: 'nameWithExtraInfos', name: 'Name', sortable: true }],
            paging: {
                mode: 'server' as const,
                total: 60,
                pageSize: 25,
                currentPage: 0,
                onPageChange: vi.fn(),
                onPageSizeChange: vi.fn()
            }
        })
        expect(lastGrid.columns[0]?.sortable).toBe(false)
    })

    it('keeps it where the page sorts server-side, which is the honest case', () => {
        const onChange = vi.fn()
        renderTable({
            columns: [{ key: 'nameWithExtraInfos', name: 'Name', sortable: true }],
            sorting: { mode: 'server' as const, columns: [], onChange },
            paging: {
                mode: 'server' as const,
                total: 60,
                pageSize: 25,
                currentPage: 0,
                onPageChange: vi.fn(),
                onPageSizeChange: vi.fn()
            }
        })
        expect(lastGrid.columns[0]?.sortable).toBe(true)
        expect(lastGrid.onSortColumnsChange).toBe(onChange)
    })

    // The library derives its columns from this handler's identity, and a fresh set of columns
    // re-filters and re-sorts the rows — so a page re-rendering for any reason must not hand the
    // grid a new function
    it('keeps the selection handler stable across re-renders', () => {
        const onSelectedIdsChange = vi.fn()
        const props = {
            selection: { mode: 'ids' as const, ids: [], onChange: onSelectedIdsChange }
        }
        const { rerender } = renderTable(props)
        const first = lastGrid.onSelectedRowsChange

        rerender(table(props))
        expect(lastGrid.onSelectedRowsChange).toBe(first)
    })

    // The library persists hidden columns under this key alone, so two tables sharing one would
    // hide each other's columns wherever their keys coincide.
    it("enables column visibility under the page's own key", () => {
        renderTable()
        expect(lastGrid.visibilityColumnFeature).toMatchObject({
            enabled: true,
            localStorageKey: 'crudTableTest'
        })
    })

    // The chooser labels an entry with the column's name, so an unnamed column would be a blank
    // line the user cannot identify — and unticking it would hide a column they cannot bring back.
    it('keeps the actions column and any unnamed column out of the chooser', () => {
        renderTable({
            columns: [
                { key: 'nameWithExtraInfos', name: 'Name' },
                { key: 'select', name: '' },
                { key: 'actions', name: '' }
            ]
        })
        expect(lastGrid.visibilityColumnFeature?.visibilityFeatureDisabledFor).toEqual([
            'select',
            'actions'
        ])
    })

    /**
     * The column chooser's rows are draggable, and where they settle is the table's column ORDER.
     * The library reports it and the app stores it, so this is where the round trip closes: no page
     * wires anything, and the columns the grid is handed come back arranged.
     */
    it('lays the columns out in the order this table stored', () => {
        localStorage.setItem(
            columnOrderKey('crudTableTest'),
            JSON.stringify(['status', 'nameWithExtraInfos'])
        )
        renderTable({
            columns: [
                { key: 'nameWithExtraInfos', name: 'Name' },
                { key: 'status', name: 'Status' }
            ]
        })
        expect(lastGrid.columns.map((column) => column.key)).toEqual([
            'status',
            'nameWithExtraInfos'
        ])
    })

    it('writes down the order the chooser reports', () => {
        renderTable({
            columns: [
                { key: 'nameWithExtraInfos', name: 'Name' },
                { key: 'status', name: 'Status' }
            ]
        })
        act(() =>
            lastGrid.visibilityColumnFeature?.onColumnOrderChange?.([
                'status',
                'nameWithExtraInfos'
            ])
        )
        expect(readColumnOrder('crudTableTest')).toEqual(['status', 'nameWithExtraInfos'])
        // live, like the visibility half: the grid is handed the new arrangement with no reload
        expect(lastGrid.columns.map((column) => column.key)).toEqual([
            'status',
            'nameWithExtraInfos'
        ])
    })

    /**
     * The reported defect: drag EVERY column and the table stops short of its container. The last
     * data column is promoted to a flexible track, but the grid lays out from the width map, where
     * its dragged width still sat as a fixed entry.
     */
    it('keeps the promoted filling column out of the grid width map, its drag as the floor', () => {
        writeColumnWidths('crudTableTest', { nameWithExtraInfos: 200, status: 300 })
        renderTable({
            columns: [
                { key: 'nameWithExtraInfos', name: 'Name' },
                { key: 'status', name: 'Status' }
            ]
        })
        expect(lastGrid.columns.map((column) => column.width)).toEqual([200, 'minmax(300px, 1fr)'])
        expect(lastGrid.columnWidths?.has('nameWithExtraInfos')).toBe(true)
        expect(lastGrid.columnWidths?.has('status')).toBe(false)
    })

    /**
     * The other half of the same defect: the promoted column lays out from a track with no entry in
     * the map, so the grid MEASURES it and reports it back as measured. That report must not take
     * the width the reader dragged with it.
     */
    it('keeps the promoted column’s dragged width when the grid measures it', () => {
        writeColumnWidths('crudTableTest', { nameWithExtraInfos: 200, status: 300 })
        renderTable({
            columns: [
                { key: 'nameWithExtraInfos', name: 'Name' },
                { key: 'status', name: 'Status' }
            ]
        })

        act(() =>
            lastGrid.onColumnWidthsChange?.(
                new Map([
                    ['nameWithExtraInfos', { type: 'resized', width: 200 }],
                    ['status', { type: 'measured', width: 620 }]
                ])
            )
        )

        expect(readColumnWidths('crudTableTest')).toEqual({
            nameWithExtraInfos: 200,
            status: 300
        })
    })

    it('hands every dragged width to the grid while a column still flexes', () => {
        writeColumnWidths('crudTableTest', { nameWithExtraInfos: 200 })
        renderTable({
            columns: [
                { key: 'nameWithExtraInfos', name: 'Name' },
                { key: 'status', name: 'Status', width: 'minmax(120px, 1fr)' }
            ]
        })
        expect(lastGrid.columnWidths?.get('nameWithExtraInfos')).toEqual({
            type: 'resized',
            width: 200
        })
    })

    // ONE reset item, every stored layout: hidden columns, dragged widths, arranged order
    it('clears the stored order along with the widths on reset', () => {
        writeColumnWidths('crudTableTest', { nameWithExtraInfos: 300 })
        writeColumnOrder('crudTableTest', ['status', 'nameWithExtraInfos'])
        renderTable({
            columns: [
                { key: 'nameWithExtraInfos', name: 'Name' },
                { key: 'status', name: 'Status' }
            ]
        })
        act(() => lastGrid.visibilityColumnFeature?.onReset?.())
        expect(readColumnOrder('crudTableTest')).toEqual([])
        expect(readColumnWidths('crudTableTest')).toEqual({})
        expect(lastGrid.columns.map((column) => column.key)).toEqual([
            'nameWithExtraInfos',
            'status'
        ])
    })

    it('drops the selection column when selectable is false', () => {
        renderTable({
            selectable: false,
            selection: { mode: 'ids' as const, ids: ['d1'], onChange: vi.fn() }
        })
        expect(lastGrid.onSelectedRowsChange).toBeUndefined()
    })

    // The kebab does not fill its cell — a click in the padding beside it is that column's
    it('keeps the row-actions column out of it', () => {
        renderTable({ selection: { mode: 'ids' as const, ids: [], onChange: vi.fn() } })
        expect(lastGrid.rowGestures?.excludedColumns).toEqual(['actions'])
    })

    // A click is the checkbox's own gesture on every selectable table (Olivier, 2026-08-19) —
    // ticking the row, unticking one already ticked.
    it('toggles the row selection on click when the table is selectable', () => {
        const onSelectedIdsChange = vi.fn()
        renderTable({
            selection: { mode: 'ids' as const, ids: ['d1'], onChange: onSelectedIdsChange }
        })
        lastGrid.rowGestures?.onClick?.(kitchen)
        expect(onSelectedIdsChange).toHaveBeenCalledWith(['d1', 'd2'])
        lastGrid.rowGestures?.onClick?.(livingRoom)
        expect(onSelectedIdsChange).toHaveBeenCalledWith([])
    })

    it('leaves the click to the grid on a table with no selection', () => {
        renderTable({ selectable: false })
        expect(lastGrid.rowGestures?.onClick).toBeUndefined()
    })

    // The library replaces expand-on-click with any onClick it is handed, so the default must stand
    // aside: on an expandable table a click that also ticked would make opening a row an edit of
    // the selection.
    it('does not claim the click on an expandable table', () => {
        renderTable({
            selection: { mode: 'ids' as const, ids: [], onChange: vi.fn() },
            expandable: {
                expandedIds: [],
                onExpandedChange: vi.fn(),
                renderDetail: () => null,
                labels: { expand: 'Expand', collapse: 'Collapse' }
            }
        })
        expect(lastGrid.rowGestures?.onClick).toBeUndefined()
    })

    // The device list toggles AND steps back to its selection view; License opens its drawer.
    it('lets a page-declared primary action win over the selection toggle', () => {
        const onSelectedIdsChange = vi.fn()
        const onRowPrimaryAction = vi.fn()
        renderTable({
            selection: { mode: 'ids' as const, ids: [], onChange: onSelectedIdsChange },
            onRowPrimaryAction
        })
        lastGrid.rowGestures?.onClick?.(livingRoom)
        expect(onRowPrimaryAction).toHaveBeenCalledWith(livingRoom)
        expect(onSelectedIdsChange).not.toHaveBeenCalled()
    })

    // With an icon the empty state is the shared GridEmptyState; without one it's the bare string.
    it('shows the icon + message empty state when there are no rows and an emptyIcon is given', () => {
        renderTable({
            rows: [],
            emptyIcon: <svg data-testid='empty-icon' />,
            noDataMessage: 'Nothing here',
            emptyHint: 'Adjust the filters'
        })
        expect(screen.getByTestId('empty-icon')).toBeInTheDocument()
        expect(screen.getByText('Nothing here')).toBeInTheDocument()
        expect(screen.getByText('Adjust the filters')).toBeInTheDocument()
    })

    it('passes the bare message as the empty state when no icon is given', () => {
        renderTable({ rows: [], noDataMessage: 'Nothing here' })
        expect(lastGrid.noDataMessage).toBe('Nothing here')
    })
})

/**
 * The second selection mode: a table that can act on every row its query matches, pages never
 * loaded included (ruled by Olivier, 2026-08-20 — the Gmail pattern, generic). The header checkbox
 * still ticks the page; the band above the grid is what offers the whole set.
 */
describe('CrudTable, all-matching selection', () => {
    const serverPaged = (total: number): CrudTablePaging => ({
        mode: 'server' as const,
        total,
        pageSize: 2,
        currentPage: 0,
        onPageChange: vi.fn(),
        onPageSizeChange: vi.fn()
    })

    it('shows the page its own share of a selection that reaches further', () => {
        renderTable({
            selection: {
                mode: 'allMatching',
                value: { all: true, excludedIds: ['d1'] },
                onChange: vi.fn()
            },
            paging: serverPaged(60)
        })
        expect(lastGrid.selectedRows).toEqual(['d2'])
    })

    it('reads the grid’s report as plain ids before the flip', () => {
        const onChange = vi.fn()
        renderTable({
            selection: { mode: 'allMatching', value: { all: false, ids: [] }, onChange },
            paging: serverPaged(60)
        })
        lastGrid.onSelectedRowsChange?.(['d1'])
        expect(onChange).toHaveBeenCalledWith({ all: false, ids: ['d1'] })
    })

    // The one gesture, both meanings: unticking a row of an all-matching selection is an exclusion,
    // and the page's report is all the grid ever has to say.
    it('reads it as exclusions once the whole matching set is picked', () => {
        const onChange = vi.fn()
        renderTable({
            selection: {
                mode: 'allMatching',
                value: { all: true, excludedIds: [] },
                onChange
            },
            paging: serverPaged(60)
        })
        lastGrid.onSelectedRowsChange?.(['d2'])
        expect(onChange).toHaveBeenCalledWith({ all: true, excludedIds: ['d1'] })
    })

    it('offers the whole matching set once the page is fully ticked', async () => {
        const onChange = vi.fn()
        renderTable({
            selection: {
                mode: 'allMatching',
                value: { all: false, ids: ['d1', 'd2'] },
                onChange
            },
            paging: serverPaged(60)
        })
        expect(screen.getByText('2 rows are selected.')).toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', { name: 'Select all 60 matching rows' }))
        expect(onChange).toHaveBeenCalledWith({ all: true, excludedIds: [] })
    })

    it('says so while the whole set is picked, and offers the way back', async () => {
        const onChange = vi.fn()
        renderTable({
            selection: {
                mode: 'allMatching',
                value: { all: true, excludedIds: ['d1'] },
                onChange
            },
            paging: serverPaged(60)
        })
        expect(
            screen.getByText('All 60 matching rows are selected, except one.')
        ).toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', { name: 'Clear selection' }))
        expect(onChange).toHaveBeenCalledWith({ all: false, ids: [] })
    })

    it('offers nothing over a partly ticked page', () => {
        renderTable({
            selection: {
                mode: 'allMatching',
                value: { all: false, ids: ['d1'] },
                onChange: vi.fn()
            },
            paging: serverPaged(60)
        })
        expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
    })

    /**
     * Nothing to offer: the page already holds every matching row, so "select all matching" would
     * pick exactly the rows that are ticked — and a query-wide action over them would target the
     * same set the ids already name.
     */
    it('offers nothing when the page holds every matching row', () => {
        renderTable({
            selection: {
                mode: 'allMatching',
                value: { all: false, ids: ['d1', 'd2'] },
                onChange: vi.fn()
            },
            paging: serverPaged(2)
        })
        expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
    })
})

/**
 * The same band on a LOCALLY paged table — every grid that holds every row its query matched, and
 * none of them asks for it. There the header checkbox already ticks the whole set (the library
 * drives it from the rows the grid holds, not the ones it renders), so what the band adds is the
 * statement: a selection reaching past the rows on screen is otherwise invisible.
 */
describe('CrudTable, a plain-ids selection that outgrows the page', () => {
    const urlPaged = (pageSize: number): CrudTablePaging => ({
        mode: 'url' as const,
        page: 0,
        onPageChange: vi.fn(),
        pageSize,
        onPageSizeChange: vi.fn()
    })

    it('says the whole set is picked, and offers the way back', async () => {
        const onChange = vi.fn()
        renderTable({
            selection: { mode: 'ids', ids: ['d1', 'd2'], onChange },
            paging: urlPaged(1)
        })
        expect(screen.getByText('All 2 matching rows are selected.')).toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', { name: 'Clear selection' }))
        expect(onChange).toHaveBeenCalledWith([])
    })

    it('offers every row it holds while only some are picked', async () => {
        const onChange = vi.fn()
        renderTable({
            rows: [livingRoom, kitchen, { id: 'd3', nameWithExtraInfos: 'Hall EEFF' }],
            selection: { mode: 'ids', ids: ['d1', 'd2'], onChange },
            paging: urlPaged(1)
        })
        expect(screen.getByText('2 rows are selected.')).toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', { name: 'Select all 3 matching rows' }))
        expect(onChange).toHaveBeenCalledWith(['d1', 'd2', 'd3'])
    })

    // Below one page's worth the checkboxes on screen say it themselves.
    it('stays quiet while the selection fits on the page', () => {
        renderTable({
            selection: { mode: 'ids', ids: ['d1', 'd2'], onChange: vi.fn() },
            paging: urlPaged(25)
        })
        expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
        expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
    })

    // A table that pages not at all is showing every row it holds, so there is nothing to state.
    it('stays quiet on a table with no pager', () => {
        renderTable({
            selection: { mode: 'ids', ids: ['d1', 'd2'], onChange: vi.fn() },
            paging: { mode: 'off' }
        })
        expect(screen.queryByText(/selected/)).not.toBeInTheDocument()
    })
})
