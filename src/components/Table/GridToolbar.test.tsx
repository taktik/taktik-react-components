import { render, screen, type RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import { GridToolbar, GridToolbarProps, TableFilterState } from './GridToolbar'

const filters: TableFilterState = {
    definitions: [{ key: 'name', label: 'Name', kind: 'text' }],
    rawValues: {},
    onChange: vi.fn(),
    onReset: vi.fn(),
    primaryKey: 'name'
}

const renderToolbar = (props: Partial<GridToolbarProps> = {}): RenderResult =>
    render(
        <ThemeProvider theme={lightTheme}>
            <GridToolbar filters={filters} {...props} />
        </ThemeProvider>
    )

/** Stands in for whatever kebab the page hands in — the toolbar answers for its PLACE, not for it. */
const KEBAB = (
    <button type='button' aria-label='Import and export devices'>
        ⋮
    </button>
)

/**
 * Ruling R-d (amended 2026-08-21): the toolbar owns the order, so the order is pinned here rather
 * than in each of the eighteen pages that would otherwise be free to disagree about it — and the
 * page's kebab ends the row, after refresh AND after whatever the page hands in as children.
 */
describe('GridToolbar', () => {
    it('puts the acts first — delete, create, refresh — and the kebab last', () => {
        renderToolbar({
            remove: { hasSelection: true, label: 'Delete device', onClick: vi.fn() },
            create: { label: 'Add device', onClick: vi.fn() },
            refresh: { tooltipText: 'Refresh', onClick: vi.fn() },
            trailingMenu: KEBAB
        })

        const names = screen
            .getAllByRole('button')
            .map((button) => button.getAttribute('aria-label') ?? button.textContent ?? '')

        const order = ['Delete device', 'Add device', 'Refresh', 'Import and export devices'].map(
            (name) => names.indexOf(name)
        )
        expect(order.every((index) => index >= 0)).toBe(true)
        expect([...order]).toEqual([...order].sort((a, b) => a - b))
    })

    it("renders the kebab after the page's own controls, not before them", () => {
        renderToolbar({
            refresh: { tooltipText: 'Refresh', onClick: vi.fn() },
            trailingMenu: KEBAB,
            children: <button type='button'>Settings</button>
        })

        const names = screen
            .getAllByRole('button')
            .map((button) => button.getAttribute('aria-label') ?? button.textContent ?? '')
        expect(names.indexOf('Settings')).toBeGreaterThan(names.indexOf('Refresh'))
        expect(names.indexOf('Import and export devices')).toBeGreaterThan(
            names.indexOf('Settings')
        )
    })

    // Whether there is a kebab at all is the page's call; the toolbar adds no chrome around one
    it('leaves the end of the row empty for a page that hands in no kebab', () => {
        renderToolbar({ refresh: { tooltipText: 'Refresh', onClick: vi.fn() } })
        expect(screen.queryByRole('button', { name: 'Import and export devices' })).toBeNull()
    })

    it('runs each declared control', async () => {
        const refresh = vi.fn()
        renderToolbar({ refresh: { tooltipText: 'Refresh', onClick: refresh } })

        await userEvent.click(screen.getByRole('button', { name: 'Refresh' }))
        expect(refresh).toHaveBeenCalledTimes(1)
    })

    it('disables a control the page cannot offer yet', () => {
        renderToolbar({ refresh: { tooltipText: 'Refresh', onClick: vi.fn(), disabled: true } })
        expect(screen.getByRole('button', { name: 'Refresh' })).toBeDisabled()
    })
})
