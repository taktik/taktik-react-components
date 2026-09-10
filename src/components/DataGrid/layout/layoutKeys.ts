/**
 * Where a table files its stored layouts, derived from its own `columnVisibilityKey`.
 *
 * A table keeps three personal preferences in `localStorage`: which columns are hidden (the grid
 * stores those under the `columnVisibilityKey` itself), how wide they were dragged, and the order
 * they were arranged into. The last two are derived from the first rather than named separately
 * because the three are ONE personal layout — reset together by the chooser's one reset item — so a
 * table cannot end up remembering a third of it under a name that does not match the other two. It
 * also means the uniqueness the `columnVisibilityKey` already guarantees carries over for free,
 * deliberate sharing (same-schema tables stacked over one key) included.
 *
 * ⚠ A key's VALUE is a promise to the user: it is what their stored choice is filed under, so
 * renaming one silently resets that choice for everyone who already made it.
 */
export const columnWidthsKey = (columnVisibilityKey: string): string =>
    `${columnVisibilityKey}.columnWidths`

export const columnOrderKey = (columnVisibilityKey: string): string =>
    `${columnVisibilityKey}.columnOrder`
