import React from 'react';
import { IconButtonProps } from '@mui/material/IconButton';
type Props = {
    IconComponent: (props: IconButtonProps) => React.ReactNode;
};
/**
 * The eye button in the actions column header — the TRIGGER only.
 *
 * Toggling a column changes the column set, which remounts react-data-grid, and this component is
 * rendered inside a header cell: it dies with every toggle. That is why it holds nothing — it
 * captures where it sits and opens the menu through the context, and `VisibilityMenu` (rendered by
 * `DataGrid` OUTSIDE the remounted grid, anchored to that captured point) is what stays up while
 * several columns are toggled in one visit.
 */
export declare const VisibilityColumnChooser: ({ IconComponent }: Props) => React.JSX.Element;
/**
 * The column-visibility menu itself, rendered once per grid by `DataGrid` — never inside
 * react-data-grid, whose remount-per-column-set would close it (or, re-anchored per mount, visibly
 * close and reopen it) on every toggle. Anchored to the point the trigger captured, so it holds
 * still while the grid underneath it is rebuilt.
 */
export declare const VisibilityMenu: () => React.JSX.Element;
export {};
