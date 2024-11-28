import React from 'react';
import { Column, DataGridProps as DataGridPropsFromLib } from 'react-data-grid';
import { DataGridTheme } from './dataGridTheme';
export type DataGridProps<Row extends RowDefinition> = DataGridPropsFromLib<Row> & {
    theme?: DataGridTheme;
    loading?: boolean;
};
export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row>;
export type RowDefinition<Row = {}> = Row & {
    id: string;
};
export declare const DataGrid: React.MemoExoticComponent<({ theme, loading, ...rest }: DataGridProps<RowDefinition>) => import("react/jsx-runtime").JSX.Element>;
