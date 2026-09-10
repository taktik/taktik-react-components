import { render, RenderResult, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { InheritedCell } from './InheritedCell'

const renderCell = (inherited: boolean): RenderResult =>
    render(
        <ThemeProvider theme={lightTheme}>
            <InheritedCell inherited={inherited}>Room 214</InheritedCell>
        </ThemeProvider>
    )

describe('InheritedCell', () => {
    it('marks a borrowed row', () => {
        const { container } = renderCell(true)
        const marked = container.querySelector('span')
        expect(marked).toBeInTheDocument()
        expect(marked).toHaveTextContent('Room 214')
    })

    // the app's own rows are the common case: they must render as bare content, with no wrapper
    // element to inherit a style from
    it('leaves an owned row untouched', () => {
        const { container } = renderCell(false)
        expect(container.querySelector('span')).toBeNull()
        expect(screen.getByText('Room 214')).toBeInTheDocument()
    })
})
