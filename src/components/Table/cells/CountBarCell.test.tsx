import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { CAPACITY_WARNING_RATIO, capacityPercent, capacityTone } from './capacity'
import { CountBarCell, CountBarCellProps } from './CountBarCell'
import { statusToneColors } from './statusTone'

const renderCell = (props: CountBarCellProps) =>
    render(
        <ThemeProvider theme={lightTheme}>
            <CountBarCell {...props} />
        </ThemeProvider>
    )

describe('capacityTone', () => {
    it('stays quiet while there is room', () => {
        expect(capacityTone(0, 20)).toBe('neutral')
        expect(capacityTone(12, 20)).toBe('neutral')
    })

    it('warns only PAST the threshold, not at it', () => {
        expect(capacityTone(CAPACITY_WARNING_RATIO * 20, 20)).toBe('neutral')
        expect(capacityTone(CAPACITY_WARNING_RATIO * 20 + 1, 20)).toBe('warning')
        expect(capacityTone(19, 20)).toBe('warning')
    })

    // A capacity reached refuses the next device, which is the same problem as being over it
    it('is danger at the capacity as well as over it', () => {
        expect(capacityTone(20, 20)).toBe('danger')
        expect(capacityTone(24, 20)).toBe('danger')
    })

    it('has no tone to give without a capacity', () => {
        expect(capacityTone(0, undefined)).toBe('neutral')
        expect(capacityTone(7, undefined)).toBe('neutral')
    })

    // quirk: a usage backed by a capacity of zero is unbacked, which is a danger, not an empty cell
    it('reads usage against a zero capacity as over capacity', () => {
        expect(capacityTone(0, 0)).toBe('neutral')
        expect(capacityTone(1, 0)).toBe('danger')
    })
})

describe('capacityPercent', () => {
    it('is the share of the capacity in use', () => {
        expect(capacityPercent(5, 20)).toBe(25)
        expect(capacityPercent(20, 20)).toBe(100)
    })

    // The bar this replaces drew its gradient stop past 100%, which spilled out of the pill
    it('clamps a usage over capacity to a full bar', () => {
        expect(capacityPercent(60, 20)).toBe(100)
    })

    it('never goes negative', () => {
        expect(capacityPercent(-4, 20)).toBe(0)
    })

    it('fills for a usage with no capacity behind it, and stays empty without one', () => {
        expect(capacityPercent(3, 0)).toBe(100)
        expect(capacityPercent(0, 0)).toBe(0)
        expect(capacityPercent(0, undefined)).toBe(0)
    })
})

describe('CountBarCell', () => {
    it('reads used over total', () => {
        renderCell({ used: 12, total: 20 })
        expect(screen.getByText('12/20')).toBeInTheDocument()
    })

    it('names the category when the column header cannot', () => {
        renderCell({ used: 1, total: 4, label: 'Signage' })
        expect(screen.getByText('Signage')).toBeInTheDocument()
    })

    it('draws the bar as the share in use', () => {
        renderCell({ used: 5, total: 20 })
        expect(screen.getByRole('progressbar').firstElementChild).toHaveStyle({ width: '25%' })
    })

    it('reports the capacity to assistive tech', () => {
        renderCell({ used: 5, total: 20 })
        const bar = screen.getByRole('progressbar')
        expect(bar).toHaveAttribute('aria-valuenow', '5')
        expect(bar).toHaveAttribute('aria-valuemax', '20')
    })

    it('colours the count by how full the capacity is', () => {
        const { container } = renderCell({ used: 20, total: 20 })
        expect(container.querySelector('span')).toHaveStyle({
            color: statusToneColors('danger', lightTheme).text
        })
    })

    // Nothing granted is not "0 of 0 in use" — there is no capacity to draw a bar against
    it('says nothing was granted rather than drawing an empty bar', () => {
        const { container } = renderCell({ used: 0 })
        expect(container.textContent).toBe('—')
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    it('takes its own empty label', () => {
        const { container } = renderCell({ used: 0, emptyLabel: 'No grant' })
        expect(container.textContent).toBe('No grant')
    })

    it('pulses instead of showing a count it does not have yet', () => {
        renderCell({ used: 0, total: 20, loading: true })
        expect(screen.queryByText('0/20')).not.toBeInTheDocument()
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })

    it('carries whatever the page hangs off the count', () => {
        renderCell({ used: 24, total: 20, suffix: <span>Over capacity</span> })
        expect(screen.getByText('Over capacity')).toBeInTheDocument()
    })

    it('explains itself on hover when the page gives it words', () => {
        renderCell({ used: 24, total: 20, tooltipText: 'Grants amount over the limit' })
        expect(screen.getByLabelText('Grants amount over the limit')).toBeInTheDocument()
    })

    describe('the share variant', () => {
        // four side-by-side columns each repeating "of 40" is noise; the header names what is counted
        it('prints the count alone rather than count-over-whole', () => {
            const { container } = renderCell({ used: 12, total: 40, variant: 'share' })
            expect(container.textContent).toBe('12')
        })

        it('still draws the bar at its share of the whole', () => {
            renderCell({ used: 12, total: 40, variant: 'share' })
            const bar = screen.getByRole('progressbar')
            expect(bar).toHaveAttribute('aria-valuenow', '12')
            expect(bar).toHaveAttribute('aria-valuemax', '40')
        })

        // a type making up ALL of a package is not "over capacity" — it is just the whole package
        it('stays neutral where the capacity variant would warn or alarm', () => {
            const { container: full } = renderCell({ used: 40, total: 40, variant: 'share' })
            const { container: capacity } = renderCell({ used: 40, total: 40 })
            const toneOf = (root: HTMLElement) =>
                getComputedStyle(root.querySelectorAll('span')[0] as Element).color
            expect(toneOf(full)).not.toBe(toneOf(capacity))
        })
    })
})
