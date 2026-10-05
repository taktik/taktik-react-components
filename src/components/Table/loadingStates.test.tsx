import { fireEvent, screen } from '@testing-library/react'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import { describe, expect, it, vi } from 'vitest'
import type { ColumnDefinition } from '../DataGrid/types'
import { DRAFT_ROW_COUNT } from '../DataGrid/draft'
import { renderWithTable } from '../../testUtils/renderWithTable'
import { CrudTable, type CrudTableProps } from './CrudTable'
import { rowActionsColumn } from './rowActions'

interface Row {
    id: string
    name: string
}

const columns: ColumnDefinition<Row>[] = [
    { key: 'name', name: 'Name' },
    rowActionsColumn<Row>({
        label: (row) => `Actions for ${row.name}`,
        items: () => [{ id: 'edit', name: 'edit', icon: <EditRoundedIcon />, onClick: vi.fn() }]
    })
]

const manyRows = Array.from({ length: 30 }, (_, index) => ({
    id: `${index}`,
    name: `row ${index}`
}))

const table = (props: Partial<CrudTableProps<Row>>): React.JSX.Element => (
    <CrudTable<Row> rows={[]} columns={columns} columnVisibilityKey='loadingStates' {...props} />
)

const bodyRows = (): Element[] =>
    [...document.querySelectorAll('.rdg-row')].filter((row) => !row.closest('.rdg-header-row'))
const placeholders = (): NodeListOf<Element> => document.querySelectorAll('.MuiSkeleton-root')
/** The library's own veil: a spinner turning over the rows. */
const veil = (): Element | null => document.querySelector('[style*="PulseLoader"]')
const pager = (): HTMLElement =>
    (document.querySelector('.MuiTablePagination-root') as HTMLElement).parentElement as HTMLElement

describe('a table whose first answer is on its way', () => {
    it('drafts placeholder rows under its own header', () => {
        renderWithTable(table({ loading: true }))
        expect(screen.getByText('Name')).toBeInTheDocument()
        // jsdom has no height, so rdg mounts only the first rows: the count is the grid's own
        expect(screen.getByRole('grid')).toHaveAttribute('aria-rowcount', `${DRAFT_ROW_COUNT + 1}`)
        expect(bodyRows().length).toBeGreaterThan(0)
        // a bar in every cell: the name column and the actions column
        expect(placeholders()).toHaveLength(bodyRows().length * 2)
        expect(document.querySelector('[aria-busy="true"]')).not.toBeNull()
        expect(veil()).toBeNull()
    })

    it('offers no action on a placeholder row', () => {
        const onRowPrimaryAction = vi.fn()
        renderWithTable(table({ loading: true, onRowPrimaryAction }))
        const cell = document.querySelector('.rdg-row [role="gridcell"]') as HTMLElement
        fireEvent.click(cell)
        fireEvent.contextMenu(cell, { clientX: 10, clientY: 10 })
        expect(onRowPrimaryAction).not.toHaveBeenCalled()
        expect(screen.queryByRole('menu')).toBeNull()
        expect(screen.queryByRole('button', { name: /Actions for/ })).toBeNull()
    })

    it('never asks a per-row height of a placeholder row', () => {
        const rowHeight = vi.fn((row: Row) => 20 + row.name.length)
        renderWithTable(table({ loading: true, rowHeight }))
        expect(rowHeight).not.toHaveBeenCalled()
    })

    it('drafts at the fixed row height a table declares', () => {
        renderWithTable(table({ loading: true, rowHeight: 36 }))
        expect(screen.getByRole('grid').style.gridTemplateRows).toContain(
            `repeat(${DRAFT_ROW_COUNT}, 36px)`
        )
    })

    it('keeps its pager in the layout without counting the rows on their way', () => {
        renderWithTable(table({ loading: true }))
        expect(getComputedStyle(pager()).visibility).toBe('hidden')
    })

    it('sorts nothing while its rows are on their way', () => {
        const onChange = vi.fn()
        renderWithTable(
            table({
                loading: true,
                columns: [{ key: 'name', name: 'Name', sortable: true }],
                sorting: { mode: 'url', columns: [], onChange }
            })
        )
        fireEvent.click(screen.getByText('Name'))
        expect(onChange).not.toHaveBeenCalled()
    })

    it('drafts an expandable table without asking for a detail', () => {
        const renderDetail = vi.fn(() => <div>detail</div>)
        renderWithTable(
            table({
                loading: true,
                // even an id a placeholder row happens to carry opens nothing
                expandable: {
                    expandedIds: ['draft-0'],
                    onExpandedChange: vi.fn(),
                    renderDetail,
                    labels: { expand: 'Show details', collapse: 'Hide details' }
                }
            })
        )
        expect(renderDetail).not.toHaveBeenCalled()
        expect(bodyRows().flatMap((row) => [...row.querySelectorAll('button')])).toHaveLength(0)
    })

    it('keeps the page it was opened on until its rows arrive', () => {
        const onPageChange = vi.fn()
        const paged = (loading: boolean): React.JSX.Element =>
            table({
                loading,
                rows: loading ? [] : manyRows,
                paging: {
                    mode: 'url',
                    page: 1,
                    onPageChange,
                    pageSize: 25,
                    onPageSizeChange: vi.fn()
                }
            })
        const { rerender } = renderWithTable(paged(true))
        rerender(paged(false))
        expect(onPageChange).not.toHaveBeenCalled()
        expect(screen.getByText('row 25')).toBeInTheDocument()
    })

    it('keeps the selection it was opened with until its rows arrive', () => {
        const onChange = vi.fn()
        renderWithTable(table({ loading: true, selection: { mode: 'ids', ids: ['3'], onChange } }))
        expect(onChange).not.toHaveBeenCalled()
    })

    it('is not a refresh, so it reports none to the host', () => {
        const reportRefresh = vi.fn(() => vi.fn())
        renderWithTable(table({ loading: true }), { reportRefresh })
        expect(reportRefresh).not.toHaveBeenCalled()
    })
})

describe('a table refreshing the rows it shows', () => {
    it('keeps its rows on screen, veiled', () => {
        renderWithTable(table({ loading: true, rows: manyRows.slice(0, 2) }))
        expect(screen.getByText('row 0')).toBeInTheDocument()
        expect(placeholders()).toHaveLength(0)
        expect(veil()).not.toBeNull()
    })

    it('draws no veil of its own when the host takes the wait', () => {
        renderWithTable(table({ loading: true, rows: manyRows.slice(0, 2) }), {
            reportRefresh: () => () => undefined
        })
        expect(veil()).toBeNull()
    })

    it('stays an answer once empty: a refetch is a refresh, not a draft', () => {
        const reportRefresh = vi.fn(() => vi.fn())
        const { rerender } = renderWithTable(table({ loading: false }), { reportRefresh })
        rerender(table({ loading: true }))
        expect(placeholders()).toHaveLength(0)
        expect(reportRefresh).toHaveBeenCalledTimes(1)
    })

    it('lets the host go when it leaves mid-refresh', () => {
        const release = vi.fn()
        const { unmount } = renderWithTable(table({ loading: true, rows: manyRows.slice(0, 2) }), {
            reportRefresh: () => release
        })
        unmount()
        expect(release).toHaveBeenCalledTimes(1)
    })

    it('hands the wait to the host while it lasts, when the host takes it', () => {
        const release = vi.fn()
        const reportRefresh = vi.fn(() => release)
        const { rerender } = renderWithTable(table({ loading: true, rows: manyRows.slice(0, 2) }), {
            reportRefresh
        })
        expect(reportRefresh).toHaveBeenCalledTimes(1)
        expect(release).not.toHaveBeenCalled()
        rerender(table({ loading: false, rows: manyRows.slice(0, 2) }))
        expect(release).toHaveBeenCalledTimes(1)
    })
})
