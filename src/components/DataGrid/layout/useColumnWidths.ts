import { useCallback, useRef, useState } from 'react'
import { ColumnWidth, ColumnWidths as GridWidthMap } from 'react-data-grid'
import {
    StoredColumnWidths,
    columnWidthsStore,
    readColumnWidths,
    sameColumnWidths,
    writeColumnWidths
} from './columnWidths'
import { useStoredLayout } from './useStoredLayout'

export interface GridColumnWidths {
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

const NO_WIDTHS: GridWidthMap = new Map<string, ColumnWidth>()

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
 * ⚠ The stored width is ALSO re-applied through the COLUMN (by the consumer), which is what lets the
 * table compute the track that fills its container from a width the reader chose.
 */
export const useColumnWidths = (columnVisibilityKey: string): GridColumnWidths => {
    const [gridWidths, setGridWidths] = useState<GridWidthMap>(() =>
        withStoredWidths(NO_WIDTHS, readColumnWidths(columnVisibilityKey))
    )

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

    /** What is written down now, readable without rebuilding the grid's callback on every change. */
    const stored = useRef(widths)
    stored.current = widths

    /**
     * What the grid reports: its whole layout, measurements included. The measurements are kept —
     * they are what the grid lays out from — and only a change to the DRAGGED half is written down,
     * so a window resize re-measuring every flexible column touches no storage.
     */
    const onGridWidthsChange = useCallback(
        (next: GridWidthMap): void => {
            setGridWidths(next)
            const dragged = draggedWidths(next)
            if (!sameColumnWidths(dragged, stored.current)) {
                writeColumnWidths(columnVisibilityKey, dragged)
            }
        },
        [columnVisibilityKey]
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
    const remeasure = useCallback((): void => setGridWidths(withoutMeasuredWidths), [])

    return { widths, gridWidths, onGridWidthsChange, reset, remeasure }
}
