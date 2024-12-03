import React, { useCallback, useEffect, useMemo } from 'react'
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

export const DataGrid = React.memo(
    ({
        theme,
        loading,
        rows,
        columns,
        sortColumns,
        onSortColumnsChange,
        defaultSortColumns,
        selectedRows,
        onSelectedRowsChange,
        ...rest
    }: DataGridProps<RowDefinition>) => {
        const finalColumns = useComputeFinalColumns({
            columns,
            selectionEnabled: !!onSelectedRowsChange
        })

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
            <Container>
                <Grid
                    {...rest}
                    selectedRows={selectedRows ? new Set(selectedRows) : undefined}
                    onSelectedRowsChange={(value: ReadonlySet<unknown>) => {
                        onSelectedRowsChange?.(Array.from(value) as string[])
                    }}
                    rowKeyGetter={(row: RowDefinition) => row.id}
                    rows={isLocalSorting ? localSortedRows : rows}
                    onSortColumnsChange={
                        isLocalSorting ? localSetSortedColumns : onSortColumnsChange
                    }
                    sortColumns={isLocalSorting ? localSortColumns : sortColumns}
                    columns={finalColumns}
                    rowClass={computeRawClass}
                    rowHeight={50}
                    renderers={{
                        renderCheckbox: (props) => <RenderCheckbox {...props} />
                    }}
                    style={{ ...defaultTheme, ...(theme ?? {}) } as React.CSSProperties}
                />
                {loading ? (
                    <ContainerLoading>
                        <div></div>
                        <PulseLoader color={taktikTheme.primary500} />
                    </ContainerLoading>
                ) : null}
            </Container>
        )
    }
)
