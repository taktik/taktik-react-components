import AddRoundedIcon from '@mui/icons-material/AddRounded'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded'
import Menu from '@mui/material/Menu'
import Paper from '@mui/material/Paper'
import { KeyboardEvent, ReactNode, useEffect, useId, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { useLabels, type Labels } from '../../../labels'
import { useTableSlots } from '../../../slots'
import { useSlashFocus } from '../../../useSlashFocus'
import {
    focusRing,
    fontSizeNormal,
    fontSizeSmall,
    iconSizeSmall,
    radiusLarge,
    radiusMedium,
    radiusSmall
} from '../../../theme/tableStyles'
import { convertDate, DATE_FORMAT } from '../../../utils'
import {
    MAX_VALUE_SUGGESTIONS,
    type FilterDraft,
    type ValueSuggestion,
    type ValueSuggestions
} from '../../../valueSuggestions'
import {
    asTextTerm,
    canBeExact,
    isExactText,
    isNegatedText,
    isTextObject,
    negationMode,
    parseNegation,
    textValue,
    type FilterKind,
    type FilterValue,
    type RangeValue,
    type TextFilter
} from '../../../filterValue'
import { FilterRangePopover } from './FilterRangePopover'

/** How long the bar waits after the last keystroke before reporting what was typed. */
export const FILTER_DEBOUNCE_MS = 300

/**
 * Whether a chip carries a value the query actually filters on. A just-added chip is seeded empty
 * (`''` for text, `[]` for a select, `{}` for a range) and stays rendered, but filters on nothing —
 * so it must NOT count as active (e.g. for an "adjust your filters" empty-state hint).
 */
export const isFilterValueActive = (value: FilterValue | undefined): boolean => {
    if (value === undefined) return false
    if (typeof value === 'string') return value.trim() !== ''
    if (isTextObject(value)) return value.text.trim() !== ''
    if (Array.isArray(value)) return value.some((entry) => entry.trim() !== '')
    const isSet = (bound?: number | string): boolean => bound !== undefined && bound !== ''
    return isSet(value.from) || isSet(value.to)
}

/** True when any chip in the map carries an actually-filtering value (see isFilterValueActive). */
export const anyFilterActive = (values: Record<string, FilterValue | undefined>): boolean =>
    Object.values(values).some(isFilterValueActive)

/**
 * A select chip's chosen values — an empty array when it matches everything ("Any"). A bare string
 * reads as a set of one, so a consumer seeding or restoring a single value needs no ceremony.
 */
export const asValues = (value: FilterValue | undefined): string[] => {
    if (Array.isArray(value)) return value.filter((entry) => entry.trim() !== '')
    const single = asTextTerm(value)
    return single ? [single] : []
}

/** The set with `value` added or taken out — how a select chip's menu accumulates. */
export const toggleValue = (values: string[], value: string): string[] =>
    values.includes(value) ? values.filter((entry) => entry !== value) : [...values, value]

/** A range chip's {from,to} bounds — an empty object when the chip carries no range. */
export const asRange = (value: FilterValue | undefined): RangeValue =>
    value && typeof value === 'object' && !Array.isArray(value) && !isTextObject(value) ? value : {}

/** One filterable field the bar can add a chip for. */
export interface FilterDefinition {
    key: string
    label: string
    kind?: FilterKind
    placeholder?: string
    /**
     * text kind: whether the chip may be turned into an EXCLUSION ("Location is not room 10"),
     * default yes. A consumer whose search compiles into backend PARAMETERS declares `false` — a
     * parameter has no complement to send, and a toggle that quietly meant the opposite is worse
     * than no toggle. Where it is false, a typed `!` is part of the value rather than a flag.
     */
    negatable?: boolean
    /**
     * text kind: whether the bar may OFFER this field's own values as type-ahead rows ("Location is
     * room 105"), which the consumer answers by handing back `suggestions`. Two consequences beyond
     * the rows: such a chip can hold an EXACT value (`canBeExact`), and its input offers the same
     * values while it is open.
     *
     * It is a per-consumer declaration because the generic cannot guess it: a field whose terms are
     * not human-facing values has nothing to offer.
     */
    suggestable?: boolean
    /**
     * text kind: which field(s) the consumer aggregates for those rows, where the chip's own key is
     * not the field — a path under an embedded object, or the two name fields one chip reads. Absent
     * means the key IS the field.
     *
     * The bar itself never reads it: a picked row still commits into the chip's key, and only the
     * consumer's own request knows what to aggregate. It is declared HERE so the chip that offers a
     * value and the field it came from cannot drift apart.
     */
    suggestField?: string | readonly string[]
    /** select kind: the options offered */
    options?: { value: string; label: string }[]
    /** range kind: 'number' (min/max) or 'date' (from/to date pickers) */
    rangeType?: 'number' | 'date'
    /** range(number) kind: unit suffix shown after the value (e.g. "min") */
    unit?: string
}

/**
 * An always-on chip the bar renders first and the user cannot remove — for a choice that is never
 * absent, such as an organisation scope (there is always *some* scope, so a ✕ would mean nothing).
 */
export interface PinnedFilter {
    key: string
    label: string
    value: string
    options: { value: string; label: string }[]
    onChange: (value: string) => void
}

/** The "present but filtering on nothing" value of each kind — what a chip is seeded and reset to. */
export const emptyValue = (kind: FilterKind): FilterValue => {
    if (kind === 'range') return {}
    return kind === 'select' ? [] : ''
}

/**
 * Initial `values` for the chips a table shows by default, so a common filter is one click away
 * instead of three. Reserve it for select-style toggles: seeding the primary column only adds
 * clutter, since typing into the bar already commits there on Enter. The definitions say which kind
 * each key is, so every seeded chip starts at the empty value its editor understands; a key with no
 * definition is seeded as text.
 */
export const seedFilters = (
    keys: string[],
    definitions: FilterDefinition[] = []
): Record<string, FilterValue> => {
    const kindByKey = new Map(definitions.map((def) => [def.key, def.kind ?? 'text']))
    return Object.fromEntries(keys.map((key) => [key, emptyValue(kindByKey.get(key) ?? 'text')]))
}

export interface FilterBarProps {
    definitions: FilterDefinition[]
    /** current values by key; a key with a defined value renders an active chip */
    values: Record<string, FilterValue | undefined>
    onChange: (key: string, value: FilterValue | undefined) => void
    /** the column the type-ahead offers first, so "type then Enter" hits the obvious one */
    primaryKey?: string
    /** always-on chips rendered before the removable ones */
    pinned?: PinnedFilter[]
    /**
     * Puts the bar back the way the consumer opened it. Rendered only while something is actually
     * filtering, so it costs nothing on a clean bar and its appearance is itself the signal.
     */
    onReset?: () => void
    /** rendered pushed to the right — e.g. a selection summary + delete button */
    trailing?: ReactNode
    /**
     * The values the consumer's own fields actually hold for what is being typed — the type-ahead's
     * VALUE rows, and the same rows under an open chip's input.
     *
     * The bar renders them and never asks for them: reading data is the consumer's. So the seam is
     * the one chip OPTIONS already use — the consumer owns the request, the bar owns the list — and
     * `onDraftChange` is what tells the consumer which question to ask.
     */
    suggestions?: ValueSuggestions
    /**
     * What is being typed, and where. Fired on every keystroke of the type-ahead and of an open
     * `suggestable` chip; the consumer answers through `suggestions`.
     */
    onDraftChange?: (draft: FilterDraft) => void
}

/**
 * Two columns that do NOT wrap: the chips on the left, the consumer's actions on the right.
 *
 * One wrapping row for both put the fixed part of the toolbar at the mercy of the variable part —
 * past a few chips the delete/refresh group was pushed onto a second line and moved under the user,
 * which is the opposite of what should give way. `flex-start` keeps the actions level with the FIRST
 * chip row rather than centred against a tall block of them.
 *
 * `flex: 0 0 auto` is what keeps a WRAPPED bar whole. The bar is a flex item of the page's column
 * (`GridPage`), whose other item is the grid — greedy, and clipped by an `overflow: hidden`. On the
 * default `flex-shrink: 1` the two share the squeeze whenever the page overflows, so a second chip
 * row was squeezed back to one row's height and the chips below it were painted under the grid.
 * The grid is what should give way here: it scrolls, and a toolbar does not.
 */
const Bar = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    flex: 0 0 auto;
    min-height: 36px;
`

/** The chips, wrapping among themselves and taking whatever width the actions leave. */
const Filters = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    flex: 1;
    min-width: 0;
    min-height: 36px;
`

// A bordered field rather than a bare input: it has to read as somewhere you can type, and its
// width has to read as the field's rather than as a gap before "Add filter". Squared like an
// ordinary input, where the chips are pills — the shape itself says which is which.
const SearchField = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 30px;
    padding: 0 10px;
    /* Shrinkable below its content: when a panel narrows the bar, the field gives up width
     * rather than overflow rightwards under the trailing action buttons. */
    min-width: 0;
    max-width: 100%;
    ${radiusMedium};
    border: 1px solid ${({ theme }) => theme.input.borderColor};
    background: ${({ theme }) => theme.input.background};
    color: ${({ theme }) => theme.textLighter};
    cursor: text;
    transition: border-color 0.15s ease;

    &:hover {
        border-color: ${({ theme }) => theme.textLighter};
    }

    &:focus-within {
        border-color: ${({ theme }) => theme.primaryMain};
    }

    svg {
        ${iconSizeSmall};
    }
`

const Chip = styled.div<{ $editing: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 30px;
    padding: 0 6px 0 12px;
    /*
     * The shape scale, not a pill. 16px on a 30px element rounds to a full oval; the large radius
     * also matches what a chip IS — a small pressable control, not a tag.
     */
    ${radiusLarge};
    /* A chip can never outgrow its column: it shrinks by ellipsising its value, never by
     * wrapping its label inside the 30px pill, and crops cleanly at the extreme. */
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    background: ${({ theme }) => theme.backgroundLight};
    border: 1px solid ${({ theme, $editing }) => ($editing ? theme.primaryMain : theme.borderColor)};
    ${fontSizeNormal};
    color: ${({ theme }) => theme.textMain};
    cursor: pointer;
    transition: border-color 0.15s ease;

    &:hover {
        border-color: ${({ theme, $editing }) =>
            $editing ? theme.primaryMain : theme.textLighter};
    }
`

const ChipLabel = styled.span`
    color: ${({ theme }) => theme.textLight};
`

const ChipValue = styled.span`
    font-weight: 500;
    max-width: 220px;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

/**
 * The chip's operator — "is not" on an excluding chip, and while the chip is OPEN the button that
 * flips it either way. Only the excluding state is written when the chip is closed: a bare value has
 * read as a match since the bar shipped, and spelling "is" on all of them would spend chip width on
 * the state that needs no naming.
 */
const ChipOperator = styled.span`
    color: ${({ theme }) => theme.textLight};
    font-style: italic;
`

const ChipOperatorButton = styled.button`
    display: inline-flex;
    align-items: center;
    height: 20px;
    padding: 0 6px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    ${radiusSmall};
    background: ${({ theme }) => theme.input.background};
    font: inherit;
    ${fontSizeSmall};
    color: ${({ theme }) => theme.textLight};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.textMain};
        border-color: ${({ theme }) => theme.textLighter};
    }

    &[aria-pressed='true'] {
        color: ${({ theme }) => theme.selected.color};
        border-color: ${({ theme }) => theme.selected.color};
        background: ${({ theme }) => theme.selected.background};
    }

    ${focusRing};
`

const ChipInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
    color: ${({ theme }) => theme.textMain};
    width: 130px;
    padding: 0;
`

const ChipClose = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: ${({ theme }) => theme.textLight};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.textMain};
        background: ${({ theme }) => theme.backgroundMedium};
    }

    svg {
        ${iconSizeSmall};
    }
`

const TypeAheadInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font: inherit;
    ${fontSizeNormal};
    color: ${({ theme }) => theme.textMain};
    flex: 0 1 150px;
    width: 150px;
    min-width: 0;
    padding: 0;

    &::placeholder {
        color: ${({ theme }) => theme.textLighter};
    }
`

const SuggestionPaper = styled(Paper)`
    min-width: 260px;
    max-width: 420px;
`

// A fixed slot rather than a conditional icon: the labels must not shift sideways as values are
// toggled, or a menu of check marks reads as a list that moves under the pointer.
const CheckSlot = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    flex: 0 0 20px;

    svg {
        ${iconSizeSmall};
    }
`

/**
 * A value row's own record count, pinned to the row's end.
 *
 * Shown only when it says something — a value carried by ONE record prints none, or a set where
 * every value is unique is a list of rows all reading "1".
 */
const SuggestionCount = styled.span`
    margin-left: auto;
    padding-left: 12px;
    color: ${({ theme }) => theme.textLight};
    ${fontSizeSmall};
`

/** The "still asking" line — a row rather than a spinner in the field, so the list does not jump. */
const SuggestionNote = styled.div`
    padding: 6px 16px;
    color: ${({ theme }) => theme.textLight};
    ${fontSizeSmall};
`

/** One offered line. The two lists differ in what they offer, never in how a line reads. */
interface SuggestionRow {
    /** Reconciliation key — stable per row within one list. */
    key: string
    label: string
    /** Printed past 1: a value carried by one record says nothing. */
    count?: number
}

interface SuggestionListProps {
    open: boolean
    anchorEl: HTMLElement | null
    /** The list's own DOM id, and the stem of its rows' ids — see `suggestionOptionId`. */
    listId: string
    rows: readonly SuggestionRow[]
    /** Which row the keyboard is on, or -1 for none. */
    activeIndex: number
    onHighlight: (index: number) => void
    onPick: (index: number) => void
    /** Whether to say the values are still coming — the CALLER's question, per list. */
    loading?: boolean
    loadingLabel: string
}

/**
 * The DOM id of one row, so the input that keeps focus can name the row the keyboard is on.
 *
 * Prefixed by the BAR, because two bars are mounted at once by design; and whitespace is collapsed,
 * because an offered value may hold a space (`room 105`) and an `aria-activedescendant` is an
 * IDREF, which may not.
 */
const suggestionOptionId = (listId: string, key: string): string =>
    `${listId}-${key.replace(/\s+/g, '_')}`

/**
 * The bar's ONE suggestion popover: the cross-column type-ahead's list and an open chip's own value
 * list are the same widget over different rows.
 *
 * Written twice they had drifted — one was wired for assistive technology and the other named an id
 * nothing pointed at.
 */
const SuggestionList = ({
    open,
    anchorEl,
    listId,
    rows,
    activeIndex,
    onHighlight,
    onPick,
    loading,
    loadingLabel
}: SuggestionListProps) => {
    const { MenuItem, SuggestionListBox, SuggestionPopper } = useTableSlots()
    return (
        <SuggestionPopper open={open} anchorEl={anchorEl}>
            <SuggestionPaper>
                <SuggestionListBox id={listId}>
                    {rows.map((row, index) => (
                        <MenuItem
                            key={row.key}
                            id={suggestionOptionId(listId, row.key)}
                            role='option'
                            aria-selected={index === activeIndex}
                            selected={index === activeIndex}
                            // A real pointer MOVE, never an enter: Chromium re-dispatches hover on
                            // whatever appears under a STATIONARY pointer, so typing a new query
                            // re-highlighted the line that landed where the mouse was resting —
                            // after the keystroke had put the highlight back on the first one — and
                            // Enter then committed a line the reader never picked. A hover with no
                            // movement behind it is not an intention, and the list must never say
                            // one thing while Enter does another.
                            onMouseMove={() => onHighlight(index)}
                            onMouseDown={(event) => {
                                // mousedown, not click: blur would clear the query first
                                if (event.button !== 0) return
                                event.preventDefault()
                                onPick(index)
                            }}>
                            {row.label}
                            {row.count !== undefined && row.count > 1 && (
                                <SuggestionCount>{row.count}</SuggestionCount>
                            )}
                        </MenuItem>
                    ))}
                </SuggestionListBox>
                {/* the values are still coming: a row of its own, so nothing moves under the pointer
                    as they land */}
                {loading && <SuggestionNote>{loadingLabel}</SuggestionNote>}
            </SuggestionPaper>
        </SuggestionPopper>
    )
}

const Trailing = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 0 0 auto;
    min-height: 36px;
`

const isRangeEmpty = (range: RangeValue) => range.from === undefined && range.to === undefined

const selectedOptionLabel = (entry: PinnedFilter): string | undefined =>
    entry.options.find((option) => option.value === entry.value)?.label

/** The chosen values as the labels their options carry, falling back to the raw value. */
const optionLabels = (def: FilterDefinition, chosen: string[]): string[] =>
    chosen.map((value) => def.options?.find((option) => option.value === value)?.label ?? value)

interface SuggestionLine {
    id: string
    def: FilterDefinition
    label: string
    /**
     * How many records carry this value — set on a VALUE row alone, and shown only past 1. It is what
     * tells a row offering a value the data holds from one offering the text as a substring.
     */
    count?: number
}

/** What one line of the type-ahead list commits when chosen. */
type Suggestion =
    /** a value straight into a text column, matching it or excluding it */
    | (SuggestionLine & { commit: 'text'; value: FilterValue })
    /** a select column whose option label matched what was typed */
    | (SuggestionLine & { commit: 'option'; value: string })
    /** the column name itself matched — add an empty chip and open its editor */
    | (SuggestionLine & { commit: 'open' })

/**
 * Whether the bar offers this field at all. A select with no options can only ever say "Any" — a
 * Location zone chip in an organisation that has no zones is furniture — so it is kept out of the
 * "Add filter" menu and out of the type-ahead's column suggestions, and comes back on its own the
 * moment options exist. Option sets fed by a request read as empty while they load, which is the
 * same answer. A chip already ON the bar is never withdrawn: that would drop live filter state.
 */
const isOfferable = (def: FilterDefinition): boolean =>
    (def.kind ?? 'text') !== 'select' || (def.options?.length ?? 0) > 0

// Five value rows plus the ranks below them, which is the "5-10 closest results" the list aims at.
const MAX_SUGGESTIONS = 10
// A one-letter query matches option labels across every select column, which would otherwise
// fill the whole list and leave no room for the columns the user is far more likely to want.
const MAX_OPTION_SUGGESTIONS = 3

const matches = (haystack: string, needle: string) =>
    haystack.toLowerCase().includes(needle.toLowerCase())

/**
 * Whether this chip carries its OWN is/is-not operator.
 *
 * The cross-column chip does not: its text is an expression whose WORDS carry the exclusions
 * (`tizen !lobby`), and an operator on top of that would be a second grammar on one string — see
 * `negationMode`.
 */
const hasOperator = (def: FilterDefinition): boolean => negationMode(def) === 'chip'

/**
 * What a typed `!` commits ON THIS COLUMN.
 *
 * On a per-column chip it becomes the chip's own is-not state — visible, editable and removable,
 * which is what makes the syntax teach itself. On the cross-column chip the `!` belongs to the word
 * it precedes, so the raw text is committed and the query builder's per-word grammar answers for it;
 * and where the chip cannot negate at all, the `!` is part of the value, so the reader sees exactly
 * what they typed rather than a filter that means the opposite of the line they picked.
 */
const typedTextValue = (def: FilterDefinition, typed: TextFilter, raw: string): FilterValue => {
    if (!typed.negated) return typed.term
    return hasOperator(def) ? textValue(typed.term, { negated: true }) : raw
}

const containsSuggestion = (
    def: FilterDefinition,
    typed: TextFilter,
    raw: string,
    labels: Labels
): Suggestion => {
    const value = typedTextValue(def, typed, raw)
    // The line says what the QUERY will do, which is an exclusion in word mode too — there the chip
    // shows the expression the reader typed and the words carry the `!`.
    const excludes = typed.negated && negationMode(def) !== 'none'
    return {
        id: `${def.key}-text`,
        def,
        label: excludes
            ? labels.suggestionNotContains(def.label, typed.term)
            : labels.suggestionContains(def.label, typed.term),
        commit: 'text',
        value
    }
}

/**
 * One line offering a value the field actually holds — the consumer's own answer.
 *
 * It commits EXACTLY that value where the chip can carry one: picking `room 105` must not commit
 * `*room 105*`, which would also find `room 1050` and is a lie the reader notices the first time two
 * values share a prefix. A chip that `canBeExact` refuses commits a SUBSTRING instead — its builder
 * has no way to honour the flag, and a locally-filtered grid would match whole values forever. The
 * line names the field too, because a bare value says nothing about which column it will narrow —
 * and it is what makes two sibling fields legible when both hold the same string.
 */
const valueSuggestion = (
    def: FilterDefinition,
    suggestion: ValueSuggestion,
    negated: boolean,
    labels: Labels
): Suggestion => ({
    id: `${def.key}-value-${suggestion.value}`,
    def,
    label: negated
        ? labels.suggestionIsNot(def.label, suggestion.value)
        : labels.suggestionIs(def.label, suggestion.value),
    commit: 'text',
    value: textValue(suggestion.value, { negated, exact: canBeExact(def) }),
    count: suggestion.count
})

/**
 * Turn what the user typed into filter suggestions, best first.
 *
 * Ranked in buckets rather than in column order, because a table with nine text columns would
 * otherwise fill the list with "contains" lines and push every other kind off the end:
 *   1. the primary column — usually "Any field", so Enter is the quick cross-column lookup
 *   2. the VALUES the consumer's suggestable fields hold for what was typed, commonest first
 *   3. select options whose label matches ("Status: Connected") — the most specific reading
 *   4. columns whose own name matches, which open their editor (a number or date range has no
 *      text form to match, so this is the only way to reach one by typing)
 *
 * Rank 1 keeps the top because it is the only line that can search for a term matching NOTHING yet —
 * a MAC being provisioned, a serial from a support ticket — and because Enter has meant "look this up
 * across the columns" since the bar shipped.
 *
 * A leading `!` asks for an EXCLUSION, and only a text column can answer one — a select holds a set
 * whose neutral state is "Any" and a range has two bounds, neither of which negates. So a negated
 * query offers text and value lines alone rather than options that would quietly commit the opposite
 * of what was asked.
 */
const buildSuggestions = (
    definitions: FilterDefinition[],
    query: string,
    labels: Labels,
    primaryKey?: string,
    values: readonly ValueSuggestion[] = []
): Suggestion[] => {
    const raw = query.trim()
    const typed = parseNegation(raw)
    if (!typed.term) return []
    const text = typed.term

    const primary = definitions.find(
        (def) => def.key === primaryKey && (def.kind ?? 'text') === 'text'
    )
    const byKey = new Map(definitions.map((def) => [def.key, def]))
    const options: Suggestion[] = []
    const opens: Suggestion[] = []

    for (const def of definitions) {
        if (def === primary || typed.negated) continue
        const kind = def.kind ?? 'text'
        if (kind === 'select') {
            for (const option of def.options ?? []) {
                if (matches(option.label, text)) {
                    options.push({
                        id: `${def.key}-${option.value}`,
                        def,
                        label: `${def.label}: ${option.label}`,
                        commit: 'option',
                        value: option.value
                    })
                }
            }
        }
        if (kind !== 'text' && matches(def.label, text) && isOfferable(def)) {
            opens.push({ id: `${def.key}-open`, def, label: `${def.label}…`, commit: 'open' })
        }
    }

    const valueRows = values.slice(0, MAX_VALUE_SUGGESTIONS).flatMap((suggestion) => {
        const def = byKey.get(suggestion.key)
        return def ? [valueSuggestion(def, suggestion, typed.negated, labels)] : []
    })

    return [
        ...(primary ? [containsSuggestion(primary, typed, raw, labels)] : []),
        ...valueRows,
        ...options.slice(0, MAX_OPTION_SUGGESTIONS),
        ...opens
    ].slice(0, MAX_SUGGESTIONS)
}

/** One empty list, shared, so "no values offered" is a stable dependency. */
const NO_VALUES: readonly ValueSuggestion[] = []

/**
 * The value a PAUSE in the typing settles on.
 *
 * The bar's live value is its own and must run at 60fps, so what leaves the bar is the settled one:
 * a report per keystroke re-renders the whole page around it, and the consumer would only throw the
 * answer away on the next letter. It is also deliberately the ONLY timer in the chain — the
 * consumer's own read takes what this hands over rather than debouncing again, so one settled
 * keystroke is one question asked once.
 */
const useSettled = <T,>(value: T, delayMs: number): T => {
    const [settled, setSettled] = useState(value)
    useEffect(() => {
        const handle = setTimeout(() => setSettled(value), delayMs)
        return () => clearTimeout(handle)
    }, [value, delayMs])
    return settled
}

/**
 * A composable filter bar: each active filter is a removable chip you edit inline
 * (Linear/Notion pattern). Inactive fields are added from the "Add filter" menu. Three
 * filter kinds — text (contains, inline input), select (one of, dropdown), range
 * (number min/max or date from/to, popover). Only the field labels come from the caller;
 * the bar's own wording is read from the labels, so it reads identically on every grid.
 */
export const FilterBar = ({
    definitions,
    values,
    onChange,
    primaryKey,
    pinned,
    onReset,
    trailing,
    suggestions: valueSuggestions,
    onDraftChange
}: FilterBarProps) => {
    const labels = useLabels()
    const { Button, IconButton, MenuItem } = useTableSlots()
    const [editingKey, setEditingKey] = useState<string | null>(null)
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)
    const [pinnedKey, setPinnedKey] = useState<string | null>(null)
    const pinnedRefs = useRef<Map<string, HTMLDivElement>>(new Map())
    const [query, setQuery] = useState('')
    const [highlight, setHighlight] = useState(0)
    // -1 is "nothing picked", which is what keeps Enter in a chip meaning "I am done typing" — the
    // arrow keys are how a reader steps INTO the values offered under it.
    const [chipHighlight, setChipHighlight] = useState(-1)
    const typeAheadRef = useRef<HTMLInputElement>(null)
    // resolved in an effect (after the chip mounts) so a just-added select/range chip
    // has an anchor to open its menu/popover against
    const [editingAnchor, setEditingAnchor] = useState<HTMLElement | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const chipRefs = useRef<Map<string, HTMLDivElement>>(new Map())

    const byKey = useMemo(() => new Map(definitions.map((def) => [def.key, def])), [definitions])

    const activeDefinitions = definitions.filter((def) => values[def.key] !== undefined)
    const inactiveDefinitions = definitions.filter(
        (def) => values[def.key] === undefined && isOfferable(def)
    )
    // What the reset would actually undo: chips carrying a value, not chips merely present
    const activeCount = Object.values(values).filter(isFilterValueActive).length

    const editingDef = editingKey ? byKey.get(editingKey) : undefined
    const editingKind = editingDef?.kind ?? 'text'
    // what the open select editor currently narrows to — empty means it matches everything
    const selectedValues = editingDef ? asValues(values[editingDef.key]) : []

    /**
     * The values offered for what is being typed, and where they belong.
     *
     * The consumer answers ONE draft at a time, so the answer names the chip it is for: rows for an
     * open chip must never leak into the cross-column list, and vice versa. An answer for a chip
     * that has since closed is simply not rendered.
     */
    const typeAheadValues =
        valueSuggestions && valueSuggestions.key === undefined ? valueSuggestions.values : NO_VALUES
    const chipValues =
        valueSuggestions && editingKey && valueSuggestions.key === editingKey
            ? valueSuggestions.values
            : NO_VALUES

    const suggestions = useMemo(
        () => buildSuggestions(definitions, query, labels, primaryKey, typeAheadValues),
        [definitions, query, labels, primaryKey, typeAheadValues]
    )

    // definitions can change under a standing query (a select's options arrive from a request),
    // so clamp rather than trusting the index the last keystroke left behind
    const activeIndex = Math.min(highlight, Math.max(0, suggestions.length - 1))
    const chipIndex = Math.min(chipHighlight, chipValues.length - 1)

    /**
     * This bar's own id stem. Two bars are mounted at once by design — the `/` shortcut rule is built
     * on a picker's bar sitting over a page's — and a literal id would resolve one bar's
     * `aria-controls` and `aria-activedescendant` to the other bar's nodes.
     */
    const barId = useId()
    const typeAheadListId = `${barId}-suggestions`
    const chipListId = `${barId}-chip-suggestions`
    const typeAheadRows = useMemo(
        () =>
            suggestions.map((entry) => ({ key: entry.id, label: entry.label, count: entry.count })),
        [suggestions]
    )
    const chipRows = useMemo(
        () =>
            chipValues.map((entry) => ({
                key: entry.value,
                label: entry.value,
                count: entry.count
            })),
        [chipValues]
    )

    /**
     * What is being typed, and where — the consumer's cue to read the values for it.
     *
     * One report covers both doors, because they ask the same question of different scopes: an open
     * `suggestable` chip asks about its own field, and the cross-column type-ahead asks about all of
     * them. Reported from a render rather than from each handler, so no path can forget it — the two
     * values it reads are the only two that can change it.
     */
    const draftKey =
        editingDef && editingKind === 'text' && editingDef.suggestable ? editingDef.key : undefined
    const draftTerm = draftKey ? (asTextTerm(values[draftKey]) ?? '') : query
    const draft = useMemo(() => ({ key: draftKey, term: draftTerm }), [draftKey, draftTerm])
    const settledDraft = useSettled(draft, FILTER_DEBOUNCE_MS)
    useEffect(() => {
        onDraftChange?.(settledDraft)
    }, [settledDraft, onDraftChange])

    const commitSuggestion = (suggestion: Suggestion) => {
        setQuery('')
        if (suggestion.commit === 'open') {
            // the chip may already be on the bar with a value — reopening it must not clear one
            const current = values[suggestion.def.key]
            onChange(suggestion.def.key, current ?? emptyValue(suggestion.def.kind ?? 'text'))
            setEditingKey(suggestion.def.key)
            return
        }
        if (suggestion.commit === 'option') {
            // a matched option joins whatever the chip already narrows to, so typing two of them in
            // a row reads as "either", not as the second replacing the first
            const chosen = asValues(values[suggestion.def.key])
            const next = chosen.includes(suggestion.value) ? chosen : [...chosen, suggestion.value]
            onChange(suggestion.def.key, next)
            return
        }
        onChange(suggestion.def.key, suggestion.value)
    }

    const onTypeAheadKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Escape') {
            setQuery('')
            return
        }
        if (!suggestions.length) return
        if (event.key === 'ArrowDown') {
            event.preventDefault()
            setHighlight(Math.min(activeIndex + 1, suggestions.length - 1))
        } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            setHighlight(Math.max(activeIndex - 1, 0))
        } else if (event.key === 'Enter') {
            event.preventDefault()
            const chosen = suggestions[activeIndex]
            if (chosen) commitSuggestion(chosen)
        }
    }

    // "/" from anywhere on the page lands in the type-ahead, the way it does on GitHub. The stack
    // the hook keeps is shared with every other field that claims the key, so the
    // last-mounted-wins rule holds across all of them.
    useSlashFocus(typeAheadRef)

    useEffect(() => {
        if (editingKey && editingKind === 'text') inputRef.current?.focus()
    }, [editingKey, editingKind])

    // Every kind resolves its anchor, not just the two that open an overlay: a text chip anchors the
    // list of values offered under it, and reading the ref in render would miss the chip's own mount.
    useEffect(() => {
        setEditingAnchor(editingKey ? (chipRefs.current.get(editingKey) ?? null) : null)
        // a highlight belongs to ONE chip's list of values, never to the next chip's
        setChipHighlight(-1)
    }, [editingKey, editingKind])

    const addFilter = (def: FilterDefinition) => {
        setMenuAnchor(null)
        // seed an "active but empty" value so the chip renders, then open its editor
        onChange(def.key, emptyValue(def.kind ?? 'text'))
        setEditingKey(def.key)
    }

    // Chips a consumer seeds (seedFilters) are part of its default layout, so an empty one is not
    // leftover state the way a just-added chip is: opening one and pressing Escape must not delete
    // it, or the "one click away" affordance is gone for the rest of the session.
    // Chips that survive an empty value: the ones the consumer seeded, plus any the user
    // deliberately parked at "Any".
    const keepWhenEmpty = useRef(
        new Set(Object.keys(values).filter((key) => values[key] !== undefined))
    )

    const removeIfEmpty = (key: string) => {
        if (keepWhenEmpty.current.has(key)) return
        const def = byKey.get(key)
        const value = values[key]
        const kind = def?.kind ?? 'text'
        const empty =
            kind === 'range'
                ? isRangeEmpty(asRange(value))
                : kind === 'select'
                  ? asValues(value).length === 0
                  : !asTextTerm(value)
        if (empty) onChange(key, undefined)
    }

    const closeEditor = (key: string) => {
        removeIfEmpty(key)
        setEditingKey(null)
    }

    /**
     * Put one of the offered values into the open chip, keeping the operator the reader set. Exact
     * only where the chip can carry it (`canBeExact`) — the same rule the suggestion rows commit by.
     */
    const commitChipValue = (def: FilterDefinition, suggestion: ValueSuggestion) => {
        onChange(
            def.key,
            textValue(suggestion.value, {
                negated: isNegatedText(values[def.key]),
                exact: canBeExact(def)
            })
        )
        setChipHighlight(-1)
        setEditingKey(null)
    }

    const onTextKeyDown = (event: KeyboardEvent<HTMLInputElement>, key: string) => {
        if (chipValues.length) {
            if (event.key === 'ArrowDown') {
                event.preventDefault()
                setChipHighlight(Math.min(chipIndex + 1, chipValues.length - 1))
                return
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault()
                // back past the first row is back to the input, where Enter means "done" — and it
                // STOPS there: run unbounded, one ArrowUp too many costs an ArrowDown to undo.
                setChipHighlight(Math.max(chipIndex - 1, -1))
                return
            }
            const picked = chipIndex >= 0 ? chipValues[chipIndex] : undefined
            const def = byKey.get(key)
            if (event.key === 'Enter' && picked && def) {
                event.preventDefault()
                commitChipValue(def, picked)
                return
            }
        }
        if (event.key === 'Enter' || event.key === 'Escape') closeEditor(key)
    }

    const onChipKeyDown = (event: KeyboardEvent<HTMLDivElement>, key: string) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setEditingKey(key)
        }
    }

    const renderChipBody = (def: FilterDefinition) => {
        const value = values[def.key]
        const editing = editingKey === def.key
        const kind = def.kind ?? 'text'

        if (kind === 'text') {
            const negated = isNegatedText(value)
            const exact = isExactText(value)
            const term = asTextTerm(value) ?? ''
            // "is" is written on an EXACT chip too: it holds one whole value rather than a substring,
            // and the two would otherwise read identically on the bar.
            const operatorWord = negated ? labels.filterIsNot : exact ? labels.filterIs : undefined
            return editing ? (
                <>
                    {hasOperator(def) && (
                        <ChipOperatorButton
                            type='button'
                            aria-pressed={negated}
                            title={labels.excludeFilterHint}
                            // mousedown, not click: the input's blur would close the editor first
                            onMouseDown={(event) => {
                                event.preventDefault()
                                onChange(def.key, textValue(term, { negated: !negated, exact }))
                            }}>
                            {negated ? labels.filterIsNot : labels.filterIs}
                        </ChipOperatorButton>
                    )}
                    <ChipInput
                        ref={inputRef}
                        value={term}
                        placeholder={def.placeholder}
                        // The chip's own `role="button"` wrapper does not name the field inside it,
                        // and a filter definition rarely declares a placeholder — so without this
                        // the editor of every chip on every table is an unnamed text box.
                        aria-label={labels.editFilter(def.label)}
                        // The same combobox wiring the cross-column list carries: without it the
                        // arrow keys move a highlight nothing announces.
                        role='combobox'
                        aria-expanded={chipValues.length > 0}
                        aria-controls={chipListId}
                        aria-activedescendant={
                            chipValues[chipIndex]
                                ? suggestionOptionId(chipListId, chipValues[chipIndex].value)
                                : undefined
                        }
                        // Typing drops the exactness: the value is the reader's own now, not one they
                        // picked out of the data, and a half-typed value matched WHOLE finds nothing.
                        onChange={(event) =>
                            onChange(def.key, textValue(event.target.value, { negated }))
                        }
                        onBlur={() => closeEditor(def.key)}
                        onKeyDown={(event) => onTextKeyDown(event, def.key)}
                    />
                </>
            ) : (
                <>
                    {operatorWord && <ChipOperator>{operatorWord}</ChipOperator>}
                    {/* title: the value is capped at 220px, and a truncated filter hides what it filters on */}
                    <ChipValue title={term}>{term}</ChipValue>
                </>
            )
        }

        if (kind === 'select') {
            // Only an empty set matches everything: a value we cannot label is still narrowing,
            // so show it raw rather than claim the chip is neutral. The title carries the whole
            // list, which the 220px chip truncates once there are more than a couple.
            const chosen = asValues(value)
            const shown = chosen.length ? optionLabels(def, chosen).join(' · ') : labels.anyValue
            return <ChipValue title={shown}>{shown}</ChipValue>
        }

        // range
        const shown = formatRange(def, asRange(value)) || '…'
        return <ChipValue title={shown}>{shown}</ChipValue>
    }

    const setChipRef = (key: string) => (el: HTMLDivElement | null) => {
        if (el) chipRefs.current.set(key, el)
        else chipRefs.current.delete(key)
    }

    return (
        <Bar>
            <Filters>
                <SearchField>
                    <FilterListRoundedIcon aria-hidden />
                    <TypeAheadInput
                        ref={typeAheadRef}
                        role='combobox'
                        aria-expanded={suggestions.length > 0}
                        aria-controls={typeAheadListId}
                        aria-activedescendant={
                            suggestions[activeIndex]
                                ? suggestionOptionId(typeAheadListId, suggestions[activeIndex].id)
                                : undefined
                        }
                        aria-label={labels.filterPlaceholder}
                        placeholder={labels.filterPlaceholder}
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value)
                            setHighlight(0)
                        }}
                        onKeyDown={onTypeAheadKeyDown}
                        onBlur={() => setQuery('')}
                    />
                </SearchField>

                {pinned?.map((entry) => (
                    <Chip
                        key={entry.key}
                        ref={(el) => {
                            if (el) pinnedRefs.current.set(entry.key, el)
                            else pinnedRefs.current.delete(entry.key)
                        }}
                        $editing={pinnedKey === entry.key}
                        role='button'
                        tabIndex={0}
                        aria-expanded={pinnedKey === entry.key}
                        aria-label={labels.editFilter(entry.label)}
                        onClick={() => setPinnedKey(entry.key)}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                setPinnedKey(entry.key)
                            }
                        }}>
                        <ChipLabel>{entry.label}</ChipLabel>
                        <ChipValue title={selectedOptionLabel(entry)}>
                            {selectedOptionLabel(entry) ?? '…'}
                        </ChipValue>
                    </Chip>
                ))}

                {activeDefinitions.map((def) => {
                    const editing = editingKey === def.key
                    const opensOverlay = def.kind === 'select' || def.kind === 'range'
                    return (
                        <Chip
                            key={def.key}
                            ref={setChipRef(def.key)}
                            $editing={editing}
                            role={editing ? undefined : 'button'}
                            tabIndex={editing ? undefined : 0}
                            aria-expanded={opensOverlay ? editing : undefined}
                            aria-label={labels.editFilter(def.label)}
                            onClick={() => !editing && setEditingKey(def.key)}
                            onKeyDown={(event) => !editing && onChipKeyDown(event, def.key)}>
                            <ChipLabel>{def.label}</ChipLabel>
                            {renderChipBody(def)}
                            <ChipClose
                                type='button'
                                aria-label={labels.removeFilter(def.label)}
                                onClick={(event) => {
                                    event.stopPropagation()
                                    onChange(def.key, undefined)
                                    if (editingKey === def.key) setEditingKey(null)
                                }}>
                                <CloseRoundedIcon />
                            </ChipClose>
                        </Chip>
                    )
                })}

                <SuggestionList
                    open={suggestions.length > 0}
                    anchorEl={typeAheadRef.current}
                    listId={typeAheadListId}
                    rows={typeAheadRows}
                    activeIndex={activeIndex}
                    onHighlight={setHighlight}
                    onPick={(index) => {
                        const suggestion = suggestions[index]
                        if (suggestion) commitSuggestion(suggestion)
                    }}
                    loading={valueSuggestions?.loading && !typeAheadValues.length}
                    loadingLabel={labels.searching}
                />

                {/* The same values, offered under an open chip's own input — one field's worth. */}
                {editingKind === 'text' &&
                    editingKey &&
                    editingAnchor &&
                    (chipValues.length > 0 || valueSuggestions?.loading) && (
                        <SuggestionList
                            open
                            anchorEl={editingAnchor}
                            listId={chipListId}
                            rows={chipRows}
                            activeIndex={chipIndex}
                            onHighlight={setChipHighlight}
                            onPick={(index) => {
                                const suggestion = chipValues[index]
                                if (editingDef && suggestion)
                                    commitChipValue(editingDef, suggestion)
                            }}
                            loading={valueSuggestions?.loading && !chipValues.length}
                            loadingLabel={labels.searching}
                        />
                    )}

                {inactiveDefinitions.length > 0 && (
                    <>
                        <Button iconLeft onClick={(event) => setMenuAnchor(event.currentTarget)}>
                            <AddRoundedIcon />
                            {labels.addFilter}
                        </Button>
                        <Menu
                            anchorEl={menuAnchor}
                            open={!!menuAnchor}
                            onClose={() => setMenuAnchor(null)}>
                            {inactiveDefinitions.map((def) => (
                                <MenuItem key={def.key} onClick={() => addFilter(def)}>
                                    {def.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                )}

                {onReset && anyFilterActive(values) && (
                    <IconButton
                        tone='default'
                        tooltipText={labels.clearFilters(activeCount)}
                        onClick={onReset}>
                        <FilterAltOffRoundedIcon />
                    </IconButton>
                )}

                {editingDef?.kind === 'select' && editingKey && (
                    <Menu
                        anchorEl={editingAnchor}
                        open={!!editingAnchor}
                        onClose={() => closeEditor(editingKey)}>
                        {/* The only entry that closes: it says "I am done, and I want everything". */}
                        <MenuItem
                            selected={selectedValues.length === 0}
                            onClick={() => {
                                keepWhenEmpty.current.add(editingDef.key)
                                onChange(editingDef.key, [])
                                setEditingKey(null)
                            }}>
                            <CheckSlot>
                                {selectedValues.length === 0 && <CheckRoundedIcon />}
                            </CheckSlot>
                            {labels.anyValue}
                        </MenuItem>
                        {/* Toggles, so picking two values costs two clicks rather than four */}
                        {editingDef.options?.map((option) => (
                            <MenuItem
                                key={option.value}
                                role='menuitemcheckbox'
                                aria-checked={selectedValues.includes(option.value)}
                                selected={selectedValues.includes(option.value)}
                                onClick={() =>
                                    onChange(
                                        editingDef.key,
                                        toggleValue(selectedValues, option.value)
                                    )
                                }>
                                <CheckSlot>
                                    {selectedValues.includes(option.value) && <CheckRoundedIcon />}
                                </CheckSlot>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Menu>
                )}

                {editingDef?.kind === 'range' && editingKey && (
                    <FilterRangePopover
                        anchorEl={editingAnchor}
                        def={editingDef}
                        value={asRange(values[editingDef.key])}
                        onChange={(range) => onChange(editingDef.key, range)}
                        onClose={() => closeEditor(editingDef.key)}
                    />
                )}

                {pinnedKey && (
                    <Menu
                        anchorEl={pinnedRefs.current.get(pinnedKey) ?? null}
                        open
                        onClose={() => setPinnedKey(null)}>
                        {pinned
                            ?.find((entry) => entry.key === pinnedKey)
                            ?.options.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    selected={
                                        pinned.find((entry) => entry.key === pinnedKey)?.value ===
                                        option.value
                                    }
                                    onClick={() => {
                                        pinned
                                            .find((entry) => entry.key === pinnedKey)
                                            ?.onChange(option.value)
                                        setPinnedKey(null)
                                    }}>
                                    {option.label}
                                </MenuItem>
                            ))}
                    </Menu>
                )}
            </Filters>

            {trailing && <Trailing>{trailing}</Trailing>}
        </Bar>
    )
}

const formatRange = (def: FilterDefinition, range: RangeValue): string => {
    if (isRangeEmpty(range)) return ''
    if (def.rangeType === 'date') {
        // the compact date form, so the chip reads like the column it narrows
        const fmt = (iso?: string) => (iso ? convertDate(iso, DATE_FORMAT.DATE_SHORT) : '…')
        return `${fmt(range.from as string | undefined)} – ${fmt(range.to as string | undefined)}`
    }
    const unit = def.unit ? ` ${def.unit}` : ''
    const from = range.from as number | undefined
    const to = range.to as number | undefined
    if (from !== undefined && to !== undefined) return `${from} – ${to}${unit}`
    if (from !== undefined) return `≥ ${from}${unit}`
    return `≤ ${to}${unit}`
}
