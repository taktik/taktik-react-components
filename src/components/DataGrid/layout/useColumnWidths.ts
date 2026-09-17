import { useCallback, useMemo, useState } from 'react'
import { ColumnWidth, ColumnWidths as GridWidthMap } from 'react-data-grid'
import type { ColumnDefinition, RowDefinition } from '../types'
import { withFillingColumn } from './columnFill'
import {
    StoredColumnWidths,
    columnWidthsStore,
    readColumnWidths,
    sameColumnWidths,
    writeColumnWidths
} from './columnWidths'
import { useStoredLayout } from './useStoredLayout'

export interface GridColumnWidths<R extends RowDefinition> {
    /**
     * The columns the grid lays out: each one at the width the reader dragged it to, and one of them
     * promoted to the track that fills the container.
     */
    columns: ColumnDefinition<R>[]
    /** The stored widths, by column key — applied over each column's declared `width`. */
    widths: StoredColumnWidths
    /** Hand these two to the grid: the widths it lays out with, and what it reports back. */
    gridWidths: GridWidthMap
    onGridWidthsChange: (next: GridWidthMap) => void
    /** Hand this to the chooser's `onReset`: one reset item, both stored layouts. */
    reset: () => void
    /**
     * Call when the chrome around the table settled at a new width: every MEASURED width is dropped
     * and the grid measures the flexible columns again at the width it actually has now.
     */
    remeasure: () => void
}

/**
 * The widths the grid holds, split back into the two kinds it distinguishes: what the reader DRAGGED
 * a column to (or auto-fitted it to, by double-clicking the boundary), and what the grid MEASURED
 * a flexible column out to. Only the dragged half is an answer worth keeping — a measured width is a
 * fact about today's column set and today's window, and storing it would freeze that layout against
 * tomorrow's.
 */
const draggedWidths = (widths: GridWidthMap): StoredColumnWidths => {
    const dragged: StoredColumnWidths = {}
    widths.forEach((width, key) => {
        if (width.type === 'resized') {
            dragged[key] = Math.round(width.width)
        }
    })
    return dragged
}

/** The stored widths as the grid's own map, keeping whatever it had measured for the other columns. */
const withStoredWidths = (current: GridWidthMap, stored: StoredColumnWidths): GridWidthMap => {
    const next = new Map<string, ColumnWidth>()
    current.forEach((width, key) => {
        if (width.type === 'measured' && stored[key] === undefined) {
            next.set(key, width)
        }
    })
    Object.entries(stored).forEach(([key, width]) => next.set(key, { type: 'resized', width }))
    return next
}

/**
 * The map with every MEASURED width dropped and every dragged one kept — what a table has to lay out
 * from to be measured afresh. Identity is preserved when there was nothing measured to drop, so a
 * table that has nothing to re-measure does not re-render.
 */
const withoutMeasuredWidths = (widths: GridWidthMap): GridWidthMap => {
    const next = new Map<string, ColumnWidth>()
    widths.forEach((width, key) => {
        if (width.type === 'resized') {
            next.set(key, width)
        }
    })
    return next.size === widths.size ? widths : next
}

/** Whether two grid maps say the same thing, so a report that changes nothing costs no render. */
const sameGridWidths = (a: GridWidthMap, b: GridWidthMap): boolean =>
    a.size === b.size &&
    [...a].every(([key, width]) => {
        const other = b.get(key)
        return other?.type === width.type && other.width === width.width
    })

/**
 * The grid's report with every dragged width it does not carry put back. The grid drops a `resized`
 * entry for no reason of its own, so a report missing one is this hook's own pruning of the promoted
 * column echoing back, and adopting it loses the reader's answer — here, and then in storage the
 * next time the column set changes and the table writes down what it holds. Identity is preserved
 * when there is nothing to put back, or when the result says what the state already said.
 */
const withKeptDrags = (reported: GridWidthMap, current: GridWidthMap): GridWidthMap => {
    let kept: Map<string, ColumnWidth> | undefined
    current.forEach((width, key) => {
        if (width.type === 'resized' && reported.get(key)?.type !== 'resized') {
            kept = kept ?? new Map(reported)
            kept.set(key, width)
        }
    })
    if (kept === undefined) {
        return reported
    }
    return sameGridWidths(kept, current) ? current : kept
}

const NO_WIDTHS: GridWidthMap = new Map<string, ColumnWidth>()

/** What the grid measured the promoted column's filling track out to, and which column that was. */
interface PromotedMeasure {
    key: string
    width: number
}

/**
 * The widths this table's columns were dragged to — read on mount, written when a drag settles, and
 * cleared by the column chooser's "Reset column layout".
 *
 * A table shell calls it once off the `columnVisibilityKey` it already has, so no
 * page wires anything: a reader's widths are the same kind of personal ergonomic preference as the
 * columns they hid, kept in the same place and reset by the same one item.
 *
 * The grid is CONTROLLED here — it lays out from the map this hook holds and reports a new one back
 * — which is what makes a drag cost exactly one write: while the pointer is down the grid keeps its
 * own widths and says nothing, and reports once when the drag settles. The map holds the grid's
 * measurements too, because it is the whole of what the grid lays out from; only the dragged half is
 * written down.
 *
 * The stored width is ALSO applied through the COLUMN, here, which is what lets the table compute
 * the track that fills its container from a width the reader chose — so this one hook owns both
 * halves of the answer and they cannot disagree. It takes the columns as the table shaped them
 * (ordered, aligned) and hands back the columns the grid lays out.
 */
export const useColumnWidths = <R extends RowDefinition>(
    columnVisibilityKey: string,
    columns: ColumnDefinition<R>[],
    hiddenColumns: string[]
): GridColumnWidths<R> => {
    const [gridWidths, setGridWidths] = useState<GridWidthMap>(() =>
        withStoredWidths(NO_WIDTHS, readColumnWidths(columnVisibilityKey))
    )
    /**
     * Held apart from `gridWidths`, because that map keeps the reader's dragged width for the same
     * column and a map holds one entry per key. The grid needs the measurement — a flexible column
     * the map holds nothing for is measured again on every render — and the drag is the half worth
     * storing, so the two cannot share the entry.
     */
    const [promotedMeasure, setPromotedMeasure] = useState<PromotedMeasure>()

    /** The grid's own map moves with the stored widths, keeping whatever it had measured beside them. */
    const onAdopted = useCallback(
        (next: StoredColumnWidths): void =>
            setGridWidths((current) =>
                sameColumnWidths(draggedWidths(current), next)
                    ? current
                    : withStoredWidths(current, next)
            ),
        []
    )

    const { value: widths, reset } = useStoredLayout(
        columnVisibilityKey,
        columnWidthsStore,
        sameColumnWidths,
        onAdopted
    )

    /**
     * The columns as the grid lays them out: each stored width applied over the column's declared
     * one, and one column promoted to the track that fills the container.
     */
    const { columns: filledColumns, filledKey } = useMemo(
        () =>
            withFillingColumn(
                columns.map((column) => {
                    const stored = widths[column.key]
                    return column.resizable && stored !== undefined
                        ? { ...column, width: stored }
                        : column
                }),
                hiddenColumns
            ),
        [columns, widths, hiddenColumns]
    )

    /**
     * What the grid lays out from: every stored width but the promoted column's DRAGGED one. The
     * grid takes a `resized` entry over the column's own `width`, so handing that one over would put
     * the dragged pixels back and the table would stop short of its container again. The width is
     * not lost — it is the promoted track's floor.
     *
     * ⚠ Whatever the grid MEASURED that track out to goes back in its place, because the grid
     * measures a flexible column again whenever the map holds nothing for it — handing it nothing
     * for good would be a measure-report-drop cycle with no end.
     */
    const forGrid = useMemo(() => {
        if (filledKey === undefined || gridWidths.get(filledKey)?.type !== 'resized') {
            return gridWidths
        }
        const next = new Map(gridWidths)
        if (promotedMeasure?.key === filledKey) {
            next.set(filledKey, { type: 'measured', width: promotedMeasure.width })
        } else {
            next.delete(filledKey)
        }
        return next
    }, [gridWidths, filledKey, promotedMeasure])

    /**
     * What the grid reports: its whole layout, measurements included. The measurements are kept —
     * they are what the grid lays out from — and only a change to the DRAGGED half is written down,
     * so a window resize re-measuring every flexible column touches no storage.
     *
     * ⚠ The promoted column lays out from a track with no dragged entry in the map, so the grid
     * MEASURES it and reports it as measured. That measurement is kept beside the state rather than
     * in it, and the state keeps the drag, so neither report nor storage can lose the width the
     * reader had just set.
     */
    const onGridWidthsChange = useCallback(
        (next: GridWidthMap): void => {
            const promoted = filledKey === undefined ? undefined : next.get(filledKey)
            if (filledKey !== undefined && promoted?.type === 'measured') {
                const { width } = promoted
                setPromotedMeasure((held) =>
                    held?.key === filledKey && held.width === width
                        ? held
                        : { key: filledKey, width }
                )
            } else {
                // A measurement answers the layout it was taken in, and this report says something
                // else about that column: a fresh DRAG of it, or the dragged-widths-only report a
                // column-set change sends. Letting it go is what asks for the track measured now.
                setPromotedMeasure(undefined)
            }
            setGridWidths((current) => withKeptDrags(next, current))
            // The dragged half of the report over what is STORED: the promoted column's drag is in
            // neither the report nor the map the grid lays out from, and two reports can land in one
            // commit, so this render's copy of the state is not a value to write from either.
            const dragged = { ...widths, ...draggedWidths(next) }
            if (!sameColumnWidths(dragged, widths)) {
                writeColumnWidths(columnVisibilityKey, dragged)
            }
        },
        [columnVisibilityKey, filledKey, widths]
    )

    /**
     * The chrome around the table settled at a new width — the sidebar collapsed or expanded, a pane
     * seam was released, the window was resized. Every table drops what the grid MEASURED and is
     * measured again at the width it actually has now.
     *
     * react-data-grid re-measures a flexible column on a grid-width change only while EVERY column
     * is inside its viewport (`columnsCanFlex`): a table wide enough to have scrolled one out keeps
     * the widths it was measured at, so a collapse that hands it 184px more leaves it stopping short
     * of its own container. Dropping the measurements is what asks for the measurement — the same
     * half of the same problem the grid already solves for a column-set change. What the
     * reader DRAGGED is their own answer and is never dropped.
     *
     * The consumer knows when its chrome settles — a sidebar collapse, a released pane seam, a window
     * resize — so it wires the event and calls this.
     */
    const remeasure = useCallback((): void => {
        setGridWidths(withoutMeasuredWidths)
        setPromotedMeasure(undefined)
    }, [])

    return {
        columns: filledColumns,
        widths,
        gridWidths: forGrid,
        onGridWidthsChange,
        reset,
        remeasure
    }
}
