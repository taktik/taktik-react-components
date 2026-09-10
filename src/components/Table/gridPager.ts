import { css } from 'styled-components'

/**
 * What the grid's pager needs from whatever hosts it: its COLOURS.
 *
 * The pager is MUI's `TablePagination`, so a host that mounts no MUI `ThemeProvider` renders it in
 * MUI's stock palette — dark grey text and dark grey chevrons, invisible on a dark theme. The count
 * at the footer's left end (`CrudTable`'s `totalLabel`) is plain text inheriting the same colour, so
 * it is coloured by the same rule.
 *
 * ⚠ The footer's own LAYOUT belongs to the grid, which lays it out as a row — the count at one end,
 * the pager's controls at the other — inside a box of a fixed height. A host that re-lays that box
 * out (forcing a flex COLUMN on it, say, to bottom-align the pager) turns the row back into a stack
 * and drops the count under the controls.
 *
 * Applied by whatever box the grid fills: `GridPage`, `GridPageBody`, or `GridInDialog` (which
 * bakes it in, so no dialog has to remember it).
 */
export const gridPager = css`
    /* the footer's own text — the count at its left end, which is the grid's own plain text */
    > div > div:has(> .MuiTablePagination-root) {
        color: ${({ theme }) => theme.surface.text};
    }

    .MuiTablePagination-root {
        color: ${({ theme }) => theme.surface.text};
        svg {
            fill: ${({ theme }) => theme.surface.text};
        }
    }
`
