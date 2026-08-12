import React from 'react';
import { DataGridProps as DataGridPropsFromLib, SortColumn } from 'react-data-grid';
import { DataGridTheme } from './dataGridTheme';
import { ColumnDefinition, RowDefinition } from './types';
import 'react-data-grid/lib/styles.css';
import { Filters } from './FilterProvider';
import { Props as PaginationProps } from './Pagination';
import { DataGridExpandable } from './Expandable';
export * from 'react-data-grid';
export { withDetailRows, withDetailRendering, isDetailRow, detailRowClass, detailAwareRowHeight, clickBelongsToRow, clickExpandsRow, ExpanderToggle, SELECTION_COLUMN_KEY, EXPANDER_COLUMN_KEY } from './Expandable';
export type { DataGridExpandable } from './Expandable';
/**
 * How long a row-wide click waits before it runs, on a grid that also answers a double-click.
 *
 * A double-click delivers two plain clicks before it, and nothing in the event tells the first one
 * apart from a click that will stay alone — only time does. A grid with no double-click action has
 * nothing to arbitrate and runs the click immediately.
 */
export declare const ROW_CLICK_DELAY_MS = 250;
/**
 * What the row answers to a mouse, for the whole row rather than one cell — a click opening the
 * record it stands for, a double-click picking it. The grid decides WHERE a gesture counts, not the
 * consumer (see `clickBelongsToRow`): a checkbox, an expander chevron, a link or a button inside a
 * cell keeps answering for itself, and a detail row is never a handle.
 */
export interface DataGridRowGestures<Row extends RowDefinition> {
    /**
     * A single click on the row. On an `expandable` grid, expanding the row is what a click does
     * unless this replaces it — a consumer that sets it owns the gesture, and the chevron stays as
     * the way to open a detail.
     */
    onClick?: (row: Row) => void;
    /**
     * A double-click on the row. Its presence is what makes a single click wait
     * {@link ROW_CLICK_DELAY_MS}: the pending click is dropped when the pair completes, so the two
     * gestures cannot both run on one interaction.
     */
    onDoubleClick?: (row: Row) => void;
    /**
     * Columns whose cells belong to themselves rather than to the row, on top of the selection and
     * expander cells the grid already knows. A row-actions column is the case: its kebab does not
     * fill the cell, so a click in the padding beside it would otherwise act on the row.
     */
    excludedColumns?: string[];
}
export type DataGridProps<Row extends RowDefinition> = Omit<DataGridPropsFromLib<Row>, 'columns' | 'rows' | 'selectedRows' | 'onSelectedRowsChange'> & {
    selectable?: boolean;
    /**
     * Accessible name of the header's select-all checkbox — override it to match the consumer's
     * language, or to say what is being selected ("Select all devices").
     */
    selectAllLabel?: string;
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
        /**
         * Columns hidden until the user says otherwise, read once per storage key. Compared by
         * value, so an inline array is safe — the identity of the one passed does not matter.
         */
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
    /** What the whole row answers to a click and to a double-click. */
    rowGestures?: DataGridRowGestures<Row>;
};
export declare const DataGrid: <R extends RowDefinition = {
    id: string;
}>({ filters, setFilters, columns, visibilityColumnFeature: { enabled: visibilityFeatureEnabled, visibilityFeatureDisabledFor, hiddenByDefault, localStorageKey, onHiddenColumnsChange }, ...rest }: DataGridProps<R>) => React.JSX.Element;
