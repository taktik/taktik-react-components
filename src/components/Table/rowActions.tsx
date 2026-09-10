import { MouseEventHandler } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import { useLabels, useTranslate } from '../../labels'
import { useTableSlots, type TableMenuItem } from '../../slots'
import { VisibilityColumnChooser } from '../DataGrid/VisibilityColumnChooser'
import type { ColumnDefinition, RowDefinition } from '../DataGrid/types'
import { ActionCell, actionColumnSizing } from './gridCells'

/**
 * The one column every grid's row actions live in. Its key is shared so the column-visibility
 * feature can exclude it: hiding the column that carries the chooser would hide the chooser.
 */
export const ACTIONS_COLUMN_KEY = 'actions'

/**
 * The columns the chooser must not offer: the one carrying the chooser (hiding it would hide the
 * chooser) and any column with no name — the chooser labels an entry with `column.name`, so an
 * unnamed one is a blank line the user cannot identify, and cannot confidently bring back.
 */
export const unhideableColumns = <R extends RowDefinition>(
    columns: ColumnDefinition<R>[]
): string[] =>
    columns
        .filter((column) => column.key === ACTIONS_COLUMN_KEY || !column.name)
        .map((column) => column.key)

const VisibilityTrigger = (props: { onClick?: MouseEventHandler<HTMLButtonElement> }) => {
    const labels = useLabels()
    const { IconButton } = useTableSlots()
    return (
        <IconButton tone='default' onClick={props.onClick} tooltipText={labels.hideShowColumns}>
            <VisibilityRoundedIcon />
        </IconButton>
    )
}

/** The header of the actions column: which columns this table shows. */
export const ColumnVisibilityHeader = () => (
    <VisibilityColumnChooser IconComponent={VisibilityTrigger} />
)

export interface RowActionsColumnOptions<R extends RowDefinition> {
    /**
     * The menu for one row. `name` is a translation KEY — the menu resolves it — so a label that
     * needs interpolation is not expressible there, and does not belong in a menu anyway.
     */
    items: (row: R) => TableMenuItem[]
    /**
     * The consumer's delete. Appended as the menu's last item, after a divider, in red — the fast
     * path for ONE row, running the same confirmation as whatever handles a selection of many.
     *
     * Appended here rather than by each consumer so the position, the separator and the wording are
     * identical on every table, exactly like the kebab itself.
     */
    remove?: {
        label: string
        deleteRow: (row: R) => void
        /**
         * Whether THIS row may go. Some tables list rows they do not own, and offering a delete the
         * server would refuse is worse than offering none.
         */
        canRemove?: (row: R) => boolean
        /**
         * WHY this row's delete is greyed — already translated, read only when `canRemove` said no.
         * The counterpart of `TableMenuItem.disabledReason` for the item the generic appends itself:
         * a consumer can explain its own edit entry but cannot reach this one.
         */
        disabledReason?: (row: R) => string | undefined
    }
    /**
     * Already-translated accessible name of the row's trigger, e.g. "Actions for Reception agent".
     * Without it every kebab in the table is called "More actions", and a screen reader cannot tell
     * which row it is on.
     */
    label?: (row: R) => string
    /**
     * Whether an action started from THIS row is still running. An entry click closes the menu, so
     * the kebab is where a row says so — the case being an action that READS before it opens
     * anything, which owes the reader a sign when the read is slow.
     */
    busy?: (row: R) => boolean
}

/**
 * The actions column, carrying the options it was built from. A right-click on a row opens the same
 * menu at the pointer (`useRowGestures`), and it finds the items HERE rather than making every
 * consumer declare them a second time — one declaration, so the kebab and the right-click cannot
 * offer different actions on the same row.
 */
export interface RowActionsColumnDefinition<R extends RowDefinition> extends ColumnDefinition<R> {
    rowActions: RowActionsColumnOptions<R>
}

const isRowActionsColumn = <R extends RowDefinition>(
    column: ColumnDefinition<R>
): column is RowActionsColumnDefinition<R> => 'rowActions' in column

/**
 * The menu one row's kebab holds, delete item included — empty on a table whose columns carry no
 * actions at all, which is the signal to leave the browser's own menu alone.
 */
export const rowMenuItems = <R extends RowDefinition>(
    columns: ColumnDefinition<R>[],
    row: R
): TableMenuItem[] => {
    const options = columns.find(isRowActionsColumn)?.rowActions
    return options ? withRemove(options.items(row), row, options.remove) : []
}

/**
 * Every grid's row actions: one kebab per row, LAST and pinned to the right edge, whose header
 * opens the column chooser. `frozenRight` is the sticky right pin — plain `frozen` would not do:
 * react-data-grid SORTS frozen columns to the left.
 *
 * Deleting is the menu's last item when the consumer passes `remove`: reaching for a checkbox and
 * then crossing the toolbar to delete ONE row is the long way round. It is one of a delete's TWO
 * doors — the other is wherever deleting several at once lives — and both run the same
 * confirmation, so a delete asks the same question wherever it started.
 */
export const rowActionsColumn = <R extends RowDefinition>({
    items,
    label,
    remove,
    busy
}: RowActionsColumnOptions<R>): RowActionsColumnDefinition<R> => ({
    key: ACTIONS_COLUMN_KEY,
    name: '',
    frozenRight: true,
    rowActions: { items, label, remove, busy },
    ...actionColumnSizing(1),
    renderHeaderCell: () => <ColumnVisibilityHeader />,
    // `tabIndex` is the grid's: a grid is ONE tab stop, so the kebab of the FOCUSED row joins the
    // tab sequence and the other rows' stay out of it — arrow to a row, then Tab into its actions.
    // Passing it on is what keeps a 25-row table from being 25 tab stops.
    renderCell: ({ row, tabIndex }) => {
        const menuItems = withRemove(items(row), row, remove)
        const only = menuItems.length === 1 ? menuItems[0] : undefined
        return (
            <ActionCell>
                {only ? (
                    // A menu with one entry costs a click to reveal what it always contains. The
                    // action itself takes the cell, keeping its icon, its tone and its disabled
                    // state — and its label becomes the button's tooltip and accessible name, so a
                    // screen reader still hears what it does rather than "More actions".
                    <SingleAction
                        item={only}
                        rowLabel={label?.(row)}
                        tabIndex={tabIndex}
                        loading={busy?.(row)}
                    />
                ) : (
                    <RowActionsMenu
                        menuItems={menuItems}
                        label={label?.(row)}
                        tabIndex={tabIndex}
                        loading={busy?.(row)}
                    />
                )}
            </ActionCell>
        )
    }
})

const RowActionsMenu = ({
    menuItems,
    label,
    tabIndex,
    loading
}: {
    menuItems: TableMenuItem[]
    label?: string
    tabIndex?: number
    loading?: boolean
}) => {
    const { ContextMenu } = useTableSlots()
    return (
        <ContextMenu
            menuIcon={<MoreVertRoundedIcon />}
            menuItems={menuItems}
            label={label}
            tabIndex={tabIndex}
            loading={loading}
        />
    )
}

/**
 * The tooltip of a LONE control — a row's single action: the verb, and the reason it is off.
 *
 * A menu entry puts its `disabledReason` on a second line under the label; a bare button has no
 * second line, so the two share one string.
 */
export const loneActionTooltip = (label?: string, disabledReason?: string): string =>
    [label, disabledReason].filter(Boolean).join(' — ')

/**
 * The lone row action, rendered as itself instead of hidden behind a kebab.
 *
 * ⚠ Its accessible name stays the ROW's (`label`, "Actions for Reception agent") while the tooltip
 * carries the verb. Naming the button after the action instead would make it a second control called
 * "Delete extension" on a page that offers that verb elsewhere — ambiguous for a screen reader
 * picking between them, and specs address such a control by name.
 */
const SingleAction = ({
    item,
    rowLabel,
    tabIndex,
    loading
}: {
    item: TableMenuItem
    rowLabel?: string
    tabIndex?: number
    loading?: boolean
}) => {
    const translate = useTranslate()
    const { IconButton } = useTableSlots()
    // `name` is a translation key (the menu resolves it); `label` is already translated
    const text = item.label ?? (item.name ? translate(item.name) : undefined)
    // A disabled lone action has no second line to put its reason on, so the tooltip carries both —
    // the menu form says the same thing under the label.
    const reason = item.disabled ? item.disabledReason : undefined
    return (
        <IconButton
            tone={item.danger ? 'error' : 'default'}
            disabled={item.disabled}
            tooltipText={loneActionTooltip(text, reason)}
            aria-label={rowLabel ?? text ?? ''}
            tabIndex={tabIndex}
            loading={loading}
            onClick={(event) => item.onClick?.(event)}>
            {item.icon}
        </IconButton>
    )
}

const withRemove = <R extends RowDefinition>(
    menuItems: TableMenuItem[],
    row: R,
    remove: RowActionsColumnOptions<R>['remove']
): TableMenuItem[] => {
    if (!remove) return menuItems
    const disabled = remove.canRemove ? !remove.canRemove(row) : false
    return [
        ...menuItems,
        {
            id: 'delete',
            // The same string whatever else deletes shows, which the consumer already holds
            label: remove.label,
            icon: <DeleteRoundedIcon />,
            divider: true,
            danger: true,
            disabled,
            disabledReason: disabled ? remove.disabledReason?.(row) : undefined,
            onClick: () => remove.deleteRow(row)
        }
    ]
}
