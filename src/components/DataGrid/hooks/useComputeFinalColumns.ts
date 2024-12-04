import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useCallback, useMemo } from 'react'
import { RenderCellProps, SelectColumn } from 'react-data-grid'
import { getHeaderFilter } from '../HeaderFilter'
import { convertDate, DATE_FORMAT } from '../../../utils'

export const useComputeFinalColumns = <R extends RowDefinition = RowDefinition>({
    columns,
    selectionEnabled
}: {
    columns: ColumnDefinition<R>[]
    selectionEnabled?: boolean
}): ColumnDefinition<R>[] => {
    const adaptColumn = useCallback((col: ColumnDefinition<R>) => {
        const getRenderCell = () => {
            if (col.renderCell) {
                return col.renderCell
            }
            if (col.type === ColumnType.DATE) {
                return ({ row }: RenderCellProps<R>) =>
                    convertDate(row[col.key as keyof R], DATE_FORMAT.TEXT)
            }
        }
        const getRenderHeaderCell = () => {
            if (col.renderHeaderCell) {
                return col.renderHeaderCell
            }
            return getHeaderFilter<R>(col)
        }

        return { ...col, renderCell: getRenderCell(), renderHeaderCell: getRenderHeaderCell() }
    }, [])

    return useMemo(() => {
        const finalColumns: ColumnDefinition<R>[] = []

        if (selectionEnabled) {
            finalColumns.push({
                ...SelectColumn,
                minWidth: 50,
                maxWidth: 50
            })
        }
        finalColumns.push(...columns.map((col) => adaptColumn(col)))
        return finalColumns
    }, [columns, adaptColumn])
}
