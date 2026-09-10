import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event'
import { ReactNode } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { renderWithTable } from '../../testUtils/renderWithTable'
import type { TableCheckboxProps, TableMenuItemProps, TableSlots } from '../../slots'
import type { ColumnDefinition } from './types'
import { VisibilityColumnChooser, VisibilityMenu } from './VisibilityColumnChooser'
import { VisibilityProvider } from './VisibilityProvider'

/**
 * jsdom implements no pointer capture, and the reorder gesture takes one on the grip it started
 * from — see the window-delivery note in `VisibilityMenu`.
 */
Element.prototype.setPointerCapture = vi.fn()
Element.prototype.releasePointerCapture = vi.fn()
Element.prototype.hasPointerCapture = () => true

const COLUMNS: ColumnDefinition[] = [
    { key: 'name', name: 'Name' },
    { key: 'channel', name: 'Channel' },
    { key: 'status', name: 'Status' }
]

const ROW_HEIGHT = 30

interface HarnessProps {
    columns?: ColumnDefinition[]
    resetLabel?: string
    onColumnOrderChange?: (columnKeys: string[]) => void
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void
    /** What the actions column arrives as: the keys the chooser must not offer. */
    visibilityFeatureDisabledFor?: string[]
}

const Harness = ({ columns = COLUMNS, ...rest }: HarnessProps): ReactNode => (
    <VisibilityProvider columns={columns} enabled {...rest}>
        <VisibilityColumnChooser
            IconComponent={({ onClick }) => (
                <button type='button' onClick={onClick}>
                    Columns
                </button>
            )}
        />
        <VisibilityMenu />
    </VisibilityProvider>
)

const openTheChooser = async (
    props: HarnessProps = {},
    slots?: Partial<TableSlots>
): Promise<UserEvent> => {
    const user = userEvent.setup()
    renderWithTable(<Harness {...props} />, { slots })
    await user.click(screen.getByRole('button', { name: 'Columns' }))
    return user
}

const rowNames = (): string[] => screen.getAllByRole('menuitem').map((row) => row.textContent ?? '')

/** The grab area, by the dotted mark it draws — the only circles in a row. */
const gripOf = (row: HTMLElement): HTMLElement => {
    const grip = row.querySelector('circle')?.closest('span')
    if (!grip) throw new Error('the row renders no grip')
    return grip
}

/** jsdom measures every box at zero, so the rows are given the stack a browser would lay out. */
const layOutRows = (rows: HTMLElement[]): void =>
    rows.forEach((row, index) => {
        row.getBoundingClientRect = () =>
            ({
                top: index * ROW_HEIGHT,
                bottom: index * ROW_HEIGHT + ROW_HEIGHT
            }) as DOMRect
    })

beforeEach(() => localStorage.clear())

describe('VisibilityMenu', () => {
    it('offers one row per column, and none for a column the grid keeps out', async () => {
        await openTheChooser({ visibilityFeatureDisabledFor: ['status'] })

        expect(rowNames()).toEqual(['Name', 'Channel'])
    })

    it('hides the column a row toggles, and stays open for the next one', async () => {
        const onHiddenColumnsChange = vi.fn()
        const user = await openTheChooser({ onHiddenColumnsChange })

        await user.click(screen.getByRole('menuitem', { name: 'Channel' }))

        expect(onHiddenColumnsChange).toHaveBeenCalledWith(['channel'])
        expect(screen.getByRole('menuitem', { name: 'Name' })).toBeInTheDocument()
    })

    it('puts the reset item last, after a rule of its own, and closes on it', async () => {
        const user = await openTheChooser({ resetLabel: 'Reset columns' })

        expect(rowNames()).toEqual(['Name', 'Channel', 'Status', 'Reset columns'])
        expect(document.querySelector('hr')).toBeInTheDocument()

        await user.click(screen.getByRole('menuitem', { name: 'Reset columns' }))

        expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
    })

    it('offers no grip when the consumer keeps no column order', async () => {
        await openTheChooser()

        expect(screen.getAllByRole('menuitem')[0]).not.toHaveAttribute('aria-keyshortcuts')
        expect(() => gripOf(screen.getAllByRole('menuitem')[0])).toThrow()
    })

    describe('arranging the rows', () => {
        it('reports the order a drag arranged, by the rows own boxes', async () => {
            const onColumnOrderChange = vi.fn()
            await openTheChooser({ onColumnOrderChange })
            const rows = screen.getAllByRole('menuitem')
            layOutRows(rows)

            fireEvent.pointerDown(gripOf(rows[0]), { button: 0, pointerId: 1 })
            fireEvent.pointerMove(window, { pointerId: 1, clientY: ROW_HEIGHT + 10 })
            fireEvent.pointerUp(window, { pointerId: 1 })

            expect(onColumnOrderChange).toHaveBeenCalledWith(['channel', 'name', 'status'])
        })

        // The terminal click of a moved drag must not toggle whatever it lands on.
        it('never toggles a column through the grip', async () => {
            const onHiddenColumnsChange = vi.fn()
            const user = await openTheChooser({
                onColumnOrderChange: vi.fn(),
                onHiddenColumnsChange
            })

            await user.click(gripOf(screen.getAllByRole('menuitem')[0]))

            expect(onHiddenColumnsChange).not.toHaveBeenCalled()
        })

        /**
         * ⚠ The row keeps the focus: MUI's `MenuList` reads ArrowUp/ArrowDown as "move the focus"
         * and does not look at the modifier, so the move is stopped before it gets there.
         */
        it('moves a row on Alt+Arrow without letting the focus step off it', async () => {
            const onColumnOrderChange = vi.fn()
            const user = await openTheChooser({ onColumnOrderChange })
            const focused = document.activeElement as HTMLElement
            expect(focused).toHaveTextContent('Name')

            await user.keyboard('{Alt>}{ArrowDown}{/Alt}')

            expect(onColumnOrderChange).toHaveBeenCalledWith(['channel', 'name', 'status'])
            expect(document.activeElement).toBe(focused)
        })

        it('leaves a plain Arrow to the menu, so the keyboard still walks the rows', async () => {
            const onColumnOrderChange = vi.fn()
            const user = await openTheChooser({ onColumnOrderChange })

            await user.keyboard('{ArrowDown}')

            expect(onColumnOrderChange).not.toHaveBeenCalled()
            expect(document.activeElement).toHaveTextContent('Channel')
        })
    })

    /**
     * The chooser is a menu like any other in the host application, not a MUI-stock one: the host
     * mounts no MUI `ThemeProvider`, so a row drawn straight out of `@mui/material` would read in
     * MUI's own font and paint its box MUI's own blue, one component away from the `Checkbox` slot
     * that exists to prevent exactly that.
     */
    describe('the consumer own controls', () => {
        const HouseMenuItem = ({
            children,
            selected,
            disabled,
            role = 'menuitem',
            ...rest
        }: TableMenuItemProps): ReactNode => (
            <li role={role} data-house='menu-item' {...rest}>
                {children}
            </li>
        )

        const HouseCheckbox = ({ checked }: TableCheckboxProps): ReactNode => (
            <span data-house='checkbox' data-checked={checked} />
        )

        const houseSlots: Partial<TableSlots> = {
            MenuItem: HouseMenuItem,
            Checkbox: HouseCheckbox
        }

        it('draws every row, the reset item included, with the consumer own menu item', async () => {
            await openTheChooser({ resetLabel: 'Reset columns' }, houseSlots)

            expect(screen.getAllByRole('menuitem')).toHaveLength(4)
            expect(document.querySelectorAll('[data-house="menu-item"]')).toHaveLength(4)
        })

        it('draws a row box with the consumer own checkbox, ticked when the column shows', async () => {
            const user = await openTheChooser({}, houseSlots)

            const boxes = (): NodeListOf<Element> =>
                document.querySelectorAll('[data-house="checkbox"]')
            expect(boxes()).toHaveLength(3)
            expect(boxes()[1]).toHaveAttribute('data-checked', 'true')

            await user.click(screen.getByRole('menuitem', { name: 'Channel' }))

            expect(boxes()[1]).toHaveAttribute('data-checked', 'false')
        })

        // The reorder gesture measures the rows, so it needs the element each row rendered as —
        // which reaches the library only if the consumer's own control passes the ref on.
        it('measures the rows the consumer own menu item rendered', async () => {
            const onColumnOrderChange = vi.fn()
            await openTheChooser({ onColumnOrderChange }, houseSlots)
            const rows = screen.getAllByRole('menuitem')
            layOutRows(rows)

            fireEvent.pointerDown(gripOf(rows[0]), { button: 0, pointerId: 1 })
            fireEvent.pointerMove(window, { pointerId: 1, clientY: 2 * ROW_HEIGHT + 10 })
            fireEvent.pointerUp(window, { pointerId: 1 })

            expect(onColumnOrderChange).toHaveBeenCalledWith(['channel', 'status', 'name'])
        })
    })
})
