import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded'
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded'
import { ReactElement } from 'react'
import { useTableSlots, type TableMenuItem } from '../../../slots'

export interface TableMenuEntry {
    /** already-translated */
    label: string
    onClick: () => void
    disabled?: boolean
}

/**
 * What a table offers for moving its records in and out of a file.
 *
 * The three entries are named rather than handed in as a list, so a consumer cannot invent a fourth
 * act here, cannot reorder them, and — the bug this shape prevents — cannot pair the wrong icon with
 * the wrong direction: a DOWNLOAD arrow beside "Import" is what two pages each drawing their own
 * menu produced.
 */
export interface TableMenuActions {
    /** Names the kebab for a screen reader, e.g. "Import and export devices". */
    label: string
    /** Writing records INTO the table, from a file. */
    importEntry?: TableMenuEntry
    /** Reading records OUT of the table, into a file. */
    exportEntry?: TableMenuEntry
    /**
     * The blank sheet an import parses. Declared only where a table ALREADY offers one: a table that
     * never had a template does not get one built for it here.
     */
    templateEntry?: TableMenuEntry
}

/**
 * The menu's own items — the order and the icons, in one place, for every surface that draws this
 * menu: a grid's toolbar (`GridToolbar`'s `tableMenu`), and anything that is not a table and still
 * owes the reader the same three acts under the same three marks.
 */
export const tableMenuItems = ({
    importEntry,
    exportEntry,
    templateEntry
}: TableMenuActions): TableMenuItem[] => {
    const declared: Array<[string, TableMenuEntry | undefined, ReactElement]> = [
        ['import', importEntry, <FileUploadRoundedIcon key='import' />],
        ['export', exportEntry, <FileDownloadRoundedIcon key='export' />],
        ['template', templateEntry, <DescriptionRoundedIcon key='template' />]
    ]
    return declared.flatMap(([id, entry, icon]) =>
        entry
            ? [
                  {
                      id,
                      label: entry.label,
                      icon,
                      disabled: entry.disabled,
                      onClick: () => entry.onClick()
                  }
              ]
            : []
    )
}

/**
 * The table's own kebab: import, export and — where one exists — the template, behind ONE trigger.
 *
 * It is a MENU rather than a row of buttons because of what it holds: the toolbar's other controls
 * are acts on the table in front of the reader, while these three open a conversation about a file.
 * It therefore ends the toolbar the way a row's kebab ends a row, and `GridToolbar` puts it last so
 * no consumer can place it anywhere else.
 */
export const TableMenu = (actions: TableMenuActions) => {
    const { ContextMenu } = useTableSlots()
    const items = tableMenuItems(actions)
    return items.length ? <ContextMenu label={actions.label} menuItems={items} /> : null
}
