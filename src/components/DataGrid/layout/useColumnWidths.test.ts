import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ColumnWidth } from 'react-data-grid'
import { readColumnWidths, writeColumnWidths } from './columnWidths'
import { columnWidthsKey } from './layoutKeys'
import { useColumnWidths } from './useColumnWidths'

const TABLE = 'agentsHiddenColumns'
const OTHER = 'networksHiddenColumns'

const dragged = (width: number): ColumnWidth => ({ type: 'resized', width })
const measured = (width: number): ColumnWidth => ({ type: 'measured', width })

const gridMap = (entries: Record<string, ColumnWidth>): ReadonlyMap<string, ColumnWidth> =>
    new Map(Object.entries(entries))

describe('useColumnWidths', () => {
    beforeEach(() => localStorage.clear())

    it('opens on the widths this table stored', () => {
        writeColumnWidths(TABLE, { name: 300 })
        const { result } = renderHook(() => useColumnWidths(TABLE))
        expect(result.current.widths).toEqual({ name: 300 })
        expect(result.current.gridWidths.get('name')).toEqual(dragged(300))
    })

    // The grid reports once, when the drag settles — so one drag is one write, with no timer in it.
    it('writes what the grid reports when a drag settles', () => {
        const { result } = renderHook(() => useColumnWidths(TABLE))

        act(() => result.current.onGridWidthsChange(gridMap({ name: dragged(302.6) })))

        expect(readColumnWidths(TABLE)).toEqual({ name: 303 })
        expect(result.current.widths).toEqual({ name: 303 })
    })

    // A measured width is a fact about today's column set and today's window
    it('keeps the grid measurements out of storage', () => {
        const { result } = renderHook(() => useColumnWidths(TABLE))

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
        const { result } = renderHook(() => useColumnWidths(TABLE))

        act(() =>
            result.current.onGridWidthsChange(gridMap({ name: dragged(300), status: measured(90) }))
        )

        expect(readColumnWidths(TABLE)).toEqual({ name: 300 })
    })

    it('clears the stored layout on reset', () => {
        writeColumnWidths(TABLE, { name: 300 })
        const { result } = renderHook(() => useColumnWidths(TABLE))
        act(() => result.current.reset())
        expect(localStorage.getItem(columnWidthsKey(TABLE))).toBeNull()
        expect(result.current.widths).toEqual({})
        // and the grid is told, so the column goes back to what it was declared with
        expect(result.current.gridWidths.has('name')).toBe(false)
    })

    // License stacks three tables over ONE columnVisibilityKey on purpose
    it('follows another table sharing its key', () => {
        const { result } = renderHook(() => useColumnWidths(TABLE))
        act(() => writeColumnWidths(TABLE, { name: 300 }))
        expect(result.current.widths).toEqual({ name: 300 })
        expect(result.current.gridWidths.get('name')).toEqual(dragged(300))
    })

    // The recordings page renders ONE grid for recordings and for series
    it('re-reads when the instance is retargeted to another table', () => {
        writeColumnWidths(TABLE, { name: 300 })
        writeColumnWidths(OTHER, { name: 120 })
        const { result, rerender } = renderHook(({ key }) => useColumnWidths(key), {
            initialProps: { key: TABLE }
        })
        expect(result.current.widths).toEqual({ name: 300 })
        rerender({ key: OTHER })
        expect(result.current.widths).toEqual({ name: 120 })
        expect(result.current.gridWidths.get('name')).toEqual(dragged(120))
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
            const { result } = renderHook(() => useColumnWidths(TABLE))
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
            const { result } = renderHook(() => useColumnWidths(TABLE))
            act(() => result.current.onGridWidthsChange(gridMap({ name: dragged(300) })))
            const before = result.current.gridWidths

            settle(result)

            // the same map, not an equal one: the grid rebuilds its columns — and re-renders
            // every row — from the identity of what it is handed
            expect(result.current.gridWidths).toBe(before)
        })
    })
})
