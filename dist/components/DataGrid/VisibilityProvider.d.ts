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
    /** Back to the columns the page opens with — the stored set AND the live one. */
    resetHiddenColumns: () => void;
    /** Already translated by the consumer; the library has no i18n. Absent = no reset item. */
    resetLabel?: string;
    /**
     * The order the reader arranged the chooser's rows into, top to bottom — which is the table's
     * columns left to right. `undefined` when the consumer keeps no order, and then the chooser
     * offers no reorder gesture at all: the library does not store this one, it reports it.
     */
    reorderColumns?: (columnKeys: string[]) => void;
    /** Already translated; how a moved column's new place is said out loud. See `VisibilityMenu`. */
    reorderAnnouncement?: (column: string, position: number, total: number) => string;
}>;
export declare const VisibilityProvider: ({ columns, children, visibilityFeatureDisabledFor, hiddenByDefault, enabled, localStorageKey, onHiddenColumnsChange, onReset, onColumnOrderChange, reorderAnnouncement, resetLabel }: {
    children: ReactNode;
    columns: ColumnDefinition[];
    visibilityFeatureDisabledFor?: string[];
    enabled?: boolean;
    /** Read once per storage key, and compared by value — an inline array is safe to pass. */
    hiddenByDefault?: string[];
    localStorageKey?: string;
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void;
    /** A second stored layout of the consumer's own, cleared by the same one reset item. */
    onReset?: () => void;
    /**
     * Runs when the reader arranges the chooser's rows — top to bottom is left to right. The
     * library does not store this one: the consumer applies the reported order to the columns it
     * hands back, which is what closes the loop and what makes the menu show the arrangement.
     * Passing it is what puts the reorder gesture in the menu.
     */
    onColumnOrderChange?: (columnKeys: string[]) => void;
    /** Already translated; how a moved column's new place is said out loud. */
    reorderAnnouncement?: (column: string, position: number, total: number) => string;
    /** Already translated; passing it is what puts the reset item in the chooser's menu. */
    resetLabel?: string;
}) => React.JSX.Element;
