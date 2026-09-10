import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { DataGrid } from './DataGrid'
import type { ColumnDefinition } from './types'

/**
 * The grid's selection contract — a picker depends on it holding a selection wider than the rows
 * on screen.
 */

interface Row {
    id: string
    name: string
}

const page: Row[] = [
    { id: 'a', name: 'Alpha' },
    { id: 'b', name: 'Bravo' }
]

const nameColumn: ColumnDefinition<Row> = { key: 'name', name: 'Name' }

const grid = (
    selectedRows: string[],
    onSelectedRowsChange: (ids: string[]) => void,
    remote: boolean
) => {
    const remotePagination = {
        currentPage: 0,
        setCurrentPage: vi.fn(),
        pageSize: 2,
        setPageSize: vi.fn(),
        totalCount: 4
    }
    return (
        <DataGrid<Row>
            rows={page}
            columns={[nameColumn]}
            selectedRows={selectedRows}
            onSelectedRowsChange={onSelectedRowsChange}
            pagination={{ enabled: true, ...(remote ? { remotePagination } : {}) }}
        />
    )
}

describe('selection under server pagination', () => {
    /**
     * The bug this pins cost a subscription its devices: the picker opens on every already-chosen
     * device, the grid holds one page, and pruning the selection to "rows I can see" handed back the
     * handful on page one as the user's answer.
     */
    it('keeps ids belonging to rows on other pages', () => {
        const onSelectedRowsChange = vi.fn()
        render(grid(['a', 'z'], onSelectedRowsChange, true))
        expect(onSelectedRowsChange).not.toHaveBeenCalled()
    })

    it('still drops ids of rows that are gone when the grid holds them all', () => {
        const onSelectedRowsChange = vi.fn()
        render(grid(['a', 'z'], onSelectedRowsChange, false))
        expect(onSelectedRowsChange).toHaveBeenCalledWith(['a'])
    })

    it('select-all adds this page without disturbing the rest of the selection', async () => {
        const onSelectedRowsChange = vi.fn()
        render(grid(['z'], onSelectedRowsChange, true))
        await userEvent.click(screen.getAllByRole('checkbox')[0] as HTMLElement)
        expect(onSelectedRowsChange).toHaveBeenCalledWith(['z', 'a', 'b'])
    })

    it('unchecking select-all removes this page and nothing else', async () => {
        const onSelectedRowsChange = vi.fn()
        render(grid(['z', 'a', 'b'], onSelectedRowsChange, true))
        await userEvent.click(screen.getAllByRole('checkbox')[0] as HTMLElement)
        expect(onSelectedRowsChange).toHaveBeenCalledWith(['z'])
    })
})
