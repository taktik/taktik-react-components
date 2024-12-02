import { Column } from 'react-data-grid'
import { RowDefinition } from './RowDefinition'
import { ColumnType } from './ColumnType'

export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row> & {
    type?: ColumnType
    sortComparator?: (a: unknown, b: unknown) => number
}
