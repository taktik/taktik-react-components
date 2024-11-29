import {
    ColumnDefinition,
    ColumnType,
    DataGrid,
    DataGridProps,
    IconButton,
    RowDefinition
} from '../dist'
import '../dist/assets/styles/datagrid.css'
import { StoryObj } from '@storybook/react'
import styled from '@emotion/styled'
import SettingsIcon from '@mui/icons-material/Settings'
import PublishIcon from '@mui/icons-material/Publish'

export default {
    component: DataGrid
}
type Row = RowDefinition<{
    col1?: string
    col2?: string
    col3?: number
    col4?: number
    col5?: string
    col6?: Date
}>

const rows: Row[] = [
    {
        id: '1',
        col1: 'Hello',
        col2: 'World',
        col3: 123,
        col4: 456,
        col5: 'Test',
        col6: new Date('2018-03-15T12:30:00Z')
    },
    {
        id: '2',
        col1: 'Hi',
        col2: 'There',
        col3: 234,
        col4: 567,
        col5: 'Sample',
        col6: new Date('2021-07-20T09:15:00Z')
    },
    {
        id: '3',
        col1: 'Greetings',
        col2: 'Everyone',
        col3: 345,
        col4: 678,
        col5: 'Example',
        col6: new Date('2020-11-10T14:45:00Z')
    },
    {
        id: '4',
        col1: 'Good',
        col2: 'Day',
        col3: 456,
        col4: 789,
        col5: 'Demo',
        col6: new Date('2023-04-05T16:00:00Z')
    },
    {
        id: '5',
        col1: 'Hey',
        col2: 'You',
        col3: 567,
        col4: 890,
        col5: 'Test Case',
        col6: new Date('2019-06-25T08:20:00Z')
    },
    {
        id: '6',
        col1: 'Hello',
        col2: 'Friend',
        col3: 678,
        col4: 901,
        col5: 'Demo Case',
        col6: new Date('2025-09-15T11:50:00Z')
    },
    {
        id: '7',
        col1: 'Hi',
        col2: 'Buddy',
        col3: 789,
        col4: 101,
        col5: 'Trial',
        col6: new Date('2017-01-30T19:10:00Z')
    },
    {
        id: '8',
        col1: 'Hello',
        col2: 'Pal',
        col3: 890,
        col4: 202,
        col5: 'Check',
        col6: new Date('2024-10-10T17:25:00Z')
    },
    {
        id: '9',
        col1: 'Hola',
        col2: 'Amigo',
        col3: 901,
        col4: 303,
        col5: 'Validation',
        col6: new Date('2016-08-05T10:40:00Z')
    },
    {
        id: ' 10',
        col1: 'Bonjour',
        col2: 'Monde',
        col3: 102,
        col4: 404,
        col5: 'Preview',
        col6: new Date('2022-05-20T15:05:00Z')
    },
    {
        id: ' 11',
        col1: 'Salut',
        col2: 'Tout',
        col3: 213,
        col4: 505,
        col5: 'Showcase',
        col6: new Date('2015-11-30T20:30:00Z')
    },
    {
        id: ' 12',
        col1: 'Hey',
        col2: 'Mate',
        col3: 324,
        col4: 606,
        col5: 'Test'
    },
    {
        id: ' 13',
        col1: 'Hello',
        col2: 'World',
        col3: 435,
        col4: 707,
        col5: 'Sample',
        col6: new Date('2014-12-25T21:00:00Z')
    },
    {
        id: ' 14',
        col1: 'Hi',
        col2: 'All',
        col3: 546,
        col4: 808,
        col5: 'Trial',
        col6: new Date('2027-03-30T13:10:00Z')
    },
    {
        id: ' 15',
        col1: 'Howdy',
        col2: 'Partner',
        col3: 657,
        col4: 909,
        col5: 'Debug',
        col6: new Date('2028-09-25T20:45:00Z')
    },
    {
        id: ' 16',
        col1: 'Hola',
        col2: 'Compañero',
        col3: 768,
        col4: 111,
        col5: 'Example'
    },
    {
        id: ' 17',
        col1: 'Hello',
        col2: 'Again',
        col3: 879,
        col4: 212,
        col5: 'Sample',
        col6: new Date('2012-04-12T14:00:00Z')
    },
    {
        id: ' 18',
        col1: 'Hey',
        col2: 'There',
        col3: 980,
        col4: 313,
        col5: 'Validation',
        col6: new Date('2029-11-01T07:45:00Z')
    },
    {
        id: ' 19',
        col1: 'Bonjour',
        col2: 'Tout',
        col3: 101,
        col4: 414,
        col5: 'Check',
        col6: new Date('2011-05-15T19:20:00Z')
    },
    {
        id: ' 20',
        col1: 'Hi',
        col2: 'Everyone',
        col3: 212,
        col4: 515,
        col5: 'Preview',
        col6: new Date('2030-10-31T12:55:00Z')
    }
]
const columns: ColumnDefinition<Row>[] = [
    { name: 'Column 1', key: 'col1' },
    { name: 'Column 2', key: 'col2' },
    { name: 'Column 3', key: 'col3' },
    { name: 'Column 4', key: 'col4' },
    { name: 'Column 5', key: 'col5' },
    { name: 'Column 6', key: 'col6', type: ColumnType.DATE }
]

export const BasicDataGrid: StoryObj = {
    args: {
        rows,
        columns
    }
}
/*** Resizable ****/
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
        columns: columnsResizable
    }
}

/*** Sortable ****/
// BASIC ONE
const columnsSortable: ColumnDefinition<Row>[] = columns.map((col, index) => ({
    ...col,
    sortable: col.key !== 'col3'
}))

export const DataGridColumnsSorting: StoryObj = {
    args: {
        rows,
        columns: columnsSortable,
        defaultSortColumns: [
            {
                columnKey: 'col1',
                direction: 'ASC'
            }
        ]
    }
}

/*** Custom cell ****/
const CustomCell = styled.div<{ nbLength: number }>`
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: ${({ nbLength }) => (nbLength > 5 ? 'red' : 'gray')};
`

const customColumns: ColumnDefinition<Row>[] = columns
    .filter((col) => col.key != 'col6')
    .map((col) => ({
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

export const DataGridLoading: { args: DataGridProps<Row> } = {
    args: {
        loading: true,
        rows,
        columns
    }
}
