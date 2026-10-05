import { createContext, ReactNode, RefObject, useContext, useMemo } from 'react'
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
    /**
     * Offers a filter bar's search field to whatever owns the host's keyboard shortcut for
     * searching, and hands back the way to withdraw it.
     *
     * A shortcut like "/" is the APPLICATION's, not a table's: a page may hold a filter bar, a
     * command palette and a picker dialog's own bar, and only one of them may answer a press. So
     * the host keeps the one stack of candidate fields and the tables register in it — a bar calls
     * this on mount and calls the result on unmount. Unset means the library claims no key at all,
     * which is right for a host that has no such shortcut.
     */
    registerSearchField?: (field: RefObject<HTMLInputElement | null>) => () => void
    /**
     * How long a filter bar waits after the last keystroke before reporting what was typed.
     *
     * The pause is the HOST's: the same one its own search fields use, so a reader who has learnt
     * how quickly this admin answers is not told something different by a table. Defaults to a
     * neutral 300ms.
     */
    filterDebounceMs?: number
    /**
     * Tells the host that a table is refreshing the rows it already shows, and hands back the way
     * to say it has finished.
     *
     * A host with one loading indicator of its own (a bar across the window) shows the wait there,
     * so a table calls this when its refresh starts and calls the result when it ends, and draws no
     * veil over its rows — which stay clickable meanwhile. Unset means each table veils its own rows
     * while it refreshes. A table whose FIRST answer is on its way is not refreshing: it drafts
     * placeholder rows either way. ⚠ Keep it stable: a new identity ends and restarts every report.
     */
    reportRefresh?: () => () => void
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
    registerSearchField,
    filterDebounceMs,
    reportRefresh,
    children
}: TableProviderProps): ReactNode => {
    const runtime = useMemo<TableRuntime>(
        () => ({ remeasureEvent, registerSearchField, filterDebounceMs, reportRefresh }),
        [remeasureEvent, registerSearchField, filterDebounceMs, reportRefresh]
    )
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
