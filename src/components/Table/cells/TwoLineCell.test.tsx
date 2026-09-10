import { render, RenderResult, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { TwoLineCell, TwoLineCellProps } from './TwoLineCell'

const renderCell = (props: TwoLineCellProps): RenderResult =>
    render(
        <ThemeProvider theme={lightTheme}>
            <TwoLineCell {...props} />
        </ThemeProvider>
    )

describe('TwoLineCell', () => {
    it('renders the qualifying line under the identity', () => {
        renderCell({ primary: 'Lobby screens', secondary: 'Every screen in the lobby' })
        expect(screen.getByText('Lobby screens')).toBeInTheDocument()
        expect(screen.getByText('Every screen in the lobby')).toBeInTheDocument()
    })

    // a row with nothing to qualify it must not gain an empty line, which would centre the first
    // line off the row's middle
    it('renders one line when there is no second', () => {
        const { container } = renderCell({ primary: 'Lobby screens' })
        expect(container.querySelectorAll('span')).toHaveLength(1)
    })

    it('treats an empty secondary as absent', () => {
        const { container } = renderCell({ primary: 'Lobby screens', secondary: '' })
        expect(container.querySelectorAll('span')).toHaveLength(1)
    })

    // the column truncates, so the full text has to stay reachable on hover
    it('puts the given titles on the lines that may be cut short', () => {
        renderCell({
            primary: 'Lobby',
            primaryTitle: 'Lobby screens',
            secondary: 'Every screen',
            secondaryTitle: 'Every screen in the lobby'
        })
        expect(screen.getByText('Lobby')).toHaveAttribute('title', 'Lobby screens')
        expect(screen.getByText('Every screen')).toHaveAttribute(
            'title',
            'Every screen in the lobby'
        )
    })
})
