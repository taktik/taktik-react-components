import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import Grid, {
    CellClickArgs,
    CellMouseEvent,
    DataGridProps as DataGridPropsFromLib,
    RenderCheckboxProps,
    SortColumn
} from 'react-data-grid'
import { DataGridTheme, defaultTheme } from './dataGridTheme'
import { Container } from './Container'
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
import { usePagination } from './hooks/usePagination'
import { VisibilityContext, VisibilityProvider } from './VisibilityProvider'
import {
    clickExpandsRow,
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
    clickExpandsRow,
    ExpanderToggle,
    SELECTION_COLUMN_KEY,
    EXPANDER_COLUMN_KEY
} from './Expandable'
export type { DataGridExpandable } from './Expandable'

/** The row rhythm every grid shares unless a consumer overrides it. */
const DEFAULT_ROW_HEIGHT = 50

export type DataGridProps<Row extends RowDefinition> = Omit<
    DataGridPropsFromLib<Row>,
    'columns' | 'rows' | 'selectedRows' | 'onSelectedRowsChange'
> & {
    selectable?: boolean
    /**
     * Accessible name of the header's select-all checkbox — override it to match the consumer's
     * language, or to say what is being selected ("Select all devices").
     */
    selectAllLabel?: string
    defaultSortColumns?: SortColumn[]
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
         * Runs when the USER hides or shows a column, never when a grid reads the stored set on
         * mount — for a page holding several tables over one schema, which want one answer between
         * them. Feeding the reported set back as `hiddenByDefault` re-reads it in every sibling.
         */
        onHiddenColumnsChange?: (hiddenColumns: string[]) => void
    }
    /**
     * Master-detail rows: an open row is followed by one of its own, spanning the grid's width.
     * Expansion state belongs to the consumer, so it survives a re-render of the grid and can be
     * driven from outside it (a url, a "expand all").
     */
    expandable?: DataGridExpandable<Row>
}

const ContainerLoading = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${taktikTheme.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
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
    selectedRows,
    onSelectedRowsChange,
    selectAllLabel = DEFAULT_SELECT_ALL_LABEL,
    noDataMessage,
    filters,
    setFilters,
    pagination,
    renderers,
    expandable,
    rowHeight,
    rowClass,
    onCellClick,
    ...rest
}: DataGridProps<R>) => {
    const { gridKey } = useContext(VisibilityContext)
    const { pageSize, currentPage, setCurrentPage, setPageSize } = usePagination(
        pagination?.defaultPageSize
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

    const isLocalSorting = useMemo(() => !onSortColumnsChange, [onSortColumnsChange])

    const {
        sortedRows: sortedRows,
        sortColumns: localSortColumns,
        setSortedColumns: localSetSortedColumns
    } = useLocalSorting({
        columns: finalColumns,
        rows: rowsFiltered,
        defaultSortColumns
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

    /**
     * A click anywhere on an expandable row opens it. The consumer's handler runs first and can claim
     * the click with `preventGridDefault()`, as for any other grid default.
     */
    const handleCellClick = useCallback(
        (args: CellClickArgs<R, unknown>, event: CellMouseEvent) => {
            onCellClick?.(args, event)
            if (!expandable || event.isGridDefaultPrevented()) {
                return
            }
            if (clickExpandsRow(args.row, args.column.key, event.target)) {
                toggleExpanded(expandable, args.row.id)
            }
        },
        [onCellClick, expandable]
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
                    // Column virtualization only renders the columns in view, and only `frozen`
                    // columns are exempt — a frozenRight column at the far end would not RENDER
                    // until scrolled near, let alone pin. ⚠ rdg's flag is all-or-nothing: turning
                    // it off here disables ROW virtualization too, so frozenRight is only suitable
                    // for grids whose row count is bounded (a paginated page, not a huge sheet).
                    // Virtualization stays on for every grid without a frozenRight column.
                    enableVirtualization={
                        displayColumns.some((col) => col.frozenRight) ? false : undefined
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
                        ...renderers
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
                />
            ) : null}
            {loading ? (
                <ContainerLoading>
                    <div></div>
                    <PulseLoader color={taktikTheme.primary500} />
                </ContainerLoading>
            ) : null}
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
        onHiddenColumnsChange
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
            visibilityFeatureDisabledFor={visibilityFeatureDisabledFor}>
            <DataGridBase {...rest} columns={columns} filters={filters} setFilters={setFilters} />
        </VisibilityProvider>
    </FilterProvider>
)
