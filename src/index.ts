/**
 * The package's public surface, declared name by name.
 *
 * Every name below is a promise to the projects that install this package, so the list is written
 * out rather than gathered with `export *`: a helper that starts life inside one component has to be
 * ADDED here on purpose, and `api.test.ts` pins the whole set so either direction shows up as a diff
 * in review. What is not named here is the library's own business and may change freely.
 *
 * The groups are the questions a consumer asks in order: what do I wire once, what does a table read
 * off my theme, which of my controls does it borrow, what do I mount, and what vocabulary do the
 * props speak.
 */

// Wiring
export { TableProvider, useTableRuntime } from './TableProvider'
export type { TableProviderProps, TableRuntime } from './TableProvider'
export { LabelsProvider, useLabels, useTranslate } from './labels/LabelsProvider'
export type { LabelsProviderProps, Translate } from './labels/LabelsProvider'
export { englishLabels, withLabelOverrides } from './labels/labels'
export type { LabelOverrides, Labels, SelectionLabels } from './labels/labels'

// The theme a table reads its tokens off
export { defaultTableTheme } from './theme/tableTheme'
export type {
    TableChipTokens,
    TableChromeTokens,
    TableDialogTokens,
    TableInputTokens,
    TableScrollbarTokens,
    TableSelectedTokens,
    TableSurfaceTokens,
    TableTheme
} from './theme/tableTheme'

// The controls a table borrows from its host
export { SlotsProvider, useTableSlots } from './slots/SlotsProvider'
export type { SlotsProviderProps } from './slots/SlotsProvider'
export { defaultTableSlots } from './slots/defaultTableSlots'
export type {
    TableButtonProps,
    TableButtonTone,
    TableCalloutProps,
    TableCheckboxProps,
    TableContextMenuProps,
    TableCopyButtonProps,
    TableDatePickerProps,
    TableIconButtonProps,
    TableIconButtonTone,
    TableMenuItem,
    TableMenuItemProps,
    TableMenuSurfaceProps,
    TableSlots,
    TableSuggestionListBoxProps,
    TableSuggestionPopperProps,
    TableTextInputProps,
    TableTooltipProps
} from './slots/tableSlots'

// The tables themselves
export { CrudTable } from './components/Table/CrudTable'
export type {
    CrudTablePaging,
    CrudTablePagination,
    CrudTableProps,
    CrudTableSelection,
    CrudTableSorting
} from './components/Table/CrudTable'
export { DataGrid } from './components/DataGrid/DataGrid'
export type { DataGridProps } from './components/DataGrid/DataGrid'
export type { DataGridTheme } from './components/DataGrid/dataGridTheme'
export type { DataGridExpandable } from './components/DataGrid/Expandable'
export {
    GRID_HEADER_GROUND_VAR,
    GRID_HEADER_ROW_HEIGHT,
    GRID_PAGE_SIZE,
    useGridPresentation,
    useGridTotalLabel
} from './components/Table/useGridPresentation'
export type { GridPresentation } from './components/Table/useGridPresentation'
export { usePagination } from './components/DataGrid/hooks/usePagination'

// The chrome around a table
export { GridPage, GridPageBody } from './components/Table/GridPage'
export { GridEmptyState } from './components/Table/GridEmptyState'
export type { GridEmptyStateProps } from './components/Table/GridEmptyState'
export { GridInDialog, GridInDialogLayout } from './components/Table/gridInDialog'
export type { GridInDialogProps } from './components/Table/gridInDialog'
export { GridToolbar } from './components/Table/GridToolbar'
export type {
    GridToolbarAction,
    GridToolbarProps,
    GridToolbarRefresh,
    TableFilterState
} from './components/Table/GridToolbar'
export type { DeleteSelectedButtonProps } from './components/Table/DeleteSelectedButton'

// Columns: what a table is made of
export { ColumnType, FilterType } from './components/DataGrid/types'
export type { ColumnDefinition, RowDefinition } from './components/DataGrid/types'
export { ACTIONS_COLUMN_KEY, rowActionsColumn } from './components/Table/rowActions'
export type { RowActionsColumnOptions } from './components/Table/rowActions'
export { FROZEN_COLUMNS_WIDTH, TruncatingCell, truncated } from './components/Table/gridCells'
export { cappedTrack, flexTrack } from './components/DataGrid/layout/columnWidths'

// Cells
export {
    CHIP_LINE_HEIGHT,
    ChipListCell,
    chipListLines
} from './components/Table/cells/ChipListCell'
export type {
    ChipColors,
    ChipListCellProps,
    ChipListItem
} from './components/Table/cells/ChipListCell'
export { CopyCell } from './components/Table/cells/CopyCell'
export type { CopyCellProps } from './components/Table/cells/CopyCell'
export { CountBarCell } from './components/Table/cells/CountBarCell'
export type { CountBarCellProps, CountBarVariant } from './components/Table/cells/CountBarCell'
export { InheritedCell } from './components/Table/cells/InheritedCell'
export type { InheritedCellProps } from './components/Table/cells/InheritedCell'
export { RelativeTimeCell } from './components/Table/cells/RelativeTimeCell'
export type { RelativeTimeCellProps } from './components/Table/cells/RelativeTimeCell'
export { StatusCell } from './components/Table/cells/StatusCell'
export type { StatusCellProps } from './components/Table/cells/StatusCell'
export { TwoLineCell } from './components/Table/cells/TwoLineCell'
export type { TwoLineCellProps } from './components/Table/cells/TwoLineCell'

// Filters
export {
    anyFilterActive,
    asRange,
    asValues,
    FilterBar,
    isFilterValueActive,
    seedFilters
} from './components/Table/FilterBar/FilterBar'
export type {
    FilterBarProps,
    FilterDefinition,
    PinnedFilter
} from './components/Table/FilterBar/FilterBar'
export {
    asTextFilter,
    asTextTerm,
    canBeExact,
    formatNegation,
    formatTextValue,
    isExactText,
    isNegatedText,
    isTextObject,
    negationMode,
    parseNegation,
    parseTextValue,
    QUICK_SEARCH_KEY,
    textValue
} from './filterValue'
export type {
    FilterKind,
    FilterValue,
    NegationMode,
    RangeValue,
    TextFilter,
    TextFilterValue,
    TextFlags
} from './filterValue'
export { MAX_VALUE_SUGGESTIONS } from './valueSuggestions'
export type { FilterDraft, ValueSuggestion, ValueSuggestions } from './valueSuggestions'

// Selection
export {
    ALL_MATCHING_SELECTED,
    excludedCount,
    idsSelection,
    isSelected,
    knownSelectedIds,
    NOTHING_SELECTED,
    selectedOnPage,
    selectionSize,
    toggledMatching,
    toggledSelection,
    withPageSelection,
    withSelectedId,
    withoutIds
} from './selection'
export type { MatchingSelection } from './selection'

/**
 * The react-data-grid names a consumer of THIS package ends up holding — a sort state it keeps, a
 * cell renderer it writes. Named one by one rather than re-exported wholesale: rdg's own surface
 * carries names as generic as `Row`, `Cell` and `Column`, and star-exporting it would make every one
 * of them this package's promise, and every rdg upgrade a breaking change of ours.
 */
export type { RenderCellProps, SortColumn } from 'react-data-grid'
