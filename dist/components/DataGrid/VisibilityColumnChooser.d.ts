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
 *
 * Its rows are also where the table's columns are ARRANGED, when the consumer keeps an order
 * (`onColumnOrderChange`): top to bottom here is left to right in the table. The gesture is on the
 * grip alone, so the checkbox beside it goes on toggling with a plain click, and it runs on pointer
 * events with pointer capture — the same mechanism the resize handle uses, and for the same reason:
 * one surface, one finger, no arbitration with the menu's own scrolling. Alt+ArrowUp/ArrowDown on a
 * focused row is the same move without a pointer.
 *
 * ⚠ The order is the CONSUMER's, not the library's: it is reported, applied to the columns handed
 * back, and only then does the menu settle on it. `preview` is what covers that round trip — the
 * rows follow the pointer immediately and hold the arrangement until columns arrive saying the same
 * thing, which is also what keeps them still when nobody applies it.
 */
export declare const VisibilityMenu: () => React.JSX.Element;
export {};
