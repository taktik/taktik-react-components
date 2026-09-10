import { describe, expect, it } from 'vitest'
import { ColumnDefinition, RowDefinition } from '../types'
import { withFillingColumn } from './columnFill'
const ACTIONS_COLUMN_KEY = 'actions'

const column = (
    key: string,
    width?: number | string,
    extra: Partial<ColumnDefinition<RowDefinition>> = {}
): ColumnDefinition<RowDefinition> => ({ key, name: key, width, ...extra })

const actions = column(ACTIONS_COLUMN_KEY, 57, { name: '', frozenRight: true })

const widthOf = (columns: ColumnDefinition<RowDefinition>[], key: string): unknown =>
    columns.find((candidate) => candidate.key === key)?.width

describe('withFillingColumn', () => {
    // The device list's default set: five capped columns and a flexible tail
    it('leaves a table whose visible set already absorbs the slack exactly as it is', () => {
        const columns = [
            column('device', 'minmax(240px, 280px)'),
            column('lastSeen', 'minmax(150px, 220px)'),
            column('activeMac', 'minmax(150px, 1fr)'),
            actions
        ]
        expect(withFillingColumn(columns, [])).toBe(columns)
    })

    // The reported defect: hide the one flexible column and every visible track is capped
    it('promotes the last visible data column when the flexible one is hidden', () => {
        const columns = [
            column('device', 'minmax(240px, 280px)'),
            column('activeMac', 'minmax(150px, 1fr)'),
            column('lastConnection', 'minmax(150px, 220px)'),
            actions
        ]
        const filled = withFillingColumn(columns, ['activeMac'])
        expect(widthOf(filled, 'lastConnection')).toBe('minmax(150px, 1fr)')
        // nothing else moves, and the hidden column keeps the width it comes back with
        expect(widthOf(filled, 'device')).toBe('minmax(240px, 280px)')
        expect(widthOf(filled, 'activeMac')).toBe('minmax(150px, 1fr)')
    })

    it('never promotes the actions column, whose place is the right edge', () => {
        const columns = [column('device', 240), actions]
        const filled = withFillingColumn(columns, [])
        expect(widthOf(filled, ACTIONS_COLUMN_KEY)).toBe(57)
        expect(widthOf(filled, 'device')).toBe('minmax(240px, 1fr)')
    })

    it('never promotes any other column pinned to the right edge', () => {
        const columns = [column('device', 240), column('flag', 80, { frozenRight: true }), actions]
        expect(widthOf(withFillingColumn(columns, []), 'device')).toBe('minmax(240px, 1fr)')
    })

    // A dragged width is applied over the track before this runs, so it IS the column's width here
    it('keeps a dragged width as the floor it grows from', () => {
        const columns = [column('device', 'minmax(240px, 280px)'), column('lastSeen', 420), actions]
        expect(widthOf(withFillingColumn(columns, []), 'lastSeen')).toBe('minmax(420px, 1fr)')
    })

    it('falls back to a declared minWidth, then to no floor at all', () => {
        expect(
            widthOf(
                withFillingColumn([column('name', 'auto', { minWidth: 120 }), actions], []),
                'name'
            )
        ).toBe('minmax(120px, 1fr)')
        expect(widthOf(withFillingColumn([column('name'), actions], []), 'name')).toBe(
            'minmax(0px, 1fr)'
        )
    })

    it('reads the floor out of a capped track', () => {
        const columns = [column('device', 240), column('model', 'minmax(100px, 140px)'), actions]
        expect(widthOf(withFillingColumn(columns, []), 'model')).toBe('minmax(100px, 1fr)')
    })

    // A table left with nothing but its kebab has nothing to promote, and must not blow up saying so
    it('answers the same columns when no data column is visible', () => {
        const onlyActions = [actions]
        expect(withFillingColumn(onlyActions, [])).toBe(onlyActions)
        const allHidden = [column('device', 240), actions]
        expect(withFillingColumn(allHidden, ['device'])).toBe(allHidden)
        expect(withFillingColumn([], [])).toEqual([])
    })

    // The identity of what the grid is handed is what it rebuilds its columns from
    it('keeps every untouched column identical', () => {
        const device = column('device', 'minmax(240px, 280px)')
        const tail = column('lastSeen', 220)
        const filled = withFillingColumn([device, tail, actions], [])
        expect(filled[0]).toBe(device)
        expect(filled[2]).toBe(actions)
        expect(filled[1]).not.toBe(tail)
    })
})
