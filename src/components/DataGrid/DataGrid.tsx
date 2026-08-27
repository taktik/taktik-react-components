import React, {
    Key,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef
} from 'react'
import {
    CalculatedColumn,
    CellMouseArgs,
    CellMouseEvent,
    DataGrid as Grid,
    DataGridProps as DataGridPropsFromLib,
    RenderCheckboxProps,
    RenderRowProps,
    Renderers,
    SortColumn
} from 'react-data-grid'
import { DataGridTheme, defaultTheme } from './dataGridTheme'
import { Container } from './Container'
import { VisibilityMenu } from './VisibilityColumnChooser'
import styled from '@emotion/styled'
import { ColumnDefinition, RowDefinition } from './types'
import { useLocalSorting } from './hooks/useLocalSorting'
import { useComputeFinalColumns } from './hooks/useComputeFinalColumns'
import { DataGridCheckbox } from './DataGridCheckbox'
import 'react-data-grid/lib/styles.css'
import { taktikTheme } from '../theme'
import { PulseLoader } from 'react-spinners'
import { FilterProvider, Filters } from './FilterProvider'
import { useLocalFiltering } from './hooks/useLocalFiltering'
import { Pagination, Props as PaginationProps } from './Pagination'
import { PaginationControl, usePagination } from './hooks/usePagination'
import { VisibilityContext, VisibilityProvider } from './VisibilityProvider'
import {
    clickBelongsToRow,
    DataGridExpandable,
    DEFAULT_DETAIL_HEIGHT,
    detailAwareRowHeight,
    detailRowClass,
    toggleExpanded,
    withDetailRendering,
    withDetailRows
} from './Expandable'

export * from 'react-data-grid'
/* The expandable-rows PUBLIC surface: the composition entry points, the behaviour helpers a
   consumer's tests may pin (row classing, heights, click handling), and the two column
   identifiers. The styled fragments and remaining internals are implementation — a barrel
   `export *` would freeze them as API. */
export {
    withDetailRows,
    withDetailRendering,
    isDetailRow,
    detailRowClass,
    detailAwareRowHeight,
    clickBelongsToRow,
    clickExpandsRow,
    ExpanderToggle,
    SELECTION_COLUMN_KEY,
    EXPANDER_COLUMN_KEY
} from './Expandable'
export type { DataGridExpandable } from './Expandable'

/** The row rhythm every grid shares unless a consumer overrides it. */
const DEFAULT_ROW_HEIGHT = 50

/**
 * What the row answers to a mouse, for the whole row rather than one cell — a click opening the
 * record it stands for. The grid decides WHERE a gesture counts, not the consumer (see
 * `clickBelongsToRow`): a checkbox, an expander chevron, a link or a button inside a cell keeps
 * answering for itself, and a detail row is never a handle.
 */
export interface DataGridRowGestures<Row extends RowDefinition> {
    /**
     * A single click on the row. On an `expandable` grid, expanding the row is what a click does
     * unless this replaces it — a consumer that sets it owns the gesture, and the chevron stays as
     * the way to open a detail.
     */
    onClick?: (row: Row) => void
    /**
     * Columns whose cells belong to themselves rather than to the row, on top of the selection and
     * expander cells the grid already knows. A row-actions column is the case: its kebab does not
     * fill the cell, so a click in the padding beside it would otherwise act on the row.
     */
    excludedColumns?: string[]
}

/**
 * What a consumer's own row renderer is handed: react-data-grid's row props, plus the row's columns
 * as a plain array.
 *
 * react-data-grid hands a row a GENERATOR FACTORY rather than an array, so that a row can be built
 * without materialising anything. A consumer answering the mouse needs the list itself — which
 * column a hovered element sits in is a question about the whole row — and materialising it inside
 * the renderer would allocate one array per row per render, on the hottest path the grid has. The
 * grid does it once instead: the factory is stable for as long as the column layout is, so one array
 * serves every row until the columns, the scroll position or the viewport change it.
 */
export interface DataGridRenderRowProps<Row> extends RenderRowProps<Row> {
    /**
     * The row's columns in the order react-data-grid laid them out, which is not the order they were
     * declared in — and under column virtualization, only the ones it is rendering.
     *
     * ⚠ Not a DOM attribute: a consumer spreading these props onto an element drops this one first.
     */
    viewportColumns: readonly CalculatedColumn<Row, unknown>[]
}

export type DataGridRenderers<Row> = Omit<Renderers<Row, unknown>, 'renderRow'> & {
    renderRow?: (key: Key, props: DataGridRenderRowProps<Row>) => ReactNode
}

export type DataGridProps<Row extends RowDefinition> = Omit<
    DataGridPropsFromLib<Row>,
    'columns' | 'rows' | 'selectedRows' | 'onSelectedRowsChange' | 'onColumnResize' | 'renderers'
> & {
    /** See {@link DataGridRenderRowProps} for what `renderRow` is handed on top of the library's own props. */
    renderers?: DataGridRenderers<Row>
    /**
     * A column the user dragged wider or narrower, by KEY and in pixels, reported on every step of
     * the drag.
     *
     * react-data-grid reports the resize by COLUMN, and the grid's own array is not the one the
     * consumer handed it — the selection (or expander) column is injected, the visibility feature has
     * already dropped the hidden ones, and react-data-grid re-orders what is left. The key is the one
     * identifier that means the same thing on both sides, so that is what a consumer is given.
     *
     * A consumer PERSISTING a width wants `columnWidths`/`onColumnWidthsChange` instead: those report
     * once, when the drag settles.
     */
    onColumnResize?: (columnKey: string, width: number) => void
    selectable?: boolean
    /**
     * Accessible name of the header's select-all checkbox — override it to match the consumer's
     * language, or to say what is being selected ("Select all devices").
     */
    selectAllLabel?: string
    defaultSortColumns?: SortColumn[]
    /**
     * Whether the GRID orders the rows — a different question from where the sort VALUE lives, and
     * the grid used to answer both with one prop.
     *
     * Handing over `onSortColumnsChange` means the consumer holds the value, and until this existed
     * it also meant the grid stopped ordering the rows: a consumer keeping its sort somewhere it
     * survives a remount (a URL, a store) got a header that moved and rows that did not. Set it
     * `true` alongside `sortColumns`/`onSortColumnsChange` and the grid still sorts the rows it
     * holds, exactly as it does when it owns the value — the sorting counterpart of
     * `pagination.control`, which lets a consumer own the page without giving up the slicing.
     *
     * Omitted, it is inferred as it always was: the grid sorts unless the consumer took the value,
     * which is the right answer for a grid the SERVER orders and pages.
     */
    sortRowsLocally?: boolean
    columns: ColumnDefinition<Row>[]
    rows: Row[]
    theme?: DataGridTheme
    loading?: boolean
    selectedRows?: string[]
    onSelectedRowsChange?: (rows: string[]) => void
    /**
     * Rendered centered in the empty grid body when there are no rows (and not loading). A string
     * shows as a plain message; pass a node for a richer empty state (icon + title + hint).
     */
    noDataMessage?: React.ReactNode
    filters?: Filters
    setFilters?: (filters: Filters) => void
    pagination?: {
        enabled?: boolean
        defaultPageSize?: number
        remotePagination?: PaginationProps
        /** Footer wording ("Rows per page", "of"); applies to local and remote pagination alike. */
        labels?: PaginationProps['labels']
        /**
         * What the table holds, at the footer's LEFT end ("58 devices") — the counterpart of the
         * pager's own "1-25 of 58". It is called with the count the pager is counting, so the two
         * cannot disagree; the library has no i18n, so the caller words it.
         */
        totalLabel?: PaginationProps['totalLabel']
        /**
         * Controls the LOCAL pager, in the ordinary React shape — pass a value and a callback and
         * the consumer owns that piece of state, pass neither and the grid keeps it as it always
         * has. It is what lets a locally-paged grid put its page somewhere the grid cannot see (a
         * URL, a store) without giving up the slicing it does for you; `remotePagination` remains
         * the separate answer for a grid the SERVER pages.
         */
        control?: PaginationControl
    }
    visibilityColumnFeature?: {
        enabled?: boolean
        visibilityFeatureDisabledFor?: string[]
        /**
         * Columns hidden until the user says otherwise, read once per storage key. Compared by
         * value, so an inline array is safe — the identity of the one passed does not matter.
         */
        hiddenByDefault?: string[]
        localStorageKey?: string
        /**
         * Already translated by the consumer — the library has no i18n. Passing it adds a final
         * "reset column layout" item to the chooser's menu; omitting it leaves the menu as it was.
         */
        resetLabel?: string
        /**
         * Runs when the USER hides or shows a column, never when a grid reads the stored set on
         * mount — for a page holding several tables over one schema, which want one answer between
         * them. Feeding the reported set back as `hiddenByDefault` re-reads it in every sibling.
         */
        onHiddenColumnsChange?: (hiddenColumns: string[]) => void
        /**
         * Runs when the user picks the reset item. "Reset column layout" is ONE way back for every
         * stored layout, so a consumer keeping a second one of its own (the widths its columns were
         * dragged to) clears it from here rather than growing a second menu item beside this one.
         */
        onReset?: () => void
    }
    /**
     * Master-detail rows: an open row is followed by one of its own, spanning the grid's width.
     * Expansion state belongs to the consumer, so it survives a re-render of the grid and can be
     * driven from outside it (a url, a "expand all").
     */
    expandable?: DataGridExpandable<Row>
    /** What the whole row answers to a click. */
    rowGestures?: DataGridRowGestures<Row>
}

const ContainerLoading = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

/** The translucent veil the spinner turns over; out of flow, so the spinner stays centred. */
const LoadingScrim = styled.div`
    background-color: ${taktikTheme.primary500};
    opacity: 0.1;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`

const RenderCheckbox = React.memo(
    ({ checked, onChange, 'aria-label': ariaLabel }: RenderCheckboxProps) => {
        const onChangeFn = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
                onChange(checked, (event.nativeEvent as MouseEvent).shiftKey)
            },
            [onChange]
        )
        return (
            <DataGridCheckbox
                checked={checked}
                slotProps={{ input: { 'aria-label': ariaLabel } }}
                onChange={onChangeFn}
            />
        )
    }
)

const renderDefaultCheckbox = (props: RenderCheckboxProps) => <RenderCheckbox {...props} />

/** What a select-all checkbox says when the consumer does not name it. */
const DEFAULT_SELECT_ALL_LABEL = 'Select all rows'

const DataGridBase = <R extends RowDefinition = RowDefinition>({
    theme,
    loading,
    rows,
    columns,
    sortColumns,
    onSortColumnsChange,
    defaultSortColumns,
    sortRowsLocally,
    selectedRows,
    onSelectedRowsChange,
    selectAllLabel = DEFAULT_SELECT_ALL_LABEL,
    noDataMessage,
    filters,
    setFilters,
    pagination,
    renderers,
    expandable,
    rowGestures,
    rowHeight,
    rowClass,
    onCellClick,
    onColumnResize,
    columnWidths,
    onColumnWidthsChange,
    ...rest
}: DataGridProps<R>) => {
    const { gridKey } = useContext(VisibilityContext)
    const { pageSize, currentPage, setCurrentPage, setPageSize } = usePagination(
        pagination?.defaultPageSize,
        pagination?.control
    )

    const renderCheckbox = renderers?.renderCheckbox ?? renderDefaultCheckbox

    const finalColumns = useComputeFinalColumns({
        columns,
        // The expand toggle rides in the selection cell, ahead of the checkbox
        expandable,
        selectionEnabled: !!onSelectedRowsChange,
        selectableRows: rows,
        selectedRows,
        onSelectedRowsChange,
        renderCheckbox,
        selectAllLabel
    })

    // react-data-grid caches each measured flexible-column width by column key and only
    // re-measures on a grid *width* change, so when the column set changes after first paint
    // (the injected selection column arriving once data loads, a column added or removed by
    // the page) the stale widths make the grid wider or narrower than its container by exactly
    // the added/removed columns' width. Remount the grid whenever the column set changes —
    // the same idiom the visibility feature uses through gridKey.
    const columnsKey = useMemo(() => finalColumns.map((col) => col.key).join('|'), [finalColumns])

    const filtersEnabled = useMemo(
        () => finalColumns.some((col) => col.filterEnabled),
        [finalColumns]
    )
    const isLocalPagination = useMemo(
        () => pagination?.enabled && !pagination.remotePagination,
        [pagination]
    )

    const isLocalFiltering = useMemo(() => !setFilters, [setFilters])

    const rowsFiltered = useLocalFiltering({
        columns: finalColumns,
        rows,
        enabled: isLocalFiltering
    })

    /** Where the sort VALUE lives: with the consumer from the moment it hands over a callback. */
    const isLocalSorting = useMemo(() => !onSortColumnsChange, [onSortColumnsChange])
    /** Who ORDERS THE ROWS — see `sortRowsLocally`, which is the consumer's answer when it has one. */
    const sortsRowsHere = sortRowsLocally ?? isLocalSorting

    const {
        sortedRows: sortedRows,
        sortColumns: localSortColumns,
        setSortedColumns: localSetSortedColumns
    } = useLocalSorting({
        columns: finalColumns,
        rows: rowsFiltered,
        defaultSortColumns,
        sortColumns: isLocalSorting ? undefined : sortColumns,
        enabled: sortsRowsHere
    })

    // The row set can shrink under the current page (a filter narrows it, rows are deleted). Slicing
    // past the end would render an empty grid — and the consumer's "no results" message — while
    // matches exist, so fall back to the last page that still holds rows.
    const safePage = useMemo(() => {
        if (!isLocalPagination) {
            return currentPage
        }
        const lastPage = Math.max(0, Math.ceil(rowsFiltered.length / pageSize) - 1)
        return Math.min(currentPage, lastPage)
    }, [isLocalPagination, currentPage, pageSize, rowsFiltered.length])

    useEffect(() => {
        if (safePage !== currentPage) {
            setCurrentPage(safePage)
        }
    }, [safePage, currentPage, setCurrentPage])

    const rowsToDisplay = useMemo(() => {
        if (isLocalPagination) {
            return sortedRows.slice(safePage * pageSize, (safePage + 1) * pageSize)
        }
        return sortedRows
    }, [sortedRows, isLocalPagination, safePage, pageSize])

    // Detail rows are injected LAST, after filtering, sorting and the page slice: a synthetic row
    // added any earlier would be sorted away from its parent and counted by the pager.
    const rowsWithDetails = useMemo(
        () => (expandable ? withDetailRows(rowsToDisplay, expandable.expandedIds) : rowsToDisplay),
        [expandable, rowsToDisplay]
    )

    const displayColumns = useMemo(
        () =>
            expandable ? withDetailRendering(finalColumns, expandable.renderDetail) : finalColumns,
        [expandable, finalColumns]
    )

    const reportColumnResize = useCallback(
        (column: CalculatedColumn<R, unknown>, width: number) =>
            onColumnResize?.(column.key, width),
        [onColumnResize]
    )

    /**
     * A measured width belongs to the column set it was measured in. react-data-grid only
     * re-measures on a grid WIDTH change, so a width map handed back after the column set changed
     * keeps every surviving column at the size it had beside its old neighbours — and the grid ends
     * up wider or narrower than its container by exactly the columns that came or went. Dropping the
     * measurements and keeping only what the user DRAGGED is what asks for a fresh measurement;
     * a dragged width is the user's answer and survives.
     */
    const measuredFor = useRef(columnsKey)
    useLayoutEffect(() => {
        if (measuredFor.current === columnsKey) {
            return
        }
        measuredFor.current = columnsKey
        if (!columnWidths || !onColumnWidthsChange) {
            return
        }
        const dragged = new Map([...columnWidths].filter(([, width]) => width.type === 'resized'))
        if (dragged.size !== columnWidths.size) {
            onColumnWidthsChange(dragged)
        }
    }, [columnsKey, columnWidths, onColumnWidthsChange])

    /**
     * The consumer's row renderer, handed the row's columns as an array — see
     * {@link DataGridRenderRowProps}. Cached on the identity of react-data-grid's own iterator
     * factory, which is what changes when the column layout does, so the array is built once per
     * layout rather than once per row.
     */
    const { renderRow: consumerRenderRow, ...consumerRenderers } = renderers ?? {}
    const viewportColumns = useRef<{
        iterate: unknown
        columns: readonly CalculatedColumn<R, unknown>[]
    }>(undefined)
    const renderRow = useMemo(() => {
        if (!consumerRenderRow) {
            return undefined
        }
        return (key: Key, props: RenderRowProps<R>) => {
            const { iterateOverViewportColumnsForRow: iterate } = props
            if (viewportColumns.current?.iterate !== iterate) {
                viewportColumns.current = {
                    iterate,
                    columns: [...iterate(undefined)].map(([column]) => column)
                }
            }
            return consumerRenderRow(key, {
                ...props,
                viewportColumns: viewportColumns.current.columns
            })
        }
    }, [consumerRenderRow])

    /**
     * The grid's own row classes, composed with the consumer's `rowClass` rather than replaced by it:
     * the detail rows `expandable` draws are styled through this class, so a consumer passing a
     * `rowClass` of its own would otherwise switch the feature's appearance off without a word.
     */
    const computeRawClass = useCallback(
        (row: R, index: number) => {
            const own = () => {
                const detail = detailRowClass(row, expandable?.expandedIds)
                if (detail) {
                    return detail
                }
                if (index === 0) {
                    return 'first-row'
                } else if (index === rows.length - 1) {
                    return 'last-row'
                }
                return ''
            }
            return [rowClass?.(row, index), own()].filter(Boolean).join(' ')
        },
        [rows, expandable?.expandedIds, rowClass]
    )

    /** What a click on the row means: the consumer's action, or opening the row where it expands. */
    const runRowClick = useCallback(
        (row: R) => {
            if (rowGestures?.onClick) {
                rowGestures.onClick(row)
            } else if (expandable) {
                toggleExpanded(expandable, row.id)
            }
        },
        [rowGestures, expandable]
    )

    /**
     * A click anywhere on a row runs its action — the consumer's, or the expansion an `expandable`
     * grid does by itself. The consumer's own `onCellClick` runs first and can claim the click with
     * `preventGridDefault()`, as for any other grid default.
     */
    const handleCellClick = useCallback(
        (args: CellMouseArgs<R, unknown>, event: CellMouseEvent) => {
            onCellClick?.(args, event)
            if (event.isGridDefaultPrevented()) {
                return
            }
            if (!expandable && !rowGestures?.onClick) {
                return
            }
            // The click that ENDS a text-selection drag still fires on the cell. Running the row
            // action would rebuild the row and destroy the selection the user just made — before
            // they could right-click it for the browser's Copy.
            //
            // ⚠ Only a FIRST click (detail 1) can be that drag's end. A rapid second or third click
            // (detail ≥ 2) makes a selection of its own — the browser selects the word or line under
            // the caret, snapping to the nearest text even from a cell's blank space — and eating
            // those turned fast toggle-clicking into a lottery: every other click died against a
            // selection the click itself had just created.
            const selection = window.getSelection()
            if (
                event.detail <= 1 &&
                selection &&
                !selection.isCollapsed &&
                event.target instanceof Node &&
                selection.containsNode(event.target, true)
            ) {
                return
            }
            if (
                clickBelongsToRow(
                    args.row,
                    args.column.key,
                    event.target,
                    rowGestures?.excludedColumns
                )
            ) {
                runRowClick(args.row)
            }
        },
        [onCellClick, expandable, rowGestures, runRowClick]
    )

    /**
     * Drop selected ids that no longer name a row — one filtered out, or deleted under the selection.
     *
     * ⚠ Only when the grid holds EVERY row. Under server pagination `rows` is one page, so "not among
     * the rows" means "not on this page": a picker opened on thirty already-chosen devices would keep
     * only those on page one and hand that back as the user's answer.
     */
    const holdsEveryRow = !pagination?.remotePagination
    useEffect(() => {
        if (!holdsEveryRow) {
            return
        }
        const selectedRowsAvailable = selectedRows?.filter((rowId) =>
            rows.some((row) => row.id === rowId)
        )
        if (selectedRowsAvailable?.length != selectedRows?.length) {
            onSelectedRowsChange?.(selectedRowsAvailable ?? [])
        }
    }, [rows, selectedRows, holdsEveryRow])

    return (
        <Container $pagination={!!pagination?.enabled}>
            <div>
                <Grid
                    key={`${gridKey}:${columnsKey}`}
                    selectedRows={selectedRows ? new Set(selectedRows) : undefined}
                    onSelectedRowsChange={(value: ReadonlySet<unknown>) => {
                        onSelectedRowsChange?.(Array.from(value) as string[])
                    }}
                    rowKeyGetter={(row: RowDefinition) => row.id}
                    rows={rowsWithDetails}
                    onSortColumnsChange={
                        isLocalSorting ? localSetSortedColumns : onSortColumnsChange
                    }
                    sortColumns={isLocalSorting ? localSortColumns : sortColumns}
                    columns={displayColumns}
                    rowClass={computeRawClass}
                    headerRowHeight={filtersEnabled ? 70 : undefined}
                    onCellClick={handleCellClick}
                    onColumnResize={onColumnResize ? reportColumnResize : undefined}
                    columnWidths={columnWidths}
                    onColumnWidthsChange={onColumnWidthsChange}
                    // Column virtualization only renders the columns in view, and a PINNED column
                    // is pinned by CSS rather than by anything react-data-grid knows about — so
                    // the trailing one would not render until scrolled near, and the leading one
                    // would stop rendering the moment the grid scrolls away from it. Both edges
                    // therefore need it off. ⚠ rdg's flag is all-or-nothing: turning it off here
                    // disables ROW virtualization too, so a pinned column is only suitable for
                    // grids whose row count is bounded (a paginated page, not a huge sheet).
                    enableVirtualization={
                        displayColumns.some((col) => col.frozenRight || col.frozenLeft)
                            ? false
                            : undefined
                    }
                    {...rest}
                    // After the spread: a detail row's height is the feature's to decide, and a
                    // consumer's own rowHeight still applies to every ordinary row.
                    rowHeight={
                        expandable
                            ? detailAwareRowHeight(
                                  rowHeight,
                                  DEFAULT_ROW_HEIGHT,
                                  expandable.detailHeight ?? DEFAULT_DETAIL_HEIGHT
                              )
                            : (rowHeight ?? DEFAULT_ROW_HEIGHT)
                    }
                    renderers={{
                        renderCheckbox,
                        // react-data-grid renders this only when there are no rows; suppress it
                        // while loading so the empty message never flashes under the loader.
                        ...(noDataMessage != null && !loading
                            ? {
                                  noRowsFallback: <div className='rdg-no-data'>{noDataMessage}</div>
                              }
                            : {}),
                        ...consumerRenderers,
                        renderRow
                    }}
                    style={{ ...defaultTheme, ...(theme ?? {}) } as React.CSSProperties}
                />
            </div>
            {pagination?.enabled ? (
                <Pagination
                    {...(pagination?.remotePagination ?? {
                        currentPage: safePage,
                        setCurrentPage,
                        pageSize,
                        setPageSize,
                        totalCount: rowsFiltered.length
                    })}
                    labels={pagination.labels ?? pagination.remotePagination?.labels}
                    totalLabel={pagination.totalLabel ?? pagination.remotePagination?.totalLabel}
                />
            ) : null}
            {loading ? (
                <ContainerLoading>
                    <LoadingScrim />
                    <PulseLoader color={taktikTheme.primary500} />
                </ContainerLoading>
            ) : null}
            {/* Outside the keyed Grid on purpose: a column toggle remounts the grid, and a menu
                rendered inside it would close (or flicker closed and open) on every toggle. */}
            <VisibilityMenu />
        </Container>
    )
}

export const DataGrid = <R extends RowDefinition = RowDefinition>({
    filters,
    setFilters,
    columns,
    visibilityColumnFeature: {
        enabled: visibilityFeatureEnabled,
        visibilityFeatureDisabledFor,
        hiddenByDefault,
        localStorageKey,
        onHiddenColumnsChange,
        onReset,
        resetLabel
    } = {},
    ...rest
}: DataGridProps<R>) => (
    <FilterProvider filters={filters} setFilters={setFilters}>
        <VisibilityProvider
            columns={columns as ColumnDefinition[]}
            enabled={visibilityFeatureEnabled}
            hiddenByDefault={hiddenByDefault}
            localStorageKey={localStorageKey}
            onHiddenColumnsChange={onHiddenColumnsChange}
            onReset={onReset}
            resetLabel={resetLabel}
            visibilityFeatureDisabledFor={visibilityFeatureDisabledFor}>
            <DataGridBase {...rest} columns={columns} filters={filters} setFilters={setFilters} />
        </VisibilityProvider>
    </FilterProvider>
)
