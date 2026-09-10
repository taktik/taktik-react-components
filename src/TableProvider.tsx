import { createContext, ReactNode, useContext, useMemo } from 'react'
import type { Locale } from 'date-fns'
import { LabelsProvider, type LabelOverrides, type Translate } from './labels'
import { SlotsProvider, type TableSlots } from './slots'

/**
 * What a table needs from its host beyond a theme, in ONE provider a consumer wires once: the words
 * it shows, the controls it renders and the event after which it re-measures.
 *
 * `LabelsProvider` and `SlotsProvider` stay exported for a consumer that wants only one of them —
 * a test harness, say — but a real application mounts this.
 */

export interface TableRuntime {
    /**
     * The window event name after which every table drops its MEASURED column widths and asks for
     * fresh ones.
     *
     * A grid re-measures a flexible column only while every column is inside its viewport, so a
     * table wide enough to have scrolled one out keeps the widths it was measured at and stops
     * short of its own container. Whatever settles the chrome around a table — a pane seam, a
     * collapsing column, the window — announces it, and the tables listen. Unset means no table
     * ever re-measures on its own, which is right for a host with no resizable chrome.
     */
    remeasureEvent?: string
}

const TableRuntimeContext = createContext<TableRuntime>({})

export interface TableProviderProps extends TableRuntime {
    /** Any subset of the library's fixed strings; the English default fills the rest. */
    labels?: LabelOverrides
    /** The consumer's own `t`, for the keys the library cannot type in advance. */
    translate?: Translate
    /** "3 days ago", in the reader's language. */
    formatRelativeTime?: (value: string | number | Date) => string
    /** The date-fns locale a date field renders its calendar with. */
    dateLocale?: Locale
    /** Any subset of the controls; the MUI-based default fills the rest. */
    slots?: Partial<TableSlots>
    children: ReactNode
}

export const TableProvider = ({
    labels,
    translate,
    formatRelativeTime,
    dateLocale,
    slots,
    remeasureEvent,
    children
}: TableProviderProps): ReactNode => {
    const runtime = useMemo<TableRuntime>(() => ({ remeasureEvent }), [remeasureEvent])
    return (
        <LabelsProvider
            labels={labels}
            translate={translate}
            formatRelativeTime={formatRelativeTime}
            dateLocale={dateLocale}>
            <SlotsProvider slots={slots}>
                <TableRuntimeContext.Provider value={runtime}>
                    {children}
                </TableRuntimeContext.Provider>
            </SlotsProvider>
        </LabelsProvider>
    )
}

export const useTableRuntime = (): TableRuntime => useContext(TableRuntimeContext)
