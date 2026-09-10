/**
 * What a filter chip CARRIES, apart from the bar that renders it.
 *
 * A filter bar is one reader of these; whatever encodes a filter elsewhere — a URL, a query — is
 * another, so the vocabulary lives with neither.
 */

/** from/to bounds; numbers for a number range, ISO date strings for a date range. */
export interface RangeValue {
    from?: number | string
    to?: number | string
}

/**
 * A text chip that says more than "contains this" — it EXCLUDES the value ("Location is not room
 * 10"), or matches it WHOLE ("Location is room 105", which is what picking a suggested value means).
 *
 * Both flags are the literal `true` and never a boolean: a plain contains-and-match chip stays a
 * bare string, so there is exactly ONE shape per meaning and no `{ negated: false }` for a reader —
 * or a URL — to disagree with. Build it through `textValue`, never by hand.
 */
export interface TextFilterValue {
    text: string
    negated?: true
    exact?: true
}

/**
 * Value carried by a chip, by kind: text → string (or `TextFilterValue` when it excludes or matches
 * a whole value), select → string[], range → {from,to}.
 */
export type FilterValue = string | TextFilterValue | string[] | RangeValue

export type FilterKind = 'text' | 'select' | 'range'

/**
 * Key of the cross-column chip: a table that can OR its text columns declares a definition under
 * this key and makes it its `primaryKey`, so typing then Enter is a quick lookup across the lot.
 *
 * It lives with the values rather than with a filter bar because a URL codec has to know which chip
 * it is — that chip's value is an EXPRESSION rather than a value, and expressions escape differently
 * (`negationMode` below).
 */
export const QUICK_SEARCH_KEY = 'anyField'

/**
 * HOW a chip says "not this" — one chip, ONE grammar, because a single string cannot carry two.
 *
 * - **`'chip'`** — the chip's own is/is-not state, which is what a per-column chip has: it holds one
 *   value for one field, so the operator belongs to the chip and a `!` inside the value is a literal.
 * - **`'word'`** — the cross-column chip, whose text is an expression over WORDS: `tizen !lobby`
 *   means tizen somewhere and lobby nowhere (Polymer's grammar, and the reason `!` earns its keep —
 *   two chips cannot say it). The exclusions live in the words, so the chip has no operator of its
 *   own and a word that genuinely starts with `!` is written `!!`.
 * - **`'none'`** — a select or a range (a set's neutral state is "Any" and a range has two bounds,
 *   neither of which negates), or a text chip whose page compiles it into a backend PARAMETER: a
 *   parameter has no complement to send, so the `!` stays part of the value there.
 *
 * Two levels of the same grammar on one string is the bug this enum exists to prevent: escaping the
 * chip level un-escapes the word level, and the reader gets the opposite of what they typed.
 */
export type NegationMode = 'chip' | 'word' | 'none'

export const negationMode = (definition: {
    key: string
    kind?: FilterKind
    negatable?: boolean
}): NegationMode => {
    if ((definition.kind ?? 'text') !== 'text' || definition.negatable === false) return 'none'
    return definition.key === QUICK_SEARCH_KEY ? 'word' : 'chip'
}

/**
 * Whether this chip can carry an EXACT value — one it matches whole rather than as a substring.
 *
 * Only a field whose values the bar can OFFER can hold one, because picking a suggested value is the
 * only way to make an exact chip: there is no operator and no syntax for it. That is also what keeps
 * a page that offers no values from ever receiving one through a link — its query builder would have
 * nothing to honour the flag with, and a URL claiming a filter the page cannot apply is worse than
 * one that carries less.
 */
export const canBeExact = (definition: {
    key: string
    kind?: FilterKind
    negatable?: boolean
    suggestable?: boolean
}): boolean => negationMode(definition) === 'chip' && definition.suggestable === true

/**
 * What a text chip asks of a QUERY: the term the reader typed, plus whether they asked for its
 * complement. Every text matcher — the six server query builders and the two local ones — reads a
 * chip through `asTextFilter` and gets this, so none of them parses anything itself.
 */
export interface TextFilter {
    term: string
    negated: boolean
    /**
     * The reader picked this value out of the data, so it is matched WHOLE — absent means the
     * substring reading every typed chip has. A builder that cannot express it simply ignores it,
     * which is safe because only a `suggestable` field can carry one (`canBeExact`).
     */
    exact?: boolean
}

/** Whether a chip carries the object form — anything a bare string cannot say. */
export const isTextObject = (value: FilterValue | undefined): value is TextFilterValue =>
    typeof value === 'object' && value !== null && !Array.isArray(value) && 'text' in value

export const isNegatedText = (value: FilterValue | undefined): boolean =>
    isTextObject(value) && value.negated === true

export const isExactText = (value: FilterValue | undefined): boolean =>
    isTextObject(value) && value.exact === true

export interface TextFlags {
    negated?: boolean
    exact?: boolean
}

/**
 * The canonical text value: a bare string while it matches a substring, the object form once it
 * excludes or names a whole value. Only the true flags are written, so one meaning has one shape.
 */
export const textValue = (text: string, { negated, exact }: TextFlags = {}): FilterValue => {
    if (!negated && !exact) return text
    return {
        text,
        ...(negated ? { negated: true as const } : {}),
        ...(exact ? { exact: true as const } : {})
    }
}

/**
 * What the reader TYPED into a text chip, negation ignored — for displaying it, and for the pages
 * where a chip cannot be negated at all (a search compiled into backend parameters, which have no
 * complement to send).
 *
 * ⚠ Anything that FILTERS wants `asTextFilter`: reading a negated chip through this one would
 * silently apply it as a match, which is the opposite of what the reader asked for.
 */
export const asTextTerm = (value: FilterValue | undefined): string | undefined => {
    const text = isTextObject(value) ? value.text : typeof value === 'string' ? value : undefined
    return text !== undefined && text.trim() !== '' ? text.trim() : undefined
}

/** A text chip as the question a query has to answer, or undefined when it narrows nothing. */
export const asTextFilter = (value: FilterValue | undefined): TextFilter | undefined => {
    const term = asTextTerm(value)
    if (term === undefined) return undefined
    const filter: TextFilter = { term, negated: isNegatedText(value) }
    if (isExactText(value)) filter.exact = true
    return filter
}

/**
 * The `!` grammar — ONE parse, read by a filter bar's type-ahead, by a URL codec and by every
 * per-word quick search.
 *
 * `!room 10` excludes `room 10`; `!!foo` is the literal `!foo`. The rule is PARITY: a value's own
 * leading run of markers is written doubled, so an odd run is the flag plus a doubled run and an
 * even run is a doubled run alone. That is what makes every string both writable and readable — a
 * value genuinely starting with `!` is reachable, which a bare "leading bang means not" cannot do.
 */

/** The negation flag, in a chip's value and in the type-ahead alike. */
const NEGATION = '!'

/** The exact flag — "this value whole", which is what picking a suggested value commits. */
const EXACT = '='

const leadingRun = (raw: string, marker: string): number => {
    let run = 0
    while (raw[run] === marker) run += 1
    return run
}

/** A marker's leading run, read by parity: the flag it may set, the run the VALUE owns, the rest. */
const peelMarker = (raw: string, marker: string): { flag: boolean; own: string; rest: string } => {
    const run = leadingRun(raw, marker)
    const flag = run % 2 === 1
    return {
        flag,
        own: marker.repeat(flag ? (run - 1) / 2 : run / 2),
        rest: raw.slice(run)
    }
}

const writeMarker = (term: string, marker: string, flag: boolean): string => {
    const run = leadingRun(term, marker)
    return marker.repeat(flag ? run * 2 + 1 : run * 2) + term.slice(run)
}

export const parseNegation = (raw: string): TextFilter => {
    const { flag, own, rest } = peelMarker(raw, NEGATION)
    return { term: own + rest, negated: flag }
}

/** The inverse of `parseNegation` — what a word, or a chip that cannot be exact, looks like. */
export const formatNegation = ({ term, negated }: TextFilter): string =>
    writeMarker(term, NEGATION, negated)

/**
 * The whole per-column chip grammar: the negation run, then the exact one.
 *
 * Two markers rather than one because a suggested value commits BOTH facts at once ("Location is
 * not room 105"), and they are orthogonal. They are peeled in a fixed order and each is escaped by
 * its own parity, so neither can un-escape the other — the trap a chip carrying two levels of the
 * SAME grammar falls into. Only a chip that {@link canBeExact} is read this way.
 */
export const parseTextValue = (raw: string): TextFilter => {
    const negation = peelMarker(raw, NEGATION)
    const exact = peelMarker(negation.rest, EXACT)
    return {
        term: negation.own + exact.own + exact.rest,
        negated: negation.flag,
        exact: exact.flag
    }
}

export const formatTextValue = ({ term, negated, exact }: TextFilter): string => {
    const bangs = leadingRun(term, NEGATION)
    const afterBangs = term.slice(bangs)
    const equals = leadingRun(afterBangs, EXACT)
    return (
        NEGATION.repeat(negated ? bangs * 2 + 1 : bangs * 2) +
        EXACT.repeat(exact ? equals * 2 + 1 : equals * 2) +
        afterBangs.slice(equals)
    )
}
