import { parseColumnKeys, readStored } from './keyedLayoutStore'

/**
 * The columns a table is hiding, as the visibility provider stores them.
 *
 * ⚠ The visibility provider OWNS this set: it reads the key on mount, writes every choice made in the column
 * chooser, and filters the columns it was handed before react-data-grid ever sees them. Reading it
 * here is a MIRROR, not a second source of truth — a consumer needs the same answer one render earlier,
 * because whether the visible tracks can fill the container is decided on the column definitions
 * that go INTO the grid (see `withFillingColumn`). The rules below are therefore the provider's own:
 * a stored set wins, and a table with nothing stored yet shows what the page declared.
 */
export type HiddenColumns = string[]

/** Whether two hidden sets say the same thing, so an equal one does not remount a grid. */
export const sameHiddenColumns = (a: HiddenColumns, b: HiddenColumns): boolean =>
    a.length === b.length && a.every((key, index) => key === b[index])

/**
 * What this table is hiding: whatever it stored, or the page's own defaults until it stores one.
 *
 * The library owns the WRITING half, so this one reads through the shared guarded reader rather than
 * through the keyed store its two siblings are built on.
 */
export const readHiddenColumns = (
    columnVisibilityKey: string,
    hiddenByDefault: HiddenColumns
): HiddenColumns => readStored(columnVisibilityKey, parseColumnKeys) ?? hiddenByDefault
