import { ColumnDefinition, RowDefinition } from '../types';
export declare const useComputeFinalColumns: <R extends RowDefinition = {
    id: string;
}>(columns: ColumnDefinition<R>[]) => ColumnDefinition<R>[];
