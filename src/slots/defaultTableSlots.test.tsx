import { fireEvent, render, screen, type RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it, vi } from 'vitest'
import { defaultTableTheme as lightTheme } from '../theme/tableTheme'
import { defaultTableSlots } from './defaultTableSlots'

/**
 * The MUI defaults are what a consumer SEES before it injects anything, so every prop the library's
 * own tables pass has to arrive somewhere visible here.
 */
const renderSlot = (ui: ReactElement): RenderResult =>
    render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>)

const { Button, IconButton, MenuSurface, DatePicker } = defaultTableSlots

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
