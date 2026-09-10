import { keyedLayoutStore } from './keyedLayoutStore'
import { columnWidthsKey } from './layoutKeys'

/**
 * The widths a table's columns were dragged to, in pixels, by column key. A column the reader never
 * touched is absent — the width it was declared with is still the right answer for it, and storing a
 * measured one would freeze today's layout against tomorrow's column set.
 */
export type StoredColumnWidths = Record<string, number>

/** The floor of a `minmax(<floor>px, …)` track, which is how a consumer typically writes a column. */
const TRACK_FLOOR = /^\s*minmax\(\s*(\d+(?:\.\d+)?)px\s*,/

/** An `fr` unit anywhere in the track, which is what makes a column absorb the container's slack. */
const FLEXIBLE_UNIT = /[\d.]fr\b/

/** A column track that absorbs slack, as `flexTrack` writes it. */
export type FlexTrack = `minmax(${number}px, ${number}fr)`

/** A column track that stops growing, as `cappedTrack` writes it. */
export type CappedTrack = `minmax(${number}px, ${number}px)`

/**
 * A column track that ABSORBS the container's leftover width. `weight` is the share of that slack
 * this column takes against the other flexible ones, so a table spreads its surplus over the columns
 * a reader scans instead of pooling it on whichever one happens to be last.
 *
 * ⚠ The floor a table states here is NOT the floor react-data-grid enforces: react-data-grid clamps
 * every track, fraction tracks included, up to the column's `minWidth` (50 by default) rather than
 * reading this string. `columnResizeFloor` below lifts the floor into `minWidth` for that reason, and
 * it makes each table's floors a BUDGET that has to fit its narrowest container on its own — a grid
 * whose floors already fill the container overflows by the excess instead of shrinking a flexible
 * column. Every table therefore states that arithmetic above its columns.
 *
 * A floor of 0 is the "no floor, truncate" form, for the one value with no bound at all: a URL, an id.
 */
export const flexTrack = (floorPx: number, weight = 1): FlexTrack =>
    `minmax(${floorPx}px, ${weight}fr)`

/**
 * A column track that STOPS growing — what a column a reader does not scan for length declares. A
 * date, a status, a flag, a number is as long as it will ever be, and every pixel past its cap is
 * blank space taken from the values that are not. Same floor rule as {@link flexTrack}.
 */
export const cappedTrack = (floorPx: number, capPx: number): CappedTrack =>
    `minmax(${floorPx}px, ${capPx}px)`

/**
 * Whether this width ABSORBS the slack a container has left over. Only an `fr` track does: every
 * other form — a pixel count, a `minmax(140px, 300px)` cap, react-data-grid's own `auto` — is measured
 * to a fixed number of pixels, and whatever the container has beyond their sum stays blank.
 */
export const isFlexibleWidth = (width?: number | string | null): boolean =>
    typeof width === 'string' && FLEXIBLE_UNIT.test(width)

/**
 * The narrowest this width can resolve to: a pixel count is its own floor, a `minmax(<floor>px, …)`
 * track states one, and anything else (`auto`, a `minmax(0, …)` track) has none worth naming.
 */
export const trackFloor = (width?: number | string | null): number | undefined => {
    if (typeof width === 'number') {
        return width > 0 ? width : undefined
    }
    if (typeof width !== 'string') {
        return undefined
    }
    const floor = width.match(TRACK_FLOOR)
    const value = floor ? Number(floor[1]) : 0
    return value > 0 ? value : undefined
}

/**
 * The floor a resizable column may be narrowed to, or `undefined` for react-data-grid's own default.
 *
 * ⚠ A consumer typically writes a flexible column as a CSS track (`minmax(140px, 1fr)`), and
 * react-data-grid does NOT read the floor out of that string: it clamps a drag against the column's
 * `minWidth` alone, which defaults to 50. So the no-clip budget each table derives its tracks from
 * would be a promise the drag could break — a 140px column dragged to 50px and left there. Lifting
 * the track's own floor into `minWidth` is what makes the two agree.
 *
 * A `minmax(0, …)` floor means "absorb the slack and truncate" rather than a real minimum, so it is
 * left to react-data-grid's default; a column declaring `minWidth` already answered the question.
 */
export const columnResizeFloor = (column: {
    width?: number | string | null
    minWidth?: number | null
}): number | undefined => {
    if (column.minWidth !== undefined && column.minWidth !== null) {
        return column.minWidth
    }
    return typeof column.width === 'string' ? trackFloor(column.width) : undefined
}

/**
 * Whether two layouts say the same thing. Worth asking because the grid rebuilds its
 * columns — re-sorting and re-rendering every row — from the identity of what it is handed, so a
 * value-equal layout with a fresh identity is a whole table redrawn for nothing.
 */
export const sameColumnWidths = (a: StoredColumnWidths, b: StoredColumnWidths): boolean => {
    const keys = Object.keys(a)
    return keys.length === Object.keys(b).length && keys.every((key) => a[key] === b[key])
}

/** A stored widths map, with anything that is not a positive pixel count dropped. */
const parseColumnWidths = (parsed: unknown): StoredColumnWidths | undefined =>
    parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? (Object.fromEntries(
              Object.entries(parsed as Record<string, unknown>).filter(
                  ([, width]) => typeof width === 'number' && Number.isFinite(width) && width > 0
              )
          ) as StoredColumnWidths)
        : undefined

export const columnWidthsStore = keyedLayoutStore<StoredColumnWidths>(
    columnWidthsKey,
    parseColumnWidths,
    {}
)

/** Whatever this table stored, with anything that is not a positive pixel count dropped. */
export const readColumnWidths = columnWidthsStore.read

/** Write the table's widths down and tell every table sharing its key. */
export const writeColumnWidths = columnWidthsStore.write

/**
 * Back to the widths the columns were declared with. The key is REMOVED rather than written empty:
 * nothing stored is exactly what "no width of my own" means here, where the visibility half has to
 * store an empty array because an absent set is what lets `hiddenColumnsByDefault` speak.
 */
export const clearColumnWidths = columnWidthsStore.clear

export const onColumnWidthsChange = columnWidthsStore.subscribe
