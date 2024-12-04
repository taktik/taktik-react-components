import React, { ReactNode } from 'react'

export type Filters = Record<string, unknown>

export const FilterContext = React.createContext<{
    filters: Filters
    setFilters: (filters: Filters) => void
}>({
    filters: {},
    setFilters: () => {}
})

/**
 *
 * @param children
 * @param filtersProp
 * @param setFiltersProp, if provided, remote filtering
 * @constructor
 */
export const FilterProvider = ({
    children,
    filters: filtersProp,
    setFilters: setFiltersProp
}: {
    children: ReactNode
    filters?: Filters
    setFilters?: (filters: Filters) => void
}) => {
    const [filters, setFilters] = React.useState<Filters>({})

    return (
        <FilterContext.Provider
            value={{
                filters: setFiltersProp ? (filtersProp ?? {}) : filters,
                setFilters: setFiltersProp ?? setFilters
            }}>
            {children}
        </FilterContext.Provider>
    )
}
