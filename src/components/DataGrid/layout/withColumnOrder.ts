import { ColumnDefinition, RowDefinition } from '../types'
import { ColumnOrder } from './columnOrder'

/**
 * The columns a table hands the grid, arranged the way the reader arranged them in the column
 * chooser. Top to bottom in that menu is left to right here.
 *
 * A stored order OUTLIVES the columns it was made of — a column renamed, dropped or added between
 * two visits — so it is read as a preference and never as a spec:
 *
 *  - a key the table no longer has is DROPPED, silently. It named a column that is gone, and there
 *    is nothing to put in its place.
 *  - a column the order says nothing about KEEPS THE SLOT THE PAGE DECLARED IT IN, and the arranged
 *    columns fill the slots that are left, in their arranged sequence. That is what makes a NEW
 *    column appear where the page put it rather than exiled to the end of a table someone rearranged
 *    a year ago — and it is what keeps the actions column last, since the chooser never offers it
 *    and it can therefore never be in a stored order.
 *
 * When the order has nothing to say the array is returned UNTOUCHED, identity included — the grid
 * library rebuilds its columns, re-sorting and re-rendering every row, from the identity of what it
 * is handed.
 */
export const withColumnOrder = <R extends RowDefinition>(
    columns: ColumnDefinition<R>[],
    order: ColumnOrder
): ColumnDefinition<R>[] => {
    if (!order.length) {
        return columns
    }
    const byKey = new Map(columns.map((column) => [column.key, column]))
    // De-duplicated as well as filtered: a repeated key would claim two slots and leave one of the
    // table's own columns with none, which is how a tampered store could lose a column outright.
    const moved = [...new Set(order)].flatMap((key) => byKey.get(key) ?? [])
    if (moved.length < 2) {
        return columns
    }
    const moving = new Set(moved.map((column) => column.key))
    let next = 0
    const ordered = columns.map((column) =>
        moving.has(column.key) ? (moved[next++] ?? column) : column
    )
    return ordered.every((column, index) => column === columns[index]) ? columns : ordered
}
