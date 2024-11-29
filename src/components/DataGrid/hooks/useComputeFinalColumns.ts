import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useMemo } from 'react'
import { RenderCellProps } from 'react-data-grid'
import { convertDate, DATE_FORMAT } from '../../../utils/date'

export const useComputeFinalColumns = <R extends RowDefinition = RowDefinition>(
    columns: ColumnDefinition<R>[]
): ColumnDefinition<R>[] =>
    useMemo(
        () =>
            columns.map((col) => {
                if (col.type === ColumnType.DATE && !col.renderCell) {
                    return {
                        ...col,
                        renderCell: ({ row }: RenderCellProps<R>) =>
                            convertDate(row[col.key as keyof R], DATE_FORMAT.TEXT)
                    }
                }
                return col
            }),
        [columns]
    )
