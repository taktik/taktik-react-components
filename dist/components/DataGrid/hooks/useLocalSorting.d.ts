import { ColumnDefinition, RowDefinition } from '../types';
import { SortColumn } from 'react-data-grid';
export type Comparator<R = RowDefinition> = (a: R, b: R) => number;
export declare const useLocalSorting: <R extends RowDefinition = {
    id: string;
}>({ columns, rows, defaultSortColumns }: {
    columns: ColumnDefinition<R>[];
    rows: R[];
    defaultSortColumns?: SortColumn[];
}) => {
    sortedRows: R[];
    sortColumns: SortColumn[];
    setSortedColumns: (sort: SortColumn[]) => void;
};
