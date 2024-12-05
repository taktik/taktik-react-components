import React from 'react';
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
};
export declare const Pagination: React.MemoExoticComponent<({ currentPage, setCurrentPage, setPageSize, pageSize, totalCount, labels }: Props) => import("react/jsx-runtime").JSX.Element>;
