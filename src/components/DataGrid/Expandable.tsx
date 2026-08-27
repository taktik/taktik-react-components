import React from 'react'
import styled from '@emotion/styled'
import { ColSpanArgs, SELECT_COLUMN_KEY } from 'react-data-grid'
import { ColumnDefinition, RowDefinition } from './types'

/** Width the toggle adds to the leading cell it shares with the selection checkbox. */
export const EXPANDER_WIDTH = 40
export const DEFAULT_DETAIL_HEIGHT = 200

/** Marks the row whose detail is open, so the accent bar can run down both of them. */
export const EXPANDED_ROW_CLASS = 'rdg-row-expanded'
export const DETAIL_ROW_CLASS = 'rdg-detail-row'

/**
 * Where a detail row keeps the row it belongs to. A detail row is a real grid row — that is what
 * gives it its own height and its own cell — so it needs an id of its own, and the parent has to
 * travel with it for the consumer's renderer to receive.
 */
const DETAIL_PARENT = '__rdgDetailParent'

export interface DataGridExpandable<Row extends RowDefinition> {
    /** Ids of the rows whose detail is open. The consumer owns this state. */
    expandedIds: string[]
    onExpandedChange: (expandedIds: string[]) => void
    /** What the open row shows underneath itself, spanning the grid's width. */
    renderDetail: (row: Row) => React.ReactNode
    /**
     * Height of the detail row in pixels — a function of the row when its content varies.
     *
     * The grid needs a definite height per row, so one fixed number is wrong somewhere: sized for the
     * fullest row it leaves a band of nothing under a short one, sized for the usual row it makes a
     * full one scroll. A function gives each detail the height its own content asks for.
     */
    detailHeight?: number | ((row: Row) => number)
    /**
     * Accessible names for the toggle — required, because the button is an icon: the consumer owns
     * the wording and the language, and there is no English default worth shipping.
     */
    labels: { expand: string; collapse: string }
}

export const detailRowFor = <Row extends RowDefinition>(row: Row): Row =>
    ({ id: `rdg-detail:${row.id}`, [DETAIL_PARENT]: row }) as unknown as Row

export const detailParent = <Row extends RowDefinition>(row: Row): Row | undefined =>
    (row as Row & { [DETAIL_PARENT]?: Row })[DETAIL_PARENT]

export const isDetailRow = <Row extends RowDefinition>(row: Row): boolean =>
    detailParent(row) !== undefined

/** Each open row followed by its detail. Parents keep the order they arrived in. */
export const withDetailRows = <Row extends RowDefinition>(
    rows: Row[],
    expandedIds: string[]
): Row[] => {
    if (!expandedIds.length) {
        return rows
    }
    const open = new Set(expandedIds)
    return rows.flatMap((row) => (open.has(row.id) ? [row, detailRowFor(row)] : [row]))
}

const ToggleButton = styled.button<{ $open: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;

    svg {
        transition: transform 0.15s ease;
        transform: rotate(${({ $open }) => ($open ? '90deg' : '0deg')});
    }
`

const Chevron = () => (
    <svg width='16' height='16' viewBox='0 0 24 24' aria-hidden='true' focusable='false'>
        <path d='M9 6l6 6-6 6' fill='none' stroke='currentColor' strokeWidth='2' />
    </svg>
)

/**
 * The toggle, for the leading cell it shares with the selection checkbox.
 *
 * It cannot be a column of its own ahead of the checkbox: react-data-grid sorts its select column to
 * index 0 unconditionally (`if (aKey === SELECT_COLUMN_KEY) return -1`), before any frozen/order
 * logic. Riding inside that cell puts the chevron first while leaving rdg's selection wiring —
 * shift-click range select included — untouched.
 */
export const ExpanderToggle = <Row extends RowDefinition>({
    row,
    expandable
}: {
    row: Row
    expandable: DataGridExpandable<Row>
}) => {
    const { expandedIds, labels } = expandable
    const open = expandedIds.includes(row.id)
    return (
        <ToggleButton
            type='button'
            $open={open}
            aria-expanded={open}
            aria-label={open ? labels.collapse : labels.expand}
            onClick={(event) => {
                // the row's own click handler must not toggle it a second time
                event.stopPropagation()
                toggleExpanded(expandable, row.id)
            }}>
            <Chevron />
        </ToggleButton>
    )
}

/** Open the row if it is closed, close it if it is open. */
export const toggleExpanded = <Row extends RowDefinition>(
    expandable: DataGridExpandable<Row>,
    id: string
): void => {
    const { expandedIds, onExpandedChange } = expandable
    onExpandedChange(
        expandedIds.includes(id) ? expandedIds.filter((open) => open !== id) : [...expandedIds, id]
    )
}

/** Anything that answers a click itself — toggling a switch must not also expand its row. */
const INTERACTIVE =
    'button, a, input, select, textarea, [role="switch"], [role="checkbox"], [role="button"], [role="menuitem"]'

/**
 * Whether a click here is the ROW's — the whole row is the target of a row-wide gesture, not just a
 * 40px chevron on a row a thousand pixels wide.
 *
 * Three clicks are not the row's: one on a detail row (the result, not a handle), one in the leading
 * cell (the checkbox and the chevron are already there, and would act twice), one on a control of its
 * own. `excludedColumns` adds the columns only the consumer can name — a row-actions column whose
 * kebab does not fill its cell, where a click beside the button is still that column's, not the row's.
 */
export const clickBelongsToRow = <Row extends RowDefinition>(
    row: Row,
    columnKey: string,
    target: EventTarget | null,
    excludedColumns: string[] = []
): boolean => {
    if (isDetailRow(row)) {
        return false
    }
    if (columnKey === SELECTION_COLUMN_KEY || columnKey === EXPANDER_COLUMN_KEY) {
        return false
    }
    if (excludedColumns.includes(columnKey)) {
        return false
    }
    return !(target instanceof Element && target.closest(INTERACTIVE))
}

/**
 * The expandable feature's spelling of {@link clickBelongsToRow}: a click that is the row's expands or
 * collapses it. One rule serves both row-wide gestures, so a control that must not expand a row cannot
 * accidentally still fire its double-click action.
 */
export const clickExpandsRow = <Row extends RowDefinition>(
    row: Row,
    columnKey: string,
    target: EventTarget | null
): boolean => clickBelongsToRow(row, columnKey, target)

/** The leading cell's layout: toggle, then whatever the selection column renders. */
export const LeadingCell = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`

/** Reserves the toggle's width in the header, so the select-all box lines up with the boxes below. */
export const LeadingHeaderSpacer = styled.span`
    display: inline-block;
    flex: 0 0 ${EXPANDER_WIDTH - 16}px;
`

export const SELECTION_COLUMN_KEY = SELECT_COLUMN_KEY

export const EXPANDER_COLUMN_KEY = 'rdg-expander-column'

/**
 * The toggle as a column of its own — for a grid that has no selection column for it to share.
 *
 * Pinned and injected first, which IS first here: there is no select column to outrank it. A grid
 * with selection uses {@link ExpanderToggle} inside the leading cell instead.
 */
export const expanderColumn = <Row extends RowDefinition>(
    expandable: DataGridExpandable<Row>
): ColumnDefinition<Row> => ({
    key: EXPANDER_COLUMN_KEY,
    name: '',
    frozen: true,
    width: EXPANDER_WIDTH,
    minWidth: EXPANDER_WIDTH,
    maxWidth: EXPANDER_WIDTH,
    resizable: false,
    sortable: false,
    renderHeaderCell: () => null,
    renderCell: ({ row }) => <ExpanderToggle row={row} expandable={expandable} />
})

/** A column react-data-grid pins to the START edge — `frozen: true` is its alias for `'start'`. */
const isStartFrozen = <Row extends RowDefinition>(column: ColumnDefinition<Row>): boolean =>
    column.frozen === true || column.frozen === 'start'

/**
 * A column pinned to the END edge. `frozenRight` is this library's public name for it and
 * {@link useComputeFinalColumns} translates it, so a column may arrive spelled either way.
 */
const isEndFrozen = <Row extends RowDefinition>(column: ColumnDefinition<Row>): boolean =>
    column.frozen === 'end' || !!column.frozenRight

const isPinned = <Row extends RowDefinition>(column: ColumnDefinition<Row>): boolean =>
    isStartFrozen(column) || isEndFrozen(column)

/**
 * Turn the computed columns into ones that also render a detail row: the first column that can span
 * (a PINNED column cannot) draws the detail across the unfrozen band, and EVERY pinned column draws
 * nothing on a detail row — a detail row is not selectable, a checkbox there would report a
 * selection the grid's own rows do not contain, and a row-actions menu there would act on a
 * synthetic row rather than a real one.
 *
 * ⚠ The geometry is computed in RENDER order, not declaration order: react-data-grid sorts columns
 * into three bands — start-frozen, unfrozen, end-frozen — stable within each. A grid declaring a
 * frozen column after unfrozen ones would otherwise get a span one track too wide and keep that
 * column rendering inside its own detail rows.
 *
 * ⚠ The span STOPS at the end-frozen band rather than covering it: react-data-grid rejects an
 * unfrozen column's `colSpan` outright once it reaches an end-frozen column, and a rejected span
 * renders the whole detail inside one narrow track. So a detail row stops short of the pinned
 * actions column, which renders nothing there.
 */
export const withDetailRendering = <Row extends RowDefinition>(
    columns: ColumnDefinition<Row>[],
    renderDetail: (row: Row) => React.ReactNode
): ColumnDefinition<Row>[] => {
    const rendered = [
        ...columns.filter(isStartFrozen),
        ...columns.filter((column) => !isPinned(column)),
        ...columns.filter(isEndFrozen)
    ]
    const spanFrom = rendered.findIndex((column) => !isPinned(column))
    if (spanFrom === -1) {
        return columns
    }
    const spanning = rendered[spanFrom]
    const firstEndFrozen = rendered.findIndex(isEndFrozen)
    const span = (firstEndFrozen === -1 ? rendered.length : firstEndFrozen) - spanFrom
    return columns.map((column) => {
        if (column !== spanning) {
            if (!isPinned(column)) {
                // swallowed by the span
                return column
            }
            // A column with no renderCell of its own must keep falling through to the library's
            // default on ordinary rows — wrapping it unconditionally would blank it everywhere.
            // (This is what empties the pinned cells on a detail row: no second checkbox, no
            // second toggle competing with the parent's, and no kebab acting on a synthetic row.)
            if (!column.renderCell) {
                return column
            }
            return {
                ...column,
                renderCell: (props) => (isDetailRow(props.row) ? null : column.renderCell?.(props))
            }
        }
        return {
            ...column,
            colSpan: (args: ColSpanArgs<Row, unknown>) => {
                if (args.type === 'ROW' && isDetailRow(args.row)) {
                    return span
                }
                return column.colSpan?.(args)
            },
            renderCell: (props) => {
                const parent = detailParent(props.row)
                if (parent) {
                    return renderDetail(parent)
                }
                return column.renderCell?.(props) ?? null
            }
        }
    })
}

/**
 * The height a row occupies: its detail's when it is one, the grid's rhythm otherwise.
 *
 * A per-row `detailHeight` is asked about the row the detail belongs to, never the synthetic carrier:
 * the consumer can measure its own record and knows nothing about ours.
 */
export const detailAwareRowHeight =
    <Row extends RowDefinition>(
        rowHeight: number | ((row: Row) => number) | null | undefined,
        fallback: number,
        detailHeight: number | ((row: Row) => number)
    ): ((row: Row) => number) =>
    (row: Row) => {
        const parent = detailParent(row)
        if (parent) {
            return typeof detailHeight === 'function' ? detailHeight(parent) : detailHeight
        }
        if (typeof rowHeight === 'function') {
            return rowHeight(row)
        }
        return rowHeight ?? fallback
    }

/**
 * A detail row is the continuation of the row above it, not a row of its own. The parent is marked
 * too, so one accent bar runs down the pair when several are open at once.
 */
export const detailRowClass = <Row extends RowDefinition>(
    row: Row,
    expandedIds: string[] = []
): string => {
    if (isDetailRow(row)) {
        return DETAIL_ROW_CLASS
    }
    return expandedIds.includes(row.id) ? EXPANDED_ROW_CLASS : ''
}
