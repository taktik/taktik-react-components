import { ColumnDefinition, RowDefinition } from '../types';
import { SortColumn } from 'react-data-grid';
export type Comparator<R = RowDefinition> = (a: R, b: R) => number;
export declare const useLocalSorting: <R extends RowDefinition = {
    id: string;
}>(columns: ColumnDefinition<R>[], rows: R[], defaultSortColumns?: SortColumn[]) => {
    sortedRows: R[];
    sortColumns: SortColumn[];
    setSortedColumns: import("react").Dispatch<import("react").SetStateAction<SortColumn[]>>;
};
