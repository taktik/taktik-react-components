import { Column } from 'react-data-grid'
import { RowDefinition } from './RowDefinition'
import { ColumnType } from './ColumnType'
import { FilterType } from './FilterType'
import React from 'react'
import { TextFieldProps } from '@mui/material/TextField/TextField'

export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row> & {
    type?: ColumnType
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
