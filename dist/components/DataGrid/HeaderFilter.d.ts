import { RenderHeaderCellProps } from 'react-data-grid';
import { ColumnDefinition, RowDefinition } from './types';
export declare const getHeaderFilter: <R extends RowDefinition = {
    id: string;
}>(col: ColumnDefinition<R>) => (props: RenderHeaderCellProps<R>) => import("react/jsx-runtime").JSX.Element;
