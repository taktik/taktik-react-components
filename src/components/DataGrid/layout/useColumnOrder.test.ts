import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { readColumnOrder, writeColumnOrder } from './columnOrder'
import { columnOrderKey } from './layoutKeys'
import { useColumnOrder } from './useColumnOrder'

const TABLE = 'agentsHiddenColumns'
const OTHER = 'networksHiddenColumns'

describe('useColumnOrder', () => {
    beforeEach(() => localStorage.clear())

    it('opens on the order this table stored', () => {
        writeColumnOrder(TABLE, ['status', 'name'])
        const { result } = renderHook(() => useColumnOrder(TABLE))
        expect(result.current.order).toEqual(['status', 'name'])
    })

    it('opens on nothing when nobody arranged this table', () => {
        expect(renderHook(() => useColumnOrder(TABLE)).result.current.order).toEqual([])
    })

    it('writes what the chooser reports', () => {
        const { result } = renderHook(() => useColumnOrder(TABLE))
        act(() => result.current.report(['status', 'name']))
        expect(readColumnOrder(TABLE)).toEqual(['status', 'name'])
        expect(result.current.order).toEqual(['status', 'name'])
    })

    it('clears the stored order on reset', () => {
        writeColumnOrder(TABLE, ['status', 'name'])
        const { result } = renderHook(() => useColumnOrder(TABLE))
        act(() => result.current.reset())
        expect(localStorage.getItem(columnOrderKey(TABLE))).toBeNull()
        expect(result.current.order).toEqual([])
    })

    // License stacks three tables over ONE columnVisibilityKey on purpose
    it('follows another table sharing its key', () => {
        const { result } = renderHook(() => useColumnOrder(TABLE))
        act(() => writeColumnOrder(TABLE, ['status', 'name']))
        expect(result.current.order).toEqual(['status', 'name'])
    })

    // the grid rebuilds its columns from the identity of what it is handed
    it('keeps the order it holds when an equal one arrives', () => {
        writeColumnOrder(TABLE, ['status', 'name'])
        const { result } = renderHook(() => useColumnOrder(TABLE))
        const first = result.current.order
        act(() => writeColumnOrder(TABLE, ['status', 'name']))
        expect(result.current.order).toBe(first)
    })

    // The recordings page renders ONE grid for recordings and for series
    it('re-reads when the instance is retargeted to another table', () => {
        writeColumnOrder(TABLE, ['status', 'name'])
        writeColumnOrder(OTHER, ['name', 'address'])
        const { result, rerender } = renderHook(({ key }) => useColumnOrder(key), {
            initialProps: { key: TABLE }
        })
        expect(result.current.order).toEqual(['status', 'name'])
        rerender({ key: OTHER })
        expect(result.current.order).toEqual(['name', 'address'])
    })

    it('ignores a stored value that is not a list of column keys', () => {
        localStorage.setItem(columnOrderKey(TABLE), '{"name":1}')
        expect(renderHook(() => useColumnOrder(TABLE)).result.current.order).toEqual([])
        localStorage.setItem(columnOrderKey(TABLE), 'not json')
        expect(renderHook(() => useColumnOrder(TABLE)).result.current.order).toEqual([])
        localStorage.setItem(columnOrderKey(TABLE), '["name", 7, "status"]')
        expect(renderHook(() => useColumnOrder(TABLE)).result.current.order).toEqual([
            'name',
            'status'
        ])
    })
})
