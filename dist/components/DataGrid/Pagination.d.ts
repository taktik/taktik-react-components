import React, { ReactNode } from 'react';
export type Props = {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
    totalCount: number;
    labels?: {
        rowsPerPageLabel?: string;
        ofLabel?: string;
    };
    /**
     * What the table holds, rendered at the footer's left end ("58 devices"). The library has no
     * i18n, so the caller words it — and it is handed the count the pager is counting, so the
     * number can never disagree with the "1-25 of 58" beside it.
     */
    totalLabel?: (totalCount: number) => ReactNode;
};
export declare const Pagination: React.MemoExoticComponent<({ currentPage, setCurrentPage, setPageSize, pageSize, totalCount, labels, totalLabel }: Props) => React.JSX.Element>;
