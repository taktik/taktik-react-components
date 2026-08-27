import { Column } from 'react-data-grid'
import { RowDefinition } from './RowDefinition'
import { ColumnType } from './ColumnType'
import { FilterType } from './FilterType'
import React from 'react'
import { TextFieldProps } from '@mui/material/TextField'

export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row> & {
    type?: ColumnType
    /**
     * Pin this column to the END edge while the grid scrolls sideways — for a trailing actions
     * column that must stay reachable. It is the public name of react-data-grid's `frozen: 'end'`,
     * which the grid translates it to; use it rather than `frozen`, whose bare `true` means the
     * START edge and would sort a trailing column to the front.
     *
     * Declare the column LAST. rdg sorts end-frozen columns into a contiguous tail in declaration
     * order, so a column declared mid-table still renders at the edge — and the detail rows of an
     * expandable grid would then span a different set of tracks than the table reads.
     *
     * Virtualization stays ON: rdg keeps the end-frozen tail in the DOM at every scroll position.
     */
    frozenRight?: boolean
    renderFilterInput?: (props: TextFieldProps) => React.ReactNode
    filterType?: FilterType
    getColumnValue?: (item?: unknown) => unknown
    filterOptions?: { label: string; value: string }[]
    sortComparator?: (a: unknown, b: unknown, objectA: unknown, objectB: unknown) => number
    filterComparator?: (value: unknown, valueToMatch: unknown, row: Row) => boolean
    filterEnabled?: boolean
    dateOptions?: {
        formatDate?: string
        timeZone?: string
    }
}
