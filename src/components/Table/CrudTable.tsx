import {
    DragEvent,
    JSX,
    Key,
    ReactNode,
    useCallback,
    useEffect,
    useEffectEvent,
    useMemo,
    useState
} from 'react'
import { Row as GridRow, type SortColumn } from 'react-data-grid'
import styled from 'styled-components'
import {
    ALL_MATCHING_SELECTED,
    idsSelection,
    NOTHING_SELECTED,
    selectedOnPage,
    toggledSelection,
    withPageSelection,
    type MatchingSelection
} from '../../selection'
import { DataGrid, type DataGridRenderRowProps } from '../DataGrid/DataGrid'
import { isDetailRow, type DataGridExpandable } from '../DataGrid/Expandable'
import { withFillingColumn } from '../DataGrid/layout/columnFill'
import { withColumnOrder } from '../DataGrid/layout/withColumnOrder'
import { useColumnOrder } from '../DataGrid/layout/useColumnOrder'
import { useColumnWidths } from '../DataGrid/layout/useColumnWidths'
import { useRemeasureOnHostEvent } from '../DataGrid/layout/useRemeasureOnHostEvent'
import { useHiddenColumns } from '../DataGrid/layout/useHiddenColumns'
import type { ColumnDefinition, RowDefinition } from '../DataGrid/types'
import { withAlignedColumn } from './gridCells'
import { GridEmptyState } from './GridEmptyState'
import { ACTIONS_COLUMN_KEY, unhideableColumns } from './rowActions'
import { SelectAllMatchingBanner } from './SelectAllMatchingBanner'
import {
    GRID_PAGE_SIZE,
    useColumnMovedAnnouncement,
    useColumnResetLabel,
    useGridPaginationLabels,
    useGridPresentation,
    useSelectAllLabel
} from './useGridPresentation'
import { useRowGestures } from './useRowGestures'

/** How a table pages — one discriminated choice, so two answers cannot be given at once. */
export type CrudTablePaging =
    | ({ mode: 'server' } & CrudTablePagination)
    | { mode: 'off' }
    | {
          mode: 'url'
          page: number
          onPageChange: (page: number) => void
          pageSize: number
          onPageSizeChange: (pageSize: number) => void
      }

/**
 * How a table SORTS — one discriminated choice, for the same reason paging is one, and the same
 * three answers: the grid keeps it, the URL holds it, the server performs it.
 *
 *  - `{ mode: 'local', opening }` — the grid owns the sort from the opening value and never tells
 *    anyone about it. `opening` is the sort the table first shows. For a grid whose sort is not worth
 *    sharing: a picker dialog, a stack of overflow groups.
 *  - `{ mode: 'url', columns, onChange }` — the grid still ORDERS THE ROWS, but the value is the
 *    consumer's, off the URL, so a reload keeps the order and a link carries it. The mirror of
 *    `paging: { mode: 'url' }`, which is the same split for the page number.
 *  - `{ mode: 'server', columns, onChange }` — the SERVER performs it: the consumer holds the value
 *    and the grid only reports the header the user clicked. A server-paged table has no other honest
 *    option, since sorting the rows in hand would order one page while appearing to order the table.
 *
 * ⚠ `url` is a third ARM rather than an optional `columns`/`onChange` pair on `local`, because that
 * pair is exactly the two-halves shape this union exists to forbid: a value with no handler is a sort
 * nothing can change, and a handler with no value is a report about state the grid does not hold.
 */
export type CrudTableSorting =
    | { mode: 'local'; opening?: SortColumn[] }
    | { mode: 'url'; columns: SortColumn[]; onChange: (columns: SortColumn[]) => void }
    | { mode: 'server'; columns: SortColumn[]; onChange: (columns: SortColumn[]) => void }

/** The two arms whose value the CONSUMER holds — the grid reports the header and reads it back. */
const controlledSort = (
    sorting: CrudTableSorting | undefined
): Extract<CrudTableSorting, { columns: SortColumn[] }> | undefined =>
    sorting?.mode === 'url' || sorting?.mode === 'server' ? sorting : undefined

/**
 * What is ticked in this table and the way back — ONE prop, because either half alone is a dead
 * configuration: ids with no handler renders checkboxes that toggle nothing (and a row click that
 * does nothing), and a handler with no ids is a report about state the table does not show.
 *
 * Two modes, discriminated like paging and sorting:
 *
 *  - `ids` — the rows the reader ticked, and nothing beyond them. What nearly every table wants.
 *  - `allMatching` — the table can also act on EVERY row the current query matches, pages never
 *    loaded included, so its selection is a {@link MatchingSelection} and the grid grows the band
 *    that offers the step (see {@link SelectAllMatchingBanner}). A table declares this only where a
 *    real full-set path exists — a delete-by-query, a paged export — because the reader is being
 *    offered an action over rows nobody can see.
 */
export type CrudTableSelection =
    | { mode: 'ids'; ids: string[]; onChange: (ids: string[]) => void }
    | {
          mode: 'allMatching'
          value: MatchingSelection
          onChange: (value: MatchingSelection) => void
          /**
           * WHAT this selection is a selection OF — the chips, the organisation scope, anything
           * that decides which rows the query matches.
           *
           * A whole-query selection is DEFINED by that query, so a query that moves takes the
           * selection with it: otherwise "all 200 matching" silently re-points at whatever a new
           * chip matches, and the next act runs over a set nobody was shown. Picked ids stay — an
           * id names the same record under any filter. Sorting and paging are deliberately NOT
           * part of it: re-ordering rows and turning a page are reading.
           *
           * The generic owns the rule so no consumer writes the effect, and it keys on the query's
           * CONTENT rather than on its identity — a consumer rebuilding its query object every
           * render would otherwise clear the selection on every render.
           */
          query?: unknown
      }

/** Server-side pagination: the page the consumer is showing, and the way to change it. */
export interface CrudTablePagination {
    total: number
    pageSize: number
    currentPage: number
    onPageChange: (page: number) => void
    /**
     * How many rows per page — REQUIRED, because the footer's dropdown is drawn whether or not anyone
     * answers it. It is forwarded to MUI's own rows-per-page select and there is no way to hide it,
     * so a table without a real handler ships a live control that changes nothing. The pager returns
     * to page 1 by itself: the rows under the old offset are not the rows the reader was on.
     */
    onPageSizeChange: (pageSize: number) => void
}

export interface CrudTableProps<R extends RowDefinition> {
    rows: R[]
    columns: ColumnDefinition<R>[]
    loading?: boolean
    /** Empty-state headline, centered in the empty grid body. */
    noDataMessage?: string
    /** A muted icon for the empty state; when set, the grid shows an icon + noDataMessage (+ hint). */
    emptyIcon?: ReactNode
    /** Optional second line under noDataMessage in the empty state. */
    emptyHint?: string
    /**
     * Who sorts this table, as ONE choice — see {@link CrudTableSorting}. Omit it and the grid sorts
     * locally with no opening order, which is whatever order the rows arrived in.
     *
     * ⚠ A SERVER-PAGED table without `mode: 'server'` here has its columns' `sortable` stripped: the
     * grid would order the rows in hand while reading as though it had ordered the table. That covers
     * `mode: 'url'` too — putting the sort in the URL does not make ordering one page honest, so a
     * server-paged table's only route to a shareable order is a server one.
     */
    sorting?: CrudTableSorting
    /** Defaults to on when the consumer tracks a selection; set false to drop the checkbox column. */
    selectable?: boolean
    /** The selection this table reports outward, ids and handler together — see {@link CrudTableSelection}. */
    selection?: CrudTableSelection
    /**
     * What a single click on a row does. Leave it unset for the house defaults: on a selectable
     * table a click toggles the row's checkbox, and on a table that expands, expanding is what the
     * grid does with a click by itself. Pass a handler only where a click must do something MORE
     * than the default, or something else entirely (unselectable rows opening a details panel).
     */
    onRowPrimaryAction?: (row: R) => void
    /**
     * How this table pages, as ONE choice — the three answers are mutually exclusive and the type
     * says so, because a table given two of them would have to let one lose silently.
     *
     *  - `{ mode: 'server', … }` — the server pages; the page number is the caller's.
     *  - `{ mode: 'off' }` — a table known to be short. The footer is a fixed 80px of "Rows per
     *    page: 25 · 1-1 of 1" and it dwarfs a two-row table; a consumer choosing this owes itself
     *    the check that it still pages once the rows outgrow a screen.
     *  - `{ mode: 'url', … }` — the grid slices the rows as it always has, but reads its page and
     *    its rows-per-page from the consumer, so a link opens on the page the sender was reading
     *    showing as many rows as they were.
     *
     * Omit it and the grid pages locally, keeping both numbers to itself.
     */
    paging?: CrudTablePaging
    /**
     * Where this table remembers the columns the user hid, the widths they dragged and the order they
     * arranged. Required, and required to be unique: the layout is persisted under this key alone, so
     * two tables sharing it would hide each other's columns wherever their keys coincide (`name`,
     * `status`, …). The one exception is a page stacking SEVERAL tables over ONE schema, where
     * sharing is the point — it shares the key and keeps the tables in step through
     * `onHiddenColumnsChange`.
     */
    columnVisibilityKey: string
    /** Columns this table opens with hidden — the user can bring them back from the header. */
    hiddenColumnsByDefault?: string[]
    /**
     * Runs when the user hides or shows a column here. For the stacked-tables case above: the
     * consumer feeds the reported set back to every table as `hiddenColumnsByDefault`, which makes
     * each of them re-read the shared key.
     */
    onHiddenColumnsChange?: (hiddenColumns: string[]) => void
    /**
     * The height of one row, or a function of the row for a table whose cells grow with their
     * content (a wrapping chip list). Omit for the grid's own rhythm, which is what nearly every
     * table wants — a row that is taller than its neighbours had better be saying something.
     */
    rowHeight?: number | ((row: R) => number)
    /**
     * How many records this table holds, worded by the consumer — the count at the footer's left end
     * ("58 devices"), opposite the pager's own "1-25 of 58". The number is the grid's own: whatever
     * the pager is counting, which is the filtered total on a server-paged table and the rows in
     * hand on a locally-paged one, so the consumer never has to derive it a second time.
     *
     * ⚠ It lives in the pagination footer, so a table with `paging: { mode: 'off' }` has nowhere to
     * show it — the count appears with the pager or not at all.
     */
    totalLabel?: (count: number) => string
    /**
     * Per-row detail underneath the row — expansion state is the consumer's. Reach for it for small
     * inline extras (a nested list, a few fields); a full record's details are a side panel instead.
     */
    expandable?: DataGridExpandable<R>
    /**
     * Makes the WHOLE ROW the drag surface, for a table whose records can be dragged somewhere. The
     * consumer fills the `dataTransfer` and owns the payload; all the table contributes is the
     * handle, so a drag started on any column carries the same thing.
     *
     * Nothing else about the row changes: an HTML5 drag needs movement, so a click still clicks. ⚠ A
     * draggable ancestor DOES win over a text-selection drag, so a table declaring this gives up
     * selecting its cells' text with the mouse — resting on a value and taking the copy offer is the
     * way one comes out of it.
     */
    rowDrag?: (row: R, event: DragEvent<HTMLElement>) => void
}

/**
 * Mounted only while the select-all band is on screen, so a table without one keeps the shape it
 * has: the grid is the direct child its host sizes. The grid's own `height: 100%` would resolve
 * against this whole column and push the band off the bottom, so the last child is sized by the flex
 * line instead.
 */
const WithBand = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    min-height: 0;

    /* ⚠ The band keeps its intrinsic height. A flex item is shrinkable by default, and the band
       scrolls its own content — so on a host whose column has no slack the shrink lands on the band
       and its own overflow CLIPS the sentence and the button, with no scrollbar to show it. The grid
       below absorbs the difference; it is the thing with room to give. */
    > :first-child {
        flex: none;
    }

    > div:last-child {
        flex: 1 1 auto;
        min-height: 0;
        height: auto;
    }
`

/**
 * A CRUD table over the shared DataGrid: selection, pagination, loading and empty states. Purely
 * presentational — the consumer owns everything above the grid, which is what `GridToolbar` is for,
 * so every grid's toolbar is the same single row.
 */
export const CrudTable = <R extends RowDefinition>({
    rows,
    columns,
    loading,
    noDataMessage,
    emptyIcon,
    emptyHint,
    sorting,
    selectable,
    selection,
    onRowPrimaryAction,
    paging,
    columnVisibilityKey,
    hiddenColumnsByDefault,
    onHiddenColumnsChange,
    rowHeight,
    totalLabel,
    expandable,
    rowDrag
}: CrudTableProps<R>): JSX.Element => {
    const [internalSelected, setInternalSelected] = useState<string[]>([])
    // The union is taken apart here rather than passed around whole: a consumer writes its selection
    // as an object literal, so every derivation below would get a fresh identity each render — and
    // the grid rebuilds its columns (re-sorting and re-rendering every row) from what it is handed.
    const idsSelected = selection?.mode === 'ids' ? selection.ids : undefined
    const reportIds = selection?.mode === 'ids' ? selection.onChange : undefined
    const matching = selection?.mode === 'allMatching' ? selection.value : undefined
    const reportMatching = selection?.mode === 'allMatching' ? selection.onChange : undefined
    const querySignature =
        selection?.mode === 'allMatching' && selection.query !== undefined
            ? JSON.stringify(selection.query)
            : undefined

    // The query moved — see `query` on the allMatching arm. Read through an effect event so the
    // selection itself is not a trigger: this fires when the QUESTION changes, never on an answer.
    const dropWholeQuerySelection = useEffectEvent((): void => {
        if (matching?.all) reportMatching?.(NOTHING_SELECTED)
    })
    useEffect(() => {
        if (querySignature === undefined) return
        dropWholeQuerySelection()
    }, [querySignature])

    const pageIds = useMemo(() => rows.map((row) => row.id), [rows])
    // What the grid shows as ticked. In allMatching mode that is the page's own share of a selection
    // which may reach much further — the band above the grid says how far.
    const selected = useMemo(
        () => (matching ? selectedOnPage(matching, pageIds) : (idsSelected ?? internalSelected)),
        [matching, pageIds, idsSelected, internalSelected]
    )

    const setSelected = useCallback(
        (ids: string[]): void => {
            if (matching && reportMatching) {
                reportMatching(withPageSelection(matching, pageIds, ids))
            } else if (reportIds) {
                reportIds(ids)
            } else {
                setInternalSelected(ids)
            }
        },
        [matching, reportMatching, reportIds, pageIds]
    )

    /**
     * A column may only be sorted where sorting is honest. On a server-paged table the grid's own
     * sort reorders the page in hand, which reads as though the whole table had been ordered — so the
     * header is not offered unless the consumer sorts server-side.
     */
    const localSortOnAServerPage = paging?.mode === 'server' && sorting?.mode !== 'server'
    const pageHeldSort = controlledSort(sorting)
    /**
     * Whether the GRID orders the rows — which on a server-paged table it must not, whatever the URL
     * says. Stripping the header alone would leave a link carrying a sort able to order the rows in
     * hand, which is the very reading the strip exists to prevent.
     */
    const gridOrdersTheRows = sorting?.mode === 'url' && !localSortOnAServerPage
    /**
     * The widths this reader dragged this table's columns to. They are applied as the column's own
     * `width` — which is what the grid falls back to on every remount, so a stored width survives
     * the remount a column toggle causes and a hidden column comes back the width it was left at.
     */
    const columnWidths = useColumnWidths(columnVisibilityKey)
    // Wired here for every table, so no page listens for the host's own event itself
    useRemeasureOnHostEvent(columnWidths.remeasure)
    const storedWidths = columnWidths.widths
    /**
     * The order this reader arranged this table's columns into, from the column chooser. It is
     * applied FIRST, before anything else shapes the array: which column ends up last is what decides
     * which one fills the container (`withFillingColumn`), so a reorder has to be a fact by the time
     * that question is asked.
     */
    const columnOrder = useColumnOrder(columnVisibilityKey)
    /**
     * Which columns this table is hiding — the grid filters them itself, and the table cannot pick
     * the column that fills the container without knowing which ones are on screen.
     */
    const { hiddenColumns, report: reportHiddenColumns } = useHiddenColumns(
        columnVisibilityKey,
        hiddenColumnsByDefault,
        onHiddenColumnsChange
    )
    const alignedColumns = useMemo(
        () =>
            withFillingColumn(
                withColumnOrder(columns, columnOrder.order).map((column) => {
                    // The kebab answers its own press; a drag handle over it would swallow the click
                    const dragFrom =
                        rowDrag && column.key !== ACTIONS_COLUMN_KEY ? rowDrag : undefined
                    const aligned = withAlignedColumn(column, dragFrom)
                    const stored = storedWidths[column.key]
                    const sized =
                        aligned.resizable && stored !== undefined
                            ? { ...aligned, width: stored }
                            : aligned
                    return localSortOnAServerPage ? { ...sized, sortable: false } : sized
                }),
                hiddenColumns
            ),
        [columns, columnOrder.order, localSortOnAServerPage, rowDrag, storedWidths, hiddenColumns]
    )
    const presentation = useGridPresentation()
    const paginationLabels = useGridPaginationLabels()
    const columnResetLabel = useColumnResetLabel()
    const columnMovedAnnouncement = useColumnMovedAnnouncement()
    const selectAllLabel = useSelectAllLabel()

    /** ONE reset item, every stored layout: the columns hidden, the widths dragged, the order set. */
    const resetWidths = columnWidths.reset
    const resetOrder = columnOrder.reset
    const resetColumnLayout = useCallback((): void => {
        resetWidths()
        resetOrder()
    }, [resetWidths, resetOrder])

    const emptyState =
        emptyIcon && noDataMessage ? (
            <GridEmptyState icon={emptyIcon} title={noDataMessage} hint={emptyHint} />
        ) : (
            noDataMessage
        )

    const selectionEnabled = selectable ?? selection !== undefined

    /**
     * The band shows in two cases and no others: the whole matching set is picked (it is the only
     * thing on screen saying so, and the only way back), or the page is fully ticked and there is
     * more behind it. A table holding every matching row needs no offer — ticking the header already
     * picked them all, and a query-wide action over them would target exactly the same rows.
     */
    const matchingTotal = paging?.mode === 'server' ? paging.total : rows.length
    const wholePagePicked = rows.length > 0 && selected.length === rows.length
    const showSelectAllBanner =
        matching !== undefined && (matching.all || (wholePagePicked && matchingTotal > rows.length))

    /**
     * How many rows one page shows, where this table holds every row its query matched — the number
     * the selection has to outgrow before it reaches rows nobody can see. A server-paged table has no
     * such number here (its `rows` ARE the page), and a table that pages not at all shows everything.
     *
     * ⚠ It is the size this table was CONFIGURED with. A locally-paged table that keeps its own pager
     * state answers the rows-per-page control itself and never reports the answer, so a reader who
     * raised it is measured against the default — the band then states a count that is on screen
     * anyway, which is a redundant sentence rather than a wrong one.
     */
    const shownPerPage =
        paging?.mode === 'server' || paging?.mode === 'off'
            ? undefined
            : paging?.mode === 'url'
              ? paging.pageSize
              : GRID_PAGE_SIZE

    /**
     * The same band, on a table that holds every row its query matched — every locally-paged grid,
     * and no consumer has to ask for it.
     *
     * Here the header checkbox already ticks the WHOLE matching set rather than the page (the grid
     * drives it from every row it holds), so the offer costs one click instead of two and the step
     * the band adds on a server-paged table is not the missing half. The missing half is the
     * STATEMENT: a grid showing 25 of 200 ticked rows says nothing about the other 175, and offers no
     * way back from them.
     *
     * ⚠ It fires on the SIZE of the selection, which is the only thing this component can know: the
     * grid owns the local page slice, so nothing here can say which rows are on screen. A selection
     * SMALLER than one page but spread across two of them is therefore silent — the honest fix for
     * that is the grid reporting its slice, not a guess here. What is covered is the case the band
     * exists for: one click on the header, and a selection nobody could otherwise count.
     */
    const showIdsBanner =
        idsSelected !== undefined &&
        reportIds !== undefined &&
        shownPerPage !== undefined &&
        rows.length > shownPerPage &&
        idsSelected.length > shownPerPage

    // A click is the checkbox's own gesture wherever the table has one — unless the row expands
    // (that IS the click, and a click that also ticked would make opening a row an edit of the
    // selection) or the consumer declared its own action.
    const toggleRowSelection = useCallback(
        (row: R): void => setSelected(toggledSelection(selected, row.id)),
        [selected, setSelected]
    )
    const primaryAction =
        onRowPrimaryAction ?? (selectionEnabled && !expandable ? toggleRowSelection : undefined)

    // The one place the house table answers a mouse: a click toggles, expands or opens per the rule
    // above; RESTING on a value offers to copy it; a right-click opens the row's actions at the pointer.
    const {
        gridProps: rowGestures,
        rowHover,
        menu,
        copyCue,
        copiedBubble
    } = useRowGestures<R>({
        columns,
        onRowPrimaryAction: primaryAction
    })

    /**
     * The row as the hover surface the copy hint is raised from. react-data-grid builds every row
     * through this renderer, so one wiring covers the whole row instead of one cell of it — and a
     * DETAIL row carries none of it: it stands for no record.
     *
     * ⚠ `onMouseOver`, not `onMouseEnter`: the over form bubbles up from the cells, which is what
     * makes a per-CELL hover reportable at all — an enter on the row fires once, for the row. The
     * drag HANDLE is not here — see `withAlignedColumn`'s `dragFrom` for why a row cannot carry one.
     *
     * `viewportColumns` is the grid's answer to "which columns is this row showing"; it is taken off
     * the props rather than spread onward, since the row element would carry it into the DOM as an
     * unknown attribute.
     */
    const renderers = useMemo(
        () => ({
            ...presentation.renderers,
            renderRow: (key: Key, { viewportColumns, ...props }: DataGridRenderRowProps<R>) =>
                isDetailRow(props.row) ? (
                    <GridRow key={key} {...props} />
                ) : (
                    <GridRow
                        key={key}
                        {...props}
                        onMouseOver={(event) =>
                            rowHover.onMouseOver(props.row, viewportColumns, event)
                        }
                        onMouseMove={rowHover.onMouseMove}
                        onMouseLeave={rowHover.onMouseLeave}
                        onDragStart={rowHover.onDragStart}
                    />
                )
        }),
        [rowHover, presentation.renderers]
    )

    const grid = (
        <DataGrid<R>
            rows={rows}
            columns={alignedColumns}
            {...presentation}
            defaultSortColumns={sorting?.mode === 'local' ? sorting.opening : undefined}
            sortColumns={pageHeldSort?.columns}
            onSortColumnsChange={pageHeldSort?.onChange}
            // Handing the value over would otherwise stop the grid ordering the rows — the seam this
            // arm exists for. `undefined` leaves it to be inferred, which is right for both other
            // arms: the grid orders when it owns the sort, the server orders when it performs it.
            sortRowsLocally={gridOrdersTheRows ? true : undefined}
            selectAllLabel={selectAllLabel}
            selectedRows={selectionEnabled ? selected : undefined}
            onSelectedRowsChange={selectionEnabled ? setSelected : undefined}
            loading={loading}
            expandable={expandable}
            {...rowGestures}
            // after the presentation spread, so the shared checkbox survives beside the row handle
            renderers={renderers}
            // after the spread, so a table sizing its own rows wins — and the shared rhythm
            // survives for every table that does not
            rowHeight={rowHeight ?? presentation.rowHeight}
            columnWidths={columnWidths.gridWidths}
            onColumnWidthsChange={columnWidths.onGridWidthsChange}
            visibilityColumnFeature={{
                enabled: true,
                localStorageKey: columnVisibilityKey,
                visibilityFeatureDisabledFor: unhideableColumns(columns),
                hiddenByDefault: hiddenColumnsByDefault,
                // through the table's own mirror of the set, which the consumer's handler then hears
                onHiddenColumnsChange: reportHiddenColumns,
                // the way back belongs next to the control that moved the columns, on every table
                resetLabel: columnResetLabel,
                // ONE reset item, every stored layout: hidden columns, dragged widths, arranged order
                onReset: resetColumnLayout,
                // top to bottom in the menu is left to right in the table
                onColumnOrderChange: columnOrder.report,
                reorderAnnouncement: columnMovedAnnouncement
            }}
            noDataMessage={emptyState}
            pagination={
                paging?.mode === 'off'
                    ? { enabled: false }
                    : paging?.mode === 'server'
                      ? {
                            enabled: true,
                            labels: paginationLabels,
                            totalLabel,
                            remotePagination: {
                                currentPage: paging.currentPage,
                                setCurrentPage: paging.onPageChange,
                                pageSize: paging.pageSize,
                                setPageSize: paging.onPageSizeChange,
                                totalCount: paging.total
                            }
                        }
                      : {
                            enabled: true,
                            /**
                             * The grid's own default, NOT a reader's stored rows-per-page
                             * preference: a table reaches that through `mode: 'url'`, which is
                             * where a consumer holding such a preference passes it. What pages on
                             * this branch is dialog grids and stacked overflow groups, whose height
                             * the dialog or the group decides rather than the reader's screen.
                             */
                            defaultPageSize: GRID_PAGE_SIZE,
                            labels: paginationLabels,
                            totalLabel,
                            control:
                                paging?.mode === 'url'
                                    ? {
                                          page: paging.page,
                                          onPageChange: paging.onPageChange,
                                          pageSize: paging.pageSize,
                                          onPageSizeChange: paging.onPageSizeChange
                                      }
                                    : undefined
                        }
            }
        />
    )

    const band =
        showSelectAllBanner && matching && reportMatching ? (
            <SelectAllMatchingBanner
                selection={matching}
                pickedCount={rows.length}
                total={matchingTotal}
                onSelectAllMatching={() => reportMatching(ALL_MATCHING_SELECTED)}
                onClear={() => reportMatching(NOTHING_SELECTED)}
            />
        ) : showIdsBanner && idsSelected && reportIds ? (
            <SelectAllMatchingBanner
                // The ids ARE the picks, so "all of them" is simply every row the grid holds — which
                // is every row the query matched, and what the offer below hands back.
                selection={
                    idsSelected.length === rows.length
                        ? ALL_MATCHING_SELECTED
                        : idsSelection(idsSelected)
                }
                pickedCount={idsSelected.length}
                total={rows.length}
                onSelectAllMatching={() => reportIds(pageIds)}
                onClear={() => reportIds([])}
            />
        ) : undefined

    return (
        <>
            {band ? (
                <WithBand>
                    {band}
                    {grid}
                </WithBand>
            ) : (
                grid
            )}
            {menu}
            {copyCue}
            {copiedBubble}
        </>
    )
}
