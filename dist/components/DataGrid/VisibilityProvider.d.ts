import React, { ReactNode } from 'react';
import { ColumnDefinition } from './types';
export declare const VisibilityContext: React.Context<{
    columns: ColumnDefinition[];
    hiddenColumn: string[];
    setHiddenColumn: (hiddenColumns: string[]) => void;
    enabled?: boolean;
    gridKey?: string;
}>;
export declare const VisibilityProvider: ({ columns, children, visibilityFeatureDisabledFor, enabled }: {
    children: ReactNode;
    columns: ColumnDefinition[];
    visibilityFeatureDisabledFor?: string[];
    enabled?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
