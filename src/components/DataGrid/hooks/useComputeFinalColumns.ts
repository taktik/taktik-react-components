import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useCallback, useContext, useMemo } from 'react'
import { RenderCellProps, SelectColumn } from 'react-data-grid'
import { getHeaderFilter } from '../HeaderFilter'
import { convertDate, DATE_FORMAT } from '../../../utils'
import { VisibilityContext } from '../VisibilityProvider'

export const useComputeFinalColumns = <R extends RowDefinition = RowDefinition>({
    columns,
    selectionEnabled
}: {
    columns: ColumnDefinition<R>[]
    selectionEnabled?: boolean
}): ColumnDefinition<R>[] => {
    const { enabled: visibilityFeatureEnabled, hiddenColumn } = useContext(VisibilityContext)
    const adaptColumn = useCallback((col: ColumnDefinition<R>) => {
        const getRenderCell = () => {
            if (col.renderCell) {
                return col.renderCell
            }
            if (col.type === ColumnType.DATE) {
                return ({ row }: RenderCellProps<R>) =>
                    convertDate(
                        row[col.key as keyof R],
                        col.dateOptions?.formatDate ?? DATE_FORMAT.DATE_WITH_TIME,
                        col.dateOptions?.timeZone
                    )
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
        if (visibilityFeatureEnabled && hiddenColumn) {
            return finalColumns.filter((col) => !hiddenColumn.includes(col.key))
        }
        return finalColumns
    }, [columns, adaptColumn, visibilityFeatureEnabled, hiddenColumn])
}
