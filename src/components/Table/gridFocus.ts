import { css } from 'styled-components'

/**
 * Where the keyboard is INSIDE a grid — and only the keyboard.
 *
 * react-data-grid draws its focused-cell ring from `--rdg-selection-color` whenever a cell holds
 * the grid's focus, however that focus arrived — so an always-on colour paints a 2px ring around
 * every cell the mouse clicks and leaves it there. The variable therefore stays the library's own
 * `transparent`, and is re-declared on the cell only under `:focus-visible` — the same
 * keyboard-only test every button's `FocusRing` uses, so arrow-key navigation shows where it is
 * and a click shows nothing.
 *
 * Composed by every box that hosts a grid (`GridPageBody`, `GridInDialog`), like `gridPager`.
 */
export const gridFocus = css`
    .rdg-cell:focus-visible {
        --rdg-selection-color: ${({ theme }) => theme.primaryMain};
    }
`
