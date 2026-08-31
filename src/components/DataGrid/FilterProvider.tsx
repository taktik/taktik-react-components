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
 * Holds the header filters. Uncontrolled by default; passing `setFilters` hands ownership to the
 * consumer, and `filters` becomes the only source the grid reads — which is how a remotely filtered
 * grid keeps its filter state next to the query that uses it.
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
