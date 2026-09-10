import { render, screen } from '@testing-library/react'
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

const renderToolbar = (props: Partial<GridToolbarProps> = {}) =>
    render(
        <ThemeProvider theme={lightTheme}>
            <GridToolbar filters={filters} {...props} />
        </ThemeProvider>
    )

/**
 * Ruling R-d (amended 2026-08-21): the toolbar owns the order, so the order is pinned here rather
 * than in each of the eighteen pages that would otherwise be free to disagree about it — and the
 * table's kebab ends the row, after refresh AND after whatever the page hands in as children.
 */
describe('GridToolbar', () => {
    it('puts the acts first — delete, create, refresh — and the kebab last', () => {
        renderToolbar({
            remove: { hasSelection: true, label: 'Delete device', onClick: vi.fn() },
            create: { label: 'Add device', onClick: vi.fn() },
            refresh: { tooltipText: 'Refresh', onClick: vi.fn() },
            tableMenu: {
                label: 'Import and export devices',
                importEntry: { label: 'Import', onClick: vi.fn() },
                exportEntry: { label: 'Export', onClick: vi.fn() }
            }
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
            tableMenu: {
                label: 'Import and export devices',
                exportEntry: { label: 'Export', onClick: vi.fn() }
            },
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

    it('offers import and export inside the kebab, never as toolbar buttons', async () => {
        const importEntry = vi.fn()
        const exportEntry = vi.fn()
        renderToolbar({
            tableMenu: {
                label: 'Import and export devices',
                importEntry: { label: 'Import', onClick: importEntry },
                exportEntry: { label: 'Export', onClick: exportEntry }
            }
        })

        expect(screen.queryByRole('button', { name: 'Import' })).toBeNull()
        expect(screen.queryByRole('button', { name: 'Export' })).toBeNull()

        await userEvent.click(screen.getByRole('button', { name: 'Import and export devices' }))
        await userEvent.click(screen.getByRole('menuitem', { name: 'Import' }))
        expect(importEntry).toHaveBeenCalledTimes(1)

        await userEvent.click(screen.getByRole('button', { name: 'Import and export devices' }))
        await userEvent.click(screen.getByRole('menuitem', { name: 'Export' }))
        expect(exportEntry).toHaveBeenCalledTimes(1)
    })

    it('draws no kebab for a table that declares no file acts', () => {
        renderToolbar({
            refresh: { tooltipText: 'Refresh', onClick: vi.fn() },
            tableMenu: { label: 'Import and export devices' }
        })
        expect(screen.queryByRole('button', { name: 'Import and export devices' })).toBeNull()
    })

    it('runs each declared control', async () => {
        const refresh = vi.fn()
        renderToolbar({ refresh: { tooltipText: 'Refresh', onClick: refresh } })

        await userEvent.click(screen.getByRole('button', { name: 'Refresh' }))
        expect(refresh).toHaveBeenCalledTimes(1)
    })

    it('disables a control the page cannot offer yet', async () => {
        renderToolbar({
            refresh: { tooltipText: 'Refresh', onClick: vi.fn(), disabled: true },
            tableMenu: {
                label: 'Import and export devices',
                importEntry: { label: 'Import', onClick: vi.fn(), disabled: true }
            }
        })
        expect(screen.getByRole('button', { name: 'Refresh' })).toBeDisabled()
        await userEvent.click(screen.getByRole('button', { name: 'Import and export devices' }))
        expect(screen.getByRole('menuitem', { name: 'Import' })).toHaveAttribute(
            'aria-disabled',
            'true'
        )
    })
})
