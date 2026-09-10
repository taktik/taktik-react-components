import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import {
    chipBackground,
    ChipColors,
    ChipListCell,
    ChipListCellProps,
    chipListLines
} from './ChipListCell'

const renderCell = (props: ChipListCellProps) =>
    render(
        <ThemeProvider theme={lightTheme}>
            <ChipListCell {...props} />
        </ThemeProvider>
    )

const colors: ChipColors = {
    background: 'rgb(1, 2, 3)',
    usedBackground: 'rgb(4, 5, 6)',
    fillEdge: 'rgb(13, 14, 15)',
    mark: 'rgb(7, 8, 9)',
    color: 'rgb(10, 11, 12)'
}

const items = (count: number) =>
    Array.from({ length: count }, (_, index) => ({
        key: `n${index}`,
        label: `Network ${index}`
    }))

describe('ChipListCell', () => {
    it('renders one chip per item', () => {
        renderCell({ items: items(2) })
        expect(screen.getByText('Network 0')).toBeInTheDocument()
        expect(screen.getByText('Network 1')).toBeInTheDocument()
    })

    // The cell has to stay one row high whatever the data does, so the tail is counted, not drawn
    it('collapses the overflow into a counting chip', () => {
        renderCell({ items: items(6), maxVisible: 2 })
        expect(screen.getByText('Network 1')).toBeInTheDocument()
        expect(screen.queryByText('Network 2')).not.toBeInTheDocument()
        expect(screen.getByText('+4')).toBeInTheDocument()
    })

    it('names the collapsed items on the counting chip', () => {
        renderCell({ items: items(4), maxVisible: 2 })
        expect(screen.getByLabelText('Network 2, Network 3')).toBeInTheDocument()
    })

    it('draws them all when asked to', () => {
        renderCell({ items: items(5), maxVisible: 0 })
        expect(screen.getByText('Network 4')).toBeInTheDocument()
        expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
    })

    it('shows the empty label rather than an empty cell', () => {
        renderCell({ items: [], emptyLabel: 'No network' })
        expect(screen.getByText('No network')).toBeInTheDocument()
    })

    it('defaults the empty label to a dash', () => {
        const { container } = renderCell({ items: [] })
        expect(container.textContent).toBe('-')
    })

    // The v4 license page has to show every grant at once, and grows its rows to fit them
    it('draws every chip when wrapping, whatever maxVisible says', () => {
        renderCell({ items: items(8), maxVisible: 2, wrap: true })
        expect(screen.getByText('Network 7')).toBeInTheDocument()
        expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
    })

    it('carries a per-chip tooltip', () => {
        renderCell({
            items: [
                {
                    key: 'gone',
                    label: 'Deleted network',
                    tone: 'danger',
                    tooltipText: 'Uncheck it'
                }
            ]
        })
        expect(screen.getByLabelText('Uncheck it')).toBeInTheDocument()
    })

    // Fixed columns are what make chipListLines exact rather than a safe over-estimate
    it('lays the chips out in a fixed grid when the cell asks for columns', () => {
        const { container } = renderCell({ items: items(4), wrap: true, columns: 2 })
        const layout = getComputedStyle(container.firstElementChild as Element)
        expect(layout.display).toBe('grid')
        expect(layout.gridTemplateColumns).toBe('repeat(2, minmax(0, 1fr))')
    })

    // columns only makes sense for a cell drawing every chip; a "+N" cell is one line by definition
    it('ignores columns on a cell that is not wrapping', () => {
        const { container } = renderCell({ items: items(4), columns: 2 })
        expect(getComputedStyle(container.firstElementChild as Element).display).toBe('flex')
    })

    /**
     * A license grant: the hue says which capacity, the fill says how much of it is gone.
     *
     * ⚠ Only the FLAT states are read back off the element. jsdom drops any declaration holding a
     * `calc()`, and the rule closing a partly-used fill is positioned with one — so the gradient
     * itself is pinned on `chipBackground` below, where it is a string rather than a paint.
     */
    it('paints a chip that reports a full capacity in the used hue', () => {
        renderCell({
            items: [{ key: 'signage', label: 'Signage 10/10', colors, fillPercent: 100 }]
        })
        const chip = getComputedStyle(screen.getByText('Signage 10/10').parentElement as Element)
        expect(chip.background).toBe(colors.usedBackground)
        expect(chip.color).toBe(colors.color)
    })

    it('paints a chip with nothing used in the flat hue', () => {
        renderCell({ items: [{ key: 'signage', label: 'Signage 0/10', colors, fillPercent: 0 }] })
        const chip = getComputedStyle(screen.getByText('Signage 0/10').parentElement as Element)
        expect(chip.background).toBe(colors.background)
    })

    it('paints a chip with colours but no fill in the flat hue', () => {
        renderCell({ items: [{ key: 'signage', label: 'Signage', colors }] })
        const chip = getComputedStyle(screen.getByText('Signage').parentElement as Element)
        expect(chip.background).toBe(colors.background)
    })

    it('tints a chip by its tone, and leaves an untoned one on the plain chip colours', () => {
        renderCell({
            items: [
                { key: 'ok', label: 'Signage 3/20', tone: 'success' },
                { key: 'full', label: 'Browser 10/10', tone: 'danger' },
                { key: 'plain', label: 'Untoned' }
            ]
        })
        const colourOf = (label: string) =>
            getComputedStyle(screen.getByText(label).parentElement as Element).backgroundColor
        expect(colourOf('Signage 3/20')).not.toBe(colourOf('Browser 10/10'))
        expect(colourOf('Untoned')).not.toBe(colourOf('Signage 3/20'))
    })
})

/**
 * The chip's two states are used and available, and what separates them is the RULE between them:
 * both halves are tints of one hue, and the label and the mark riding over both cap how far apart
 * the tints may go (1.07:1 between them on light for the palest category). So the boundary is drawn
 * in `fillEdge`, and where it lands is the whole of what the chip says.
 */
describe('chipBackground', () => {
    it('rules the boundary between the used part and what is left', () => {
        const fill = chipBackground(colors, 40)
        expect(fill).toContain(`${colors.usedBackground} 0 calc(40% - 2px)`)
        expect(fill).toContain(`${colors.fillEdge} calc(40% - 2px) 40%`)
        expect(fill).toContain(`${colors.background} 40% 100%`)
    })

    // The rule sits INSIDE the used part, so it says where the boundary is instead of moving it
    it('takes the rule out of the used part rather than adding to it', () => {
        expect(chipBackground(colors, 40)).not.toContain('calc(40% + 2px)')
    })

    // Nothing used and nothing left are the two states with no boundary between them: a rule at
    // either end of the chip is clipped by its own corners and reads as a rendering fault
    it('paints a chip with nothing used flat, and draws no rule', () => {
        expect(chipBackground(colors, 0)).toBe(colors.background)
    })

    it('paints a full chip flat in the used hue, and draws no rule', () => {
        expect(chipBackground(colors, 100)).toBe(colors.usedBackground)
    })

    // Over capacity is clamped to 100 by `capacityPercent`, but the paint answers for it anyway
    it('reads past-full as full', () => {
        expect(chipBackground(colors, 130)).toBe(colors.usedBackground)
    })

    it('says nothing about capacity for a chip that reports no fill', () => {
        expect(chipBackground(colors)).toBe(colors.background)
    })
})

describe('chipListLines', () => {
    it('fits as many chips per line as the cell can hold', () => {
        expect(chipListLines(3, 3)).toBe(1)
        expect(chipListLines(4, 3)).toBe(2)
        expect(chipListLines(8, 3)).toBe(3)
    })

    // A row is never zero lines tall — an empty cell still has its empty label to show
    it('never reports fewer than one line', () => {
        expect(chipListLines(0, 3)).toBe(1)
    })

    it('treats a nonsense width as one chip per line rather than dividing by zero', () => {
        expect(chipListLines(3, 0)).toBe(3)
    })
})
