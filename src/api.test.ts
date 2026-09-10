import { describe, expect, it } from 'vitest'
import * as api from './index'
import entryPointSource from './index.ts?raw'

/**
 * The package's public surface, as a list.
 *
 * Every name here is a promise to a project that installed this package: renaming or removing one
 * breaks a build somewhere else, and adding one commits us to keeping it. The list therefore lives
 * in the test rather than being derived from the code — it is the review's chance to ask whether a
 * new public name is meant to be public, and its chance to catch a removed one before a consumer
 * does.
 *
 * A failure here is not a bug: it is the diff. Read what moved, decide, then update the list in the
 * same commit as the change.
 */
const PUBLIC_VALUES = [
    'ACTIONS_COLUMN_KEY',
    'ALL_MATCHING_SELECTED',
    'CHIP_LINE_HEIGHT',
    'ChipListCell',
    'ColumnType',
    'CopyCell',
    'CountBarCell',
    'CrudTable',
    'DataGrid',
    'FROZEN_COLUMNS_WIDTH',
    'FilterBar',
    'FilterType',
    'GRID_HEADER_GROUND_VAR',
    'GRID_HEADER_ROW_HEIGHT',
    'GRID_PAGE_SIZE',
    'GridEmptyState',
    'GridInDialog',
    'GridInDialogLayout',
    'GridPage',
    'GridPageBody',
    'GridToolbar',
    'InheritedCell',
    'LabelsProvider',
    'MAX_VALUE_SUGGESTIONS',
    'NOTHING_SELECTED',
    'QUICK_SEARCH_KEY',
    'RelativeTimeCell',
    'SlotsProvider',
    'StatusCell',
    'TableProvider',
    'TruncatingCell',
    'TwoLineCell',
    'anyFilterActive',
    'asRange',
    'asTextFilter',
    'asTextTerm',
    'asValues',
    'canBeExact',
    'cappedTrack',
    'chipListLines',
    'defaultTableSlots',
    'defaultTableTheme',
    'englishLabels',
    'excludedCount',
    'flexTrack',
    'formatNegation',
    'formatTextValue',
    'idsSelection',
    'isExactText',
    'isFilterValueActive',
    'isNegatedText',
    'isSelected',
    'isTextObject',
    'knownSelectedIds',
    'negationMode',
    'parseNegation',
    'parseTextValue',
    'rowActionsColumn',
    'seedFilters',
    'selectedOnPage',
    'selectionSize',
    'textValue',
    'toggledMatching',
    'toggledSelection',
    'truncated',
    'useGridPresentation',
    'useGridTotalLabel',
    'useLabels',
    'usePagination',
    'useTableRuntime',
    'useTableSlots',
    'useTranslate',
    'withLabelOverrides',
    'withPageSelection',
    'withSelectedId',
    'withoutIds'
]

/** The same promise for the names that exist only at compile time. */
const PUBLIC_TYPES = [
    'ChipColors',
    'ChipListCellProps',
    'ChipListItem',
    'ColumnDefinition',
    'CopyCellProps',
    'CountBarCellProps',
    'CountBarVariant',
    'CrudTablePagination',
    'CrudTablePaging',
    'CrudTableProps',
    'CrudTableSelection',
    'CrudTableSorting',
    'DataGridExpandable',
    'DataGridProps',
    'DataGridTheme',
    'DeleteSelectedButtonProps',
    'FilterBarProps',
    'FilterDefinition',
    'FilterDraft',
    'FilterKind',
    'FilterValue',
    'GridEmptyStateProps',
    'GridInDialogProps',
    'GridPresentation',
    'GridToolbarAction',
    'GridToolbarProps',
    'GridToolbarRefresh',
    'InheritedCellProps',
    'LabelOverrides',
    'Labels',
    'LabelsProviderProps',
    'MatchingSelection',
    'NegationMode',
    'PinnedFilter',
    'RangeValue',
    'RelativeTimeCellProps',
    'RenderCellProps',
    'RowActionsColumnOptions',
    'RowDefinition',
    'SelectionLabels',
    'SlotsProviderProps',
    'SortColumn',
    'StatusCellProps',
    'TableButtonProps',
    'TableButtonTone',
    'TableCalloutProps',
    'TableCheckboxProps',
    'TableChipTokens',
    'TableChromeTokens',
    'TableContextMenuProps',
    'TableCopyButtonProps',
    'TableDatePickerProps',
    'TableDialogTokens',
    'TableFilterState',
    'TableIconButtonProps',
    'TableIconButtonTone',
    'TableInputTokens',
    'TableMenuItem',
    'TableMenuItemProps',
    'TableMenuSurfaceProps',
    'TableProviderProps',
    'TableRuntime',
    'TableScrollbarTokens',
    'TableSelectedTokens',
    'TableSlots',
    'TableSuggestionListBoxProps',
    'TableSuggestionPopperProps',
    'TableSurfaceTokens',
    'TableTextInputProps',
    'TableTheme',
    'TableTooltipProps',
    'TextFilter',
    'TextFilterValue',
    'TextFlags',
    'Translate',
    'TwoLineCellProps',
    'ValueSuggestion',
    'ValueSuggestions'
]

/**
 * The type-only names the entry point declares.
 *
 * A type leaves nothing behind at run time to enumerate, so the entry point is read as SOURCE —
 * which is what a reviewer reads too, and it carries its type exports as plain `export type { … }`
 * blocks by design.
 */
const declaredTypeExports = (): string[] =>
    [...entryPointSource.matchAll(/export type \{([^}]*)\} from/g)]
        .flatMap((match) => match[1].split(','))
        .map((name) => name.trim())
        .filter(Boolean)
        .sort()

describe('the public API', () => {
    it('exports exactly the values on the list', () => {
        expect(Object.keys(api).sort()).toEqual(PUBLIC_VALUES)
    })

    it('exports exactly the types on the list', () => {
        expect(declaredTypeExports()).toEqual(PUBLIC_TYPES)
    })

    // A star re-export makes another package's whole surface ours, on names as generic as `Row` and
    // `Cell`, and every upgrade of it a breaking change of ours.
    it('re-exports nothing wholesale', () => {
        expect(entryPointSource).not.toMatch(/^export \*/m)
    })
})
