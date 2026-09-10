import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { RenderCellProps } from 'react-data-grid'
import { defaultTheme } from '../DataGrid/dataGridTheme'
import { ColumnType } from '../DataGrid/types'
import { actionColumnSizing, truncated, withAlignedColumn } from './gridCells'

describe('truncated', () => {
    it('renders the value and exposes it as a full-value title tooltip', () => {
        const { container } = render(<div>{truncated('a very long value')}</div>)
        const span = container.querySelector('span')
        expect(span?.textContent).toBe('a very long value')
        expect(span?.getAttribute('title')).toBe('a very long value')
    })

    it('uses an empty title when the value is undefined', () => {
        const { container } = render(<div>{truncated(undefined)}</div>)
        expect(container.querySelector('span')?.getAttribute('title')).toBe('')
    })
})

describe('actionColumnSizing', () => {
    // The buttons do not shrink, so a column short of 32px each (plus the cell's 12px-a-side padding
    // and 1px border) clips them.
    it('fits the buttons and the cell chrome exactly', () => {
        expect(actionColumnSizing(1).width).toBe(57)
        expect(actionColumnSizing(2).width).toBe(101)
        expect(actionColumnSizing(3).width).toBe(145)
    })

    // minWidth is the floor a resize may be dragged to, and react-data-grid clamps `width` UP to it
    // (default 50) — so the two travel together rather than a page setting one of them
    it('carries minWidth alongside width', () => {
        expect(actionColumnSizing(1)).toEqual({ width: 57, minWidth: 57 })
    })

    // The widths above are derived from the padding the grid actually applies, which lives in a
    // separately-released library. If it changes, every action column clips with no other signal.
    it('pins the cell padding the derivation assumes', () => {
        expect(defaultTheme['--rdg-cell-padding']).toBe('8px 12px')
    })
})

describe('withAlignedColumn', () => {
    // The house convention is one presentation for every column — the alignment used to vary by
    // ColumnType, so this pins that it no longer does and a per-type box cannot creep back.
    it('gives every column type the same cell box', () => {
        const boxOf = (type?: ColumnType): string | null => {
            const col = withAlignedColumn<{ id: string; value: string }>({
                key: 'value',
                name: 'Value',
                type,
                renderCell: () => <span>x</span>
            })
            const { container } = render(
                <>{col.renderCell?.({ row: { id: '1', value: 'x' } } as never)}</>
            )
            return container.firstElementChild?.getAttribute('class') ?? null
        }
        const boxes = [
            boxOf(ColumnType.STRING),
            boxOf(ColumnType.DATE),
            boxOf(ColumnType.NUMBER),
            boxOf(ColumnType.BOOLEAN),
            boxOf(undefined)
        ]
        expect(new Set(boxes).size).toBe(1)
    })

    const renderCellOf = <R extends { id: string }>(
        col: ReturnType<typeof withAlignedColumn<R>>,
        row: R
    ): string =>
        render(<>{col.renderCell?.({ row } as unknown as RenderCellProps<R>)}</>).container
            .textContent ?? ''

    it('always sets a header renderer and preserves the column fields', () => {
        const col = withAlignedColumn({
            key: 'name',
            name: 'Name',
            type: ColumnType.STRING,
            sortable: true
        })
        expect(col.key).toBe('name')
        expect(col.sortable).toBe(true)
        expect(typeof col.renderHeaderCell).toBe('function')
    })

    // The declared width is where a column OPENS; the reader owns it from there. One answer for
    // every table, so a page can neither opt in nor opt out of it by declaring its own.
    it('makes a data column resizable, whatever the column declares', () => {
        expect(withAlignedColumn({ key: 'name', name: 'Name' }).resizable).toBe(true)
        expect(withAlignedColumn({ key: 'name', name: 'Name', resizable: false }).resizable).toBe(
            true
        )
        expect(
            withAlignedColumn({ key: 'name', name: 'Name', filterEnabled: true, resizable: false })
                .resizable
        ).toBe(true)
    })

    // A frozenRight column is pinned at the exact fit its buttons need — there is nothing in it to
    // give more room to, and the library's own checkbox column never passes through here at all.
    it('leaves a frozenRight column fixed', () => {
        const col = withAlignedColumn({ key: 'actions', name: '', frozenRight: true })
        expect(col.resizable).toBe(false)
    })

    // The no-clip budgets are written as minmax tracks, which react-data-grid does not clamp a drag
    // against — so the track's own floor becomes the column's minWidth.
    it('lifts a flexible track floor into minWidth, and leaves a declared one alone', () => {
        expect(
            withAlignedColumn({ key: 'name', name: 'Name', width: 'minmax(140px, 1fr)' }).minWidth
        ).toBe(140)
        expect(
            withAlignedColumn({ key: 'id', name: 'Id', width: 'minmax(0, 1fr)' }).minWidth
        ).toBeUndefined()
        expect(
            withAlignedColumn({
                key: 'name',
                name: 'Name',
                width: 'minmax(140px, 1fr)',
                minWidth: 90
            }).minWidth
        ).toBe(90)
        expect(
            withAlignedColumn({ key: 'prefix', name: 'Prefix', width: 180 }).minWidth
        ).toBeUndefined()
    })

    it('wraps an explicit renderCell and keeps its content', () => {
        const col = withAlignedColumn<{ id: string; name: string }>({
            key: 'name',
            name: 'Name',
            type: ColumnType.STRING,
            renderCell: ({ row }) => <span>{row.name}</span>
        })
        expect(renderCellOf(col, { id: '1', name: 'Alice' })).toContain('Alice')
    })

    it('synthesizes a body renderer for a bare column with no renderCell (NUMBER)', () => {
        const col = withAlignedColumn<{ id: string; count: number }>({
            key: 'count',
            name: '#',
            type: ColumnType.NUMBER
        })
        expect(col.renderCell).toBeDefined()
        expect(renderCellOf(col, { id: '1', count: 42 })).toBe('42')
    })

    it('gives a bare STRING column a truncating renderer', () => {
        const col = withAlignedColumn<{ id: string; name: string }>({
            key: 'name',
            name: 'Name',
            type: ColumnType.STRING
        })
        expect(col.renderCell).toBeDefined()
        expect(renderCellOf(col, { id: '1', name: 'Bob' })).toBe('Bob')
    })

    it('formats a bare DATE column rather than leaving the raw value', () => {
        const col = withAlignedColumn<{ id: string; d: string }>({
            key: 'd',
            name: 'Date',
            type: ColumnType.DATE
        })
        expect(col.renderCell).toBeDefined()
    })

    // A boolean has no honest text form, so it stays with react-data-grid rather than being
    // stringified into the words "true"/"false".
    it('leaves a bare BOOLEAN column to the library', () => {
        const col = withAlignedColumn<{ id: string; b: boolean }>({
            key: 'b',
            name: 'Public',
            type: ColumnType.BOOLEAN
        })
        expect(col.renderCell).toBeUndefined()
    })

    // A column that opts into the library's header filter keeps its own header: overriding it
    // would drop the filter input the library renders there.
    it('keeps the library header on a filter-enabled column', () => {
        const col = withAlignedColumn<{ id: string; name: string }>({
            key: 'name',
            name: 'Name',
            type: ColumnType.STRING,
            filterEnabled: true
        })
        expect(col.renderHeaderCell).toBeUndefined()
    })
})
