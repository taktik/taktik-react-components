import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useHiddenColumns } from './useHiddenColumns'

const TABLE = 'agentsHiddenColumns'
const OTHER = 'networksHiddenColumns'

describe('useHiddenColumns', () => {
    beforeEach(() => localStorage.clear())

    it('opens on the set this table stored', () => {
        localStorage.setItem(TABLE, JSON.stringify(['serial']))
        const { result } = renderHook(() => useHiddenColumns(TABLE, ['firmware']))
        expect(result.current.hiddenColumns).toEqual(['serial'])
    })

    it('opens on the page defaults while nothing is stored', () => {
        const { result } = renderHook(() => useHiddenColumns(TABLE, ['firmware']))
        expect(result.current.hiddenColumns).toEqual(['firmware'])
    })

    it('answers the defaults for junk or a stored non-array', () => {
        localStorage.setItem(TABLE, 'not json')
        expect(
            renderHook(() => useHiddenColumns(TABLE, ['a'])).result.current.hiddenColumns
        ).toEqual(['a'])
        localStorage.setItem(TABLE, '{"a":1}')
        expect(
            renderHook(() => useHiddenColumns(TABLE, ['a'])).result.current.hiddenColumns
        ).toEqual(['a'])
    })

    // The chooser's toggle and its reset both arrive here, and the page still hears them
    it('follows the chooser and passes the report on', () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useHiddenColumns(TABLE, [], onChange))
        act(() => result.current.report(['serial']))
        expect(result.current.hiddenColumns).toEqual(['serial'])
        expect(onChange).toHaveBeenCalledWith(['serial'])
    })

    // The grid rebuilds its columns from the identity of what it is handed
    it('holds its set when an equal one arrives', () => {
        const { result } = renderHook(() => useHiddenColumns(TABLE, ['serial']))
        const first = result.current.hiddenColumns
        act(() => result.current.report(['serial']))
        expect(result.current.hiddenColumns).toBe(first)
    })

    // How tables sharing one key are kept in step: the page feeds the reported set back as defaults
    it('re-reads the store when the defaults change', () => {
        localStorage.setItem(TABLE, JSON.stringify(['serial']))
        const { result, rerender } = renderHook(
            ({ defaults }: { defaults: string[] }) => useHiddenColumns(TABLE, defaults),
            { initialProps: { defaults: [] as string[] } }
        )
        expect(result.current.hiddenColumns).toEqual(['serial'])
        localStorage.setItem(TABLE, JSON.stringify(['serial', 'firmware']))
        rerender({ defaults: ['serial'] })
        expect(result.current.hiddenColumns).toEqual(['serial', 'firmware'])
    })

    // An inline array of the same value must not re-read for ever
    it('does not chase a fresh identity of the same defaults', () => {
        const { result, rerender } = renderHook(
            ({ defaults }: { defaults: string[] }) => useHiddenColumns(TABLE, defaults),
            { initialProps: { defaults: ['serial'] } }
        )
        const first = result.current.hiddenColumns
        rerender({ defaults: ['serial'] })
        expect(result.current.hiddenColumns).toBe(first)
    })

    // The recordings page renders ONE grid for recordings and for series
    it('re-reads when the instance is retargeted to another table', () => {
        localStorage.setItem(TABLE, JSON.stringify(['serial']))
        localStorage.setItem(OTHER, JSON.stringify(['mask']))
        const { result, rerender } = renderHook(({ key }) => useHiddenColumns(key, []), {
            initialProps: { key: TABLE }
        })
        expect(result.current.hiddenColumns).toEqual(['serial'])
        rerender({ key: OTHER })
        expect(result.current.hiddenColumns).toEqual(['mask'])
    })
})
