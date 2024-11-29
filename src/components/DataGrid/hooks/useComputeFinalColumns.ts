import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useMemo } from 'react'
import { RenderCellProps, SelectColumn } from 'react-data-grid'
import { convertDate, DATE_FORMAT } from '../../../utils/date'

export const useComputeFinalColumns = <R extends RowDefinition = RowDefinition>({
    columns,
    selectionEnabled
}: {
    columns: ColumnDefinition<R>[]
    selectionEnabled?: boolean
}): ColumnDefinition<R>[] =>
    useMemo(() => {
        const finalColumns: ColumnDefinition<R>[] = []

        if (selectionEnabled) {
            finalColumns.push({
                ...SelectColumn,
                minWidth: 50,
                maxWidth: 50
            })
        }
        finalColumns.push(
            ...columns.map((col) => {
                if (col.type === ColumnType.DATE && !col.renderCell) {
                    return {
                        ...col,
                        renderCell: ({ row }: RenderCellProps<R>) => {
                            return convertDate(row[col.key as keyof R], DATE_FORMAT.TEXT)
                        }
                    }
                }
                return col
            })
        )
        return finalColumns
    }, [columns])
