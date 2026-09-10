import { ReactNode, useState } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme, type TableTheme } from '../../theme/tableTheme'
import { GridInDialog } from './gridInDialog'
import { GRID_HEADER_GROUND_VAR, GRID_PAGE_SIZE } from './useGridPresentation'

/**
 * A second palette, so the ground assertion below cannot pass by coincidence: on the default light
 * one a dialog's paper and the page's canvas are different steps already, but a theme where they
 * are chosen independently is what proves the variable follows the paper.
 */
const darkTheme: TableTheme = {
    ...lightTheme,
    backgroundDark: '#1E252D',
    dialog: { background: '#29323D' }
}

/**
 * The dialog a grid sits in, stood in for by what the grid can actually see of it: a labelled
 * dialog box, and the FORM whose submit a control inside the grid must never fire.
 */
const DialogHost = ({ children, onSave }: { children: ReactNode; onSave?: () => void }) => (
    <div role='dialog' aria-label='Package contents'>
        <form
            onSubmit={(event) => {
                event.preventDefault()
                onSave?.()
            }}>
            {children}
        </form>
    </div>
)

/**
 * The contract `GridInDialog` exists to make unforgettable: a dialog is the one place a grid does
 * not get the page shell, and every consumer that hand-rolls the box forgets a different part of it.
 */

interface Row {
    id: string
    name: string
}
const rows: Row[] = Array.from({ length: GRID_PAGE_SIZE + 5 }, (_, index) => ({
    id: `r${index}`,
    name: `Row ${index}`
}))

const Host = ({ height }: { height?: string } = {}) => {
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    return (
        <ThemeProvider theme={lightTheme}>
            <DialogHost>
                <>
                    <span data-testid='selection'>{selectedIds.join(',')}</span>
                    <GridInDialog<Row>
                        height={height}
                        columnVisibilityKey='gridInDialogTest'
                        rows={rows}
                        columns={[{ key: 'name', name: 'Name' }]}
                        selection={{ mode: 'ids', ids: selectedIds, onChange: setSelectedIds }}
                    />
                </>
            </DialogHost>
        </ThemeProvider>
    )
}

describe('a grid inside a dialog', () => {
    it('renders its rows inside the dialog', () => {
        render(<Host />)
        const dialog = screen.getByRole('dialog')
        expect(within(dialog).getByText('Row 0')).toBeInTheDocument()
        expect(within(dialog).getByRole('grid')).toBeInTheDocument()
    })

    it('paginates locally, so a long list does not stretch the dialog', async () => {
        render(<Host />)
        const dialog = screen.getByRole('dialog')
        expect(within(dialog).queryByText(`Row ${GRID_PAGE_SIZE}`)).not.toBeInTheDocument()

        await userEvent.click(within(dialog).getByRole('button', { name: /next page/i }))
        expect(within(dialog).getByText(`Row ${GRID_PAGE_SIZE}`)).toBeInTheDocument()
        expect(within(dialog).queryByText('Row 0')).not.toBeInTheDocument()
    })

    it('reports a checkbox selection to the dialog around it', async () => {
        render(<Host />)
        const dialog = screen.getByRole('dialog')
        const rowCheckboxes = within(dialog).getAllByRole('checkbox')
        // the first checkbox is the header's select-all; the next belongs to the first row
        await userEvent.click(rowCheckboxes[1] as HTMLElement)
        expect(screen.getByTestId('selection').textContent).toBe('r0')
    })

    // A dialog's paper IS a form, so Enter there means "save"; a control inside the grid must not
    // turn a click into one either.
    it('does not submit the form around it when the grid is used', async () => {
        const onSave = vi.fn()
        render(
            <ThemeProvider theme={lightTheme}>
                <DialogHost onSave={onSave}>
                    <GridInDialog<Row>
                        columnVisibilityKey='gridInDialogTest'
                        rows={rows}
                        columns={[{ key: 'name', name: 'Name' }]}
                    />
                </DialogHost>
            </ThemeProvider>
        )
        const dialog = screen.getByRole('dialog')
        await userEvent.click(within(dialog).getByRole('button', { name: /next page/i }))
        expect(onSave).not.toHaveBeenCalled()
    })

    // the reason the primitive exists: the pager's colours and its floor are the consumer's to
    // forget, so the box carries them whether or not the dialog says anything about its height
    it('hosts the pager itself, with and without a height of its own', () => {
        const { unmount } = render(<Host />)
        const filling = screen.getByRole('dialog').querySelector('.MuiTablePagination-root')
        expect(filling).toBeInTheDocument()
        unmount()

        render(<Host height='52vh' />)
        const bounded = screen.getByRole('dialog').querySelector('.MuiTablePagination-root')
        expect(bounded).toBeInTheDocument()
    })

    /**
     * The header band stands on the DIALOG's paper, not on the page's canvas.
     *
     * It is asserted on the VARIABLE rather than on a rendered colour, because that is where the
     * mechanism lives: the library sets its own variables inline on the grid element, so a host
     * declaring `--rdg-header-background-color` is shadowed and changes nothing. The ground
     * variable is the seam the inline value reads through.
     *
     * ⚠ It is rendered on its OWN here, without the dialog around it, so the element asserted on is
     * the box `GridInDialog` itself renders. Read off the grid instead, the assertion would pass on
     * a declaration made anywhere above it — jsdom inherits custom properties — and pin nothing
     * about who declares it.
     */
    it.each([
        ['light', lightTheme],
        ['dark', darkTheme]
    ])('stands its header on the paper the %s dialog is painted in', (_name, theme) => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <GridInDialog<Row>
                    rows={rows}
                    columns={[{ key: 'name', name: 'Name' }]}
                    columnVisibilityKey='dialogGrid'
                />
            </ThemeProvider>
        )
        const body = container.firstElementChild
        if (!body) {
            throw new Error('GridInDialog rendered no box of its own')
        }
        const ground = getComputedStyle(body).getPropertyValue(GRID_HEADER_GROUND_VAR).trim()
        expect(ground).toBe(theme.dialog.background)
        // and not the page's canvas the fallback would have given it
        expect(ground).not.toBe(theme.backgroundDark)
    })

    // The footer is a space-between row, so a grid stating no total watches its pager slide to the
    // LEFT edge. The seam therefore always fills the left end — the consumer's own noun when it
    // gives one, "N items" otherwise.
    it('fills the footer count so the pager keeps its right edge', () => {
        render(<Host />)
        const dialog = screen.getByRole('dialog')
        expect(within(dialog).getByText(`${rows.length} items`)).toBeInTheDocument()
    })
})
