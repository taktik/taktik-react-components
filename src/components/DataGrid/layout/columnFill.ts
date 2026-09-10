import { ColumnDefinition, RowDefinition } from '../types'
import { flexTrack, isFlexibleWidth, trackFloor } from './columnWidths'

/**
 * A column that may become the one absorbing the table's leftover width.
 *
 * A `frozenRight` column may not: it is pinned to the right edge (a row-actions kebab, a flag), so
 * widening it would put the leftover between the last value and the edge instead of at the end of
 * the row. The checkbox column cannot appear here at all — the grid injects it, so it never reaches
 * a consumer's column array.
 */
const absorbable = <R extends RowDefinition>(column: ColumnDefinition<R>): boolean =>
    !column.frozenRight

/**
 * The columns a table hands the grid, with a filling one guaranteed: when nothing VISIBLE absorbs
 * slack, the last visible data column is promoted to `minmax(<its own width>, 1fr)`.
 *
 * Bounded tracks alone cannot fill a wide window — their sum runs out and the leftover pools to the
 * right of the frozen actions column, where sticky positioning is inert without overflow: the kebab
 * detaches from the edge while the row backgrounds, the toolbar and the pager all run past it. Every
 * table therefore declares one `fr` column, and there are two ways to lose it without the page
 * knowing: the reader HIDES that column from the chooser, or DRAGS it, which stores a pixel width
 * that is applied over the track. Both leave a table of capped columns and a blank gutter.
 *
 * The promoted column keeps its current width as the track's FLOOR, so a width the reader dragged is
 * honoured as a minimum rather than discarded, and the growth beyond it is what fills the container.
 * `minWidth` is deliberately left as it was: it is the floor a DRAG may narrow this column to (see
 * `columnResizeFloor`), and raising it to a dragged width would make that drag one-way.
 *
 * When a visible column already carries an `fr` unit the array is returned UNTOUCHED, identity
 * included — the grid rebuilds its columns, re-sorting and re-rendering every row, from the
 * identity of what it is handed.
 */
export const withFillingColumn = <R extends RowDefinition>(
    columns: ColumnDefinition<R>[],
    hiddenColumns: string[]
): ColumnDefinition<R>[] => {
    const visible = columns.filter((column) => !hiddenColumns.includes(column.key))
    if (visible.some((column) => isFlexibleWidth(column.width))) {
        return columns
    }
    const tail = visible.filter(absorbable).at(-1)
    if (!tail) {
        return columns
    }
    const floor = trackFloor(tail.width) ?? tail.minWidth ?? 0
    return columns.map((column) =>
        column === tail ? { ...column, width: flexTrack(floor) } : column
    )
}
