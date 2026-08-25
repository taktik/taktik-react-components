import { ColumnDefinition, RowDefinition } from '../types';
import { SortColumn } from 'react-data-grid';
export type Comparator<R = RowDefinition> = (a: R, b: R) => number;
/**
 * The rows in the order a sort asks for, and the sort itself where the consumer does not hold it.
 *
 * **Who holds the sort VALUE and who ORDERS THE ROWS are two questions.** They used to be one: the
 * grid ordered its rows out of this hook's own state, so a consumer that took the value over — to put
 * it in a URL, a store, anywhere it survives a remount — got a header that moved and rows that did
 * not. `sortColumns` is the controlled value and `enabled` is the ordering, so a consumer may take
 * either without giving up the other.
 */
export declare const useLocalSorting: <R extends RowDefinition = {
    id: string;
}>({ columns, rows, defaultSortColumns, sortColumns: controlledSortColumns, enabled }: {
    columns: ColumnDefinition<R>[];
    rows: R[];
    defaultSortColumns?: SortColumn[];
    /**
     * The sort a CONSUMER holds. Supply it and the rows are ordered by it; leave it out and this
     * hook keeps the value itself, starting at `defaultSortColumns`.
     */
    sortColumns?: readonly SortColumn[] | null;
    /** Whether the grid orders the rows at all — off for a grid whose rows arrive already ordered. */
    enabled?: boolean;
}) => {
    sortedRows: R[];
    sortColumns: SortColumn[];
    setSortedColumns: (sort: SortColumn[]) => void;
};
