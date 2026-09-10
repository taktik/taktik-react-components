import { DragEvent, ReactNode } from 'react'
import { renderHeaderCell, type RenderCellProps, type RenderHeaderCellProps } from 'react-data-grid'
import styled from 'styled-components'
import { columnResizeFloor } from '../DataGrid/layout/columnWidths'
import { ColumnType, type ColumnDefinition, type RowDefinition } from '../DataGrid/types'
import { convertDate, DATE_FORMAT } from '../../utils'

// Header and body use the same full-size flex box, so a header sits exactly above the values it
// labels: both start at the left edge and both centre on the row's vertical middle.
const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-width: 0;
    height: 100%;
    overflow: hidden;
`

// A label longer than its column must end in an ellipsis, not spill into the neighbouring header.
// react-data-grid's own header truncates, but only if it is allowed to shrink — as a flex item it
// defaults to min-width:auto, so without this it keeps its full width and overflows instead.
const HeaderLabel = styled.span`
    display: block;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    /* a sortable column nests rdg's own flex span here, whose label span already ellipsises */
    > span {
        display: flex;
        min-width: 0;
        max-width: 100%;
    }
`

const BodyBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`

// The column's BodyBox owns alignment; this only clips overflow.
export const TruncatingCell = styled.span`
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const ACTION_ICON_GAP = 12

/** Row-action buttons. The column's BodyBox handles alignment; this only spaces them evenly. */
export const ActionCell = styled.div`
    display: flex;
    align-items: center;
    gap: ${ACTION_ICON_GAP}px;
`

/** A control in a row-action cell is a fixed 32px square and does not shrink — a short column clips it. */
const ACTION_ICON_SIZE = 32
/** The grid's `--rdg-cell-padding` is `8px 12px`, and a row's last cell adds a 1px right border. */
const ACTION_CELL_CHROME = 12 * 2 + 1

/**
 * The width fields of a row-action column holding `icons` buttons. Deriving them keeps the column
 * identical across grids. `minWidth` carries the same value because react-data-grid clamps `width`
 * UP to `minWidth` (default 50), so a column narrower than that would silently not be the width it
 * asked for. The column is not resizable either way — see {@link resizing}.
 */
export const actionColumnSizing = (icons: number): { width: number; minWidth: number } => {
    const width =
        icons * ACTION_ICON_SIZE + Math.max(icons - 1, 0) * ACTION_ICON_GAP + ACTION_CELL_CHROME
    return { width, minWidth: width }
}

/** The checkbox column react-data-grid draws for a selectable table. */
const SELECT_COLUMN_WIDTH = 50

/**
 * What a selectable table's own chrome costs before a single data column is drawn — the checkbox and
 * the row-actions column, neither of which a reader can scroll away from.
 *
 * It is the constant a column budget starts from, derived rather than retyped: three budgets
 * spelled `50 + 57` in prose and one of them would eventually have been wrong.
 */
export const FROZEN_COLUMNS_WIDTH = SELECT_COLUMN_WIDTH + actionColumnSizing(1).width

/** Render a string cell truncated with an ellipsis + full-value hover tooltip. */
export const truncated = (value?: string) => (
    <TruncatingCell title={value ?? ''}>{value}</TruncatingCell>
)

/**
 * Put a column's header (its label + sort arrow, or a custom header) in the same box as its values.
 * A column that opts into the grid's header filter keeps its own header: the filter input lives
 * in a box the grid renders, and supplying renderHeaderCell would drop it.
 */
export const withAlignedHeader = <R extends RowDefinition>(
    col: ColumnDefinition<R>
): ColumnDefinition<R> =>
    col.filterEnabled
        ? col
        : {
              ...col,
              renderHeaderCell: (props: RenderHeaderCellProps<R>) => (
                  <HeaderBox>
                      <HeaderLabel title={typeof col.name === 'string' ? col.name : undefined}>
                          {col.renderHeaderCell
                              ? col.renderHeaderCell(props)
                              : renderHeaderCell(props)}
                      </HeaderLabel>
                  </HeaderBox>
              )
          }

/**
 * Whether this column may be dragged, and how narrow it may go — the SAME answer on every table,
 * which is what makes resizing generic rather than one table behaving unlike the rest.
 *
 * Resizable is the default for a data column: the reader owns the widths of the table they are
 * reading, the declared ones are only where it opens, and a dragged width is remembered per table
 * beside the columns they hid (`useColumnWidths`). Two columns stay fixed, each because its width is
 * DERIVED rather than chosen — the grid's own checkbox column, which never passes through here,
 * and a `frozenRight` column: it is pinned to the right edge at the exact fit `actionColumnSizing`
 * computes for the buttons in it, and there is nothing in it to give more room to.
 *
 * The floor comes from {@link columnResizeFloor}, so a table's no-clip budget holds against a drag.
 */
const resizing = <R extends RowDefinition>(
    col: ColumnDefinition<R>
): { resizable: boolean; minWidth?: number } =>
    col.frozenRight ? { resizable: false } : { resizable: true, minWidth: columnResizeFloor(col) }

// What a column renders when it brings no renderCell of its own. Mirrors the grid's own
// defaults so wrapping a bare column for alignment doesn't change what it displays: dates keep
// the auto-format, booleans stay with react-data-grid (which renders them as nothing rather than
// the words "true"/"false"), everything else becomes truncated text.
const defaultRenderCell = <R extends RowDefinition>(
    col: ColumnDefinition<R>
): ((props: RenderCellProps<R>) => ReactNode) | undefined => {
    if (col.type === ColumnType.DATE) {
        return ({ row }: RenderCellProps<R>) =>
            convertDate(
                row[col.key as keyof R],
                col.dateOptions?.formatDate ?? DATE_FORMAT.DATE_WITH_TIME,
                col.dateOptions?.timeZone
            )
    }
    if (col.type === ColumnType.BOOLEAN) {
        return undefined
    }
    return (props: RenderCellProps<R>) => truncated(String(props.row[col.key as keyof R] ?? ''))
}

/**
 * The house cell presentation: header and values both left-aligned and vertically centred, whatever
 * the column holds. Columns without a renderCell get one anyway — truncation for text, the grid's
 * format for dates — so any grid inherits it by mapping its columns through this and nothing else.
 *
 * ⚠ `dragFrom` makes each cell's own `BodyBox` a drag handle, which is the ONLY place a grid row can
 * carry one: react-data-grid lays its rows out with `display: contents`, so the row element generates
 * no box at all and `draggable` on it can never start a native drag — the attribute is there, a
 * synthetic `dragstart` still dispatches, and nothing happens when a person actually drags. The
 * `BodyBox` is `width: 100%; height: 100%` inside the cell, so a handle on it covers the cell without
 * adding a single node. A BOOLEAN column has no renderCell and therefore no `BodyBox`, so it is not a
 * handle; no table that drags has one.
 */
export const withAlignedColumn = <R extends RowDefinition>(
    col: ColumnDefinition<R>,
    dragFrom?: (row: R, event: DragEvent<HTMLElement>) => void
): ColumnDefinition<R> => {
    const render = col.renderCell ?? defaultRenderCell(col)
    return {
        ...withAlignedHeader(col),
        // One answer for every table, so no consumer can opt in or out by accident
        ...resizing(col),
        renderCell: render
            ? (props: RenderCellProps<R>) =>
                  dragFrom ? (
                      <BodyBox draggable onDragStart={(event) => dragFrom(props.row, event)}>
                          {render(props)}
                      </BodyBox>
                  ) : (
                      <BodyBox>{render(props)}</BodyBox>
                  )
            : undefined
    }
}
