/**
 * Every fixed string a component of this library shows, typed by what it needs to say it.
 *
 * The library has no i18n of its own: a consumer hands its translations to `LabelsProvider` once,
 * and every component reads them from there. A label that varies with a count or a name is a
 * FUNCTION rather than a template string, so the consumer's own pluralisation and interpolation
 * (i18next, ICU, hand-written) apply without the library knowing which one it is.
 */
export interface SelectionLabels {
    /** The banner's own name — a heading, a region label. */
    band: string
    clear: string
    picked: (count: number) => string
    selectAllMatching: (count: number) => string
    allMatchingSelected: (count: number) => string
    allMatchingSelectedExcept: (count: number, total: number) => string
}

export interface Labels {
    addFilter: string
    clear: string
    clearFilters: (count: number) => string
    clickToCopy: string
    copied: string
    columnMovedTo: (column: string, position: number, total: number) => string
    editFilter: (label: string) => string
    removeFilter: (label: string) => string
    excludeFilterHint: string
    filterPlaceholder: string
    from: string
    to: string
    min: string
    max: string
    hideShowColumns: string
    /** The word between a page's first and last row number and the total: "1–25 of 300". */
    of: string
    resetColumnLayout: string
    rowsPerPage: string
    searching: string
    selectAll: string
    totalRows: (count: number) => string
    anyValue: string
    suggestionContains: (label: string, value: string) => string
    suggestionNotContains: (label: string, value: string) => string
    suggestionIs: (label: string, value: string) => string
    suggestionIsNot: (label: string, value: string) => string
    filterIs: string
    filterIsNot: string
    moreActions: string
    chooseDate: string
    selection: SelectionLabels
}

export const englishLabels: Labels = {
    addFilter: 'Add filter',
    clear: 'Clear',
    clearFilters: (count) => (count === 1 ? 'Clear the filter' : `Clear the ${count} filters`),
    clickToCopy: 'Click to copy',
    copied: 'Copied to the clipboard',
    columnMovedTo: (column, position, total) =>
        `${column} moved to position ${position} of ${total}`,
    editFilter: (label) => `Edit the ${label} filter`,
    removeFilter: (label) => `Remove the ${label} filter`,
    excludeFilterHint: 'Match or exclude this value',
    filterPlaceholder: 'Filter…',
    from: 'From',
    to: 'To',
    min: 'Min',
    max: 'Max',
    hideShowColumns: 'Show or hide columns',
    of: 'of',
    resetColumnLayout: 'Reset column layout',
    rowsPerPage: 'Rows per page:',
    searching: 'Searching…',
    selectAll: 'Select all',
    totalRows: (count) => (count === 1 ? '1 item' : `${count} items`),
    anyValue: 'Any',
    suggestionContains: (label, value) => `${label} contains "${value}"`,
    suggestionNotContains: (label, value) => `${label} does not contain "${value}"`,
    suggestionIs: (label, value) => `${label} is "${value}"`,
    suggestionIsNot: (label, value) => `${label} is not "${value}"`,
    filterIs: 'is',
    filterIsNot: 'is not',
    moreActions: 'More actions',
    chooseDate: 'Choose a date',
    selection: {
        band: 'Selection',
        clear: 'Clear selection',
        picked: (count) => (count === 1 ? 'One row is selected.' : `${count} rows are selected.`),
        selectAllMatching: (count) =>
            count === 1 ? 'Select the matching row' : `Select all ${count} matching rows`,
        allMatchingSelected: (count) =>
            count === 1
                ? 'The matching row is selected.'
                : `All ${count} matching rows are selected.`,
        allMatchingSelectedExcept: (count, total) =>
            count === 1
                ? `All ${total} matching rows are selected, except one.`
                : `All ${total} matching rows are selected, except ${count}.`
    }
}

/** What a consumer passes: any subset, the English default filling the rest. */
export type LabelOverrides = Partial<Omit<Labels, 'selection'>> & {
    selection?: Partial<SelectionLabels>
}

export const withLabelOverrides = (overrides?: LabelOverrides): Labels =>
    overrides
        ? {
              ...englishLabels,
              ...overrides,
              selection: { ...englishLabels.selection, ...overrides.selection }
          }
        : englishLabels
