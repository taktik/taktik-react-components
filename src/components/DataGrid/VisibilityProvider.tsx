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
}>({
    columns: [],
    hiddenColumn: [],
    setHiddenColumn: () => {},
    enabled: false
})

const LOCAL_STORAGE_HIDDEN_COLUMN_KEY = 'data-grid-hidden-column-visibility'

export const VisibilityProvider = ({
    columns,
    children,
    visibilityFeatureDisabledFor,
    hiddenByDefault,
    enabled,
    localStorageKey = LOCAL_STORAGE_HIDDEN_COLUMN_KEY
}: {
    children: ReactNode
    columns: ColumnDefinition[]
    visibilityFeatureDisabledFor?: string[]
    enabled?: boolean
    hiddenByDefault?: string[]
    localStorageKey?: string
}) => {
    const [gridKey, setGridKey] = React.useState(0)
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
    const filteredColumns = useMemo(
        () => columns.filter((column) => !visibilityFeatureDisabledFor?.includes(column.key)),
        [columns, visibilityFeatureDisabledFor]
    )
    return (
        <VisibilityContext.Provider
            value={{
                gridKey: `data-grid-${gridKey}`,
                columns: filteredColumns,
                hiddenColumn,
                setHiddenColumn: setHiddenColumnAndPersist,
                enabled
            }}>
            {children}
        </VisibilityContext.Provider>
    )
}
