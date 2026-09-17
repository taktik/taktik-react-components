import { act, fireEvent, render, screen, waitFor, type RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it, vi } from 'vitest'
import { defaultTableTheme as lightTheme } from '../theme/tableTheme'
import { defaultTableSlots } from './defaultTableSlots'
import type { TableMenuItem } from './tableSlots'

/**
 * The MUI defaults are what a consumer SEES before it injects anything, so every prop the library's
 * own tables pass has to arrive somewhere visible here.
 */
const renderSlot = (ui: ReactElement): RenderResult =>
    render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>)

const { Button, IconButton, MenuSurface, ContextMenu, DatePicker } = defaultTableSlots

const paddingLeftOf = (element: HTMLElement): string => window.getComputedStyle(element).paddingLeft

describe('the default IconButton', () => {
    // Both the row's single action and the toolbar's refresh pass `loading`
    it('says an action it started is still running', () => {
        renderSlot(
            <IconButton tooltipText='Refresh' loading onClick={vi.fn()}>
                <span>↻</span>
            </IconButton>
        )

        expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('refuses a second press while that action runs', () => {
        renderSlot(
            <IconButton tooltipText='Refresh' loading onClick={vi.fn()}>
                <span>↻</span>
            </IconButton>
        )

        expect(screen.getByRole('button', { name: 'Refresh' })).toBeDisabled()
    })

    it('shows nothing running when nothing is', () => {
        renderSlot(
            <IconButton tooltipText='Refresh' onClick={vi.fn()}>
                <span>↻</span>
            </IconButton>
        )

        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Refresh' })).toBeEnabled()
    })
})

describe('the default Button', () => {
    // The toolbar's "Add …" leads with an icon, which MUI would otherwise pad as a word
    it('tightens its left padding for a leading icon', () => {
        renderSlot(
            <>
                <Button tone='primary' iconLeft onClick={vi.fn()}>
                    <span>＋</span>Add device
                </Button>
                <Button tone='primary' onClick={vi.fn()}>
                    Plain
                </Button>
            </>
        )

        const withIcon = paddingLeftOf(screen.getByRole('button', { name: /Add device/ }))
        const plain = paddingLeftOf(screen.getByRole('button', { name: 'Plain' }))
        expect(withIcon).not.toBe('')
        expect(parseFloat(withIcon)).toBeLessThan(parseFloat(plain))
    })
})

describe('the default MenuSurface', () => {
    const ITEMS = [{ id: 'copy', label: 'Copy value' }]

    it('hangs at the point a right-click was made', () => {
        renderSlot(
            <MenuSurface
                open
                onClose={vi.fn()}
                anchorPosition={{ top: 120, left: 40 }}
                menuItems={ITEMS}
            />
        )

        expect(screen.getByRole('menuitem', { name: 'Copy value' })).toBeInTheDocument()
    })

    /**
     * A surface opened with no point has nothing to hang on. MUI complains about an `anchorEl`
     * reference with no element and puts the menu in the window's corner, so the reference says
     * `'none'` instead and the entries are still reachable.
     */
    it('renders its entries with no point given, and MUI complains about nothing', () => {
        const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

        renderSlot(<MenuSurface open onClose={vi.fn()} menuItems={ITEMS} />)

        expect(screen.getByRole('menuitem', { name: 'Copy value' })).toBeInTheDocument()
        expect(consoleError).not.toHaveBeenCalled()
    })

    // The nested list is the same renderer, so both default menus cascade or neither does
    it('opens a nested list beside the entry that owns it', async () => {
        renderSlot(<MenuSurface open onClose={vi.fn()} menuItems={CASCADE} />)

        await userEvent.hover(screen.getByRole('menuitem', { name: /Commands/ }))

        expect(await screen.findByRole('menuitem', { name: 'Reload' })).toBeInTheDocument()
    })
})

/** One entry that acts, and one that opens a list of its own. */
const CASCADE: TableMenuItem[] = [
    { id: 'edit', label: 'Edit' },
    {
        id: 'commands',
        label: 'Commands',
        children: [
            { id: 'reload', label: 'Reload' },
            { id: 'reboot', label: 'Reboot' }
        ]
    }
]

/** Two entries that each own a list, for the one-list-at-a-time rule. */
const TWO_CASCADES: TableMenuItem[] = [
    ...CASCADE,
    { id: 'exports', label: 'Export', children: [{ id: 'csv', label: 'As CSV' }] }
]

const openKebab = async (): Promise<void> => {
    await userEvent.click(screen.getByRole('button', { name: 'More actions' }))
}

describe('the default ContextMenu', () => {
    it('opens a parent entry’s list on a pointer move, and closes it on ArrowLeft', async () => {
        renderSlot(<ContextMenu menuItems={CASCADE} />)
        await openKebab()
        const parent = screen.getByRole('menuitem', { name: /Commands/ })

        await userEvent.hover(parent)
        expect(await screen.findByRole('menuitem', { name: 'Reload' })).toBeInTheDocument()
        expect(parent).toHaveAttribute('aria-expanded', 'true')

        fireEvent.keyDown(parent, { key: 'ArrowLeft' })
        await waitFor(() =>
            expect(screen.queryByRole('menuitem', { name: 'Reload' })).not.toBeInTheDocument()
        )
        // focus goes back to the entry that owns the list
        expect(parent).toHaveFocus()
    })

    it('opens that list on ArrowRight too', async () => {
        renderSlot(<ContextMenu menuItems={CASCADE} />)
        await openKebab()

        fireEvent.keyDown(screen.getByRole('menuitem', { name: /Commands/ }), { key: 'ArrowRight' })

        expect(await screen.findByRole('menuitem', { name: 'Reload' })).toBeInTheDocument()
    })

    // The list a KEY opened holds the focus, so the way back up the tree has to hand it back
    it('hands the focus back to the owning entry when a key closes the list', async () => {
        renderSlot(<ContextMenu menuItems={CASCADE} />)
        await openKebab()
        const parent = screen.getByRole('menuitem', { name: /Commands/ })

        fireEvent.keyDown(parent, { key: 'ArrowRight' })
        const nested = await screen.findByRole('menuitem', { name: 'Reload' })
        expect(nested).toHaveFocus()

        fireEvent.keyDown(nested, { key: 'ArrowLeft' })

        await waitFor(() =>
            expect(screen.queryByRole('menuitem', { name: 'Reload' })).not.toBeInTheDocument()
        )
        expect(parent).toHaveFocus()
    })

    // Dragging the pointer down a list past two owners must not show both their lists
    it('closes a sibling’s list when another entry opens its own', async () => {
        renderSlot(<ContextMenu menuItems={TWO_CASCADES} />)
        await openKebab()
        const commands = screen.getByRole('menuitem', { name: /Commands/ })
        const exports = screen.getByRole('menuitem', { name: /Export/ })

        await userEvent.hover(commands)
        expect(await screen.findByRole('menuitem', { name: 'Reload' })).toBeInTheDocument()

        await userEvent.hover(exports)

        expect(commands).toHaveAttribute('aria-expanded', 'false')
        expect(exports).toHaveAttribute('aria-expanded', 'true')
        await waitFor(() =>
            expect(screen.queryByRole('menuitem', { name: 'Reload' })).not.toBeInTheDocument()
        )
    })

    // A gated list that yields nothing for this row would otherwise draw an empty paper
    it('opens nothing for an entry whose deferred list turns out to be empty', async () => {
        // the pointer crossing an entry fires a move per pixel, and the thunk is the expensive half
        const build = vi.fn(() => [])
        renderSlot(
            <ContextMenu menuItems={[{ id: 'commands', label: 'Commands', children: build }]} />
        )
        await openKebab()
        const parent = screen.getByRole('menuitem', { name: /Commands/ })

        await userEvent.hover(parent)
        await userEvent.unhover(parent)
        await userEvent.hover(parent)

        expect(parent).toHaveAttribute('aria-expanded', 'false')
        expect(screen.getAllByRole('menu')).toHaveLength(1)
        expect(build).toHaveBeenCalledTimes(1)
    })

    // MUI's own list walks the focus between entries, and an entry nobody is on must not say it is open
    it('closes a hovered entry’s list when the focus moves to a sibling', async () => {
        renderSlot(<ContextMenu menuItems={TWO_CASCADES} />)
        await openKebab()
        // both entries are read before the list opens: MUI hides the rest of the page behind it
        const commands = screen.getByRole('menuitem', { name: /Commands/ })
        const exports = screen.getByRole('menuitem', { name: /Export/ })
        act(() => commands.focus())

        await userEvent.hover(commands)
        expect(await screen.findByRole('menuitem', { name: 'Reload' })).toBeInTheDocument()

        act(() => exports.focus())

        expect(commands).toHaveAttribute('aria-expanded', 'false')
        await waitFor(() =>
            expect(screen.queryByRole('menuitem', { name: 'Reload' })).not.toBeInTheDocument()
        )
    })

    // Moving INTO the list is the way down the tree, not a walk away from the entry
    it('keeps the list open when the focus moves into it', async () => {
        renderSlot(<ContextMenu menuItems={CASCADE} />)
        await openKebab()
        const parent = screen.getByRole('menuitem', { name: /Commands/ })

        fireEvent.keyDown(parent, { key: 'ArrowRight' })

        const nested = await screen.findByRole('menuitem', { name: 'Reload' })
        expect(nested).toHaveFocus()
        expect(parent).toHaveAttribute('aria-expanded', 'true')
    })

    it('runs a nested entry and closes every level', async () => {
        const onReload = vi.fn()
        const items: TableMenuItem[] = [
            {
                id: 'commands',
                label: 'Commands',
                children: [{ id: 'reload', label: 'Reload', onClick: onReload }]
            }
        ]
        renderSlot(<ContextMenu menuItems={items} />)
        await openKebab()
        await userEvent.hover(screen.getByRole('menuitem', { name: /Commands/ }))

        await userEvent.click(await screen.findByRole('menuitem', { name: 'Reload' }))

        expect(onReload).toHaveBeenCalled()
        await waitFor(() =>
            expect(screen.queryByRole('menuitem', { name: /Commands/ })).not.toBeInTheDocument()
        )
    })

    // A surface holding one menu per row pays a closure per row, not every label its list could show
    it('builds a deferred list only when that list opens', async () => {
        const build = vi.fn(() => [{ id: 'reload', label: 'Reload' }])
        renderSlot(
            <ContextMenu menuItems={[{ id: 'commands', label: 'Commands', children: build }]} />
        )
        expect(build).not.toHaveBeenCalled()

        await openKebab()
        expect(build).not.toHaveBeenCalled()

        await userEvent.hover(screen.getByRole('menuitem', { name: /Commands/ }))
        expect(await screen.findByRole('menuitem', { name: 'Reload' })).toBeInTheDocument()
        expect(build).toHaveBeenCalledTimes(1)
    })

    /**
     * A grid virtualises its rows, so scrolling the open row away unmounts the kebab without MUI
     * ever calling `onClose` — and the table would go on painting a row whose menu is gone.
     */
    it('reports the close when it goes away while open', async () => {
        const onOpenChange = vi.fn()
        const { unmount } = renderSlot(
            <ContextMenu menuItems={CASCADE} onOpenChange={onOpenChange} />
        )
        await openKebab()
        expect(onOpenChange).toHaveBeenLastCalledWith(true)

        unmount()

        expect(onOpenChange).toHaveBeenLastCalledWith(false)
    })

    it('says nothing on unmount when nothing was open', () => {
        const onOpenChange = vi.fn()
        const { unmount } = renderSlot(
            <ContextMenu menuItems={CASCADE} onOpenChange={onOpenChange} />
        )

        unmount()

        expect(onOpenChange).not.toHaveBeenCalled()
    })
})

/**
 * The LOCAL calendar day throughout: the day the reader picks in the field is the day the caller
 * bounded, whatever the offset between that day and UTC.
 *
 * Both fixtures are needed to pin it in any timezone — local midnight is a day EARLIER in UTC east
 * of Greenwich, and a local late evening is a day LATER west of it.
 */
describe('the default DatePicker', () => {
    const field = (): HTMLElement => screen.getByLabelText('Choose a date')

    it('shows the local day of the instant it was handed', () => {
        const { unmount } = renderSlot(
            <DatePicker value={new Date(2026, 8, 10).toISOString()} onChange={vi.fn()} />
        )
        expect(field()).toHaveValue('2026-09-10')
        unmount()

        renderSlot(<DatePicker value={new Date(2026, 8, 10, 23, 30).toISOString()} />)
        expect(field()).toHaveValue('2026-09-10')
    })

    it('offers no day the caller excluded', () => {
        renderSlot(
            <DatePicker
                minDate={new Date(2026, 8, 10)}
                maxDate={new Date(2026, 8, 20, 23, 30)}
                onChange={vi.fn()}
            />
        )

        expect(field()).toHaveAttribute('min', '2026-09-10')
        expect(field()).toHaveAttribute('max', '2026-09-20')
    })

    it('answers with the local midnight of the day that was picked', () => {
        const onChange = vi.fn()
        renderSlot(<DatePicker onChange={onChange} />)

        fireEvent.change(field(), { target: { value: '2026-09-10' } })

        const picked: Date = onChange.mock.calls[0]?.[0]
        expect(picked.getFullYear()).toBe(2026)
        expect(picked.getMonth()).toBe(8)
        expect(picked.getDate()).toBe(10)
        // the instant the bound leaves as, so a day out and back is the same day
        expect(picked.getHours()).toBe(0)
        expect(picked.getMinutes()).toBe(0)
    })

    it('answers nothing at all once the field is emptied', () => {
        const onChange = vi.fn()
        renderSlot(<DatePicker value={new Date(2026, 8, 10).toISOString()} onChange={onChange} />)

        fireEvent.change(field(), { target: { value: '' } })

        expect(onChange).toHaveBeenCalledWith(undefined)
    })
})
