/**
 * A selection after a row of it is toggled — the checkbox's own gesture, shared because a row CLICK
 * is that same gesture on every selectable table: a click ticks the row, a second click unticks it.
 */
export const toggledSelection = (selectedIds: readonly string[], toggledId: string): string[] =>
    selectedIds.includes(toggledId)
        ? selectedIds.filter((id) => id !== toggledId)
        : [...selectedIds, toggledId]

/**
 * A selection that may reach further than the rows in hand: either the ids picked, or EVERYTHING
 * the current query matches except a few — pages never loaded included.
 *
 * The two shapes are one union rather than a flag beside one id list, so a list of exclusions can
 * never be read as a list of picks. That is exactly what the one-set-two-meanings model it replaces
 * risked: `marked` held selections in one mode and exclusions in the other, and only a boolean
 * beside it said which.
 */
export type MatchingSelection = { all: false; ids: string[] } | { all: true; excludedIds: string[] }

export const NOTHING_SELECTED: MatchingSelection = { all: false, ids: [] }

/**
 * The selection naming exactly these rows — how a table that only ever holds ids says so.
 *
 * A page reporting an `ids` selection to a surface that speaks `MatchingSelection` (the rail) would
 * otherwise spell the union's own shape out, which is the one place a typo can turn a list of picks
 * into a list of exclusions. The array is copied, so the selection cannot be edited from behind by
 * whatever holds the ids.
 */
export const idsSelection = (ids: readonly string[]): MatchingSelection => ({
    all: false,
    ids: [...ids]
})

/** Everything the current query matches, exclusions cleared. */
export const ALL_MATCHING_SELECTED: MatchingSelection = { all: true, excludedIds: [] }

export const isSelected = (selection: MatchingSelection, id: string): boolean =>
    selection.all ? !selection.excludedIds.includes(id) : selection.ids.includes(id)

/** How many rows are ticked OFF — 0 in either mode with nothing excluded. */
export const excludedCount = (selection: MatchingSelection): number =>
    selection.all ? selection.excludedIds.length : 0

/**
 * How many rows the selection names, given how many the query matches.
 *
 * In `all` mode the number is the query's own total minus what was ticked off, which is why the total
 * has to be handed in: the selection itself holds no count, and a page inventing one from the rows in
 * hand is exactly the "counts five, acts on two" bug the inverted mode exists to avoid.
 */
export const selectionSize = (selection: MatchingSelection, matchingTotal: number): number =>
    selection.all ? Math.max(0, matchingTotal - selection.excludedIds.length) : selection.ids.length

/**
 * The ids the selection names, or `undefined` when it names rows nobody has read yet.
 *
 * For the callers that can only work from an id list and have no way to resolve one — a drag payload,
 * say. Answering with the exclusions, or with an empty array, would both read as a set of picks.
 */
export const knownSelectedIds = (selection: MatchingSelection): string[] | undefined =>
    selection.all ? undefined : [...selection.ids]

/** The selection with these rows dropped from it, whichever mode it is in. */
export const withoutIds = (
    selection: MatchingSelection,
    ids: readonly string[]
): MatchingSelection =>
    selection.all
        ? { all: true, excludedIds: [...new Set([...selection.excludedIds, ...ids])] }
        : { all: false, ids: selection.ids.filter((id) => !ids.includes(id)) }

/** The selection with this row in it: a pick in one mode, a lifted exclusion in the other. */
export const withSelectedId = (selection: MatchingSelection, id: string): MatchingSelection =>
    selection.all
        ? { all: true, excludedIds: selection.excludedIds.filter((excluded) => excluded !== id) }
        : {
              all: false,
              ids: selection.ids.includes(id) ? [...selection.ids] : [...selection.ids, id]
          }

/** The row's checkbox gesture over a selection that may reach past the page. */
export const toggledMatching = (selection: MatchingSelection, id: string): MatchingSelection =>
    isSelected(selection, id) ? withoutIds(selection, [id]) : withSelectedId(selection, id)

/** The ids a grid holding ONE page should show as ticked: what is selected among those rows. */
export const selectedOnPage = (
    selection: MatchingSelection,
    pageIds: readonly string[]
): string[] => pageIds.filter((id) => isSelected(selection, id))

/**
 * The selection after the grid reports which of ITS rows are ticked. In `all` mode the unticked rows
 * of the page become exclusions and any exclusion the page names is lifted — which is what makes one
 * gesture (a row's checkbox, the header's select-all, a row click) mean the right thing in both
 * modes, with no second code path for the inverted one.
 */
export const withPageSelection = (
    selection: MatchingSelection,
    pageIds: readonly string[],
    selectedIds: readonly string[]
): MatchingSelection => {
    if (!selection.all) return { all: false, ids: [...selectedIds] }
    const offPage = selection.excludedIds.filter((id) => !pageIds.includes(id))
    const onPage = pageIds.filter((id) => !selectedIds.includes(id))
    return { all: true, excludedIds: [...offPage, ...onPage] }
}
