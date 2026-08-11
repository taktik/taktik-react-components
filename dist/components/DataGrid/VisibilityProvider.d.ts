import React, { ReactNode } from 'react';
import { ColumnDefinition } from './types';
export declare const VisibilityContext: React.Context<{
    columns: ColumnDefinition[];
    hiddenColumn: string[];
    setHiddenColumn: (hiddenColumns: string[]) => void;
    enabled?: boolean;
    gridKey?: string;
    /**
     * Whether the column chooser's menu is open.
     *
     * ⚠ It lives HERE, above the grid, and not in the chooser itself. Toggling a column changes the
     * column set, which remounts react-data-grid — and the chooser is rendered inside a header cell,
     * so it went with it and the menu shut after every single toggle. Held above the remount, the
     * menu survives and several columns can be toggled in one visit.
     */
    chooserOpen: boolean;
    setChooserOpen: (open: boolean) => void;
}>;
export declare const VisibilityProvider: ({ columns, children, visibilityFeatureDisabledFor, hiddenByDefault, enabled, localStorageKey, onHiddenColumnsChange }: {
    children: ReactNode;
    columns: ColumnDefinition[];
    visibilityFeatureDisabledFor?: string[];
    enabled?: boolean;
    /** Read once per storage key, and compared by value — an inline array is safe to pass. */
    hiddenByDefault?: string[];
    localStorageKey?: string;
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void;
}) => React.JSX.Element;
