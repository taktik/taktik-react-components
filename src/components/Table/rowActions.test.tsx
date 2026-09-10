import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it, vi } from 'vitest'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import { withAlignedColumn } from './gridCells'
import { rowActionsColumn, rowMenuItems, unhideableColumns } from './rowActions'

interface Row {
    id: string
    name: string
    inherited?: boolean
}

const ROW: Row = { id: 'a', name: 'Alpha' }

/**
 * The column's cell renderer, rendered on its own — the grid around it is the library's and is
 * covered by its own tests. Opens the kebab, so the cases below can read the menu.
 */
const renderCell = (options: Parameters<typeof rowActionsColumn<Row>>[0], row: Row = ROW): void => {
    renderCellClosed(options, row)
    fireEvent.click(screen.getByRole('button'))
}

/** The same, left as the grid draws it — for the cases that are about the cell itself. */
const renderCellClosed = (
    options: Parameters<typeof rowActionsColumn<Row>>[0],
    row: Row = ROW
): void => {
    const column = rowActionsColumn<Row>(options)
    const cell = column.renderCell?.({ row } as never)
    render(<ThemeProvider theme={lightTheme}>{cell}</ThemeProvider>)
}

describe('rowActionsColumn', () => {
    it('renders the page items and no delete when the page passes none', () => {
        renderCell({
            items: () => [
                { id: 'edit', name: 'app.edit' },
                { id: 'details', name: 'app.details' }
            ]
        })
        expect(screen.getByRole('menuitem', { name: 'app.edit' })).toBeInTheDocument()
        expect(screen.queryByRole('menuitem', { name: /delete/i })).not.toBeInTheDocument()
    })

    describe('a single action', () => {
        // a menu with one entry costs a click to reveal what it always contains
        it('is the cell itself, with no menu to open', () => {
            renderCellClosed({ items: () => [{ id: 'edit', name: 'app.edit' }] })
            expect(screen.getByRole('button', { name: 'app.edit' })).toBeInTheDocument()
            expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
        })

        it('runs on click', () => {
            const onClick = vi.fn()
            renderCellClosed({ items: () => [{ id: 'edit', name: 'app.edit', onClick }] })
            fireEvent.click(screen.getByRole('button', { name: 'app.edit' }))
            expect(onClick).toHaveBeenCalledTimes(1)
        })

        it('keeps its disabled state', () => {
            renderCellClosed({ items: () => [{ id: 'edit', name: 'app.edit', disabled: true }] })
            expect(screen.getByRole('button', { name: 'app.edit' })).toBeDisabled()
        })

        // the page's delete counts towards the total: one item plus a delete is still a menu
        it('goes back to a menu once the delete joins it', () => {
            renderCellClosed({
                items: () => [{ id: 'edit', name: 'app.edit' }],
                remove: { label: 'Delete network', deleteRow: vi.fn() }
            })
            expect(screen.queryByRole('button', { name: 'app.edit' })).not.toBeInTheDocument()
        })
    })

    it('appends the delete last, already translated, and calls it with the row', () => {
        const deleteRow = vi.fn()
        renderCell({
            items: () => [{ id: 'edit', name: 'app.edit' }],
            remove: { label: 'Delete network', deleteRow }
        })

        const items = screen.getAllByRole('menuitem')
        // last, so it is never the entry a mis-click lands on first
        expect(items.at(-1)).toHaveTextContent('Delete network')

        fireEvent.click(screen.getByRole('menuitem', { name: 'Delete network' }))
        expect(deleteRow).toHaveBeenCalledWith(ROW)
    })

    // with no page items the delete is the ONLY action, so it renders as the cell rather than a menu
    it('disables the delete for a row the page says cannot go', () => {
        const deleteRow = vi.fn()
        renderCellClosed(
            {
                items: () => [],
                remove: {
                    label: 'Delete resident',
                    deleteRow,
                    canRemove: (row) => !row.inherited
                }
            },
            { id: 'b', name: 'Beta', inherited: true }
        )

        const action = screen.getByRole('button', { name: 'Delete resident' })
        expect(action).toBeDisabled()
        fireEvent.click(action)
        expect(deleteRow).not.toHaveBeenCalled()
    })

    it('keeps the delete enabled for a row that can go', () => {
        renderCellClosed({
            items: () => [],
            remove: { label: 'Delete resident', deleteRow: vi.fn(), canRemove: () => true }
        })
        expect(screen.getByRole('button', { name: 'Delete resident' })).not.toBeDisabled()
    })

    // A greyed action with no reason is what `disabledReason` exists to remove — and the delete is
    // the one entry the generic appends itself, so a page cannot explain it without this seam.
    it('carries the page’s reason on the delete it disabled', () => {
        renderCell(
            {
                items: () => [{ id: 'edit', name: 'app.edit' }],
                remove: {
                    label: 'Delete resident',
                    deleteRow: vi.fn(),
                    canRemove: (row) => !row.inherited,
                    disabledReason: () => 'Inherited from Region North'
                }
            },
            { id: 'b', name: 'Beta', inherited: true }
        )
        expect(screen.getByText('Inherited from Region North')).toBeInTheDocument()
    })

    it('offers no reason on a delete that is not disabled', () => {
        const columns = [
            { key: 'name', name: 'Name' },
            rowActionsColumn<Row>({
                items: () => [{ id: 'edit', name: 'app.edit' }],
                remove: {
                    label: 'Delete resident',
                    deleteRow: vi.fn(),
                    canRemove: () => true,
                    disabledReason: () => 'Inherited from Region North'
                }
            })
        ]
        const [, remove] = rowMenuItems(columns, ROW)
        expect(remove?.disabled).toBe(false)
        expect(remove?.disabledReason).toBeUndefined()
    })
})

describe('unhideableColumns', () => {
    it('excludes the actions column and any column with no name', () => {
        expect(
            unhideableColumns<Row>([
                { key: 'name', name: 'Name' },
                { key: 'actions', name: '' },
                { key: 'select', name: '' }
            ])
        ).toEqual(['actions', 'select'])
    })
})

/**
 * The same menu a right-click reopens at the pointer: it reads the options off the column the page
 * already declared, so the two entry points cannot offer different actions on one row.
 */
describe('rowMenuItems', () => {
    const columnsWith = (options: Parameters<typeof rowActionsColumn<Row>>[0]) => [
        { key: 'name', name: 'Name' },
        rowActionsColumn<Row>(options)
    ]

    it('reads the row’s items off the actions column', () => {
        const columns = columnsWith({ items: (row) => [{ id: 'edit', label: `Edit ${row.name}` }] })
        expect(rowMenuItems(columns, ROW).map((item) => item.label)).toEqual(['Edit Alpha'])
    })

    it('carries the delete the kebab appends, disabled on a row the page does not own', () => {
        const columns = columnsWith({
            items: () => [{ id: 'edit', name: 'app.edit' }],
            remove: {
                label: 'Delete device',
                deleteRow: vi.fn(),
                canRemove: (row) => !row.inherited
            }
        })
        const [, remove] = rowMenuItems(columns, { ...ROW, inherited: true })
        expect(remove?.label).toBe('Delete device')
        expect(remove?.disabled).toBe(true)
    })

    // Nothing to open: the browser's own menu is what a right-click gets there
    it('is empty on a table whose columns carry no actions', () => {
        expect(rowMenuItems([{ key: 'name', name: 'Name' }], ROW)).toEqual([])
    })

    // The pages driving a bare DataGrid hand over the columns they RENDER, alignment wrapper and
    // all — a wrapper that dropped the options would leave those tables silently without a menu
    it('survives the alignment wrapper every column goes through', () => {
        const columns = columnsWith({ items: () => [{ id: 'edit', name: 'app.edit' }] }).map(
            (column) => withAlignedColumn(column)
        )
        expect(rowMenuItems(columns, ROW).map((item) => item.id)).toEqual(['edit'])
    })
})
