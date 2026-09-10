import { render, type RenderOptions, type RenderResult } from '@testing-library/react'
import { ReactElement, ReactNode, RefObject } from 'react'
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
    /** Takes a filter bar's search field into the host's keyboard shortcut, as an application does. */
    registerSearchField?: (field: RefObject<HTMLInputElement | null>) => () => void
}

/**
 * The harness every rendering test mounts through: the theme a table reads its tokens off, and the
 * provider that hands it its words and its controls. Strings stay at their English defaults, since a
 * test reads what a component says.
 */
export const renderWithTable = (
    ui: ReactElement,
    {
        theme = defaultTableTheme,
        slots,
        remeasureEvent,
        registerSearchField,
        ...options
    }: RenderWithTableOptions = {}
): RenderResult => {
    const Wrapper = ({ children }: { children: ReactNode }): ReactNode => (
        <ThemeProvider theme={theme}>
            <TableProvider
                slots={slots}
                remeasureEvent={remeasureEvent}
                registerSearchField={registerSearchField}>
                {children}
            </TableProvider>
        </ThemeProvider>
    )
    return render(ui, { wrapper: Wrapper, ...options })
}
