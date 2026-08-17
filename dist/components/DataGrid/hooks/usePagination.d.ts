export declare enum DEFAULT_PAGE_SIZES {
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
    page?: number;
    /** Called with the page the grid wants to move to, controlled or not. */
    onPageChange?: (page: number) => void;
    /** Rows per page. Supply it and the caller owns the size. */
    pageSize?: number;
    onPageSizeChange?: (pageSize: number) => void;
}
interface IUsePagination {
    currentPage: number;
    pageSize: number;
    defaultPageSize: DEFAULT_PAGE_SIZES;
    setCurrentPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    resetPagination: () => void;
}
export declare const usePagination: (defaultPageSize?: number, control?: PaginationControl) => IUsePagination;
export {};
