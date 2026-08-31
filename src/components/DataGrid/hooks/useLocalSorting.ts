import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { useCallback, useMemo, useRef, useState } from 'react'
import { SortColumn } from 'react-data-grid'

export type Comparator<R = RowDefinition> = (a: R, b: R) => number

/**
 * Built once for the module rather than per comparison: a collator is several times faster than
 * `String#localeCompare`, which builds one internally on every call, and orders identically.
 */
const collator = new Intl.Collator(undefined, { numeric: false })

function getComparator<R = RowDefinition>(
    sortColumn: keyof R,
    type?: ColumnType,
    sortComparator?: (a: unknown, b: unknown, objectA: R, objectB: R) => number,
    getColumnValue?: (item: R) => unknown
): Comparator<R> {
    return (a, b) => {
        const valueA = getColumnValue ? getColumnValue(a) : a[sortColumn]
        const valueB = getColumnValue ? getColumnValue(b) : b[sortColumn]
        try {
            if (sortComparator) {
                return sortComparator(valueA, valueB, a, b)
            }
            // An unusable value goes to the END of the ascending order, whichever side it is on —
            // a row with no date or no number is what the reader is least looking for. Deliberately
            // silent: this runs once per COMPARISON, and a column of empty cells would otherwise
            // write tens of thousands of identical console lines on a single header click.
            if (type === ColumnType.NUMBER) {
                const numA = Number(valueA)
                const numB = Number(valueB)
                if (isNaN(numA) || isNaN(numB)) {
                    return isNaN(numA) ? 1 : -1
                }
                return numA - numB
            } else if (type === ColumnType.DATE) {
                const dateA = new Date(valueA as string | number | Date).getTime()
                const dateB = new Date(valueB as string | number | Date).getTime()
                if (isNaN(dateA) || isNaN(dateB)) {
                    return isNaN(dateA) ? 1 : -1
                }
                return dateA - dateB
            }
            if (type === ColumnType.STRING || !type) {
                return collator.compare(String(valueA), String(valueB))
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
    const [sortColumns, setSorted] = useState<SortColumn[]>(defaultSortColumns ?? [])

    /**
     * The order the page opened on, read through a ref: a consumer usually writes it inline, and the
     * setter below would otherwise change identity on every render.
     */
    const openingOrder = useRef(defaultSortColumns)
    openingOrder.current = defaultSortColumns

    /**
     * ⚠ An EMPTY array is react-data-grid reporting the third click on a header, and the rows go
     * back to the order the page opened on — ascending → descending → the page's own order, the
     * same third state a consumer holding its own sort reaches by clearing its value.
     */
    const setSortedColumns = useCallback((next: SortColumn[]): void => {
        setSorted(next.length ? next : (openingOrder.current ?? []))
    }, [])
    /** The sort the ROWS are put in: the consumer's where it holds one, this hook's own otherwise. */
    const ordering = controlledSortColumns ?? sortColumns

    /**
     * The sort by VALUE rather than by identity. A consumer holding the sort usually writes the
     * array inline, so a fresh identity arrives on every render and the sort below would run again
     * each time — for a table whose order has not changed.
     */
    const orderingKey = ordering.map((sort) => `${String(sort.columnKey)}:${sort.direction}`).join()
    const stableOrdering = useMemo(() => ordering, [orderingKey]) // eslint-disable-line react-hooks/exhaustive-deps

    /**
     * `columns` is a dependency because it CARRIES the comparators (`sortComparator`,
     * `getColumnValue`): a column set rebuilt around data that arrives after first paint — a name
     * lookup, a translation map — has to re-order the rows, not keep the order the empty one gave.
     *
     * Each sort step resolves its column and builds its comparator ONCE, above the sort. Done inside
     * the comparison, as it was, a 5 000-row table over 20 columns scanned the column array and
     * allocated a closure some 61 000 times per sort — which is also what would make the `columns`
     * dependency above expensive rather than free.
     */
    const sortedRows = useMemo(() => {
        if (!enabled || stableOrdering.length === 0) return rows
        const steps = stableOrdering.map((sort) => {
            const column = columns.find((col) => col.key === sort.columnKey)
            return {
                compare: getComparator<R>(
                    sort.columnKey as keyof R,
                    column?.type,
                    column?.sortComparator,
                    column?.getColumnValue
                ),
                descending: sort.direction === 'DESC'
            }
        })
        return [...rows].sort((a, b) => {
            for (const step of steps) {
                const compResult = step.compare(a, b)
                if (compResult !== 0) {
                    return step.descending ? -compResult : compResult
                }
            }
            return 0
        })
    }, [rows, stableOrdering, enabled, columns])

    return {
        sortedRows,
        sortColumns,
        setSortedColumns
    }
}
