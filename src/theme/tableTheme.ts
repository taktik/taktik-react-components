/**
 * What a table reads off `props.theme` — and nothing more.
 *
 * The library styles its tables with styled-components against the CONSUMER's own theme, so this
 * interface is the contract between the two: every token named here is one the table code below
 * actually reads, and a consumer whose theme satisfies it structurally needs no adapter at all.
 *
 * The nesting mirrors how the tokens group by MEANING — a row's planes under `surface`, a field's
 * under `input`, the type scale and the shapes under `table` — so a consumer can satisfy the whole
 * of it with the theme it already has.
 */

/** "This one is picked": the accent a picked thing is labelled in, and the wash behind it. */
export interface TableSelectedTokens {
    color: string
    background: string
}

/**
 * The planes a table is made of.
 *
 * ⚠ `rowSelected` is deliberately NOT `selected.background`: react-data-grid paints a row by
 * colouring the cells in the row's state, so a translucent wash would let the columns scrolling
 * under a pinned cell show through. This one has to be OPAQUE.
 */
export interface TableSurfaceTokens {
    /** The panel the rows sit in. */
    background: string
    /** One row's own fill — what the grid paints its cells with. */
    row: string
    /** MUST stay distinguishable from `border`, or a hover erases the row's own lines. */
    rowHover: string
    rowSelected: string
    /**
     * A row being LIFTED by a drag — the column chooser's, which are reordered by hand.
     *
     * It has to lift over a MENU's paper rather than over a row's own plane, and that menu is
     * portalled out of the grid, so the grid's own custom properties do not reach it: what a theme
     * names here is the only thing saying "this is the row you are moving".
     */
    dragged: string
    /** The column names in the header band, whose ground is whatever the grid's host stands on. */
    gridHeaderText: string
    /** Text on a row. */
    text: string
    border: string
}

/** A field the reader types in — the filter bar's own search box and its chips' inputs. */
export interface TableInputTokens {
    background: string
    borderColor: string
    /** The room around what the reader has typed. */
    padding: string
}

/** The paper a dialog is drawn on, which is the ground a grid inside one stands upon. */
export interface TableDialogTokens {
    background: string
}

/** The quiet chip a cell holds several of. */
export interface TableChipTokens {
    color: string
    background: string
}

export interface TableScrollbarTokens {
    thumbBackground: string
    trackBackground: string
    thumbBackgroundHover: string
    trackBackgroundHover: string
    /** How thick the bar is — one number for both axes. */
    size: string
}

/**
 * The type scale, the shapes, the spacing steps and the elevation a table draws with.
 *
 * They are tokens rather than library constants because they belong to the consumer's design
 * system: a table has to read at the same size, in the same family, with the same corners and on
 * the same rhythm as everything around it. One group, so a consumer adds them in one place.
 */
export interface TableChromeTokens {
    fontFamily: string
    /** A caption, a count, a chip's label. */
    fontSizeSmaller: string
    /** A cell's own text, and the quiet lines beside it. */
    fontSizeSmall: string
    /** A control's label — a chip, a menu entry, a field, the count at the footer's end. */
    fontSizeNormal: string
    /** An empty state's headline. */
    fontSizeBig: string
    /** How tall a line of a cell's text stands. Unitless, so it follows the size it lands on. */
    lineHeight: string
    radiusSmall: string
    radiusMedium: string
    radiusLarge: string
    /** Semicircular ends whatever the element's height — a status pill. */
    radiusPill: string
    /** Every line a table draws: a cell's edge, a field's box, the grid's own frame. */
    borderWidth: string
    /** An icon riding beside small text: a chip's mark, a dense cell's, a field's. */
    iconSizeSmall: string
    /** The mark of an empty state, which is an ILLUSTRATION rather than a control's icon. */
    iconSizeIllustration: string
    /** The selection checkbox in a grid's own column, which is a box rather than a glyph. */
    checkboxSize: string
    /** What a grid PAGE insets its toolbar and its grid by — the page's own margin. */
    pagePadding: string
    /** The air between a grid page's toolbar and the grid under it. */
    pageGap: string
    cellPaddingBlock: string
    /**
     * ⚠ `actionColumnSizing` (gridCells) budgets a row-action column in JS from this number, and a
     * module constant cannot read a theme: a consumer changing it has to revisit that constant.
     */
    cellPaddingInline: string
    /** The band the pager stands in, under the grid. */
    footerHeight: string
    /** Between what the table holds and the pager's own controls. */
    footerGap: string
    focusRingWidth: string
    /** How far outside the control's edge the ring is drawn — and inside, for a clipped one. */
    focusRingOffset: string
    /**
     * Which layer a box floating over the table is drawn on — the copy hint, the copied bubble.
     * They are portalled to the body, so this is what decides whether they clear the HOST's own
     * dialogs, drawers and snackbars: it is the host's stacking order, not the table's.
     */
    floatingZIndex: string
    /** The room inside such a box, around its one line of text. */
    floatingPadding: string
    /** How far above the pointer it sits, so what it is about stays visible. */
    floatingOffset: string
    /** The elevation of a box that floats over the table — the copy hint, a row lifted by a drag. */
    floatingShadow: string
}

export interface TableTheme {
    primaryMain: string
    textMain: string
    textLight: string
    textLighter: string
    borderColor: string
    backgroundLight: string
    backgroundMedium: string
    backgroundDark: string
    greenMain: string
    greenDark: string
    greenSuperLight: string
    yellowMain: string
    yellowDark: string
    yellowSuperLight: string
    redMain: string
    redDark: string
    redSuperLight: string
    tooltipBackground: string
    tooltipColor: string
    selected: TableSelectedTokens
    surface: TableSurfaceTokens
    input: TableInputTokens
    dialog: TableDialogTokens
    chip: TableChipTokens
    scrollbar: TableScrollbarTokens
    table: TableChromeTokens
}

/**
 * A complete NEUTRAL theme, so a table renders correctly before a consumer has authored one of its
 * own — a first spike, a story, a test.
 *
 * It is deliberately nobody's design system: a system font stack, a plain 12/14/16 type scale,
 * 2/4/8px corners, generic greys. A copy of a real application's scale here is the silent-drift
 * trap this exists to avoid — the app moves a step, the library's copy stays where it was, and
 * nothing fails to say so. A consumer that wants ITS values passes ITS theme.
 */
export const defaultTableTheme: TableTheme = {
    primaryMain: '#1976D2',
    textMain: '#212121',
    textLight: '#616161',
    textLighter: '#9E9E9E',
    borderColor: '#E0E0E0',
    backgroundLight: '#FFFFFF',
    backgroundMedium: '#FAFAFA',
    backgroundDark: '#F5F5F5',
    greenMain: '#4CAF50',
    greenDark: '#1B5E20',
    greenSuperLight: '#E8F5E9',
    yellowMain: '#FFC107',
    yellowDark: '#E65100',
    yellowSuperLight: '#FFF8E1',
    redMain: '#F44336',
    redDark: '#B71C1C',
    redSuperLight: '#FFEBEE',
    tooltipBackground: 'rgba(33, 33, 33, 0.9)',
    tooltipColor: '#FFFFFF',
    selected: {
        color: '#1976D2',
        background: '#E3F2FD'
    },
    surface: {
        background: '#FFFFFF',
        row: '#FFFFFF',
        rowHover: '#F5F5F5',
        rowSelected: '#E3F2FD',
        dragged: '#EEEEEE',
        gridHeaderText: '#616161',
        text: '#212121',
        border: '#E0E0E0'
    },
    input: {
        background: '#FFFFFF',
        borderColor: '#E0E0E0',
        padding: '8px'
    },
    dialog: {
        background: '#FFFFFF'
    },
    chip: {
        color: '#212121',
        background: 'transparent'
    },
    scrollbar: {
        thumbBackground: '#BDBDBD',
        trackBackground: 'transparent',
        thumbBackgroundHover: '#9E9E9E',
        trackBackgroundHover: 'transparent',
        size: '8px'
    },
    table: {
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSizeSmaller: '11px',
        fontSizeSmall: '12px',
        fontSizeNormal: '14px',
        fontSizeBig: '16px',
        lineHeight: '1.4',
        radiusSmall: '2px',
        radiusMedium: '4px',
        radiusLarge: '8px',
        radiusPill: '999px',
        borderWidth: '1px',
        iconSizeSmall: '16px',
        iconSizeIllustration: '40px',
        checkboxSize: '20px',
        pagePadding: '16px',
        pageGap: '16px',
        cellPaddingBlock: '8px',
        cellPaddingInline: '12px',
        footerHeight: '56px',
        footerGap: '16px',
        focusRingWidth: '2px',
        focusRingOffset: '2px',
        floatingZIndex: '1500',
        floatingPadding: '4px 8px',
        floatingOffset: '8px',
        floatingShadow: '0 1px 3px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.12)'
    }
}
