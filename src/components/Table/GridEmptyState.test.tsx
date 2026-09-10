import { render, screen, type RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it } from 'vitest'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import { GridEmptyState } from './GridEmptyState'

const renderState = (props: Partial<Parameters<typeof GridEmptyState>[0]> = {}): RenderResult =>
    render(
        <ThemeProvider theme={lightTheme}>
            <GridEmptyState icon={<svg data-testid='icon' />} title='No items' {...props} />
        </ThemeProvider>
    )

describe('GridEmptyState', () => {
    it('renders the icon and title', () => {
        renderState()
        expect(screen.getByTestId('icon')).toBeInTheDocument()
        expect(screen.getByText('No items')).toBeInTheDocument()
    })

    it('renders the hint only when provided', () => {
        const { rerender } = renderState()
        expect(screen.queryByText('Try a different filter')).not.toBeInTheDocument()
        rerender(
            <ThemeProvider theme={lightTheme}>
                <GridEmptyState
                    icon={<svg data-testid='icon' />}
                    title='No items'
                    hint='Try a different filter'
                />
            </ThemeProvider>
        )
        expect(screen.getByText('Try a different filter')).toBeInTheDocument()
    })
})
