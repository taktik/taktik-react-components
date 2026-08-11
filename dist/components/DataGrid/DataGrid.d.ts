import React from 'react';
import { DataGridProps as DataGridPropsFromLib, SortColumn } from 'react-data-grid';
import { DataGridTheme } from './dataGridTheme';
import { ColumnDefinition, RowDefinition } from './types';
import 'react-data-grid/lib/styles.css';
import { Filters } from './FilterProvider';
import { Props as PaginationProps } from './Pagination';
import { DataGridExpandable } from './Expandable';
export * from 'react-data-grid';
export { withDetailRows, withDetailRendering, isDetailRow, detailRowClass, detailAwareRowHeight, clickExpandsRow, ExpanderToggle, SELECTION_COLUMN_KEY, EXPANDER_COLUMN_KEY } from './Expandable';
export type { DataGridExpandable } from './Expandable';
export type DataGridProps<Row extends RowDefinition> = Omit<DataGridPropsFromLib<Row>, 'columns' | 'rows' | 'selectedRows' | 'onSelectedRowsChange'> & {
    selectable?: boolean;
    defaultSortColumns?: SortColumn[];
    columns: ColumnDefinition<Row>[];
    rows: Row[];
    theme?: DataGridTheme;
    loading?: boolean;
    selectedRows?: string[];
    onSelectedRowsChange?: (rows: string[]) => void;
    /**
     * Rendered centered in the empty grid body when there are no rows (and not loading). A string
     * shows as a plain message; pass a node for a richer empty state (icon + title + hint).
     */
    noDataMessage?: React.ReactNode;
    filters?: Filters;
    setFilters?: (filters: Filters) => void;
    pagination?: {
        enabled?: boolean;
        defaultPageSize?: number;
        remotePagination?: PaginationProps;
        /** Footer wording ("Rows per page", "of"); applies to local and remote pagination alike. */
        labels?: PaginationProps['labels'];
    };
    visibilityColumnFeature?: {
        enabled?: boolean;
        visibilityFeatureDisabledFor?: string[];
        hiddenByDefault?: string[];
        localStorageKey?: string;
        /**
         * Runs when the USER hides or shows a column, never when a grid reads the stored set on
         * mount — for a page holding several tables over one schema, which want one answer between
         * them. Feeding the reported set back as `hiddenByDefault` re-reads it in every sibling.
         */
        onHiddenColumnsChange?: (hiddenColumns: string[]) => void;
    };
    /**
     * Master-detail rows: an open row is followed by one of its own, spanning the grid's width.
     * Expansion state belongs to the consumer, so it survives a re-render of the grid and can be
     * driven from outside it (a url, a "expand all").
     */
    expandable?: DataGridExpandable<Row>;
};
export declare const DataGrid: <R extends RowDefinition = {
    id: string;
}>({ filters, setFilters, columns, visibilityColumnFeature: { enabled: visibilityFeatureEnabled, visibilityFeatureDisabledFor, hiddenByDefault, localStorageKey, onHiddenColumnsChange }, ...rest }: DataGridProps<R>) => React.JSX.Element;
