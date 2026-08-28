import styled from '@emotion/styled'
import React, { ReactNode, useCallback, useMemo } from 'react'
import TablePagination from '@mui/material/TablePagination'

/**
 * The footer is a ROW with two ends: what the table holds on the left, the pager's own controls on
 * the right. The pager keeps the right end to itself when the left one says nothing, so a grid that
 * passes no `totalLabel` looks exactly as it did.
 */
const Container = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`

/** The left end of the footer. Its colour is the footer's, which the host theme paints. */
const TotalLabel = styled.div`
    margin-right: auto;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export type Props = {
    currentPage: number
    setCurrentPage: (page: number) => void
    pageSize: number
    setPageSize: (pageSize: number) => void
    totalCount: number
    labels?: {
        rowsPerPageLabel?: string
        ofLabel?: string
    }
    /**
     * What the table holds, rendered at the footer's left end ("58 devices"). The library has no
     * i18n, so the caller words it — and it is handed the count the pager is counting, so the
     * number can never disagree with the "1-25 of 58" beside it.
     */
    totalLabel?: (totalCount: number) => ReactNode
    /**
     * The sizes the dropdown offers. Defaults to the four MUI has always shown here; a consumer
     * paging in tens, or one opening a grid at one of `DEFAULT_PAGE_SIZES`, names its own.
     */
    rowsPerPageOptions?: number[]
}

/** What the footer offers when the consumer names nothing — MUI's own list, said out loud. */
const DEFAULT_ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100]
export const Pagination = React.memo(
    ({
        currentPage,
        setCurrentPage,
        setPageSize,
        pageSize,
        totalCount,
        labels,
        totalLabel,
        rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTIONS
    }: Props) => {
        /**
         * ⚠ The setters ARE dependencies. They used to be raw `useState` setters, stable for the
         * life of the grid, so an empty dependency array was invisible — the frozen first-render
         * closure called the same function every time. They are `useCallback`s now (a controlled
         * consumer's own handler is part of them), so a frozen closure calls a stale one: the
         * rows-per-page dropdown moved its own label and changed nothing else.
         */
        const handleChangePage = useCallback(
            (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
                setCurrentPage(newPage)
            },
            [setCurrentPage]
        )
        const handleChangeRowsPerPage = useCallback(
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setPageSize(parseInt(event.target.value, 10))
                setCurrentPage(0)
            },
            [setPageSize, setCurrentPage]
        )

        /**
         * The size in use is an option whether or not the consumer listed it. MUI renders the Select
         * BLANK when its value is not among the options — so a grid opened at a size of its own
         * (`DEFAULT_PAGE_SIZES.MEDIUM`, a size restored from a URL) showed an empty control, and
         * picking anything from it moved the reader to a page size they had not chosen.
         */
        const options = useMemo(
            () =>
                rowsPerPageOptions.includes(pageSize)
                    ? rowsPerPageOptions
                    : [...rowsPerPageOptions, pageSize].sort((a, b) => a - b),
            [rowsPerPageOptions, pageSize]
        )

        return (
            <Container>
                {totalLabel ? <TotalLabel>{totalLabel(totalCount)}</TotalLabel> : null}
                <TablePagination
                    labelRowsPerPage={
                        labels?.rowsPerPageLabel ? (
                            <span>{labels?.rowsPerPageLabel}</span>
                        ) : undefined
                    }
                    labelDisplayedRows={({ from, to, count }) => {
                        return `${from}-${to} ${labels?.ofLabel ? labels.ofLabel : 'of'} ${count}`
                    }}
                    component='div'
                    count={totalCount}
                    page={currentPage}
                    onPageChange={handleChangePage}
                    rowsPerPage={pageSize}
                    rowsPerPageOptions={options}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Container>
        )
    }
)
