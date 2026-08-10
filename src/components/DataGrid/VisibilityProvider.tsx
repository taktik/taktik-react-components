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
     * Whether the column chooser's menu is open.
     *
     * ⚠ It lives HERE, above the grid, and not in the chooser itself. Toggling a column changes the
     * column set, which remounts react-data-grid — and the chooser is rendered inside a header cell,
     * so it went with it and the menu shut after every single toggle. Held above the remount, the
     * menu survives and several columns can be toggled in one visit.
     */
    chooserOpen: boolean
    setChooserOpen: (open: boolean) => void
}>({
    columns: [],
    hiddenColumn: [],
    setHiddenColumn: () => {},
    enabled: false,
    chooserOpen: false,
    setChooserOpen: () => {}
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
    hiddenByDefault?: string[]
    localStorageKey?: string
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void
}) => {
    const [gridKey, setGridKey] = React.useState(0)
    const [chooserOpen, setChooserOpen] = React.useState(false)
    const [hiddenColumn, setHiddenColumn] = React.useState<string[]>([])
    useEffect(() => {
        const storedHiddenColumns = localStorage.getItem(localStorageKey)
        if (storedHiddenColumns) {
            const parsed = JSON.parse(storedHiddenColumns)
            setHiddenColumnAndPersist(Array.isArray(parsed) ? parsed : []) // clean if not good format
        } else {
            // first time
            setHiddenColumnAndPersist(hiddenByDefault || [])
        }
    }, [hiddenByDefault])

    const setHiddenColumnAndPersist = useCallback((columns: string[]) => {
        localStorage.setItem(localStorageKey, JSON.stringify(columns))
        setGridKey((prev) => prev + 1)
        setHiddenColumn(columns)
    }, [])

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
                chooserOpen,
                setChooserOpen,
                columns: filteredColumns,
                hiddenColumn,
                setHiddenColumn: chooseHiddenColumns,
                enabled
            }}>
            {children}
        </VisibilityContext.Provider>
    )
}
