import { DataGridProps as DataGridPropsFromLib, SortColumn } from 'react-data-grid';
import { DataGridTheme } from './dataGridTheme';
import { ColumnDefinition, RowDefinition } from './types';
import 'react-data-grid/lib/styles.css';
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
};
export declare const DataGrid: <R extends RowDefinition = {
    id: string;
}>({ theme, loading, rows, columns, sortColumns, onSortColumnsChange, defaultSortColumns, selectedRows, onSelectedRowsChange, noDataMessage, ...rest }: DataGridProps<R>) => import("react/jsx-runtime").JSX.Element;
