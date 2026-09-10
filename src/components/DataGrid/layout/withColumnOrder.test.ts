import { describe, expect, it } from 'vitest'
import { ColumnDefinition, RowDefinition } from '../types'
import { withColumnOrder } from './withColumnOrder'
const ACTIONS_COLUMN_KEY = 'actions'

const column = (key: string): ColumnDefinition<RowDefinition> => ({ key, name: key })

const actions: ColumnDefinition<RowDefinition> = {
    key: ACTIONS_COLUMN_KEY,
    name: '',
    frozenRight: true
}

const keys = (columns: ColumnDefinition<RowDefinition>[]): string[] =>
    columns.map((candidate) => candidate.key)

describe('withColumnOrder', () => {
    const declared = [column('name'), column('status'), column('organisation'), actions]

    it('leaves a table nobody arranged exactly as it is', () => {
        expect(withColumnOrder(declared, [])).toBe(declared)
    })

    // identity included: the grid rebuilds its columns from what it is handed
    it('hands back the same array when the stored order says what the page already says', () => {
        expect(withColumnOrder(declared, ['name', 'status', 'organisation'])).toBe(declared)
    })

    it('arranges the columns the stored order names', () => {
        const ordered = withColumnOrder(declared, ['organisation', 'name', 'status'])
        expect(keys(ordered)).toEqual(['organisation', 'name', 'status', ACTIONS_COLUMN_KEY])
    })

    // a stored order outlives a column rename: the key names nothing, so there is nothing to place
    it('drops a key the table no longer has', () => {
        const ordered = withColumnOrder(declared, ['organisation', 'lastSeen', 'name', 'status'])
        expect(keys(ordered)).toEqual(['organisation', 'name', 'status', ACTIONS_COLUMN_KEY])
    })

    // the whole point of filling slots rather than appending: a new column is where the page put it
    it('keeps a column the stored order says nothing about in its declared slot', () => {
        const withNewColumn = [
            column('name'),
            column('licence'),
            column('status'),
            column('organisation'),
            actions
        ]
        const ordered = withColumnOrder(withNewColumn, ['organisation', 'name', 'status'])
        expect(keys(ordered)).toEqual([
            'organisation',
            'licence',
            'name',
            'status',
            ACTIONS_COLUMN_KEY
        ])
    })

    // the chooser never offers it, so it can never be in a stored order — and it stays last
    it('leaves the actions column where the page declared it', () => {
        const ordered = withColumnOrder(declared, ['status', 'organisation', 'name'])
        expect(ordered.at(-1)?.key).toBe(ACTIONS_COLUMN_KEY)
    })

    // a repeated key would claim two slots and leave one of the table's own columns with none
    it('reads a repeated key once', () => {
        // two arranged keys fill the two slots they occupied; Status was named by neither and stays
        const ordered = withColumnOrder(declared, ['organisation', 'organisation', 'name'])
        expect(keys(ordered)).toEqual(['organisation', 'status', 'name', ACTIONS_COLUMN_KEY])
    })

    it('ignores an order naming fewer than two of the table s own columns', () => {
        expect(withColumnOrder(declared, ['name'])).toBe(declared)
        expect(withColumnOrder(declared, ['gone', 'alsoGone'])).toBe(declared)
    })
})
