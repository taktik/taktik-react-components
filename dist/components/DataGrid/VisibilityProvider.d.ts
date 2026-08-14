import React, { ReactNode } from 'react';
import { ColumnDefinition } from './types';
export declare const VisibilityContext: React.Context<{
    columns: ColumnDefinition[];
    hiddenColumn: string[];
    setHiddenColumn: (hiddenColumns: string[]) => void;
    enabled?: boolean;
    gridKey?: string;
    /**
     * Where the column chooser's menu is anchored — `null` while it is closed.
     *
     * ⚠ It lives HERE, above the grid, and not in the chooser itself. Toggling a column changes the
     * column set, which remounts react-data-grid — and the chooser's trigger is rendered inside a
     * header cell, so anything kept in it dies on every toggle. It is a POSITION and not the
     * trigger element for the same reason: the element is replaced by the remount, and a menu
     * re-anchored to the fresh node visibly closed and reopened on each toggle. The menu itself
     * (`VisibilityMenu`) renders outside the grid and holds still on this point.
     */
    chooserAnchor: {
        top: number;
        left: number;
    } | null;
    setChooserAnchor: (anchor: {
        top: number;
        left: number;
    } | null) => void;
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
