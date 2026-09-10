/**
 * The one store behind a table's stored layouts.
 *
 * A table keeps three personal preferences in `localStorage`, each filed under a key derived from
 * its own `columnVisibilityKey`: which columns are hidden, how wide they were dragged, and the order
 * they were arranged into. The widths and the order are built on this store; the hidden set is the
 * visibility provider's own, read through `readStored` alone.
 *
 * ⚠ Every storage access here is guarded. `localStorage` THROWS on access in a partitioned or
 * blocked-storage context, which an embedded iframe can be, so an unguarded read would take a whole
 * grid down rather than leaving a preference unread.
 */

/** Whatever is stored under this key, or nothing — an absent value, unreadable storage, bad JSON. */
export const readStored = <T>(
    storageKey: string,
    parse: (parsed: unknown) => T | undefined
): T | undefined => {
    try {
        const raw = localStorage.getItem(storageKey)
        return raw ? parse(JSON.parse(raw)) : undefined
    } catch {
        return undefined
    }
}

/** A stored array of column keys, with anything that is not one dropped. */
export const parseColumnKeys = (parsed: unknown): string[] | undefined =>
    Array.isArray(parsed)
        ? parsed.filter((key): key is string => typeof key === 'string')
        : undefined

export interface KeyedLayoutStore<T> {
    /** Whatever this table stored, or the empty layout. */
    read: (columnVisibilityKey: string) => T
    /** Write the table's layout down and tell every table sharing its key. */
    write: (columnVisibilityKey: string, value: T) => void
    /** Back to what the page declared: the key is REMOVED rather than written empty. */
    clear: (columnVisibilityKey: string) => void
    /**
     * Every live table filed under one key, so the tables a page stacks over ONE schema (License's
     * relation groups, which deliberately share a `columnVisibilityKey`) move together. The `storage`
     * event covers other TABS only, never the document that wrote — so without this the sibling tables
     * would hold their old layout until the next reload.
     */
    subscribe: (columnVisibilityKey: string, listener: (value: T) => void) => () => void
}

export const keyedLayoutStore = <T>(
    storageKeyFor: (columnVisibilityKey: string) => string,
    parse: (parsed: unknown) => T | undefined,
    empty: T
): KeyedLayoutStore<T> => {
    const listeners = new Map<string, Set<(value: T) => void>>()

    const announce = (columnVisibilityKey: string, value: T): void =>
        listeners.get(columnVisibilityKey)?.forEach((listener) => listener(value))

    return {
        read: (columnVisibilityKey) =>
            readStored(storageKeyFor(columnVisibilityKey), parse) ?? empty,

        write: (columnVisibilityKey, value) => {
            try {
                localStorage.setItem(storageKeyFor(columnVisibilityKey), JSON.stringify(value))
            } catch {
                // a preference that cannot be stored is still the layout this session shows
            }
            announce(columnVisibilityKey, value)
        },

        clear: (columnVisibilityKey) => {
            try {
                localStorage.removeItem(storageKeyFor(columnVisibilityKey))
            } catch {
                // nothing to remove where nothing could be written
            }
            announce(columnVisibilityKey, empty)
        },

        subscribe: (columnVisibilityKey, listener) => {
            const forKey = listeners.get(columnVisibilityKey) ?? new Set()
            listeners.set(columnVisibilityKey, forKey)
            forKey.add(listener)
            return () => {
                forKey.delete(listener)
                if (!forKey.size) {
                    listeners.delete(columnVisibilityKey)
                }
            }
        }
    }
}
