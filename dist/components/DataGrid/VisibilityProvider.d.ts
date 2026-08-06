import React, { ReactNode } from 'react';
import { ColumnDefinition } from './types';
export declare const VisibilityContext: React.Context<{
    columns: ColumnDefinition[];
    hiddenColumn: string[];
    setHiddenColumn: (hiddenColumns: string[]) => void;
    enabled?: boolean;
    gridKey?: string;
}>;
export declare const VisibilityProvider: ({ columns, children, visibilityFeatureDisabledFor, hiddenByDefault, enabled, localStorageKey, onHiddenColumnsChange }: {
    children: ReactNode;
    columns: ColumnDefinition[];
    visibilityFeatureDisabledFor?: string[];
    enabled?: boolean;
    hiddenByDefault?: string[];
    localStorageKey?: string;
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void;
}) => React.JSX.Element;
