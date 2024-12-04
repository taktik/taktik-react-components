import { ColumnDefinition, RowDefinition } from '../types';
export declare const useLocalFiltering: <R extends RowDefinition = {
    id: string;
}>({ columns, rows, enabled }: {
    columns: ColumnDefinition<R>[];
    rows: R[];
    enabled: boolean;
}) => R[];
