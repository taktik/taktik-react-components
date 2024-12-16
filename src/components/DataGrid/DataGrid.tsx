import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import Grid, {
    DataGridProps as DataGridPropsFromLib,
    RenderCheckboxProps,
    SortColumn
} from 'react-data-grid'
import { DataGridTheme, defaultTheme } from './dataGridTheme'
import { Container } from './Container'
import styled from '@emotion/styled'
import { ColumnDefinition, RowDefinition } from './types'
import { useLocalSorting } from './hooks/useLocalSorting'
import { useComputeFinalColumns } from './hooks/useComputeFinalColumns'
import { DataGridCheckbox } from './DataGridCheckbox'
import 'react-data-grid/lib/styles.css'
import { taktikTheme } from '../theme'
import { PulseLoader } from 'react-spinners'
import { FilterProvider, Filters } from './FilterProvider'
import { useLocalFiltering } from './hooks/useLocalFiltering'
import { Pagination, Props as PaginationProps } from './Pagination'
import { usePagination } from './hooks/usePagination'
import { VisibilityContext, VisibilityProvider } from './VisibilityProvider'

export * from 'react-data-grid'

export type DataGridProps<Row extends RowDefinition> = Omit<
    DataGridPropsFromLib<Row>,
    'columns' | 'rows' | 'selectedRows' | 'onSelectedRowsChange'
> & {
    selectable?: boolean
    defaultSortColumns?: SortColumn[]
    columns: ColumnDefinition<Row>[]
    rows: Row[]
    theme?: DataGridTheme
    loading?: boolean
    selectedRows?: string[]
    onSelectedRowsChange?: (rows: string[]) => void
    noDataMessage?: string
    filters?: Filters
    setFilters?: (filters: Filters) => void
    pagination?: {
        enabled?: boolean
        defaultPageSize?: number
        remotePagination?: PaginationProps
    }
    visibilityColumnFeature?: {
        enabled?: boolean
        visibilityFeatureDisabledFor?: string[]
    }
}

const ContainerLoading = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${taktikTheme.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`

const RenderCheckbox = React.memo(({ checked, onChange }: RenderCheckboxProps) => {
    const onChangeFn = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
            onChange(checked, (event.nativeEvent as MouseEvent).shiftKey)
        },
        [onChange]
    )
    return <DataGridCheckbox checked={checked} onChange={onChangeFn} />
})

const DataGridBase = <R extends RowDefinition = RowDefinition>({
    theme,
    loading,
    rows,
    columns,
    sortColumns,
    onSortColumnsChange,
    defaultSortColumns,
    selectedRows,
    onSelectedRowsChange,
    noDataMessage,
    filters,
    setFilters,
    pagination,
    ...rest
}: DataGridProps<R>) => {
    const { gridKey } = useContext(VisibilityContext)
    const { pageSize, currentPage, setCurrentPage, setPageSize } = usePagination(
        pagination?.defaultPageSize
    )
    const finalColumns = useComputeFinalColumns({
        columns,
        selectionEnabled: !!onSelectedRowsChange
    })

    const filtersEnabled = useMemo(
        () => finalColumns.some((col) => col.filterEnabled),
        [finalColumns]
    )
    const isLocalPagination = useMemo(
        () => pagination?.enabled && !pagination.remotePagination,
        [pagination]
    )

    const isLocalFiltering = useMemo(() => !setFilters, [setFilters])

    const rowsFiltered = useLocalFiltering({
        columns: finalColumns,
        rows,
        enabled: isLocalFiltering
    })

    const isLocalSorting = useMemo(() => !onSortColumnsChange, [onSortColumnsChange])

    const {
        sortedRows: sortedRows,
        sortColumns: localSortColumns,
        setSortedColumns: localSetSortedColumns
    } = useLocalSorting({
        columns: finalColumns,
        rows: rowsFiltered,
        defaultSortColumns
    })

    const rowsToDisplay = useMemo(() => {
        if (isLocalPagination) {
            return sortedRows.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        }
        return sortedRows
    }, [sortedRows, isLocalPagination, currentPage, pageSize])

    const computeRawClass = useCallback(
        (_: RowDefinition, index: number) => {
            if (index === 0) {
                return 'first-row'
            } else if (index === rows.length - 1) {
                return 'last-row'
            }
            return ''
        },
        [rows]
    )

    /**
     * Be sure only rows displayed are selected
     */
    useEffect(() => {
        const selectedRowsAvailable = selectedRows?.filter((rowId) =>
            rows.some((row) => row.id === rowId)
        )
        if (selectedRowsAvailable?.length != selectedRows?.length) {
            onSelectedRowsChange?.(selectedRowsAvailable ?? [])
        }
    }, [rows, selectedRows])

    return (
        <Container $pagination={!!pagination?.enabled}>
            <div>
                <Grid
                    key={gridKey}
                    rowHeight={50}
                    selectedRows={selectedRows ? new Set(selectedRows) : undefined}
                    onSelectedRowsChange={(value: ReadonlySet<unknown>) => {
                        onSelectedRowsChange?.(Array.from(value) as string[])
                    }}
                    rowKeyGetter={(row: RowDefinition) => row.id}
                    rows={rowsToDisplay}
                    onSortColumnsChange={
                        isLocalSorting ? localSetSortedColumns : onSortColumnsChange
                    }
                    sortColumns={isLocalSorting ? localSortColumns : sortColumns}
                    columns={finalColumns}
                    rowClass={computeRawClass}
                    headerRowHeight={filtersEnabled ? 70 : undefined}
                    renderers={{
                        renderCheckbox: (props) => <RenderCheckbox {...props} />,
                        ...rest.renderers
                    }}
                    {...rest}
                    style={{ ...defaultTheme, ...(theme ?? {}) } as React.CSSProperties}
                />
            </div>
            {pagination?.enabled ? (
                <Pagination
                    {...(pagination?.remotePagination ?? {
                        currentPage,
                        setCurrentPage,
                        pageSize,
                        setPageSize,
                        totalCount: rowsFiltered.length
                    })}
                />
            ) : null}
            {loading ? (
                <ContainerLoading>
                    <div></div>
                    <PulseLoader color={taktikTheme.primary500} />
                </ContainerLoading>
            ) : null}
        </Container>
    )
}

export const DataGrid = <R extends RowDefinition = RowDefinition>({
    filters,
    setFilters,
    columns,
    visibilityColumnFeature: {
        enabled: visibilityFeatureEnabled,
        visibilityFeatureDisabledFor
    } = {},
    ...rest
}: DataGridProps<R>) => (
    <FilterProvider filters={filters} setFilters={setFilters}>
        <VisibilityProvider
            columns={columns as ColumnDefinition[]}
            enabled={visibilityFeatureEnabled}
            visibilityFeatureDisabledFor={visibilityFeatureDisabledFor}>
            <DataGridBase {...rest} columns={columns} filters={filters} setFilters={setFilters} />
        </VisibilityProvider>
    </FilterProvider>
)
