import { keyedLayoutStore, parseColumnKeys } from './keyedLayoutStore'
import { columnOrderKey } from './layoutKeys'

/**
 * The order a table's columns were arranged into from the column chooser, by column key — top to
 * bottom in the menu, left to right in the table. A table nobody rearranged stores nothing, and the
 * order the page declared is still the right answer for it.
 *
 * ⚠ It is deliberately NOT in the URL, for the same reason the hidden columns are not: how a reader
 * likes their own table laid out is an ergonomic preference, not something a link should impose on
 * whoever opens it.
 */
export type ColumnOrder = string[]

/** Whether two orders say the same thing, so an equal one does not rebuild a grid's columns. */
export const sameColumnOrder = (a: ColumnOrder, b: ColumnOrder): boolean =>
    a.length === b.length && a.every((key, index) => key === b[index])

export const columnOrderStore = keyedLayoutStore<ColumnOrder>(columnOrderKey, parseColumnKeys, [])

/** Whatever this table stored, with anything that is not a column key dropped. */
export const readColumnOrder = columnOrderStore.read

/** Write the table's order down and tell every table sharing its key. */
export const writeColumnOrder = columnOrderStore.write

/**
 * Back to the order the page declared. The key is REMOVED rather than written empty, like the widths
 * and unlike the hidden columns: nothing stored is exactly what "no order of my own" means here,
 * where the visibility half has to store an empty array because an absent set is what lets
 * `hiddenColumnsByDefault` speak.
 */
export const clearColumnOrder = columnOrderStore.clear

export const onColumnOrderChange = columnOrderStore.subscribe
