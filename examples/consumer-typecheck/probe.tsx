/**
 * A second project's view of this package, compiled against the PUBLISHED tarball.
 *
 * `yarn verify:consumer` packs the library, installs the tarball into a temp directory beside the
 * peers and nothing else, and typechecks this file with `skipLibCheck: false`. That combination is
 * the only thing that catches a `dist/index.d.ts` naming a bundled dependency by name:
 * `react-data-grid`, `date-fns`, `date-fns-tz` and `react-spinners` are compiled INTO the bundle
 * and absent from a consumer's `node_modules`, and `skipLibCheck: true` hides the failure to
 * resolve them — a consumer then reads the whole library as `any` with no error to show for it.
 *
 * So it is not the assertions below that matter, it is that this file compiles at all. Keep it
 * naming a value and a type from every corner of the surface.
 */
import { StyledEngineProvider } from '@mui/material'
import type { JSX } from 'react'
import { ThemeProvider } from 'styled-components'
import {
    anyFilterActive,
    cappedTrack,
    CrudTable,
    defaultTableSlots,
    defaultTableTheme,
    flexTrack,
    LabelsProvider,
    NOTHING_SELECTED,
    rowActionsColumn,
    StatusCell,
    TableProvider,
    truncated,
    useGridPresentation
} from '@taktik/taktik-react-components'
import type {
    ColumnDefinition,
    CrudTableProps,
    DataGridTheme,
    FilterValue,
    GridPresentation,
    MatchingSelection,
    RenderCellProps,
    RowDefinition,
    SortColumn,
    StatusCellProps,
    TableProviderProps,
    TableSlots,
    TableTheme
} from '@taktik/taktik-react-components'

type Device = RowDefinition<{ name: string; online: boolean }>

const theme: TableTheme = defaultTableTheme
const slots: Partial<TableSlots> = { ...defaultTableSlots }
// The tone is a bare literal on purpose: `StatusTone` is library-private, and a consumer maps its
// own statuses onto the four words without ever naming the union.
const offline: StatusCellProps = { tone: 'danger', label: 'Offline' }
const filters: Record<string, FilterValue | undefined> = {}
const filtering: boolean = anyFilterActive(filters)
const selection: MatchingSelection = NOTHING_SELECTED
const defaultSort: SortColumn[] = [{ columnKey: 'name', direction: 'ASC' }]

// The column shape the README's quick start shows: a plain definition, a width stated as a TRACK,
// and the actions column declared last. Pinned here so the documented example cannot rot.
const columns: ColumnDefinition<Device>[] = [
    {
        key: 'name',
        name: 'Name',
        type: undefined,
        width: flexTrack(160),
        renderCell: ({ row }: RenderCellProps<Device>) => truncated(row.name)
    },
    {
        key: 'online',
        name: 'Online',
        width: cappedTrack(120, 160),
        renderCell: ({ row }: RenderCellProps<Device>) =>
            row.online ? <StatusCell tone='success' label='Online' /> : <StatusCell {...offline} />
    },
    rowActionsColumn<Device>({
        items: (row) => [{ id: `rename:${row.id}`, name: 'rename', onClick: () => undefined }],
        label: (row) => `Actions for ${row.name}`
    })
]

const tableProps: CrudTableProps<Device> = {
    rows: [{ id: 'a', name: 'Lobby', online: true }],
    columns,
    columnVisibilityKey: 'probe.devices',
    sorting: { mode: 'local', opening: defaultSort },
    selection: { mode: 'allMatching', value: selection, onChange: () => undefined, query: filters },
    totalLabel: (count) => `${count} devices`
}

const runtime: Omit<TableProviderProps, 'children'> = {
    slots,
    remeasureEvent: 'probe:layout-settled',
    formatRelativeTime: (value) => String(value),
    // The two inputs that exist because what they name belongs to the host: its `/` shortcut stack,
    // and its own interaction pause.
    registerSearchField: () => () => undefined,
    filterDebounceMs: 300
}

const GridVariables = (): string => {
    const presentation: GridPresentation = useGridPresentation()
    const gridTheme: DataGridTheme = presentation.theme
    return `${gridTheme['--rdg-color'] ?? ''}${filtering ? '' : offline.label}`
}

export const Probe = (): JSX.Element => (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <TableProvider {...runtime}>
                <LabelsProvider labels={{ clear: 'Clear' }}>
                    <GridVariables />
                    <CrudTable {...tableProps} />
                </LabelsProvider>
            </TableProvider>
        </ThemeProvider>
    </StyledEngineProvider>
)
