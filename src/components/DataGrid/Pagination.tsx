import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import TablePagination from '@mui/material/TablePagination'

const Container = styled.div`
    height: 80px;
    width: 100%;
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
}
export const Pagination = React.memo(
    ({ currentPage, setCurrentPage, setPageSize, pageSize, totalCount, labels }: Props) => {
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

        return (
            <Container>
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
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Container>
        )
    }
)
