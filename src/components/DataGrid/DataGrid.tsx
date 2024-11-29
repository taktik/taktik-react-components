import React, { useCallback, useMemo } from 'react'
import Grid, { DataGridProps as DataGridPropsFromLib, SortColumn } from 'react-data-grid'
import { DataGridTheme, defaultTheme } from './dataGridTheme'
import { Container } from './Container'
import { Loader } from '../Loader'
import styled from '@emotion/styled'
import { taktikTheme } from '../theme'
import { ColumnDefinition, RowDefinition } from './types'
import { useLocalSorting } from './hooks/useLocalSorting'
import { useComputeFinalColumns } from './hooks/useComputeFinalColumns'

export type DataGridProps<Row extends RowDefinition> = Omit<
    DataGridPropsFromLib<Row>,
    'columns' | 'rows'
> & {
    defaultSortColumns?: SortColumn[]
    columns: ColumnDefinition<Row>[]
    rows: Row[]
    theme?: DataGridTheme
    loading?: boolean
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

export const DataGrid = React.memo(
    ({
        theme,
        loading,
        rows,
        columns,
        sortColumns,
        onSortColumnsChange,
        defaultSortColumns,
        ...rest
    }: DataGridProps<RowDefinition>) => {
        const finalColumns = useComputeFinalColumns(columns)
        const {
            sortedRows: localSortedRows,
            sortColumns: localSortColumns,
            setSortedColumns: localSetSortedColumns
        } = useLocalSorting(finalColumns, rows, defaultSortColumns)

        const isLocalSorting = useMemo(() => !onSortColumnsChange, [onSortColumnsChange])
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

        return (
            <Container>
                <Grid
                    {...rest}
                    rows={isLocalSorting ? localSortedRows : rows}
                    onSortColumnsChange={
                        isLocalSorting ? localSetSortedColumns : onSortColumnsChange
                    }
                    sortColumns={isLocalSorting ? localSortColumns : sortColumns}
                    columns={finalColumns}
                    rowClass={computeRawClass}
                    rowHeight={50}
                    style={{ ...defaultTheme, ...(theme ?? {}) } as React.CSSProperties}
                />
                {loading ? (
                    <ContainerLoading>
                        <div></div>
                        <Loader color={taktikTheme.primary500} />
                    </ContainerLoading>
                ) : null}
            </Container>
        )
    }
)
