import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useContext, useMemo } from 'react'
import { FilterContext } from '../FilterProvider'
import { getStringToCompare } from '../../../utils'

const matchFn = ({
    comparator,
    type,
    value,
    valueToMatch
}: {
    value?: unknown
    valueToMatch?: unknown
    type?: ColumnType
    comparator?: (value: unknown, valueToMatch: unknown) => boolean
}) => {
    if (comparator) {
        return comparator(value, valueToMatch)
    }
    if (
        type === ColumnType.STRING &&
        typeof value === 'string' &&
        typeof valueToMatch === 'string'
    ) {
        return getStringToCompare(value).includes(getStringToCompare(valueToMatch))
    }
    return false
}

export const useLocalFiltering = <R extends RowDefinition = RowDefinition>({
    columns,
    rows,
    enabled
}: {
    columns: ColumnDefinition<R>[]
    rows: R[]
    enabled: boolean
}) => {
    const { filters } = useContext(FilterContext)
    return useMemo(() => {
        if (!enabled) {
            return rows
        }
        return [...rows].filter((row) =>
            Object.entries(filters).every(([key, value]) => {
                if (value === undefined || (typeof value === 'string' && value === '')) {
                    // if not defined => no filtered by this field
                    return true
                }
                const col = columns.find((col) => col.key === key)
                if (!col) {
                    // should never happen, but who knows
                    return true
                }
                return matchFn({
                    comparator: col.filterComparator,
                    type: col.type ?? ColumnType.STRING,
                    value: row[key as keyof R],
                    valueToMatch: value
                })
            })
        )
    }, [enabled, filters, rows, columns])
}
