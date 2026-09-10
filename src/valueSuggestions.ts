/**
 * The vocabulary of a filter bar's type-ahead VALUE rows: the values a field actually holds, offered
 * under what the reader is typing.
 *
 * WHERE those values come from is the consumer's — an aggregation over a collection, the rows a
 * locally-filtered table already holds — so nothing here reads any data. The bar renders the rows
 * and reports the draft; the consumer answers.
 */

/** One value the data actually holds, and the field it belongs to. */
export interface ValueSuggestion {
    /** The chip this value commits into — a `suggestable` definition's own key. */
    key: string
    /** The value to offer and to commit. */
    value: string
    /** How many records carry it — the ranking signal, shown only when it says something (> 1). */
    count: number
}

/** What the consumer hands the bar: the values for a term, and whether more are still coming. */
export interface ValueSuggestions {
    /** The term these values answer for — a settled draft, which lags the live input. */
    term: string
    /** The chip they belong to, or undefined when they answer the cross-column type-ahead. */
    key?: string
    values: ValueSuggestion[]
    loading: boolean
}

/** What the reader is typing, and where — the bar's report, and the consumer's question. */
export interface FilterDraft {
    /** The open chip's key, or undefined while the reader is in the cross-column type-ahead. */
    key?: string
    term: string
}

/** How many value rows the dropdown offers, inside its own overall cap. */
export const MAX_VALUE_SUGGESTIONS = 5
