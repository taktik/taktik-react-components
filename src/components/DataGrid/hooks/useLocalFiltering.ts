import { ColumnDefinition, FilterType, RowDefinition } from '../types'
import { useContext, useMemo } from 'react'
import { FilterContext } from '../FilterProvider'
import { getStringToCompare } from '../../../utils'

const matchFn = <R extends RowDefinition = RowDefinition>({
    comparator,
    filterType,
    value,
    valueToMatch,
    row
}: {
    value?: unknown
    valueToMatch?: unknown
    filterType?: FilterType
    comparator?: (value: unknown, valueToMatch: unknown, row: R) => boolean
    row: R
}) => {
    if (comparator) {
        return comparator(value, valueToMatch, row)
    }
    if (
        filterType === FilterType.TEXT &&
        typeof value === 'string' &&
        typeof valueToMatch === 'string'
    ) {
        return getStringToCompare(value).includes(getStringToCompare(valueToMatch))
    } else if (filterType === FilterType.AUTOCOMPLETE) {
        return value === valueToMatch
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
                    filterType: col.filterType ?? FilterType.TEXT,
                    value: row[key as keyof R],
                    valueToMatch: value,
                    row
                })
            })
        )
    }, [enabled, filters, rows, columns])
}
