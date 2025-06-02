import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useCallback, useMemo, useState } from 'react'
import { SortColumn } from 'react-data-grid'

export type Comparator<R = RowDefinition> = (a: R, b: R) => number

function getComparator<R = RowDefinition>(
    sortColumn: keyof R,
    type?: ColumnType,
    sortComparator?: (a: unknown, b: unknown) => number
): Comparator<R> {
    return (a, b) => {
        const valueA = a[sortColumn]
        const valueB = b[sortColumn]
        try {
            if (sortComparator) {
                return sortComparator(valueA, valueB)
            }
            if (type === ColumnType.NUMBER) {
                const numA = Number(valueA)
                const numB = Number(valueB)
                if (isNaN(numA) || isNaN(numB)) {
                    console.warn(`Invalid number for sorting:`, { a: valueA, b: valueB })
                    return isNaN(numA) ? 1 : -1 // Push invalid values to the end
                }
                return numA - numB
            } else if (type === ColumnType.DATE) {
                const dateA = new Date(valueA as string | number | Date).getTime()
                const dateB = new Date(valueB as string | number | Date).getTime()
                if (isNaN(dateA) || isNaN(dateB)) {
                    console.warn(`Invalid date for sorting:`, { a: valueA, b: valueB })
                    return isNaN(dateA) ? 1 : -1 // Push invalid values to the end
                }
                return dateA - dateB
            }
            if (type === ColumnType.STRING || !type) {
                return String(valueA).localeCompare(String(valueB))
            }
            return 0 // Default for unsupported types
        } catch (err) {
            console.error('Error in sorting:', err)
            return 0
        }
    }
}

export const useLocalSorting = <R extends RowDefinition = RowDefinition>({
    columns,
    rows,
    defaultSortColumns
}: {
    columns: ColumnDefinition<R>[]
    rows: R[]
    defaultSortColumns?: SortColumn[]
}) => {
    const [sortColumns, setSortedColumns] = useState<SortColumn[]>(defaultSortColumns ?? [])

    const sortedRows = useMemo(() => {
        if (sortColumns.length === 0) return rows
        return [...rows].sort((a, b) => {
            for (const sort of sortColumns) {
                const column = columns.find((col) => col.key === sort.columnKey)
                const comparator = getComparator(
                    sort.columnKey as keyof R,
                    column?.type,
                    column?.sortComparator
                )
                const compResult = comparator(a, b)
                if (compResult !== 0) {
                    return sort.direction === 'ASC' ? compResult : -compResult
                }
            }
            return 0
        })
    }, [rows, sortColumns])

    const setSortedColumnsFn = useCallback((sort: SortColumn[]) => {
        if (sort.length !== 0) {
            setSortedColumns(sort)
        } else {
            setSortedColumns((prev) => {
                if (prev.length === 1) {
                    return [
                        {
                            columnKey: prev[0].columnKey,
                            direction: prev[0].direction === 'ASC' ? 'DESC' : 'ASC'
                        }
                    ]
                }
                return prev
            })
        }
    }, [])

    return {
        sortedRows,
        sortColumns,
        setSortedColumns: setSortedColumnsFn
    }
}
