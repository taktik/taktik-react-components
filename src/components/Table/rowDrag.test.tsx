import { useState, type ReactNode } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import { CrudTable } from './CrudTable'

/**
 * A table whose records can be dragged makes every CELL a handle, so a drag started on any column
 * carries the same record — the device list drags devices onto the organisation tree.
 *
 * ⚠ The handle cannot live on the ROW: react-data-grid lays rows out with `display: contents`, so the
 * row element has no box and `draggable` on it never starts a native drag. That shipped once and no
 * unit test could see it — the attribute was present and a synthetic `dragstart` still dispatched — so
 * what is pinned here is WHERE the handle is, and the E2E drives a real pointer drag.
 *
 * ⚠ Mounts the REAL library grid: the cell wrapper this rides on is `withAlignedColumn`'s own.
 */

interface Row {
    id: string
    name: string
    ip: string
}
const rows: Row[] = [
    { id: 'a', name: 'Alpha', ip: '10.0.0.1' },
    { id: 'b', name: 'Bravo', ip: '10.0.0.2' }
]

const columns = [
    { key: 'name', name: 'Name' },
    { key: 'ip', name: 'IP' }
]

interface HostProps {
    rowDrag?: (row: Row) => void
    expandable?: boolean
}

const Host = ({ rowDrag, expandable }: HostProps): ReactNode => {
    const [expandedIds, setExpandedIds] = useState<string[]>(expandable ? ['a'] : [])
    return (
        <ThemeProvider theme={lightTheme}>
            <CrudTable<Row>
                columnVisibilityKey='rowDragTest'
                rows={rows}
                columns={columns}
                rowDrag={rowDrag ? (row) => rowDrag(row) : undefined}
                expandable={
                    expandable
                        ? {
                              expandedIds,
                              onExpandedChange: setExpandedIds,
                              renderDetail: (row: Row) => <span>details of {row.name}</span>,
                              labels: { expand: 'Show details', collapse: 'Hide details' }
                          }
                        : undefined
                }
            />
        </ThemeProvider>
    )
}

const rowOf = (name: string): HTMLElement =>
    screen.getAllByRole('row').find((row) => within(row).queryByText(name)) as HTMLElement

const handlesIn = (row: HTMLElement): NodeListOf<Element> => row.querySelectorAll('[draggable]')

describe('a table whose rows drag', () => {
    // A cell HAS a box, which is the whole reason the handle lives there
    it('makes each cell of a row a handle', () => {
        render(<Host rowDrag={vi.fn()} />)
        expect(handlesIn(rowOf('Alpha')).length).toBeGreaterThan(0)
        expect(handlesIn(rowOf('Bravo')).length).toBeGreaterThan(0)
    })

    // …and NOT the row, whose `display: contents` box the browser cannot drag
    it('leaves the row itself undraggable', () => {
        render(<Host rowDrag={vi.fn()} />)
        expect(rowOf('Alpha')).not.toHaveAttribute('draggable', 'true')
    })

    // ⚠ Only the first column renders here — the library virtualizes columns and jsdom has no width —
    // so the cross-column proof is the E2E
    it('hands the row over from a drag started in a cell', () => {
        const rowDrag = vi.fn()
        render(<Host rowDrag={rowDrag} />)
        fireEvent.dragStart(within(rowOf('Alpha')).getByText('Alpha'))
        expect(rowDrag).toHaveBeenCalledWith(expect.objectContaining({ id: 'a' }))
    })

    // A detail row stands for no record, so there is nothing for it to carry
    it('leaves a detail row out of the drag surface', () => {
        render(<Host rowDrag={vi.fn()} expandable />)
        expect(handlesIn(rowOf('details of Alpha'))).toHaveLength(0)
    })

    it('leaves a table that says nothing without handles at all', () => {
        render(<Host />)
        expect(handlesIn(rowOf('Alpha'))).toHaveLength(0)
        expect(rowOf('Alpha')).not.toHaveAttribute('draggable', 'true')
    })
})
