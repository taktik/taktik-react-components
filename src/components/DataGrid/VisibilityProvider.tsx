import React, { ReactNode, useCallback, useEffect, useMemo } from 'react'
import { ColumnDefinition } from './types'

type ColumnVisibility = {
    label: string
    visible: boolean
}
export const VisibilityContext = React.createContext<{
    columns: ColumnDefinition[]
    hiddenColumn: string[]
    setHiddenColumn: (hiddenColumns: string[]) => void
    enabled?: boolean
    gridKey?: string
    /**
     * Where the column chooser's menu is anchored — `null` while it is closed.
     *
     * ⚠ It lives HERE, above the grid, and not in the chooser itself. Toggling a column changes the
     * column set, which remounts react-data-grid — and the chooser's trigger is rendered inside a
     * header cell, so anything kept in it dies on every toggle. It is a POSITION and not the
     * trigger element for the same reason: the element is replaced by the remount, and a menu
     * re-anchored to the fresh node visibly closed and reopened on each toggle. The menu itself
     * (`VisibilityMenu`) renders outside the grid and holds still on this point.
     */
    chooserAnchor: { top: number; left: number } | null
    setChooserAnchor: (anchor: { top: number; left: number } | null) => void
    /** Back to the columns the page opens with — the stored set AND the live one. */
    resetHiddenColumns: () => void
    /** Already translated by the consumer; the library has no i18n. Absent = no reset item. */
    resetLabel?: string
    /**
     * The order the reader arranged the chooser's rows into, top to bottom — which is the table's
     * columns left to right. `undefined` when the consumer keeps no order, and then the chooser
     * offers no reorder gesture at all: the library does not store this one, it reports it.
     */
    reorderColumns?: (columnKeys: string[]) => void
    /** Already translated; how a moved column's new place is said out loud. See `VisibilityMenu`. */
    reorderAnnouncement?: (column: string, position: number, total: number) => string
}>({
    columns: [],
    hiddenColumn: [],
    setHiddenColumn: () => {},
    enabled: false,
    chooserAnchor: null,
    setChooserAnchor: () => {},
    resetHiddenColumns: () => {}
})

const LOCAL_STORAGE_HIDDEN_COLUMN_KEY = 'data-grid-hidden-column-visibility'

export const VisibilityProvider = ({
    columns,
    children,
    visibilityFeatureDisabledFor,
    hiddenByDefault,
    enabled,
    localStorageKey = LOCAL_STORAGE_HIDDEN_COLUMN_KEY,
    onHiddenColumnsChange,
    onReset,
    onColumnOrderChange,
    reorderAnnouncement,
    resetLabel
}: {
    children: ReactNode
    columns: ColumnDefinition[]
    visibilityFeatureDisabledFor?: string[]
    enabled?: boolean
    /** Read once per storage key, and compared by value — an inline array is safe to pass. */
    hiddenByDefault?: string[]
    localStorageKey?: string
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void
    /** A second stored layout of the consumer's own, cleared by the same one reset item. */
    onReset?: () => void
    /**
     * Runs when the reader arranges the chooser's rows — top to bottom is left to right. The
     * library does not store this one: the consumer applies the reported order to the columns it
     * hands back, which is what closes the loop and what makes the menu show the arrangement.
     * Passing it is what puts the reorder gesture in the menu.
     */
    onColumnOrderChange?: (columnKeys: string[]) => void
    /** Already translated; how a moved column's new place is said out loud. */
    reorderAnnouncement?: (column: string, position: number, total: number) => string
    /** Already translated; passing it is what puts the reset item in the chooser's menu. */
    resetLabel?: string
}) => {
    const [gridKey, setGridKey] = React.useState(0)
    const [chooserAnchor, setChooserAnchor] = React.useState<{ top: number; left: number } | null>(
        null
    )
    const [hiddenColumn, setHiddenColumn] = React.useState<string[]>([])
    /**
     * `localStorageKey` is a dependency on purpose: a provider instance can be RETARGETED to another
     * key while it lives — two route tabs rendered by one component instance each bring their own
     * key — and a provider that only read its first key showed tab A's hidden set on tab B and
     * wrote B's choices under A's key.
     */
    const setHiddenColumnAndPersist = useCallback(
        (columns: string[]) => {
            localStorage.setItem(localStorageKey, JSON.stringify(columns))
            setGridKey((prev) => prev + 1)
            setHiddenColumn(columns)
        },
        [localStorageKey]
    )

    /**
     * The defaults are depended on by VALUE, not by array identity. Reading the stored set bumps
     * `gridKey`, which re-renders — and a consumer passing an inline array (or one recomputed from
     * what `onHiddenColumnsChange` just reported, which is the pattern we recommend) hands over a
     * new identity on every render. On identity that pair is a remount loop with no end to it.
     */
    const hiddenByDefaultKey = JSON.stringify(hiddenByDefault ?? [])
    const defaultHiddenColumns = useMemo(
        () => JSON.parse(hiddenByDefaultKey) as string[],
        [hiddenByDefaultKey]
    )

    useEffect(() => {
        const storedHiddenColumns = localStorage.getItem(localStorageKey)
        if (storedHiddenColumns) {
            const parsed = JSON.parse(storedHiddenColumns)
            setHiddenColumnAndPersist(Array.isArray(parsed) ? parsed : []) // clean if not good format
        } else {
            // first time
            setHiddenColumnAndPersist(defaultHiddenColumns)
        }
    }, [localStorageKey, defaultHiddenColumns, setHiddenColumnAndPersist])

    /**
     * What the CHOOSER calls — the stored set, plus a word to whoever is listening.
     *
     * The notification is deliberately not on `setHiddenColumnAndPersist`: that one also runs when a
     * grid reads the stored set on mount, and a listener that fed the answer back as `hiddenByDefault`
     * would re-trigger the read for as long as it kept doing so.
     */
    const chooseHiddenColumns = useCallback(
        (columns: string[]) => {
            setHiddenColumnAndPersist(columns)
            onHiddenColumnsChange?.(columns)
        },
        [setHiddenColumnAndPersist, onHiddenColumnsChange]
    )
    /**
     * Back to `hiddenByDefault`, LIVE.
     *
     * It goes through the same setter the chooser uses rather than removing the storage key: the
     * provider reads that key once, in an effect whose deps are stable after mount, so a bare
     * `localStorage.removeItem` left the in-memory set — and therefore the grid — exactly as it was
     * until a full reload, and the next visit to the chooser wrote the unchanged set straight back.
     *
     * It is also where a consumer's OWN stored layout goes back (`onReset`): the reset bumps
     * `gridKey` unconditionally, so the grid remounts and drops the column widths react-data-grid
     * keeps in its own state — the consumer clearing what it stored in the same pass is what makes
     * the two halves of "reset column layout" land together.
     */
    const resetHiddenColumns = useCallback(() => {
        chooseHiddenColumns(defaultHiddenColumns)
        onReset?.()
    }, [chooseHiddenColumns, defaultHiddenColumns, onReset])

    const filteredColumns = useMemo(
        () => columns.filter((column) => !visibilityFeatureDisabledFor?.includes(column.key)),
        [columns, visibilityFeatureDisabledFor]
    )
    return (
        <VisibilityContext.Provider
            value={{
                gridKey: `data-grid-${gridKey}`,
                chooserAnchor,
                setChooserAnchor,
                columns: filteredColumns,
                hiddenColumn,
                setHiddenColumn: chooseHiddenColumns,
                resetHiddenColumns,
                resetLabel,
                reorderColumns: onColumnOrderChange,
                reorderAnnouncement,
                enabled
            }}>
            {children}
        </VisibilityContext.Provider>
    )
}
