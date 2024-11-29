import { ColumnDefinition, RowDefinition } from '../types';
export declare const useComputeFinalColumns: <R extends RowDefinition = {
    id: string;
}>({ columns, selectionEnabled }: {
    columns: ColumnDefinition<R>[];
    selectionEnabled?: boolean;
}) => ColumnDefinition<R>[];
