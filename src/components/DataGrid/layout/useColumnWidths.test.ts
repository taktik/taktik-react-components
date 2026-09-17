import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ColumnWidth } from 'react-data-grid'
import type { ColumnDefinition, RowDefinition } from '../types'
import { readColumnWidths, writeColumnWidths } from './columnWidths'
import { columnWidthsKey } from './layoutKeys'
import { useColumnWidths } from './useColumnWidths'

const TABLE = 'agentsHiddenColumns'
const OTHER = 'networksHiddenColumns'

// Stable identities: the hook memoises on them, and the grid rebuilds its columns from what it gets.
const NO_COLUMNS: ColumnDefinition<RowDefinition>[] = []
const NO_HIDDEN: string[] = []

const dragged = (width: number): ColumnWidth => ({ type: 'resized', width })
const measured = (width: number): ColumnWidth => ({ type: 'measured', width })

const gridMap = (entries: Record<string, ColumnWidth>): ReadonlyMap<string, ColumnWidth> =>
    new Map(Object.entries(entries))

/** What `DataGrid` reports when the column set changes: the dragged widths alone. */
const draggedOnly = (widths: ReadonlyMap<string, ColumnWidth>): ReadonlyMap<string, ColumnWidth> =>
    new Map([...widths].filter(([, width]) => width.type === 'resized'))

const CAPPED_AND_FLEX: ColumnDefinition<RowDefinition>[] = [
    { key: 'name', name: 'Name', resizable: true },
    { key: 'tail', name: 'Tail', width: 'minmax(100px, 1fr)' }
]
const FLEX_HIDDEN = ['tail']

// `name` ends the visible row whether `extra` shows or not, so it stays the promoted column
const CAPPED_AND_FLEX_WITH_EXTRA: ColumnDefinition<RowDefinition>[] = [
    { key: 'extra', name: 'Extra' },
    ...CAPPED_AND_FLEX
]

describe('useColumnWidths', () => {
    beforeEach(() => localStorage.clear())

    it('opens on the widths this table stored', () => {
        writeColumnWidths(TABLE, { name: 300 })
        const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))
        expect(result.current.widths).toEqual({ name: 300 })
        expect(result.current.gridWidths.get('name')).toEqual(dragged(300))
    })

    // The grid reports once, when the drag settles — so one drag is one write, with no timer in it.
    it('writes what the grid reports when a drag settles', () => {
        const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))

        act(() => result.current.onGridWidthsChange(gridMap({ name: dragged(302.6) })))

        expect(readColumnWidths(TABLE)).toEqual({ name: 303 })
        expect(result.current.widths).toEqual({ name: 303 })
    })

    // A measured width is a fact about today's column set and today's window
    it('keeps the grid measurements out of storage', () => {
        const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))

        act(() =>
            result.current.onGridWidthsChange(
                gridMap({ name: measured(180), status: measured(90) })
            )
        )

        expect(localStorage.getItem(columnWidthsKey(TABLE))).toBeNull()
        expect(result.current.widths).toEqual({})
        // still laid out from, which is why the map holds them
        expect(result.current.gridWidths.get('name')).toEqual(measured(180))
    })

    it('writes only what a drag changed, alongside the measurements', () => {
        const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))

        act(() =>
            result.current.onGridWidthsChange(gridMap({ name: dragged(300), status: measured(90) }))
        )

        expect(readColumnWidths(TABLE)).toEqual({ name: 300 })
    })

    it('clears the stored layout on reset', () => {
        writeColumnWidths(TABLE, { name: 300 })
        const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))
        act(() => result.current.reset())
        expect(localStorage.getItem(columnWidthsKey(TABLE))).toBeNull()
        expect(result.current.widths).toEqual({})
        // and the grid is told, so the column goes back to what it was declared with
        expect(result.current.gridWidths.has('name')).toBe(false)
    })

    // License stacks three tables over ONE columnVisibilityKey on purpose
    it('follows another table sharing its key', () => {
        const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))
        act(() => writeColumnWidths(TABLE, { name: 300 }))
        expect(result.current.widths).toEqual({ name: 300 })
        expect(result.current.gridWidths.get('name')).toEqual(dragged(300))
    })

    // The recordings page renders ONE grid for recordings and for series
    it('re-reads when the instance is retargeted to another table', () => {
        writeColumnWidths(TABLE, { name: 300 })
        writeColumnWidths(OTHER, { name: 120 })
        const { result, rerender } = renderHook(
            ({ key }) => useColumnWidths(key, NO_COLUMNS, NO_HIDDEN),
            { initialProps: { key: TABLE } }
        )
        expect(result.current.widths).toEqual({ name: 300 })
        rerender({ key: OTHER })
        expect(result.current.widths).toEqual({ name: 120 })
        expect(result.current.gridWidths.get('name')).toEqual(dragged(120))
    })

    /**
     * A table whose every visible track is capped has one column promoted to the filling one. The
     * grid takes a `resized` entry over the column's own track, so the promoted column's entry must
     * not be in the map — and the grid then MEASURES that column and reports it back, which must not
     * take the reader's dragged width with it.
     */
    describe('the column the fill promoted', () => {
        const NAME_COLUMN: ColumnDefinition<RowDefinition>[] = [
            { key: 'name', name: 'Name', resizable: true }
        ]
        const promoted = (): ReturnType<
            typeof renderHook<ReturnType<typeof useColumnWidths<RowDefinition>>, unknown>
        > => renderHook(() => useColumnWidths(TABLE, NAME_COLUMN, NO_HIDDEN))

        it('lays out from its own track, so the map the grid gets holds no entry for it', () => {
            writeColumnWidths(TABLE, { name: 300 })
            const { result } = promoted()

            expect(result.current.columns[0].width).toBe('minmax(300px, 1fr)')
            expect(result.current.gridWidths.has('name')).toBe(false)
            // the drag is not lost: it is the promoted track's floor, and it stays written down
            expect(result.current.widths).toEqual({ name: 300 })
        })

        it('keeps the dragged width when the grid reports the column as measured', () => {
            writeColumnWidths(TABLE, { name: 300 })
            const { result } = promoted()

            act(() => result.current.onGridWidthsChange(gridMap({ name: measured(420) })))

            expect(readColumnWidths(TABLE)).toEqual({ name: 300 })
            expect(result.current.widths).toEqual({ name: 300 })
        })

        /**
         * What the grid measured the filling track out to answers the layout the measurement was
         * taken in. Once the reader drags that same boundary again, the measurement is about a
         * width nobody asked for any more, and the grid must lay out from the new drag.
         */
        it('lays out from a new drag of it rather than the measurement before', () => {
            writeColumnWidths(TABLE, { name: 300 })
            const { result } = promoted()
            act(() => result.current.onGridWidthsChange(gridMap({ name: measured(420) })))
            expect(result.current.gridWidths.get('name')).toEqual(measured(420))

            act(() => result.current.onGridWidthsChange(gridMap({ name: dragged(500) })))

            expect(result.current.gridWidths.get('name')).not.toEqual(measured(420))
            expect(result.current.columns[0].width).toBe('minmax(500px, 1fr)')
        })

        /**
         * The reader hides a column while the promoted one stays promoted. The grid is handed the
         * dragged widths alone, which is what asks for a fresh measurement — so nothing measured
         * beside the old neighbours may be laid out from afterwards.
         */
        it('drops a measurement the column set no longer owns', () => {
            writeColumnWidths(TABLE, { name: 300 })
            const { result, rerender } = renderHook(
                ({ hidden }) => useColumnWidths(TABLE, CAPPED_AND_FLEX_WITH_EXTRA, hidden),
                { initialProps: { hidden: FLEX_HIDDEN } }
            )
            act(() => result.current.onGridWidthsChange(gridMap({ name: measured(420) })))
            expect(result.current.gridWidths.get('name')).toEqual(measured(420))

            rerender({ hidden: [...FLEX_HIDDEN, 'extra'] })
            act(() => result.current.onGridWidthsChange(draggedOnly(result.current.gridWidths)))

            expect(result.current.gridWidths.has('name')).toBe(false)
            // and the drag is still the promoted track's floor
            expect(result.current.widths).toEqual({ name: 300 })
        })

        it('still writes a NEW drag of that same column', () => {
            writeColumnWidths(TABLE, { name: 300 })
            const { result } = promoted()

            act(() => result.current.onGridWidthsChange(gridMap({ name: dragged(420) })))

            expect(readColumnWidths(TABLE)).toEqual({ name: 420 })
        })

        /**
         * The reader hides the flexible column, which promotes the dragged one and has the grid
         * measure it, then unhides it again. The column set changed, so the grid is handed its
         * dragged widths alone and the measurements are dropped — and the promotion is over by
         * then, so nothing is left to carry the drag but the map itself.
         */
        it('keeps the drag through the measurement and the column set changing back', () => {
            writeColumnWidths(TABLE, { name: 300 })
            const { result, rerender } = renderHook(
                ({ hidden }) => useColumnWidths(TABLE, CAPPED_AND_FLEX, hidden),
                { initialProps: { hidden: FLEX_HIDDEN } }
            )
            expect(result.current.columns[0].width).toBe('minmax(300px, 1fr)')
            act(() => result.current.onGridWidthsChange(gridMap({ name: measured(420) })))
            expect(result.current.gridWidths.get('name')).toEqual(measured(420))

            rerender({ hidden: NO_HIDDEN })

            expect(result.current.gridWidths.get('name')).toEqual(dragged(300))
            act(() => result.current.onGridWidthsChange(draggedOnly(result.current.gridWidths)))

            expect(readColumnWidths(TABLE)).toEqual({ name: 300 })
            expect(result.current.widths).toEqual({ name: 300 })
        })
    })

    /**
     * The chrome around the table settled at a new width. The library only re-measures a flexible
     * column while EVERY column is inside its viewport, so a table wide enough to have scrolled one
     * out keeps the widths it was measured at and stops short of its own container — dropping the
     * measurements is what asks for the measurement.
     */
    describe('a settled layout change', () => {
        const settle = (result: { current: { remeasure: () => void } }): void =>
            act(() => result.current.remeasure())

        it('drops what the grid measured and keeps what the reader dragged', () => {
            const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))
            act(() =>
                result.current.onGridWidthsChange(
                    gridMap({ name: dragged(300), status: measured(150) })
                )
            )

            settle(result)

            expect(result.current.gridWidths.get('name')).toEqual(dragged(300))
            expect(result.current.gridWidths.has('status')).toBe(false)
        })

        it('leaves a table with nothing measured exactly as it was', () => {
            const { result } = renderHook(() => useColumnWidths(TABLE, NO_COLUMNS, NO_HIDDEN))
            act(() => result.current.onGridWidthsChange(gridMap({ name: dragged(300) })))
            const before = result.current.gridWidths

            settle(result)

            // the same map, not an equal one: the grid rebuilds its columns — and re-renders
            // every row — from the identity of what it is handed
            expect(result.current.gridWidths).toBe(before)
        })
    })
})
