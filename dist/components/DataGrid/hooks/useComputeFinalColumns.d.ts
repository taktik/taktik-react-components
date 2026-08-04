import { ColumnDefinition, RowDefinition } from '../types';
import { DataGridExpandable } from '../Expandable';
/** Cells of a `frozenRight` column — pinned to the right edge by Container.tsx's styles. */
export declare const FROZEN_RIGHT_CLASS = "rdg-cell-frozen-right";
export declare const useComputeFinalColumns: <R extends RowDefinition = {
    id: string;
}>({ columns, expandable, selectionEnabled, selectableRows, selectedRows, onSelectedRowsChange }: {
    columns: ColumnDefinition<R>[];
    /** When set, the row's expand toggle rides in the selection cell, ahead of the checkbox. */
    expandable?: DataGridExpandable<R>;
    selectionEnabled?: boolean;
    /** Every row the header checkbox acts on — all the grid holds, not just the rendered page. */
    selectableRows?: R[];
    selectedRows?: string[];
    onSelectedRowsChange?: (rows: string[]) => void;
}) => ColumnDefinition<R>[];
