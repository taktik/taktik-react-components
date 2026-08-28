import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useCallback, useMemo, useState } from 'react'
import { SortColumn } from 'react-data-grid'

export type Comparator<R = RowDefinition> = (a: R, b: R) => number

function getComparator<R = RowDefinition>(
    sortColumn: keyof R,
    type?: ColumnType,
    sortComparator?: (a: unknown, b: unknown, objectA: unknown, objectB: unknown) => number,
    getColumnValue?: (item: unknown) => unknown
): Comparator<R> {
    return (a, b) => {
        const valueA = getColumnValue ? getColumnValue(a) : a[sortColumn]
        const valueB = getColumnValue ? getColumnValue(b) : b[sortColumn]
        try {
            if (sortComparator) {
                return sortComparator(valueA, valueB, a, b)
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
            if (type === ColumnType.BOOLEAN) {
                return Number(!!valueA) - Number(!!valueB)
            }
            return 0 // Default for unsupported types
        } catch (err) {
            console.error('Error in sorting:', err)
            return 0
        }
    }
}

/**
 * The rows in the order a sort asks for, and the sort itself where the consumer does not hold it.
 *
 * **Who holds the sort VALUE and who ORDERS THE ROWS are two questions.** They used to be one: the
 * grid ordered its rows out of this hook's own state, so a consumer that took the value over — to put
 * it in a URL, a store, anywhere it survives a remount — got a header that moved and rows that did
 * not. `sortColumns` is the controlled value and `enabled` is the ordering, so a consumer may take
 * either without giving up the other.
 */
export const useLocalSorting = <R extends RowDefinition = RowDefinition>({
    columns,
    rows,
    defaultSortColumns,
    sortColumns: controlledSortColumns,
    enabled = true
}: {
    columns: ColumnDefinition<R>[]
    rows: R[]
    defaultSortColumns?: SortColumn[]
    /**
     * The sort a CONSUMER holds. Supply it and the rows are ordered by it; leave it out and this
     * hook keeps the value itself, starting at `defaultSortColumns`.
     */
    sortColumns?: readonly SortColumn[] | null
    /** Whether the grid orders the rows at all — off for a grid whose rows arrive already ordered. */
    enabled?: boolean
}) => {
    const [sortColumns, setSortedColumns] = useState<SortColumn[]>(defaultSortColumns ?? [])
    /** The sort the ROWS are put in: the consumer's where it holds one, this hook's own otherwise. */
    const ordering = controlledSortColumns ?? sortColumns

    /**
     * `columns` is a dependency because it CARRIES the comparators (`sortComparator`,
     * `getColumnValue`): a column set rebuilt around data that arrives after first paint — a name
     * lookup, a translation map — has to re-order the rows, not keep the order the empty one gave.
     */
    const sortedRows = useMemo(() => {
        if (!enabled || ordering.length === 0) return rows
        return [...rows].sort((a, b) => {
            for (const sort of ordering) {
                const column = columns.find((col) => col.key === sort.columnKey)
                const comparator = getComparator(
                    sort.columnKey as keyof R,
                    column?.type,
                    column?.sortComparator,
                    column?.getColumnValue
                )
                const compResult = comparator(a, b)
                if (compResult !== 0) {
                    return sort.direction === 'ASC' ? compResult : -compResult
                }
            }
            return 0
        })
    }, [rows, ordering, enabled, columns])

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
