import { ColumnDefinition, RowDefinition } from '../types';
import { ReactNode } from 'react';
import { RenderCheckboxProps } from 'react-data-grid';
import { DataGridExpandable } from '../Expandable';
/** Cells of a `frozenRight` column — pinned to the right edge by Container.tsx's styles. */
export declare const FROZEN_RIGHT_CLASS = "rdg-cell-frozen-right";
export declare const useComputeFinalColumns: <R extends RowDefinition = {
    id: string;
}>({ columns, expandable, selectionEnabled, selectableRows, selectedRows, onSelectedRowsChange, renderCheckbox, selectAllLabel }: {
    columns: ColumnDefinition<R>[];
    /** When set, the row's expand toggle rides in the selection cell, ahead of the checkbox. */
    expandable?: DataGridExpandable<R>;
    selectionEnabled?: boolean;
    /** Every row the header checkbox acts on — all the grid holds, not just the rendered page. */
    selectableRows?: R[];
    selectedRows?: string[];
    onSelectedRowsChange?: (rows: string[]) => void;
    /** The same renderer react-data-grid uses for the row checkboxes, so the header matches them. */
    renderCheckbox?: (props: RenderCheckboxProps) => ReactNode;
    /** Accessible name of the select-all checkbox. */
    selectAllLabel?: string;
}) => ColumnDefinition<R>[];
