import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithTable } from '../../testUtils/renderWithTable'
import { defaultTableTheme } from '../../theme/tableTheme'
import { Pagination } from './Pagination'

/** A theme whose type step is nobody's default, so a stock MUI size cannot pass for the token. */
const theme = {
    ...defaultTableTheme,
    table: { ...defaultTableTheme.table, fontSizeNormal: '13px', fontFamily: 'Probe, sans-serif' }
}

const renderFooter = (): void => {
    renderWithTable(
        <Pagination
            currentPage={0}
            setCurrentPage={() => undefined}
            pageSize={25}
            setPageSize={() => undefined}
            totalCount={58}
            totalLabel={(count) => `${count} devices`}
        />,
        { theme }
    )
}

/**
 * The footer's two ends are a token-sized label and MUI's own pager, and they have to read as one
 * row. MUI sizes the pager's parts from its `body2` (0.875rem), which no host theme names — so
 * these pin that the pager reads the SAME step and family the label does.
 */
describe('the footer reads at one type step', () => {
    it('sizes the count label from the theme', () => {
        renderFooter()
        expect(getComputedStyle(screen.getByText('58 devices')).fontSize).toBe(
            theme.table.fontSizeNormal
        )
    })

    it('sizes the pager the label is beside from the same token', () => {
        renderFooter()
        const displayedRows = document.querySelector('.MuiTablePagination-displayedRows')
        const selectLabel = document.querySelector('.MuiTablePagination-selectLabel')
        for (const part of [displayedRows, selectLabel]) {
            expect(part).not.toBeNull()
            expect(getComputedStyle(part as Element).fontSize).toBe(theme.table.fontSizeNormal)
        }
    })

    it('gives both ends the same family', () => {
        renderFooter()
        const label = getComputedStyle(screen.getByText('58 devices')).fontFamily
        const pager = getComputedStyle(
            document.querySelector('.MuiTablePagination-displayedRows') as Element
        ).fontFamily
        expect(label).toBe(theme.table.fontFamily)
        expect(pager).toBe(theme.table.fontFamily)
    })

    /**
     * `font-size` is what sizes an MUI `SvgIcon`, so the type step deliberately stops at the parts
     * that carry words: handing it to the whole subtree shrinks the pager's chevrons to the height
     * of a word.
     */
    it('leaves the pager chevrons at their own size', () => {
        renderFooter()
        const chevron = document.querySelector('.MuiTablePagination-actions svg')
        expect(chevron).not.toBeNull()
        expect(getComputedStyle(chevron as Element).fontSize).not.toBe(theme.table.fontSizeNormal)
    })

    /**
     * Why re-sizing the footer's type cannot move the footer: the band's height is the token's, not
     * its content's. A host that let the band size itself would have the pager's type deciding where
     * the grid above it ends.
     */
    it('stands in a band the token sizes, not its own contents', () => {
        renderFooter()
        const footer = document.querySelector('.MuiTablePagination-root')?.parentElement
        expect(footer).toBeTruthy()
        expect(getComputedStyle(footer as Element).height).toBe(theme.table.footerHeight)
    })
})
