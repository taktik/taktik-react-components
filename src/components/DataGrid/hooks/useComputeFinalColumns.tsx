import { ColumnDefinition, ColumnType, RowDefinition } from '../types'
import { ReactNode, useCallback, useContext, useMemo } from 'react'
import { RenderCellProps, RenderCheckboxProps, SelectColumn } from 'react-data-grid'
import {
    DataGridExpandable,
    expanderColumn,
    EXPANDER_WIDTH,
    ExpanderToggle,
    LeadingCell,
    LeadingHeaderSpacer
} from '../Expandable'
import { getHeaderFilter } from '../HeaderFilter'
import { convertDate, DATE_FORMAT } from '../../../utils'
import { VisibilityContext } from '../VisibilityProvider'
import { DataGridCheckbox } from '../DataGridCheckbox'

export const useComputeFinalColumns = <R extends RowDefinition = RowDefinition>({
    columns,
    expandable,
    selectionEnabled,
    selectableRows,
    selectedRows,
    onSelectedRowsChange,
    renderCheckbox,
    selectAllLabel
}: {
    columns: ColumnDefinition<R>[]
    /** When set, the row's expand toggle rides in the selection cell, ahead of the checkbox. */
    expandable?: DataGridExpandable<R>
    selectionEnabled?: boolean
    /** Every row the header checkbox acts on — all the grid holds, not just the rendered page. */
    selectableRows?: R[]
    selectedRows?: string[]
    onSelectedRowsChange?: (rows: string[]) => void
    /** The same renderer react-data-grid uses for the row checkboxes, so the header matches them. */
    renderCheckbox?: (props: RenderCheckboxProps) => ReactNode
    /** Accessible name of the select-all checkbox. */
    selectAllLabel?: string
}): ColumnDefinition<R>[] => {
    const { enabled: visibilityFeatureEnabled, hiddenColumn } = useContext(VisibilityContext)
    const adaptColumn = useCallback((col: ColumnDefinition<R>) => {
        const getRenderCell = () => {
            if (col.renderCell) {
                return col.renderCell
            }
            if (col.type === ColumnType.DATE) {
                return ({ row }: RenderCellProps<R>) =>
                    convertDate(
                        row[col.key as keyof R],
                        col.dateOptions?.formatDate ?? DATE_FORMAT.DATE_WITH_TIME,
                        col.dateOptions?.timeZone
                    )
            }
        }
        const getRenderHeaderCell = () => {
            if (col.renderHeaderCell) {
                return col.renderHeaderCell
            }
            return getHeaderFilter<R>(col)
        }

        const adapted = {
            ...col,
            renderCell: getRenderCell(),
            renderHeaderCell: getRenderHeaderCell()
        }
        if (col.frozenRight) {
            // `frozenRight` is this library's name for react-data-grid's own end-frozen band: rdg
            // sorts those columns into a contiguous tail and keeps them in the DOM whatever the
            // horizontal scroll, so the pinning costs nothing and column virtualization stays on.
            adapted.frozen = 'end'
        }
        return adapted
    }, [])

    return useMemo(() => {
        const finalColumns: ColumnDefinition<R>[] = []

        // No selection column for the toggle to share, so it takes one of its own — which is still
        // first, because there is no select column to outrank it.
        if (expandable && !selectionEnabled) {
            finalColumns.push(expanderColumn(expandable))
        }
        if (selectionEnabled) {
            const allIds = (selectableRows ?? []).map((row) => row.id)
            const allSelected =
                allIds.length > 0 && allIds.every((id) => selectedRows?.includes(id))
            // Only the rows in hand — one page's worth under server pagination, where a plain `[]`
            // on unchecking would throw away picks made on every other page.
            const toggleAll = (checked: boolean): string[] => {
                const others = (selectedRows ?? []).filter((id) => !allIds.includes(id))
                return checked ? [...others, ...allIds] : others
            }
            // The toggle shares this cell rather than taking one of its own, because rdg pins its
            // select column to index 0 — see ExpanderToggle.
            const width = expandable ? 50 + EXPANDER_WIDTH : 50
            finalColumns.push({
                ...SelectColumn,
                width,
                minWidth: width,
                maxWidth: width,
                // rdg's own header checkbox sees only the rows it RENDERS, so under local pagination
                // "select all" would mean "select this page". Driven from `selectableRows` instead —
                // every row the grid holds, which under server pagination is still one page.
                //
                // Rendered through the same checkbox renderer as the body cells: a consumer that
                // supplies one gets it in the header too, rather than in every place but this one.
                renderHeaderCell: () => (
                    <LeadingCell>
                        {expandable && <LeadingHeaderSpacer aria-hidden />}
                        {renderCheckbox ? (
                            renderCheckbox({
                                checked: allSelected,
                                'aria-label': selectAllLabel,
                                onChange: (checked) => onSelectedRowsChange?.(toggleAll(checked))
                            })
                        ) : (
                            <DataGridCheckbox
                                checked={allSelected}
                                slotProps={{ input: { 'aria-label': selectAllLabel } }}
                                onChange={(_, checked) =>
                                    onSelectedRowsChange?.(toggleAll(checked))
                                }
                            />
                        )}
                    </LeadingCell>
                ),
                renderCell: expandable
                    ? (props: RenderCellProps<R>) => (
                          <LeadingCell>
                              <ExpanderToggle row={props.row} expandable={expandable} />
                              {SelectColumn.renderCell?.(props)}
                          </LeadingCell>
                      )
                    : SelectColumn.renderCell
            })
        }
        finalColumns.push(...columns.map((col) => adaptColumn(col)))
        if (visibilityFeatureEnabled && hiddenColumn) {
            return finalColumns.filter((col) => !hiddenColumn.includes(col.key))
        }
        return finalColumns
    }, [
        columns,
        expandable,
        adaptColumn,
        visibilityFeatureEnabled,
        hiddenColumn,
        selectionEnabled,
        selectableRows,
        selectedRows,
        onSelectedRowsChange,
        renderCheckbox,
        selectAllLabel
    ])
}
