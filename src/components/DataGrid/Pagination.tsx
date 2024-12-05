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
        const handleChangePage = useCallback(
            (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
                setCurrentPage(newPage)
            },
            []
        )
        const handleChangeRowsPerPage = useCallback(
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setPageSize(parseInt(event.target.value, 10))
                setCurrentPage(0)
            },
            []
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
