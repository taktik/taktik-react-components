import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it, vi } from 'vitest'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { TableMenu, TableMenuActions, tableMenuItems } from './TableMenu'

const renderMenu = (actions: Partial<TableMenuActions> = {}) =>
    render(
        <ThemeProvider theme={lightTheme}>
            <TableMenu label='Import and export residents' {...actions} />
        </ThemeProvider>
    )

describe('tableMenuItems', () => {
    it('orders the acts import, export, template', () => {
        const items = tableMenuItems({
            label: 'menu',
            templateEntry: { label: 'Download template', onClick: vi.fn() },
            exportEntry: { label: 'Export', onClick: vi.fn() },
            importEntry: { label: 'Import', onClick: vi.fn() }
        })
        expect(items.map((item) => item.id)).toEqual(['import', 'export', 'template'])
    })

    it('leaves out what a table does not offer', () => {
        const items = tableMenuItems({
            label: 'menu',
            exportEntry: { label: 'Export', onClick: vi.fn() }
        })
        expect(items.map((item) => item.id)).toEqual(['export'])
    })
})

describe('TableMenu', () => {
    it('draws nothing at all when no act is declared', () => {
        renderMenu()
        expect(screen.queryByRole('button')).toBeNull()
    })

    /**
     * The bug the shared declaration exists to make impossible: two pages each drew this menu and one
     * of them paired a DOWNLOAD arrow with "Import" and an UPLOAD arrow with "Export".
     */
    it('marks import as an upload and export as a download', async () => {
        renderMenu({
            importEntry: { label: 'Import', onClick: vi.fn() },
            exportEntry: { label: 'Export', onClick: vi.fn() }
        })
        await userEvent.click(screen.getByRole('button', { name: 'Import and export residents' }))

        expect(
            screen
                .getByRole('menuitem', { name: 'Import' })
                .querySelector('[data-testid="FileUploadRoundedIcon"]')
        ).not.toBeNull()
        expect(
            screen
                .getByRole('menuitem', { name: 'Export' })
                .querySelector('[data-testid="FileDownloadRoundedIcon"]')
        ).not.toBeNull()
    })

    it('names its trigger and runs the act behind it', async () => {
        const onClick = vi.fn()
        renderMenu({ exportEntry: { label: 'Export', onClick } })

        await userEvent.click(screen.getByRole('button', { name: 'Import and export residents' }))
        await userEvent.click(screen.getByRole('menuitem', { name: 'Export' }))
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
