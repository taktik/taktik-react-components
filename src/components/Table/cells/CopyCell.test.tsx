import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { CopyCell, CopyCellProps } from './CopyCell'

const renderCell = (props: CopyCellProps): RenderResult =>
    render(
        <ThemeProvider theme={lightTheme}>
            <CopyCell {...props} />
        </ThemeProvider>
    )

describe('CopyCell', () => {
    it('copies the value, not the shown text', async () => {
        const onCopy = vi.fn()
        renderCell({
            value: 'e5f6-0000',
            display: 'Reception agent',
            tooltipText: 'Copy id',
            onCopy
        })
        expect(screen.getByText('Reception agent')).toBeInTheDocument()
        await userEvent.click(screen.getByRole('button', { name: 'Copy id' }))
        expect(onCopy).toHaveBeenCalledWith('e5f6-0000')
    })

    it('shows the value itself when there is nothing else to show', () => {
        renderCell({ value: 'PREFIX_A', tooltipText: 'Copy prefix', onCopy: vi.fn() })
        expect(screen.getByText('PREFIX_A')).toBeInTheDocument()
    })

    // Nothing to copy is not a disabled button — it is no button at all
    it('offers no button without a value', () => {
        renderCell({ value: undefined, tooltipText: 'Copy prefix', onCopy: vi.fn() })
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('exposes the full shown value as a hover title', () => {
        const { container } = renderCell({
            value: 'x',
            display: 'a very long value',
            tooltipText: 'Copy',
            onCopy: vi.fn()
        })
        expect(container.querySelector('span')?.getAttribute('title')).toBe('a very long value')
    })

    it('can be disabled while the page is saving', () => {
        renderCell({ value: 'x', tooltipText: 'Copy', onCopy: vi.fn(), disabled: true })
        expect(screen.getByRole('button', { name: 'Copy' })).toBeDisabled()
    })
})
