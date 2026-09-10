import { useCallback, useMemo } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import type { CellKeyboardEvent } from 'react-data-grid'
import { useLabels, useTranslate } from '../../labels'
import { defaultTheme } from '../DataGrid/dataGridTheme'
import { renderGridCheckbox } from './GridCheckbox'

/**
 * What a HOST says the grid's header band stands on — its own ground, whatever that is.
 *
 * The grid sets its variables INLINE on the grid element, so a host declaring
 * `--rdg-header-background-color` on an ancestor is shadowed and changes nothing. The value below
 * is therefore read THROUGH this one: a host that sets it is honoured, and a host that says nothing
 * gets the page's canvas from the fallback — so no page has a prop to remember, and a new kind of
 * host is one declaration rather than a thread through `CrudTable`.
 */
export const GRID_HEADER_GROUND_VAR = '--flowr-grid-header-ground'

/**
 * ⚠ Not purely declarative: the grid READS `--rdg-loading-color` out of this object in JS and hands
 * it to the spinner, so a `var()` expression is safe only for a value nothing but CSS resolves. The
 * header background is one; check before making a second.
 */
const buildDataGridTheme = (theme: DefaultTheme) => ({
    ...defaultTheme,
    // What a ROW is painted, and only that: the grid box paints nothing of its own, so under the
    // last row the reader sees what the grid stands on — the page's canvas, a dialog's paper —
    // rather than this plane reaching the pager.
    '--rdg-background-color': theme.surface.row,
    // The header band is the GROUND the grid stands on, never a step of its own: the page's canvas
    // by default, a dialog's paper or an embedded shell's own where the host says so. What then
    // separates it from the rows is the host's business — a difference in ground on a page, the
    // border under it in a dialog.
    '--rdg-header-background-color': `var(${GRID_HEADER_GROUND_VAR}, ${theme.backgroundDark})`,
    // The column names, which would otherwise be fixed at one hex for both themes — over a dark
    // page's canvas that measured 1.67:1, a ghost line under fully legible rows.
    '--rdg-header-color': theme.surface.gridHeaderText,
    '--rdg-row-hover-background-color': theme.surface.rowHover,
    '--rdg-color': theme.surface.text,
    '--rdg-border-color': theme.surface.border,
    // The column-resize seam, in a neutral tone rather than the accent: the col-resize cursor is
    // the affordance, and the line only shows under the pointer and while the drag is on.
    '--rdg-resize-handle-color': theme.textLighter,
    '--rdg-scrollbar-thumb-background': theme.scrollbar.thumbBackground,
    '--rdg-scrollbar-track-background': theme.scrollbar.trackBackground,
    '--rdg-scrollbar-thumb-hover-background': theme.scrollbar.thumbBackgroundHover,
    '--rdg-scrollbar-track-hover-background': theme.scrollbar.trackBackgroundHover,
    // A selected row is one blue on every table, and it is the SAME blue hovered: the checkbox
    // beside it already answers for the hover, and a row changing colour under the pointer while it
    // is picked reads as though the pick were about to change. `surface.rowSelected` is its own
    // token rather than `selected.background` because the fill has to be OPAQUE.
    '--rdg-row-selected-background-color': theme.surface.rowSelected,
    '--rdg-row-selected-hover-background-color': theme.surface.rowSelected,
    '--rdg-row-selected-color': theme.surface.text,
    // A pinned column casts NO edge: the grid's own is two masked gradient strips per side, which
    // left the header and the first row bare and the middle of the grid with the full strength, and
    // nothing drawn per cell reads as one smooth band. Nothing else can turn those strips off.
    '--rdg-frozen-shadow-opacity': '0',
    // The selection checkbox and the loading veil: both default to a palette blue, which is a
    // light-blue wash over a dark grid.
    '--rdg-checkbox-color': theme.primaryMain,
    '--rdg-loading-color': theme.primaryMain
    // `--rdg-selection-color` — the ring around the focused CELL — is deliberately NOT set here:
    // the grid draws it however focus arrived, so a theme-level colour follows every mouse click.
    // `gridFocus` re-declares it per cell under `:focus-visible`, keyboard only.
})

/** Rows per page every grid starts on; the footer offers MUI's 10/25/50/100 from there. */
export const GRID_PAGE_SIZE = 25

/** The header row of every grid, exported for a consumer that sizes its grids by hand. */
export const GRID_HEADER_ROW_HEIGHT = 40
/** The row rhythm every grid keeps unless a table sizes its own rows. */
const GRID_ROW_HEIGHT = 50

/**
 * Tab LEAVES the grid, which is what the ARIA grid pattern asks of a table: one tab stop, arrow keys
 * to walk the cells inside it.
 *
 * react-data-grid answers Tab by moving to the next CELL and swallowing the key, so a 25-row table
 * stands between the toolbar above it and everything below as ~175 tab stops.
 * `preventGridDefault` hands the key back to the browser, and the roving tabindex (only the focused
 * cell is tabbable) then moves focus out of the grid — or into the focused cell's own controls
 * first, which is the behaviour a kebab or a link in a cell wants anyway. Arrow keys, Home/End and
 * PageUp/Down are untouched.
 */
const releaseTabFromGrid = (_args: unknown, event: CellKeyboardEvent): void => {
    if (event.key === 'Tab') {
        event.preventGridDefault()
    }
}

export interface GridPresentation {
    theme: ReturnType<typeof buildDataGridTheme>
    headerRowHeight: number
    rowHeight: number
    /** the consumer's checkbox for the selection column — see `GridCheckbox` */
    renderers: { renderCheckbox: typeof renderGridCheckbox }
    onCellKeyDown: typeof releaseTabFromGrid
}

const GRID_RENDERERS = { renderCheckbox: renderGridCheckbox }

/**
 * Colours and row rhythm shared by every grid — spread onto `<DataGrid>` so no table can drift from
 * the others. Heights are props rather than CSS variables because react-data-grid lays the header
 * and body out from `headerRowHeight`/`rowHeight` and only mirrors them into
 * `--rdg-header-row-height` afterwards; setting the variable has no effect on layout.
 */
export const useGridPresentation = (): GridPresentation => {
    const theme = useTheme()
    return useMemo(
        () => ({
            theme: buildDataGridTheme(theme),
            headerRowHeight: GRID_HEADER_ROW_HEIGHT,
            rowHeight: GRID_ROW_HEIGHT,
            renderers: GRID_RENDERERS,
            onCellKeyDown: releaseTabFromGrid
        }),
        [theme]
    )
}

export interface GridPaginationLabels {
    rowsPerPageLabel: string
    ofLabel: string
}

/**
 * The "reset column layout" item at the end of every column chooser's menu. The way back belongs
 * next to the control that moved the columns, which is why every table reads it rather than opting
 * in.
 */
export const useColumnResetLabel = (): string => useLabels().resetColumnLayout

/**
 * How a column moved from the chooser's menu announces where it landed. It is read out and never
 * seen, which is exactly why it needs saying in the reader's own language.
 */
export const useColumnMovedAnnouncement = (): ((
    column: string,
    position: number,
    total: number
) => string) => useLabels().columnMovedTo

/**
 * The accessible name of the header's select-all checkbox — a gap only a screen reader hears, which
 * is why every table takes this one rather than declaring it.
 */
export const useSelectAllLabel = (): string => useLabels().selectAll

/**
 * The hint a resting pointer raises over a row's value, and the confirmation once it is taken. Both
 * are read in the grid layer for the same reason the labels above are: the gesture is every table's,
 * so no table asks for it.
 */
export const useClickToCopyLabel = (): string => useLabels().clickToCopy

export const useCopiedLabel = (): string => useLabels().copied

/** Footer wording for a paginated grid. */
export const useGridPaginationLabels = (): GridPaginationLabels => {
    const labels = useLabels()
    return useMemo(
        () => ({ rowsPerPageLabel: labels.rowsPerPage, ofLabel: labels.of }),
        [labels.rowsPerPage, labels.of]
    )
}

/**
 * The count at the footer's left end, in the entity's own words: pass the consumer's count-plural
 * key and hand the result to `CrudTable`'s `totalLabel`.
 *
 * Every table says how much it holds and each says it in its OWN noun ("58 devices", "12 agents"),
 * so the key is the consumer's and is resolved through its own `translate` — plural forms included.
 * A consumer whose sentence needs more than a count words it itself instead.
 */
export const useGridTotalLabel = (countKey: string): ((count: number) => string) => {
    const translate = useTranslate()
    return useCallback((count: number) => translate(countKey, { count }), [translate, countKey])
}
