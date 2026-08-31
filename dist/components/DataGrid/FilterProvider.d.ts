import React, { ReactNode } from 'react';
export type Filters = Record<string, unknown>;
export declare const FilterContext: React.Context<{
    filters: Filters;
    setFilters: (filters: Filters) => void;
}>;
/**
 * Holds the header filters. Uncontrolled by default; passing `setFilters` hands ownership to the
 * consumer, and `filters` becomes the only source the grid reads — which is how a remotely filtered
 * grid keeps its filter state next to the query that uses it.
 */
export declare const FilterProvider: ({ children, filters: filtersProp, setFilters: setFiltersProp }: {
    children: ReactNode;
    filters?: Filters;
    setFilters?: (filters: Filters) => void;
}) => React.JSX.Element;
