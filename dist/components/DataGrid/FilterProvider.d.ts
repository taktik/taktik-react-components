import React, { ReactNode } from 'react';
export type Filters = Record<string, unknown>;
export declare const FilterContext: React.Context<{
    filters: Filters;
    setFilters: (filters: Filters) => void;
}>;
/**
 *
 * @param children
 * @param filtersProp
 * @param setFiltersProp, if provided, remote filtering
 * @constructor
 */
export declare const FilterProvider: ({ children, filters: filtersProp, setFilters: setFiltersProp }: {
    children: ReactNode;
    filters?: Filters;
    setFilters?: (filters: Filters) => void;
}) => import("react/jsx-runtime").JSX.Element;
