import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithTable } from '../../testUtils/renderWithTable'
import { ACTIVE_ROW_CLASS, DataGrid } from './DataGrid'
import type { ColumnDefinition } from './types'

/**
 * The one row a consumer is showing elsewhere (`activeRowId`) reads as picked WITHOUT a selection
 * column — a table opening one record at a time has no set to tick.
 */

interface Row {
    id: string
    name: string
}

const rows: Row[] = [
    { id: 'a', name: 'Alpha' },
    { id: 'b', name: 'Bravo' }
]

const nameColumn: ColumnDefinition<Row> = { key: 'name', name: 'Name' }

const rowOf = (name: string): HTMLElement =>
    screen.getByText(name).closest('[role="row"]') as HTMLElement

describe('activeRowId', () => {
    it('marks that row and no other, with no checkbox column drawn', () => {
        renderWithTable(<DataGrid<Row> rows={rows} columns={[nameColumn]} activeRowId='b' />)

        expect(rowOf('Bravo')).toHaveClass(ACTIVE_ROW_CLASS)
        expect(rowOf('Alpha')).not.toHaveClass(ACTIVE_ROW_CLASS)
        expect(screen.queryAllByRole('checkbox')).toHaveLength(0)
    })

    // The paint is colour, which a screen reader cannot hear and a forced-colours reader may lose
    it('says so as well as paints it', () => {
        renderWithTable(<DataGrid<Row> rows={rows} columns={[nameColumn]} activeRowId='b' />)

        expect(rowOf('Bravo')).toHaveAttribute('aria-current', 'true')
        expect(rowOf('Alpha')).not.toHaveAttribute('aria-current')
    })

    it('marks nothing while no row is active', () => {
        renderWithTable(<DataGrid<Row> rows={rows} columns={[nameColumn]} />)

        expect(document.querySelector(`.${ACTIVE_ROW_CLASS}`)).toBeNull()
        expect(document.querySelector('[role="row"][aria-current]')).toBeNull()
    })
})
