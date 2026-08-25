import React from 'react';
import { DataGridProps as DataGridPropsFromLib, SortColumn } from 'react-data-grid';
import { DataGridTheme } from './dataGridTheme';
import { ColumnDefinition, RowDefinition } from './types';
import 'react-data-grid/lib/styles.css';
import { Filters } from './FilterProvider';
import { Props as PaginationProps } from './Pagination';
import { PaginationControl } from './hooks/usePagination';
import { DataGridExpandable } from './Expandable';
export * from 'react-data-grid';
export { withDetailRows, withDetailRendering, isDetailRow, detailRowClass, detailAwareRowHeight, clickBelongsToRow, clickExpandsRow, ExpanderToggle, SELECTION_COLUMN_KEY, EXPANDER_COLUMN_KEY } from './Expandable';
export type { DataGridExpandable } from './Expandable';
/**
 * What the row answers to a mouse, for the whole row rather than one cell — a click opening the
 * record it stands for. The grid decides WHERE a gesture counts, not the consumer (see
 * `clickBelongsToRow`): a checkbox, an expander chevron, a link or a button inside a cell keeps
 * answering for itself, and a detail row is never a handle.
 */
export interface DataGridRowGestures<Row extends RowDefinition> {
    /**
     * A single click on the row. On an `expandable` grid, expanding the row is what a click does
     * unless this replaces it — a consumer that sets it owns the gesture, and the chevron stays as
     * the way to open a detail.
     */
    onClick?: (row: Row) => void;
    /**
     * Columns whose cells belong to themselves rather than to the row, on top of the selection and
     * expander cells the grid already knows. A row-actions column is the case: its kebab does not
     * fill the cell, so a click in the padding beside it would otherwise act on the row.
     */
    excludedColumns?: string[];
}
export type DataGridProps<Row extends RowDefinition> = Omit<DataGridPropsFromLib<Row>, 'columns' | 'rows' | 'selectedRows' | 'onSelectedRowsChange' | 'onColumnResize'> & {
    /**
     * A column the user dragged wider or narrower, by KEY and in pixels.
     *
     * react-data-grid reports a resize by the INDEX of the column in its own final array, which is
     * not something a consumer can map back to a column: the grid injects the selection (or
     * expander) column, the visibility feature has already dropped the hidden ones, and
     * react-data-grid re-orders what is left before numbering it. The translation therefore belongs
     * here, where that final array is known.
     *
     * ⚠ It fires on every step of a drag, not once at the end — react-data-grid has no settle
     * signal. A consumer that persists the width debounces it.
     */
    onColumnResize?: (columnKey: string, width: number) => void;
    selectable?: boolean;
    /**
     * Accessible name of the header's select-all checkbox — override it to match the consumer's
     * language, or to say what is being selected ("Select all devices").
     */
    selectAllLabel?: string;
    defaultSortColumns?: SortColumn[];
    /**
     * Whether the GRID orders the rows — a different question from where the sort VALUE lives, and
     * the grid used to answer both with one prop.
     *
     * Handing over `onSortColumnsChange` means the consumer holds the value, and until this existed
     * it also meant the grid stopped ordering the rows: a consumer keeping its sort somewhere it
     * survives a remount (a URL, a store) got a header that moved and rows that did not. Set it
     * `true` alongside `sortColumns`/`onSortColumnsChange` and the grid still sorts the rows it
     * holds, exactly as it does when it owns the value — the sorting counterpart of
     * `pagination.control`, which lets a consumer own the page without giving up the slicing.
     *
     * Omitted, it is inferred as it always was: the grid sorts unless the consumer took the value,
     * which is the right answer for a grid the SERVER orders and pages.
     */
    sortRowsLocally?: boolean;
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
        /**
         * What the table holds, at the footer's LEFT end ("58 devices") — the counterpart of the
         * pager's own "1-25 of 58". It is called with the count the pager is counting, so the two
         * cannot disagree; the library has no i18n, so the caller words it.
         */
        totalLabel?: PaginationProps['totalLabel'];
        /**
         * Controls the LOCAL pager, in the ordinary React shape — pass a value and a callback and
         * the consumer owns that piece of state, pass neither and the grid keeps it as it always
         * has. It is what lets a locally-paged grid put its page somewhere the grid cannot see (a
         * URL, a store) without giving up the slicing it does for you; `remotePagination` remains
         * the separate answer for a grid the SERVER pages.
         */
        control?: PaginationControl;
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
         * Already translated by the consumer — the library has no i18n. Passing it adds a final
         * "reset column layout" item to the chooser's menu; omitting it leaves the menu as it was.
         */
        resetLabel?: string;
        /**
         * Runs when the USER hides or shows a column, never when a grid reads the stored set on
         * mount — for a page holding several tables over one schema, which want one answer between
         * them. Feeding the reported set back as `hiddenByDefault` re-reads it in every sibling.
         */
        onHiddenColumnsChange?: (hiddenColumns: string[]) => void;
        /**
         * Runs when the user picks the reset item. "Reset column layout" is ONE way back for every
         * stored layout, so a consumer keeping a second one of its own (the widths its columns were
         * dragged to) clears it from here rather than growing a second menu item beside this one.
         */
        onReset?: () => void;
    };
    /**
     * Master-detail rows: an open row is followed by one of its own, spanning the grid's width.
     * Expansion state belongs to the consumer, so it survives a re-render of the grid and can be
     * driven from outside it (a url, a "expand all").
     */
    expandable?: DataGridExpandable<Row>;
    /** What the whole row answers to a click. */
    rowGestures?: DataGridRowGestures<Row>;
};
export declare const DataGrid: <R extends RowDefinition = {
    id: string;
}>({ filters, setFilters, columns, visibilityColumnFeature: { enabled: visibilityFeatureEnabled, visibilityFeatureDisabledFor, hiddenByDefault, localStorageKey, onHiddenColumnsChange, onReset, resetLabel }, ...rest }: DataGridProps<R>) => React.JSX.Element;
