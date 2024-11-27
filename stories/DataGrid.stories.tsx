import { ColumnDefinition, DataGrid, DataGridProps, IconButton, RowDefinition } from '../dist'
import '../dist/assets/styles/datagrid.css'
import { StoryObj } from '@storybook/react'
import { SortColumn } from 'react-data-grid'
import { useMemo, useState } from 'react'
import styled from '@emotion/styled'
import SettingsIcon from '@mui/icons-material/Settings'
import PublishIcon from '@mui/icons-material/Publish'

export default {
    component: DataGrid
}
type Row = RowDefinition<{ col1: string; col2: string; col3: string; col4: string; col5: string }>

const rows: Row[] = [
    { id: '1', col1: 'Hello', col2: 'World', col3: 'Foo', col4: 'Bar', col5: 'Baz' },
    { id: '2', col1: 'DataGridPro', col2: 'is Awesome', col3: 'X', col4: 'Y', col5: 'Z' },
    { id: '3', col1: 'MUI', col2: 'is Amazing', col3: 'Alpha', col4: 'Beta', col5: 'Gamma' },
    { id: '4', col1: 'React', col2: 'is Fast', col3: 'One', col4: 'Two', col5: 'Three' },
    { id: '5', col1: 'JavaScript', col2: 'is Versatile', col3: 'Red', col4: 'Green', col5: 'Blue' }
]

const columns: ColumnDefinition<Row>[] = [
    { name: 'Column 1', key: 'col1' },
    { name: 'Column 2', key: 'col2' },
    { name: 'Column 3', key: 'col3' },
    { name: 'Column 4', key: 'col4' },
    { name: 'Column 5', key: 'col5' }
]

export const DataGridLightMode: { args: DataGridProps<Row> } = {
    args: {
        rows,
        columns
    }
}

export const DataGridDarkMode: StoryObj = {
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    },
    args: {
        rows,
        columns,
        theme: {
            '--rdg-color': 'white',
            '--rdg-header-color': 'white',
            '--rdg-border-color': 'white'
        }
    }
}

const columnsResizable: ColumnDefinition<Row>[] = columns.map((col, index) => ({
    ...col,
    resizable: index !== 3
}))
export const DataGridColumnResize: StoryObj = {
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    },
    args: {
        rows,
        columns: columnsResizable,
        theme: {
            '--rdg-color': 'white',
            '--rdg-header-color': 'white',
            '--rdg-border-color': 'white'
        }
    }
}
type Comparator = (a: Row, b: Row) => number

function getComparator(sortColumn: keyof Row): Comparator {
    return (a, b) => {
        return a[sortColumn].localeCompare(b[sortColumn])
    }
}

const columnsSortable: ColumnDefinition<Row>[] = columns.map((col, index) => ({
    ...col,
    sortable: index !== 3
}))

const DataGridColumnSortableComponents = () => {
    const [sortColumns, setSortedColumns] = useState<SortColumn[]>([])
    const sortedRows = useMemo((): readonly Row[] => {
        if (sortColumns.length === 0) return rows

        return [...rows].sort((a, b) => {
            for (const sort of sortColumns) {
                const comparator = getComparator(sort.columnKey as keyof Row)
                const compResult = comparator(a, b)
                if (compResult !== 0) {
                    return sort.direction === 'ASC' ? compResult : -compResult
                }
            }
            return 0
        })
    }, [rows, sortColumns])

    return (
        <DataGrid
            columns={columnsSortable}
            rows={sortedRows}
            onSortColumnsChange={setSortedColumns}
            sortColumns={sortColumns}
        />
    )
}

export const DataGridColumnSortable: StoryObj = {
    render: () => <DataGridColumnSortableComponents />
}
const CustomCell = styled.div<{ nbLength: number }>`
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: ${({ nbLength }) => (nbLength > 10 ? 'red' : 'gray')};
`

const customColumns: ColumnDefinition<Row>[] = columns.map((col, index) => ({
    ...col,
    renderCell: ({ row }) => {
        const value = row[col.key as string]
        return <CustomCell nbLength={value?.length ?? 0}>{value}</CustomCell>
    }
}))

export const DataGridCustomCell: { args: DataGridProps<Row> } = {
    args: {
        rows,
        columns: customColumns
    }
}

const columnsWithActionColumn: ColumnDefinition<Row>[] = [
    ...columns,
    {
        name: '',
        key: 'col6',
        renderCell: ({ rowIdx }) => {
            return (
                <IconButton onClick={() => alert(`Settings clicked on row ${rowIdx + 1}`)}>
                    <SettingsIcon />
                </IconButton>
            )
        }
    },
    {
        name: '',
        key: 'col7',
        renderCell: ({ rowIdx }) => {
            return (
                <IconButton disabled>
                    <PublishIcon />
                </IconButton>
            )
        }
    }
]
export const DataGridActionColumn: { args: DataGridProps<Row> } = {
    args: {
        rows,
        columns: columnsWithActionColumn
    }
}
