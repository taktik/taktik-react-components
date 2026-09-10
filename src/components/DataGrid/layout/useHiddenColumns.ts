import { useCallback, useEffect, useMemo, useState } from 'react'
import { HiddenColumns, readHiddenColumns, sameHiddenColumns } from './hiddenColumns'

export interface GridHiddenColumns {
    /** The columns this table is hiding — the provider's set, one render earlier. */
    hiddenColumns: HiddenColumns
    /** Hand this to the grid's `onHiddenColumnsChange`, ahead of the page's own handler. */
    report: (hiddenColumns: HiddenColumns) => void
}

/**
 * Which of this table's columns are hidden, known to the consumer rather than only to the grid.
 *
 * The grid filters the hidden ones internally, so a consumer would otherwise be shaping columns
 * for a set it cannot see — and one of them, the column that absorbs the table's leftover width
 * (`withFillingColumn`), can only be chosen once the visible set is known.
 *
 * It stays in step with the provider by mirroring its rules exactly: the stored set if there is one,
 * the page's defaults until then, re-read whenever either the key or those defaults change, and
 * updated live from the chooser — which reports every toggle AND the reset, since the provider's reset
 * goes through the same notification.
 */
export const useHiddenColumns = (
    columnVisibilityKey: string,
    hiddenColumnsByDefault?: HiddenColumns,
    onHiddenColumnsChange?: (hiddenColumns: HiddenColumns) => void
): GridHiddenColumns => {
    /**
     * The defaults are depended on by VALUE, like the visibility provider depends on them: a page
     * feeding back what `onHiddenColumnsChange` reported (how tables sharing one key are kept in step)
     * hands over a fresh array identity on every render, and on identity the effect below would never
     * stop re-reading.
     */
    const defaultsKey = JSON.stringify(hiddenColumnsByDefault ?? [])
    const defaults = useMemo(() => JSON.parse(defaultsKey) as HiddenColumns, [defaultsKey])

    const [hiddenColumns, setHiddenColumns] = useState<HiddenColumns>(() =>
        readHiddenColumns(columnVisibilityKey, defaults)
    )

    /**
     * A set only replaces the one held if it SAYS something different: the grid rebuilds its
     * columns from the identity of what it is handed, so an equal set arriving with a fresh identity
     * is a table redrawn for nothing.
     */
    const adopt = useCallback(
        (next: HiddenColumns): void =>
            setHiddenColumns((current) => (sameHiddenColumns(current, next) ? current : next)),
        []
    )

    /**
     * `columnVisibilityKey` is a dependency for the same reason it is one in the visibility provider: a
     * component instance can be RETARGETED to another table while it lives (the recordings page renders
     * one grid for recordings and for series).
     */
    useEffect(
        () => adopt(readHiddenColumns(columnVisibilityKey, defaults)),
        [columnVisibilityKey, defaults, adopt]
    )

    const report = useCallback(
        (next: HiddenColumns): void => {
            adopt(next)
            onHiddenColumnsChange?.(next)
        },
        [adopt, onHiddenColumnsChange]
    )

    return { hiddenColumns, report }
}
