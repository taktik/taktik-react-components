import { DataGridProps as DataGridPropsFromLib, SortColumn } from 'react-data-grid';
import { DataGridTheme } from './dataGridTheme';
import { ColumnDefinition, RowDefinition } from './types';
import 'react-data-grid/lib/styles.css';
import { Filters } from './FilterProvider';
export * from 'react-data-grid';
export type DataGridProps<Row extends RowDefinition> = Omit<DataGridPropsFromLib<Row>, 'columns' | 'rows' | 'selectedRows' | 'onSelectedRowsChange'> & {
    selectable?: boolean;
    defaultSortColumns?: SortColumn[];
    columns: ColumnDefinition<Row>[];
    rows: Row[];
    theme?: DataGridTheme;
    loading?: boolean;
    selectedRows?: string[];
    onSelectedRowsChange?: (rows: string[]) => void;
    noDataMessage?: string;
    filters?: Filters;
    setFilters?: (filters: Filters) => void;
};
export declare const DataGrid: <R extends RowDefinition = {
    id: string;
}>({ filters, setFilters, ...rest }: DataGridProps<R>) => import("react/jsx-runtime").JSX.Element;
