import { render, type RenderOptions, type RenderResult } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { TableProvider } from '../TableProvider'
import { defaultTableTheme, type TableTheme } from '../theme/tableTheme'
import type { TableSlots } from '../slots'

export interface RenderWithTableOptions extends Omit<RenderOptions, 'wrapper'> {
    /** Defaults to the library's own light palette. */
    theme?: TableTheme
    /** Any subset of the controls; the MUI-based default fills the rest. */
    slots?: Partial<TableSlots>
    /** The window event after which a table drops its measured widths. */
    remeasureEvent?: string
}

/**
 * The harness every rendering test mounts through: the theme a table reads its tokens off, and the
 * provider that hands it its words and its controls. Strings stay at their English defaults, since a
 * test reads what a component says.
 */
export const renderWithTable = (
    ui: ReactElement,
    { theme = defaultTableTheme, slots, remeasureEvent, ...options }: RenderWithTableOptions = {}
): RenderResult => {
    const Wrapper = ({ children }: { children: ReactNode }) => (
        <ThemeProvider theme={theme}>
            <TableProvider slots={slots} remeasureEvent={remeasureEvent}>
                {children}
            </TableProvider>
        </ThemeProvider>
    )
    return render(ui, { wrapper: Wrapper, ...options })
}
