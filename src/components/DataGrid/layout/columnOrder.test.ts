import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
    clearColumnOrder,
    onColumnOrderChange,
    readColumnOrder,
    sameColumnOrder,
    writeColumnOrder
} from './columnOrder'
import { columnOrderKey } from './layoutKeys'

const TABLE = 'agentsHiddenColumns'

describe('columnOrderKey', () => {
    // The value is a promise to the user: it is what their arranged order is filed under.
    it('hangs off the table own column-visibility key', () => {
        expect(columnOrderKey('agentsHiddenColumns')).toBe('agentsHiddenColumns.columnOrder')
    })
})

describe('sameColumnOrder', () => {
    it('says yes only to the same keys in the same slots', () => {
        expect(sameColumnOrder(['name', 'status'], ['name', 'status'])).toBe(true)
        expect(sameColumnOrder([], [])).toBe(true)
    })

    // Order IS the value here, so a re-arrangement is a different answer
    it('says no to a different order, a different length or a different key', () => {
        expect(sameColumnOrder(['name', 'status'], ['status', 'name'])).toBe(false)
        expect(sameColumnOrder(['name'], ['name', 'status'])).toBe(false)
        expect(sameColumnOrder(['name', 'status'], ['name', 'version'])).toBe(false)
    })
})

describe('the stored order', () => {
    beforeEach(() => localStorage.clear())

    it('reads back what was written', () => {
        writeColumnOrder(TABLE, ['status', 'name', 'version'])
        expect(readColumnOrder(TABLE)).toEqual(['status', 'name', 'version'])
    })

    // Nothing stored means the order the page declared is still the right answer
    it('answers an empty order for a table that stored nothing', () => {
        expect(readColumnOrder(TABLE)).toEqual([])
    })

    // A stale or hand-edited store must not put a non-key into a grid's column list
    it('drops anything that is not a column key', () => {
        localStorage.setItem(
            columnOrderKey(TABLE),
            JSON.stringify(['name', 7, null, { key: 'status' }, 'version'])
        )
        expect(readColumnOrder(TABLE)).toEqual(['name', 'version'])
    })

    it('answers an empty order for junk, an object or unparseable text', () => {
        localStorage.setItem(columnOrderKey(TABLE), 'not json')
        expect(readColumnOrder(TABLE)).toEqual([])
        localStorage.setItem(columnOrderKey(TABLE), '{"name":1}')
        expect(readColumnOrder(TABLE)).toEqual([])
    })

    // Removed rather than written empty: nothing stored IS "no order of my own"
    it('clears by removing the key', () => {
        writeColumnOrder(TABLE, ['status', 'name'])
        clearColumnOrder(TABLE)
        expect(localStorage.getItem(columnOrderKey(TABLE))).toBeNull()
        expect(readColumnOrder(TABLE)).toEqual([])
    })

    // License stacks three tables over one schema and shares their key on purpose: rearranging one
    // has to move all three, the way the visibility half already does.
    it('tells every table sharing the key, and only those', () => {
        const shared = vi.fn()
        const other = vi.fn()
        const stopShared = onColumnOrderChange(TABLE, shared)
        const stopOther = onColumnOrderChange('devicesHiddenColumns', other)

        writeColumnOrder(TABLE, ['status', 'name'])
        expect(shared).toHaveBeenCalledWith(['status', 'name'])
        expect(other).not.toHaveBeenCalled()

        clearColumnOrder(TABLE)
        expect(shared).toHaveBeenLastCalledWith([])

        stopShared()
        writeColumnOrder(TABLE, ['name', 'status'])
        expect(shared).toHaveBeenCalledTimes(2)
        stopOther()
    })
})
