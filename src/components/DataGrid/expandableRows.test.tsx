import { screen, type RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement, ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import type { RenderCellProps } from 'react-data-grid'
import { renderWithTable } from '../../testUtils/renderWithTable'
import type { DataGridExpandable } from './DataGrid'
import {
    clickBelongsToRow,
    DataGrid,
    detailAwareRowHeight,
    detailRowClass,
    EXPANDER_COLUMN_KEY,
    ExpanderToggle,
    isDetailRow,
    SELECTION_COLUMN_KEY,
    withDetailRendering,
    withDetailRows
} from './DataGrid'
import type { ColumnDefinition } from './types'

/**
 * The expandable detail rows: the composition entry points, the geometry and the click rule a
 * consumer's own grid is built on.
 */

interface Row {
    id: string
    name: string
}
const rows: Row[] = [
    { id: 'a', name: 'Alpha' },
    { id: 'b', name: 'Bravo' },
    { id: 'c', name: 'Charlie' }
]

const nameColumn: ColumnDefinition<Row> = {
    key: 'name',
    name: 'Name',
    renderCell: ({ row }: RenderCellProps<Row>) => <span>{row.name}</span>
}
const frozenColumn: ColumnDefinition<Row> = {
    key: 'select',
    name: '',
    frozen: true,
    renderCell: () => <input type='checkbox' />
}

/** A frozen column declared LAST — react-data-grid hoists it to the front before rendering. */
const frozenLastColumn: ColumnDefinition<Row> = {
    key: 'actions',
    name: '',
    frozen: true,
    renderCell: () => <button type='button'>Actions</button>
}

/** The house row-actions column: declared last, and react-data-grid's own end-frozen band. */
const frozenRightColumn: ColumnDefinition<Row> = {
    key: 'actions',
    name: '',
    frozenRight: true,
    renderCell: () => <button type='button'>Actions</button>
}

const renderCellOf = (column: ColumnDefinition<Row>, row: Row): RenderResult =>
    renderWithTable(<>{column.renderCell?.({ row } as unknown as RenderCellProps<Row>)}</>)

describe('withDetailRows', () => {
    it('follows each open row with a detail row of its own', () => {
        const withDetails = withDetailRows(rows, ['b'])
        expect(withDetails.map((row) => row.id)).toEqual(['a', 'b', 'rdg-detail:b', 'c'])
        expect(isDetailRow(withDetails[2] as Row)).toBe(true)
        expect(isDetailRow(withDetails[1] as Row)).toBe(false)
    })

    it('returns the rows untouched when nothing is open', () => {
        expect(withDetailRows(rows, [])).toBe(rows)
    })

    // The consumer's expansion state may name a row that is no longer on the page
    it('ignores ids that are not among the rows', () => {
        expect(withDetailRows(rows, ['gone']).map((row) => row.id)).toEqual(['a', 'b', 'c'])
    })

    // This is why injection happens after the page slice: a detail row for a row on another page
    // would be counted by the pager and rendered without its parent
    it('injects only for the rows it was given, so a page slice stays consistent', () => {
        const page = rows.slice(0, 1)
        expect(withDetailRows(page, ['a', 'c']).map((row) => row.id)).toEqual(['a', 'rdg-detail:a'])
    })
})

describe('ExpanderToggle', () => {
    const config = (
        over: Partial<Parameters<typeof ExpanderToggle<Row>>[0]['expandable']> = {}
    ): DataGridExpandable<Row> => ({
        expandedIds: [],
        onExpandedChange: vi.fn(),
        renderDetail: () => null,
        labels: { expand: 'Show details', collapse: 'Hide details' },
        ...over
    })

    it('reports the row it toggles, adding it when closed', async () => {
        const expandable = config()
        renderWithTable(<ExpanderToggle row={rows[0] as Row} expandable={expandable} />)
        await userEvent.click(screen.getByRole('button', { name: 'Show details' }))
        expect(expandable.onExpandedChange).toHaveBeenCalledWith(['a'])
    })

    it('removes the row again when it is already open', async () => {
        const expandable = config({ expandedIds: ['a', 'b'] })
        renderWithTable(<ExpanderToggle row={rows[0] as Row} expandable={expandable} />)
        const toggle = screen.getByRole('button', { name: 'Hide details' })
        expect(toggle).toHaveAttribute('aria-expanded', 'true')
        await userEvent.click(toggle)
        expect(expandable.onExpandedChange).toHaveBeenCalledWith(['b'])
    })
})

// The accent bar runs down the open row AND its detail, so a reader can tell which pair belongs
// together when several are open at once.
describe('clickBelongsToRow', () => {
    const detailRow = withDetailRows(rows, ['a'])[1] as Row

    it('claims a click on a data cell', () => {
        expect(clickBelongsToRow(rows[0] as Row, 'name', null)).toBe(true)
    })

    it('leaves the leading cell to the chevron and the checkbox that live there', () => {
        expect(clickBelongsToRow(rows[0] as Row, SELECTION_COLUMN_KEY, null)).toBe(false)
        expect(clickBelongsToRow(rows[0] as Row, EXPANDER_COLUMN_KEY, null)).toBe(false)
    })

    it('leaves a detail row alone', () => {
        expect(clickBelongsToRow(detailRow, 'name', null)).toBe(false)
    })

    it('leaves a click on a control to that control', () => {
        const { container } = renderWithTable(
            <div>
                <button type='button'>
                    <span>label</span>
                </button>
                <span data-testid='plain'>plain</span>
            </div>
        )
        const inButton = container.querySelector('button span')
        expect(clickBelongsToRow(rows[0] as Row, 'name', inButton)).toBe(false)
        expect(clickBelongsToRow(rows[0] as Row, 'name', screen.getByTestId('plain'))).toBe(true)
    })
})

describe('detailRowClass', () => {
    it('marks a detail row', () => {
        const detailRow = withDetailRows(rows, ['a'])[1] as Row
        expect(detailRowClass(detailRow, ['a'])).toBe('rdg-detail-row')
    })

    it('marks the open parent, and leaves a closed row unmarked', () => {
        expect(detailRowClass(rows[0] as Row, ['a'])).toBe('rdg-row-expanded')
        expect(detailRowClass(rows[1] as Row, ['a'])).toBe('')
    })

    it('marks nothing when nothing is open', () => {
        expect(detailRowClass(rows[0] as Row)).toBe('')
    })
})

describe('withDetailRendering', () => {
    const detail = (row: Row): ReactNode => <span>details of {row.name}</span>

    it('spans the detail across every column from the first one that can span', () => {
        const columns = withDetailRendering([frozenColumn, nameColumn, nameColumn], detail)
        const spanning = columns[1] as ColumnDefinition<Row>
        const detailRow = withDetailRows(rows, ['a'])[1] as Row
        // react-data-grid ignores a frozen column's colSpan, so the span starts at index 1 and
        // covers the two columns from there
        expect(spanning.colSpan?.({ type: 'ROW', row: detailRow } as never)).toBe(2)
        expect(spanning.colSpan?.({ type: 'ROW', row: rows[0] } as never)).toBeUndefined()
        expect(spanning.colSpan?.({ type: 'HEADER' } as never)).toBeUndefined()
    })

    it('renders the detail for the parent row, not for the synthetic one', () => {
        const columns = withDetailRendering([nameColumn], detail)
        const detailRow = withDetailRows(rows, ['c'])[3] as Row
        expect(
            renderCellOf(columns[0] as ColumnDefinition<Row>, detailRow).container.textContent
        ).toBe('details of Charlie')
    })

    it('leaves an ordinary row to the column it wrapped', () => {
        const columns = withDetailRendering([nameColumn], detail)
        expect(
            renderCellOf(columns[0] as ColumnDefinition<Row>, rows[0] as Row).container.textContent
        ).toBe('Alpha')
    })

    // A detail row is not one of the grid's rows: a checkbox there would report a selection the
    // grid immediately drops
    it('draws nothing in the frozen columns of a detail row', () => {
        const columns = withDetailRendering([frozenColumn, nameColumn], detail)
        const detailRow = withDetailRows(rows, ['a'])[1] as Row
        const { container } = renderCellOf(columns[0] as ColumnDefinition<Row>, detailRow)
        expect(container.querySelector('input')).toBeNull()
    })

    it("keeps the frozen column's own cell on an ordinary row", () => {
        const columns = withDetailRendering([frozenColumn, nameColumn], detail)
        const { container } = renderCellOf(columns[0] as ColumnDefinition<Row>, rows[0] as Row)
        expect(container.querySelector('input')).not.toBeNull()
    })
})

describe('detailAwareRowHeight', () => {
    const detailRow = withDetailRows(rows, ['a'])[1] as Row

    it('gives a detail row the detail height and everything else the grid rhythm', () => {
        const height = detailAwareRowHeight<Row>(undefined, 50, 220)
        expect(height(detailRow)).toBe(220)
        expect(height(rows[0] as Row)).toBe(50)
    })

    it("keeps a consumer's own row height for ordinary rows", () => {
        expect(detailAwareRowHeight<Row>(72, 50, 220)(rows[0] as Row)).toBe(72)
        expect(
            detailAwareRowHeight<Row>((row) => (row.id === 'a' ? 90 : 60), 50, 220)(rows[0] as Row)
        ).toBe(90)
        expect(detailAwareRowHeight<Row>(72, 50, 220)(detailRow)).toBe(220)
    })

    // A fixed height is wrong somewhere: too tall for a short detail, too short for a full one
    it('measures a per-row detail height against the row it belongs to, not the carrier', () => {
        const height = detailAwareRowHeight<Row>(undefined, 50, (row) => row.name.length * 10)
        // 'Alpha' is the parent of the detail row, so its own name is what gets measured
        expect(height(detailRow)).toBe(50)
    })
})

describe('DataGrid with expandable rows', () => {
    const grid = (expandedIds: string[], onExpandedChange = vi.fn()): ReactElement => (
        <DataGrid<Row>
            rows={rows}
            columns={[nameColumn]}
            expandable={{
                expandedIds,
                onExpandedChange,
                renderDetail: (row) => <span>{`detail-${row.id}`}</span>,
                detailHeight: 120,
                labels: { expand: 'Show details', collapse: 'Hide details' }
            }}
        />
    )

    it("offers a toggle per row and renders the open row's detail", () => {
        renderWithTable(grid(['b']))
        expect(screen.getByText('detail-b')).toBeInTheDocument()
        expect(screen.queryByText('detail-a')).not.toBeInTheDocument()
    })

    it('reports a toggle without changing the expansion itself', async () => {
        const onExpandedChange = vi.fn()
        renderWithTable(grid([], onExpandedChange))
        await userEvent.click(
            screen.getAllByRole('button', { name: 'Show details' })[0] as HTMLElement
        )
        expect(onExpandedChange).toHaveBeenCalledWith(['a'])
        expect(screen.queryByText('detail-a')).not.toBeInTheDocument()
    })

    it('expands from a click anywhere on the row, not just on the chevron', async () => {
        const onExpandedChange = vi.fn()
        renderWithTable(grid([], onExpandedChange))
        await userEvent.click(screen.getByText('Bravo'))
        expect(onExpandedChange).toHaveBeenCalledWith(['b'])
    })

    it('collapses an open row the same way', async () => {
        const onExpandedChange = vi.fn()
        renderWithTable(grid(['b'], onExpandedChange))
        await userEvent.click(screen.getByText('Bravo'))
        expect(onExpandedChange).toHaveBeenCalledWith([])
    })

    // The detail is the result of expanding, not another handle on it
    it('ignores a click inside the detail itself', async () => {
        const onExpandedChange = vi.fn()
        renderWithTable(grid(['b'], onExpandedChange))
        await userEvent.click(screen.getByText('detail-b'))
        expect(onExpandedChange).not.toHaveBeenCalled()
    })
})

/**
 * A grid CAN declare a frozen column last (react-data-grid renders frozen columns first), so the
 * detail row's geometry has to be computed in render order. Getting this wrong left an actions
 * kebab rendering inside detail rows, acting on a synthetic row.
 */
describe('withDetailRendering with a frozen column declared last', () => {
    const columns = [frozenColumn, nameColumn, frozenLastColumn]
    const detail = (row: Row): ReactNode => <span>{`detail-${row.id}`}</span>
    const prepared = (): ColumnDefinition<Row>[] => withDetailRendering(columns, detail)
    const detailRow = withDetailRows(rows, ['a'])[1] as Row

    it('blanks a frozen column on a detail row wherever it was declared', () => {
        const [, , actions] = prepared()
        expect(
            renderCellOf(actions as ColumnDefinition<Row>, detailRow).container
        ).toBeEmptyDOMElement()
    })

    it('still renders that column on an ordinary row', () => {
        const [, , actions] = prepared()
        const { getByRole } = renderCellOf(actions as ColumnDefinition<Row>, rows[0] as Row)
        expect(getByRole('button', { name: 'Actions' })).toBeInTheDocument()
    })

    it('spans only the tracks that follow it in RENDER order, not in declaration order', () => {
        const [, name] = prepared()
        const span = (name as ColumnDefinition<Row>).colSpan?.({
            type: 'ROW',
            row: detailRow
        } as never)
        // rendered order is [select, actions, name] — one track spans from `name`, not three
        expect(span).toBe(1)
    })
})

/**
 * The house arrangement: the trailing actions column is react-data-grid's own end-frozen band, so a
 * detail row STOPS SHORT of it rather than spanning across it — rdg rejects an unfrozen column's
 * `colSpan` outright once it reaches an end-frozen column, and a rejected span would render the
 * whole detail panel inside one narrow track. The kebab renders nothing on a synthetic row.
 */
describe('withDetailRendering with a frozenRight column declared last', () => {
    const columns = [frozenColumn, nameColumn, frozenRightColumn]
    const detail = (row: Row): ReactNode => <span>{`detail-${row.id}`}</span>
    const prepared = (): ColumnDefinition<Row>[] => withDetailRendering(columns, detail)
    const detailRow = withDetailRows(rows, ['a'])[1] as Row

    it('spans the unfrozen band only, stopping at the pinned actions track', () => {
        const [, name] = prepared()
        const span = (name as ColumnDefinition<Row>).colSpan?.({
            type: 'ROW',
            row: detailRow
        } as never)
        // rendered order is [select, name, actions] — one track spans, up to but not into `actions`
        expect(span).toBe(1)
    })

    it('blanks the actions column on a detail row', () => {
        const [, , actions] = prepared()
        expect(
            renderCellOf(actions as ColumnDefinition<Row>, detailRow).container
        ).toBeEmptyDOMElement()
    })

    it('still renders the actions column on an ordinary row', () => {
        const [, , actions] = prepared()
        const { getByRole } = renderCellOf(actions as ColumnDefinition<Row>, rows[0] as Row)
        expect(getByRole('button', { name: 'Actions' })).toBeInTheDocument()
    })
})
