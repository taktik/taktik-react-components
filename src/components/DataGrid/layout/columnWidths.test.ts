import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
    cappedTrack,
    clearColumnWidths,
    columnResizeFloor,
    flexTrack,
    isFlexibleWidth,
    onColumnWidthsChange,
    readColumnWidths,
    trackFloor,
    writeColumnWidths
} from './columnWidths'
import { columnWidthsKey } from './layoutKeys'

const TABLE = 'agentsHiddenColumns'

describe('columnWidthsKey', () => {
    // The value is a promise to the user: it is what their dragged widths are filed under.
    it('hangs off the table own column-visibility key', () => {
        expect(columnWidthsKey('agentsHiddenColumns')).toBe('agentsHiddenColumns.columnWidths')
    })
})

describe('flexTrack', () => {
    it('writes the track a consumer declares a flexible column with, unit included', () => {
        expect(flexTrack(140)).toBe('minmax(140px, 1fr)')
        expect(flexTrack(150, 1.5)).toBe('minmax(150px, 1.5fr)')
        expect(flexTrack(0, 1.3)).toBe('minmax(0px, 1.3fr)')
    })

    it('is read back by the two functions that judge a width', () => {
        expect(trackFloor(flexTrack(140))).toBe(140)
        expect(trackFloor(flexTrack(180, 1.6))).toBe(180)
        // a zero floor is the "no floor, truncate" form and names no minimum
        expect(trackFloor(flexTrack(0, 3))).toBeUndefined()
        expect(isFlexibleWidth(flexTrack(140))).toBe(true)
        expect(isFlexibleWidth(flexTrack(0, 2))).toBe(true)
        expect(columnResizeFloor({ width: flexTrack(200, 1.2) })).toBe(200)
    })
})

describe('cappedTrack', () => {
    it('writes the track a column that stops growing declares', () => {
        expect(cappedTrack(100, 140)).toBe('minmax(100px, 140px)')
        expect(cappedTrack(240, 280)).toBe('minmax(240px, 280px)')
    })

    it('is read back as a floor, and never as flexible', () => {
        expect(trackFloor(cappedTrack(100, 140))).toBe(100)
        expect(columnResizeFloor({ width: cappedTrack(150, 220) })).toBe(150)
        expect(isFlexibleWidth(cappedTrack(100, 140))).toBe(false)
    })
})

describe('columnResizeFloor', () => {
    it('takes a declared minWidth as the answer', () => {
        expect(columnResizeFloor({ minWidth: 90, width: 'minmax(140px, 1fr)' })).toBe(90)
        expect(columnResizeFloor({ minWidth: 57, width: 57 })).toBe(57)
    })

    it('lifts a minmax track floor, which is how a consumer writes a flexible column', () => {
        expect(columnResizeFloor({ width: 'minmax(140px, 1fr)' })).toBe(140)
        expect(columnResizeFloor({ width: 'minmax(180px, 1.6fr)' })).toBe(180)
        expect(columnResizeFloor({ width: 'minmax( 130px , 1fr )' })).toBe(130)
    })

    // minmax(0, …) means "absorb the slack and truncate", not a real minimum
    it('leaves a zero floor and anything it cannot read to the react-data-grid default', () => {
        expect(columnResizeFloor({ width: 'minmax(0, 1fr)' })).toBeUndefined()
        expect(columnResizeFloor({ width: 'auto' })).toBeUndefined()
        expect(columnResizeFloor({ width: 240 })).toBeUndefined()
        expect(columnResizeFloor({})).toBeUndefined()
    })
})

describe('isFlexibleWidth', () => {
    it('recognises an fr unit wherever it sits in the track', () => {
        expect(isFlexibleWidth('minmax(140px, 1fr)')).toBe(true)
        expect(isFlexibleWidth('minmax(180px, 1.6fr)')).toBe(true)
        expect(isFlexibleWidth('minmax(0, 1fr)')).toBe(true)
        expect(isFlexibleWidth('1fr')).toBe(true)
    })

    // Everything else is measured to a fixed number of pixels, and the slack past it stays blank
    it('says no to a capped track, a pixel count and the react-data-grid default', () => {
        expect(isFlexibleWidth('minmax(140px, 300px)')).toBe(false)
        expect(isFlexibleWidth('auto')).toBe(false)
        expect(isFlexibleWidth(240)).toBe(false)
        expect(isFlexibleWidth(undefined)).toBe(false)
    })
})

describe('trackFloor', () => {
    it('takes a pixel count as its own floor', () => {
        expect(trackFloor(240)).toBe(240)
        expect(trackFloor(0)).toBeUndefined()
    })

    it('lifts the floor out of a minmax track, capped or flexible', () => {
        expect(trackFloor('minmax(140px, 1fr)')).toBe(140)
        expect(trackFloor('minmax(100px, 140px)')).toBe(100)
    })

    it('finds no floor in a zero one, in auto, or in nothing', () => {
        expect(trackFloor('minmax(0, 1fr)')).toBeUndefined()
        expect(trackFloor('auto')).toBeUndefined()
        expect(trackFloor(undefined)).toBeUndefined()
    })
})

describe('the stored widths', () => {
    beforeEach(() => localStorage.clear())

    it('reads back what was written', () => {
        writeColumnWidths(TABLE, { name: 300, status: 120 })
        expect(readColumnWidths(TABLE)).toEqual({ name: 300, status: 120 })
    })

    it('answers an empty layout for a table that stored nothing', () => {
        expect(readColumnWidths(TABLE)).toEqual({})
    })

    // A stale or hand-edited store must not put a nonsense track into a grid template
    it('drops anything that is not a positive pixel count', () => {
        localStorage.setItem(
            columnWidthsKey(TABLE),
            JSON.stringify({ name: 300, status: 0, kind: -20, id: 'wide', flag: null })
        )
        expect(readColumnWidths(TABLE)).toEqual({ name: 300 })
    })

    it('answers an empty layout for junk, an array or unparseable text', () => {
        localStorage.setItem(columnWidthsKey(TABLE), 'not json')
        expect(readColumnWidths(TABLE)).toEqual({})
        localStorage.setItem(columnWidthsKey(TABLE), '["name"]')
        expect(readColumnWidths(TABLE)).toEqual({})
    })

    // Removed rather than written empty: nothing stored IS "no width of my own"
    it('clears by removing the key', () => {
        writeColumnWidths(TABLE, { name: 300 })
        clearColumnWidths(TABLE)
        expect(localStorage.getItem(columnWidthsKey(TABLE))).toBeNull()
        expect(readColumnWidths(TABLE)).toEqual({})
    })

    // License stacks three tables over one schema and shares their key on purpose: dragging one
    // column has to move all three, the way the visibility half already does.
    it('tells every table sharing the key, and only those', () => {
        const shared = vi.fn()
        const other = vi.fn()
        const stopShared = onColumnWidthsChange(TABLE, shared)
        const stopOther = onColumnWidthsChange('devicesHiddenColumns', other)

        writeColumnWidths(TABLE, { name: 300 })
        expect(shared).toHaveBeenCalledWith({ name: 300 })
        expect(other).not.toHaveBeenCalled()

        clearColumnWidths(TABLE)
        expect(shared).toHaveBeenLastCalledWith({})

        stopShared()
        writeColumnWidths(TABLE, { name: 400 })
        expect(shared).toHaveBeenCalledTimes(2)
        stopOther()
    })
})
