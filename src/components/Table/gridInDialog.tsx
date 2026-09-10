import type { JSX } from 'react'
import styled, { css } from 'styled-components'
import { useLabels } from '../../labels'
import type { RowDefinition } from '../DataGrid/types'
import { CrudTable, CrudTableProps } from './CrudTable'
import { gridFocus } from './gridFocus'
import { gridPager } from './gridPager'
import { GRID_HEADER_GROUND_VAR } from './useGridPresentation'

/**
 * The column a dialog's grid area is: the toolbar, then the grid — the dialog-shaped counterpart of
 * `GridPage`. It may shrink, so a two-row table does not stretch the dialog, and the gap is the
 * dialog rhythm rather than a page's 24px.
 */
export const GridInDialogLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
`

/**
 * The box the grid fills — `GridPageBody`'s dialog counterpart, with the page chrome it must not
 * have (a full-height fill) replaced by a height the dialog decides.
 */
const Body = styled.div<{ $height?: string; $minHeight?: string }>`
    ${gridPager};
    ${gridFocus};

    /* The header band belongs to the ground the grid STANDS on, and a dialog's ground is its paper
       rather than the page's canvas. Declared here rather than per dialog, so the grids a dialog
       hosts cannot drift from each other. */
    ${GRID_HEADER_GROUND_VAR}: ${({ theme }) => theme.dialog.background};

    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    overflow: hidden;

    /* A given height is FIXED, not a min/max range: the pager stays at the floor of the grid area
     * instead of riding up under a short result page, and the dialog stops changing height as the
     * chips narrow. Without one the area fills whatever the dialog gives it. */
    ${({ $height }) =>
        $height
            ? css`
                  height: ${$height};
              `
            : css`
                  flex: 1 1 auto;
                  min-height: 0;
              `}
    ${({ $minHeight }) =>
        $minHeight &&
        css`
            min-height: ${$minHeight};
        `}

    /*
     * The grid must FILL this box, as GridPageBody makes it fill a page. At its content height it
     * ends under the header row: the pager lands mid-dialog, and the empty-state message — absolutely
     * positioned between the header and the grid's bottom edge — collapses to nothing.
     */
    > div {
        height: 100%;
        width: 100%;
        min-width: 0;
        min-height: 0;
        display: flex;
        flex-direction: column;
    }

    /* keeps a column widened past the dialog scrolling INSIDE the grid instead of overflowing it */
    .rdg {
        block-size: 100%;
        inline-size: 100%;
    }
`

export interface GridInDialogProps<R extends RowDefinition> extends CrudTableProps<R> {
    /** How tall the grid area is. Omit to fill whatever the dialog gives it. */
    height?: string
    /** A floor under `height`, for a viewport short enough to make a `vh` height unusable. */
    minHeight?: string
    /** So a consumer can extend the area with `styled(GridInDialog)` rather than fork it. */
    className?: string
}

/**
 * A grid inside a dialog: the house `CrudTable` in the box a dialog hosts it in.
 *
 * It exists because a dialog is the one place a grid does NOT get the page shell, and every
 * consumer that hand-rolls the box forgets a different part of it. Everything a dialog-hosted grid
 * needs is therefore in here and cannot be forgotten:
 *
 * - the body layout (the grid fills the box and may shrink; a widened column scrolls inside it),
 * - `gridPager` — the pager's colours AND its pinning to the floor of the area,
 * - the footer's left-end count — the footer is a space-between row, so a grid that states no total
 *   watches its pager slide to the LEFT edge; a consumer that knows its entity words the count
 *   itself, and the generic "N items" answers for every other dialog grid,
 * - `CrudTable`'s local paging default, so a long list pages instead of stretching the dialog,
 * - the selection reported outward, so the dialog around it owns what was picked.
 *
 * The consumer decides only its own height.
 */
export const GridInDialog = <R extends RowDefinition>({
    height,
    minHeight,
    className,
    totalLabel,
    ...table
}: GridInDialogProps<R>): JSX.Element => {
    const labels = useLabels()
    return (
        <Body $height={height} $minHeight={minHeight} className={className}>
            <CrudTable<R> {...table} totalLabel={totalLabel ?? labels.totalRows} />
        </Body>
    )
}
