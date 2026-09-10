import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { StatusCell, StatusCellProps } from './StatusCell'
import { statusToneColors, StatusTone } from './statusTone'

const renderCell = (props: StatusCellProps) =>
    render(
        <ThemeProvider theme={lightTheme}>
            <StatusCell {...props} />
        </ThemeProvider>
    )

describe('statusToneColors', () => {
    it('answers for every tone', () => {
        const tones: StatusTone[] = ['success', 'warning', 'danger', 'neutral']
        tones.forEach((tone) => {
            const colors = statusToneColors(tone, lightTheme)
            expect(colors.mark).toBeTruthy()
            expect(colors.text).toBeTruthy()
            expect(colors.background).toBeTruthy()
            expect(colors.border).toBeTruthy()
        })
    })

    // The pill is outlined, so every tone owes an edge — a tint of its own hue, except neutral,
    // which states no tone and takes the app's own line.
    it('outlines a toned pill in its own hue and a neutral one in the app line', () => {
        expect(statusToneColors('success', lightTheme).border).toContain('rgba')
        expect(statusToneColors('neutral', lightTheme).border).toBe(lightTheme.borderColor)
    })

    // The pill this generalises showed connected/undetermined/disconnected in these three colours;
    // the mapping moved here, so pin that it still resolves to the same palette entries.
    it('keeps the green/yellow/red scale the connection pill was built on', () => {
        expect(statusToneColors('success', lightTheme).mark).toBe(lightTheme.greenMain)
        expect(statusToneColors('warning', lightTheme).mark).toBe(lightTheme.yellowMain)
        expect(statusToneColors('danger', lightTheme).mark).toBe(lightTheme.redMain)
    })
})

describe('StatusCell', () => {
    it('renders the label', () => {
        renderCell({ tone: 'success', label: 'Online' })
        expect(screen.getByText('Online')).toBeInTheDocument()
    })

    it('renders the secondary line under the label', () => {
        renderCell({ tone: 'danger', label: 'Offline', secondary: '3 minutes ago' })
        expect(screen.getByText('Offline')).toBeInTheDocument()
        expect(screen.getByText('3 minutes ago')).toBeInTheDocument()
    })

    it('omits the secondary line when it is empty', () => {
        const { container } = renderCell({ tone: 'neutral', label: 'Unknown', secondary: '' })
        expect(container.textContent).toBe('Unknown')
    })

    // The pill is sized by its own text: it is a standalone element (a device row's status), not a
    // grid cell sharing width with its neighbours, so it must not shrink and ellipsise.
    it('lets a cell shrink but not a pill', () => {
        const { container: cell } = renderCell({ tone: 'success', label: 'Online' })
        expect(cell.firstElementChild).toHaveStyle({ 'min-width': '0px' })
        const { container: pill } = renderCell({
            tone: 'success',
            label: 'Online',
            variant: 'pill'
        })
        expect(pill.firstElementChild).not.toHaveStyle({ 'min-width': '0px' })
    })

    // The design's pill is a bordered one — the fill alone dissolves into a light page
    it('draws the pill with an outline in the tone', () => {
        const { container } = renderCell({ tone: 'success', label: 'Online', variant: 'pill' })
        expect(container.firstElementChild).toHaveStyle({
            border: `1px solid ${statusToneColors('success', lightTheme).border}`
        })
    })

    // A pill naming an identity (a platform) has no state for a coloured dot to code
    it('drops the mark when the page says the label is not a state', () => {
        const { container: withMark } = renderCell({
            tone: 'neutral',
            label: 'webOS',
            variant: 'pill'
        })
        expect(withMark.firstElementChild?.children).toHaveLength(2)
        const { container: unmarked } = renderCell({
            tone: 'neutral',
            label: 'webOS',
            variant: 'pill',
            mark: false
        })
        expect(unmarked.firstElementChild?.children).toHaveLength(1)
        expect(unmarked.textContent).toBe('webOS')
    })

    it('renders the given icon instead of the dot', () => {
        renderCell({
            tone: 'warning',
            label: 'Behind',
            icon: <svg data-testid='status-icon' />
        })
        expect(screen.getByTestId('status-icon')).toBeInTheDocument()
    })

    // The icon-only column (License) reclaims the label's width, and owes the words back
    it('keeps the label readable when only the mark is drawn', () => {
        renderCell({
            tone: 'success',
            label: 'License valid',
            variant: 'icon',
            icon: <svg data-testid='status-icon' />
        })
        // as the tooltip the Tooltip primitive puts on the mark…
        expect(screen.getByLabelText('License valid')).toBeInTheDocument()
        // …and in the DOM, for a reader who never hovers anything
        expect(screen.getByText('License valid')).toBeInTheDocument()
    })

    it('prefers what the page says over the label for the icon-only tooltip', () => {
        renderCell({
            tone: 'danger',
            label: 'License suspended',
            tooltipText: 'License suspended — unpaid invoice',
            variant: 'icon'
        })
        expect(screen.getByLabelText('License suspended — unpaid invoice')).toBeInTheDocument()
    })

    // The second line has nowhere to go without the words; a page that needs it says so in the tooltip
    it('drops the secondary line when only the mark is drawn', () => {
        renderCell({
            tone: 'warning',
            label: 'License expiring soon',
            secondary: 'expires in 6 days',
            variant: 'icon'
        })
        expect(screen.queryByText('expires in 6 days')).not.toBeInTheDocument()
    })
})
