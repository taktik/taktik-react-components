import { useCallback, useEffect, useState } from 'react'
import { KeyedLayoutStore } from './keyedLayoutStore'

export interface StoredLayout<T> {
    /** What this table is laid out with now. */
    value: T
    /** Take a layout in without writing it down — what the store's own notifications carry. */
    adopt: (next: T) => void
    /** What the reader just arranged: adopted AND written down. */
    report: (next: T) => void
    /** Hand this to the chooser's `onReset`: one reset item, every stored layout. */
    reset: () => void
}

/**
 * One of a table's stored layouts, read on mount, kept in step with every sibling table filed under
 * the same key, and cleared by the column chooser's "Reset column layout".
 *
 * Two rules it fixes so neither consumer re-decides them:
 *
 * A layout only replaces the one held if it SAYS something different — the grid rebuilds its
 * columns, re-rendering every row, from the identity of what it is handed, so an equal layout with a
 * fresh identity is a table redrawn for nothing (which is what the mount-time re-read and a sibling
 * table writing the layout this one already has both are).
 *
 * And `columnVisibilityKey` is a DEPENDENCY, for the same reason the visibility
 * provider makes it one: a component instance can be RETARGETED to another table while it lives (the
 * recordings page renders one grid for recordings and for series), and a hook that only read its
 * first key would lay one table out in the other's layout and write under the wrong name.
 *
 * `onAdopted` is for a consumer holding a second, derived piece of state that has to move with the
 * value — the widths hook's grid map, which keeps the grid's measurements alongside the dragged
 * widths.
 */
export const useStoredLayout = <T>(
    columnVisibilityKey: string,
    store: KeyedLayoutStore<T>,
    same: (a: T, b: T) => boolean,
    onAdopted?: (next: T) => void
): StoredLayout<T> => {
    const [value, setValue] = useState<T>(() => store.read(columnVisibilityKey))

    const adopt = useCallback(
        (next: T): void => {
            setValue((current) => (same(current, next) ? current : next))
            onAdopted?.(next)
        },
        [same, onAdopted]
    )

    useEffect(() => {
        adopt(store.read(columnVisibilityKey))
        return store.subscribe(columnVisibilityKey, adopt)
    }, [columnVisibilityKey, store, adopt])

    const report = useCallback(
        (next: T): void => {
            adopt(next)
            store.write(columnVisibilityKey, next)
        },
        [adopt, store, columnVisibilityKey]
    )

    const reset = useCallback(
        (): void => store.clear(columnVisibilityKey),
        [store, columnVisibilityKey]
    )

    return { value, adopt, report, reset }
}
