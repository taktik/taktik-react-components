/**
 * Which columns the grid pins to an edge, and how. Both edges are `position: sticky` on the
 * column's own cells (styled in `Container.tsx`) rather than react-data-grid's `frozen`:
 *
 * - the RIGHT edge because rdg's `frozen` only pins leftward — it SORTS frozen columns to the
 *   front, so a frozen trailing column ends up leading;
 * - the LEFT edge because rdg yields every start-frozen column TWICE while column virtualization
 *   is off, and a `frozenRight` column is what turns virtualization off — so every grid here runs
 *   in the mode that duplicates. Two leading cells means two select-all checkboxes over one column.
 *
 * Both go away together the day the trailing column can be rdg's native `frozen: 'end'`, which
 * lets column virtualization back on.
 */

/** Cells of a `frozenRight` column — pinned to the right edge. */
export const FROZEN_RIGHT_CLASS = 'rdg-cell-frozen-right'

/** Cells of a `frozenLeft` column — pinned to the left edge. */
export const FROZEN_LEFT_CLASS = 'rdg-cell-frozen-left'

/** What the grid's own leading column (the selection checkbox, the expander toggle) declares. */
export const leadingColumnPinning = {
    frozen: false,
    frozenLeft: true,
    cellClass: FROZEN_LEFT_CLASS,
    headerCellClass: FROZEN_LEFT_CLASS
} as const
