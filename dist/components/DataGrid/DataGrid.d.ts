import React from 'react';
import { DataGridProps as DataGridPropsFromLib, SortColumn } from 'react-data-grid';
import { DataGridTheme } from './dataGridTheme';
import { ColumnDefinition, RowDefinition } from './types';
export type DataGridProps<Row extends RowDefinition> = Omit<DataGridPropsFromLib<Row>, 'columns' | 'rows'> & {
    defaultSortColumns?: SortColumn[];
    columns: ColumnDefinition<Row>[];
    rows: Row[];
    theme?: DataGridTheme;
    loading?: boolean;
};
export declare const DataGrid: React.MemoExoticComponent<({ theme, loading, rows, columns, sortColumns, onSortColumnsChange, defaultSortColumns, ...rest }: DataGridProps<RowDefinition>) => import("react/jsx-runtime").JSX.Element>;
