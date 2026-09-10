import { ColumnOrder, columnOrderStore, sameColumnOrder } from './columnOrder'
import { useStoredLayout } from './useStoredLayout'

export interface GridColumnOrder {
    /** The stored order, by column key — applied over the page's own column array. */
    order: ColumnOrder
    /** Hand this to the chooser's `onColumnOrderChange`: what the reader just arranged. */
    report: (order: ColumnOrder) => void
    /** Hand this to the chooser's `onReset`: one reset item, every stored layout. */
    reset: () => void
}

/**
 * The order this table's columns were arranged into from the column chooser — read on mount, written
 * when a row settles into its new place, and cleared by "Reset column layout".
 *
 * A table shell calls it once off the `columnVisibilityKey` it already has, so no
 * page wires anything: how a reader likes their own columns laid out is the same kind of personal
 * ergonomic preference as the ones they hid and the widths they dragged, kept in the same place and
 * reset by the same one item.
 *
 * ⚠ Unlike the hidden columns, the grid does NOT store this one — it reports the arrangement
 * and the consumer applies it to the columns handed back (`withColumnOrder`). That round trip is what
 * makes the table and the chooser's own rows agree, and it is why the reported order arrives here
 * rather than being written by the grid.
 */
export const useColumnOrder = (columnVisibilityKey: string): GridColumnOrder => {
    const { value, report, reset } = useStoredLayout(
        columnVisibilityKey,
        columnOrderStore,
        sameColumnOrder
    )

    return { order: value, report, reset }
}
