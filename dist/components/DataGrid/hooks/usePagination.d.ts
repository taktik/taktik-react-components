export declare enum DEFAULT_PAGE_SIZES {
    SMALLER = 6,
    SMALL = 10,
    MEDIUM = 15,
    BIG = 80,
    BIGGER = 160
}
interface IUsePagination {
    currentPage: number;
    pageSize: number;
    defaultPageSize: DEFAULT_PAGE_SIZES;
    setCurrentPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    resetPagination: () => void;
}
export declare const usePagination: (defaultPageSize?: DEFAULT_PAGE_SIZES) => IUsePagination;
export {};
