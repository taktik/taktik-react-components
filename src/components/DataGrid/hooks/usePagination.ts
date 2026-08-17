import { useCallback, useEffect, useRef, useState } from 'react'

export enum DEFAULT_PAGE_SIZES {
    SMALLER = 6,
    SMALL = 10,
    MEDIUM = 15,
    BIG = 80,
    BIGGER = 160
}

/**
 * The controlled half, in the ordinary React shape: pass a value and a callback and the caller owns
 * that piece of state; pass neither and this hook keeps it internally, exactly as it always has.
 *
 * Either half may be controlled on its own — a consumer that keeps its page in the URL but is happy
 * with a fixed page size passes `page`/`onPageChange` and nothing else.
 */
export interface PaginationControl {
    /** The current page, 0-based. Supply it and the caller owns the page. */
    page?: number
    /** Called with the page the grid wants to move to, controlled or not. */
    onPageChange?: (page: number) => void
    /** Rows per page. Supply it and the caller owns the size. */
    pageSize?: number
    onPageSizeChange?: (pageSize: number) => void
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
    defaultPageSize: number = DEFAULT_PAGE_SIZES.SMALL,
    control: PaginationControl = {}
): IUsePagination => {
    const { page, onPageChange, pageSize: controlledPageSize, onPageSizeChange } = control
    const [uncontrolledPage, setUncontrolledPage] = useState(0)
    const [uncontrolledPageSize, setUncontrolledPageSize] = useState(defaultPageSize)

    const pageIsControlled = page !== undefined
    const pageSizeIsControlled = controlledPageSize !== undefined

    const currentPage = pageIsControlled ? page : uncontrolledPage
    const pageSize = pageSizeIsControlled ? controlledPageSize : uncontrolledPageSize

    const setCurrentPage = useCallback(
        (next: number) => {
            if (!pageIsControlled) {
                setUncontrolledPage(next)
            }
            onPageChange?.(next)
        },
        [pageIsControlled, onPageChange]
    )

    const setPageSize = useCallback(
        (next: number) => {
            if (!pageSizeIsControlled) {
                setUncontrolledPageSize(next)
            }
            onPageSizeChange?.(next)
        },
        [pageSizeIsControlled, onPageSizeChange]
    )

    const resetPagination = useCallback(() => {
        setCurrentPage(0)
        setPageSize(defaultPageSize)
    }, [setCurrentPage, setPageSize, defaultPageSize])

    /**
     * A page size change puts the reader back on page 1 — the rows under the old offset are not the
     * rows they were looking at.
     *
     * ⚠ It must NOT fire on mount. It always did, harmlessly, while the page was internal state that
     * started at 0 anyway; against a CONTROLLED page it would overwrite the caller's opening page —
     * so a grid deep-linked to page 4 would reset itself to page 1 before its first query settled.
     */
    const sizeOnMount = useRef(pageSize)
    useEffect(() => {
        if (sizeOnMount.current === pageSize) {
            return
        }
        sizeOnMount.current = pageSize
        setCurrentPage(0)
        // `setCurrentPage` is deliberately out: it changes identity with the caller's callback, and
        // this effect answers to a size change alone.
    }, [pageSize]) // eslint-disable-line react-hooks/exhaustive-deps

    return {
        currentPage,
        pageSize,
        defaultPageSize,
        setCurrentPage,
        setPageSize,
        resetPagination
    }
}
