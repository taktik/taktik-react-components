import { css } from 'styled-components'

/**
 * The small css fragments a table draws itself with, written against {@link TableTheme}'s tokens.
 *
 * They are declared once here rather than restated per component for the same reason a consumer's
 * design system declares its own: a focus ring that differs between a chip and a menu entry reads
 * as two different controls.
 */

/**
 * A cell's horizontal padding, as a NUMBER, because a row-action column's width is computed in JS
 * where no theme is in reach.
 *
 * This constant is the SOURCE: `defaultTableTheme.cellPaddingInline` is written from it, so the two
 * cannot drift. ⚠ A consumer authoring its own value has to revisit `actionColumnSizing`
 * (`gridCells`), which budgets that column from this number.
 */
export const CELL_PADDING_INLINE = 12

/** The house family and the type steps a table reads at. */
export const tableFont = css`
    font-family: ${({ theme }) => theme.table.fontFamily};
`

export const fontSizeSmaller = css`
    font-size: ${({ theme }) => theme.table.fontSizeSmaller};
`

export const fontSizeSmall = css`
    font-size: ${({ theme }) => theme.table.fontSizeSmall};
`

export const fontSizeNormal = css`
    font-size: ${({ theme }) => theme.table.fontSizeNormal};
`

export const fontSizeBig = css`
    font-size: ${({ theme }) => theme.table.fontSizeBig};
`

/** An icon riding beside small text. `font-size` is what sizes an MUI `SvgIcon`. */
export const iconSizeSmall = css`
    font-size: ${({ theme }) => theme.table.iconSizeSmall};
`

export const radiusSmall = css`
    border-radius: ${({ theme }) => theme.table.radiusSmall};
`

export const radiusMedium = css`
    border-radius: ${({ theme }) => theme.table.radiusMedium};
`

export const radiusLarge = css`
    border-radius: ${({ theme }) => theme.table.radiusLarge};
`

export const radiusPill = css`
    border-radius: ${({ theme }) => theme.table.radiusPill};
`

export const floatingShadow = css`
    box-shadow: ${({ theme }) => theme.table.floatingShadow};
`

/**
 * Where the keyboard is: the accent just outside the control's own edge, `:focus-visible` only so a
 * clicked control wears no ring it does not need.
 *
 * Both selectors are load-bearing — a button IS the focused element, while a control built on MUI's
 * `ButtonBase` focuses a hidden input inside itself and MUI marks the ROOT instead.
 */
export const focusRing = css`
    &:focus-visible,
    &.Mui-focusVisible {
        outline: ${({ theme }) => theme.table.focusRingWidth} solid
            ${({ theme }) => theme.primaryMain};
        outline-offset: ${({ theme }) => theme.table.focusRingOffset};
    }
`

/**
 * The same ring drawn INSIDE the control, for one sitting in a box that CLIPS — a grid cell, a
 * padded menu list — where an outset ring is cut off on two sides or lost entirely.
 */
export const focusRingInset = css`
    &:focus-visible,
    &.Mui-focusVisible {
        outline: ${({ theme }) => theme.table.focusRingWidth} solid
            ${({ theme }) => theme.primaryMain};
        outline-offset: calc(-1 * ${({ theme }) => theme.table.focusRingOffset});
    }
`

/**
 * Text that is READ but never seen: in the accessibility tree, out of the layout, so the row it
 * lives in keeps the height it would have without it.
 *
 * Anchored to the top-left rather than left at its static position: with no positioned ancestor
 * that position is a coordinate in the DOCUMENT, and one such box per row adds the page's whole
 * height to its scrollable area.
 */
export const visuallyHidden = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
`
