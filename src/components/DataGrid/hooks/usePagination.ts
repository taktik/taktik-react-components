import { useCallback, useEffect, useState } from 'react'

export enum DEFAULT_PAGE_SIZES {
    SMALLER = 6,
    SMALL = 10,
    MEDIUM = 15,
    BIG = 80,
    BIGGER = 160
}

interface IUsePagination {
    currentPage: number
    pageSize: number
    defaultPageSize: DEFAULT_PAGE_SIZES
    setCurrentPage: (page: number) => void
    setPageSize: (pageSize: number) => void
    resetPagination: () => void
}

export const usePagination = (
    defaultPageSize: number = DEFAULT_PAGE_SIZES.SMALL
): IUsePagination => {
    const [currentPage, setCurrentPage] = useState(0)
    const [pageSize, setPageSize] = useState(defaultPageSize)

    const resetPagination = useCallback(() => {
        setCurrentPage(0)
        setPageSize(defaultPageSize)
    }, [])

    // If the page size change go to first page
    useEffect(() => {
        setCurrentPage(0)
    }, [pageSize])

    return {
        currentPage,
        pageSize,
        defaultPageSize,
        setCurrentPage,
        setPageSize,
        resetPagination
    }
}
