import { Column } from 'react-data-grid'
import { RowDefinition } from './RowDefinition'
import { ColumnType } from './ColumnType'
import { FilterType } from './FilterType'
import React from 'react'
import { TextFieldProps } from '@mui/material/TextField'

export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row> & {
    type?: ColumnType
    /**
     * Pin this column to the RIGHT edge while the grid scrolls sideways — for a trailing actions
     * column that must stay reachable. react-data-grid's own `frozen` cannot do this: it SORTS
     * frozen columns to the left, so a frozen trailing column ends up leading instead. This is
     * implemented as `position: sticky; inset-inline-end: 0` on the column's cells (the same
     * mechanism rdg uses for frozen-left), so declare the column LAST — sticky pins it at the
     * edge, it does not reorder. Mutually exclusive with `frozen`.
     *
     * ⚠ Costs virtualization: rdg only exempts `frozen` columns from column virtualization, so a
     * grid with a frozenRight column renders ALL its cells — rows included, the flag is
     * all-or-nothing. Fine for a paginated grid; not for one holding thousands of rows.
     */
    frozenRight?: boolean
    /**
     * Pin this column to the LEFT edge while the grid scrolls sideways — the grid's OWN leading
     * cell (the selection checkbox, the expander toggle). Not something a consumer declares.
     *
     * ⚠ It is `frozenRight`'s sticky mechanism rather than react-data-grid's own `frozen`, because
     * rdg yields every start-frozen column TWICE while column virtualization is off — and a
     * `frozenRight` column is what turns virtualization off, so that is the mode every grid here
     * runs in. Two leading cells means two select-all checkboxes stacked over one column. The cure
     * is rdg's native `frozen: 'end'` for the trailing column, which lets virtualization back on
     * and makes both of these shims deletable.
     */
    frozenLeft?: boolean
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
