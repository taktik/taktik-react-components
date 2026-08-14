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
}>({
    columns: [],
    hiddenColumn: [],
    setHiddenColumn: () => {},
    enabled: false,
    chooserAnchor: null,
    setChooserAnchor: () => {}
})

const LOCAL_STORAGE_HIDDEN_COLUMN_KEY = 'data-grid-hidden-column-visibility'

export const VisibilityProvider = ({
    columns,
    children,
    visibilityFeatureDisabledFor,
    hiddenByDefault,
    enabled,
    localStorageKey = LOCAL_STORAGE_HIDDEN_COLUMN_KEY,
    onHiddenColumnsChange
}: {
    children: ReactNode
    columns: ColumnDefinition[]
    visibilityFeatureDisabledFor?: string[]
    enabled?: boolean
    /** Read once per storage key, and compared by value — an inline array is safe to pass. */
    hiddenByDefault?: string[]
    localStorageKey?: string
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void
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
                enabled
            }}>
            {children}
        </VisibilityContext.Provider>
    )
}
