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
}

/**
 * The type scale, the shapes and the elevation a table draws with.
 *
 * They are tokens rather than library constants because they belong to the consumer's design
 * system: a table has to read at the same size, in the same family and with the same corners as
 * everything around it. One group, so a consumer adds them in one place.
 */
export interface TableChromeTokens {
    fontFamily: string
    /** A caption, a count, a chip's label. */
    fontSizeSmaller: string
    /** A cell's own text, and the quiet lines beside it. */
    fontSizeSmall: string
    /** A control's label — a chip, a menu entry, a field. */
    fontSizeNormal: string
    /** An empty state's headline. */
    fontSizeBig: string
    radiusSmall: string
    radiusMedium: string
    radiusLarge: string
    /** Semicircular ends whatever the element's height — a status pill. */
    radiusPill: string
    /** An icon riding beside small text: a chip's mark, a dense cell's, a field's. */
    iconSizeSmall: string
    /** The elevation of a box that floats over the table — the copy hint, the copied bubble. */
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
 * A complete light palette, so a table renders correctly with no `ThemeProvider` of the consumer's
 * own — the values are literal colours rather than a palette import, since a theme is the
 * consumer's to own and the library keeps none.
 */
export const defaultTableTheme: TableTheme = {
    primaryMain: '#0484DF',
    textMain: '#29323D',
    textLight: '#5D7184',
    textLighter: '#8899AA',
    borderColor: '#DBDFE3',
    backgroundLight: '#FEFEFF',
    backgroundMedium: '#FBFBFB',
    backgroundDark: '#EEF2F6',
    greenMain: '#3EBD93',
    greenDark: '#0C6B58',
    greenSuperLight: '#EFFCF6',
    yellowMain: '#F7C948',
    yellowDark: '#B44D12',
    yellowSuperLight: '#FFFBEA',
    redMain: '#EF4E4E',
    redDark: '#AB091E',
    redSuperLight: '#FFE3E3',
    tooltipBackground: 'rgba(62, 79, 95, 0.8)',
    tooltipColor: '#FBFBFB',
    selected: {
        color: '#0484DF',
        background: '#DCF0FE'
    },
    surface: {
        background: '#FEFEFF',
        row: '#FBFBFB',
        rowHover: '#EEF2F6',
        rowSelected: '#DCF0FE',
        gridHeaderText: '#5D7184',
        text: '#1E252D',
        border: '#DBDFE3'
    },
    input: {
        background: '#FBFBFB',
        borderColor: '#DBDFE3'
    },
    dialog: {
        background: '#FEFEFF'
    },
    chip: {
        color: '#29323D',
        background: 'transparent'
    },
    scrollbar: {
        thumbBackground: '#C6CDD4',
        trackBackground: 'transparent',
        thumbBackgroundHover: '#8899AA',
        trackBackgroundHover: 'transparent'
    },
    table: {
        fontFamily: `'Inter', sans-serif`,
        fontSizeSmaller: '10px',
        fontSizeSmall: '12px',
        fontSizeNormal: '13px',
        fontSizeBig: '16px',
        radiusSmall: '4px',
        radiusMedium: '6px',
        radiusLarge: '8px',
        radiusPill: '999px',
        iconSizeSmall: '16px',
        floatingShadow:
            'rgba(0, 0, 0,.20) 0 3px 3px -2px, ' +
            'rgba(0, 0, 0,.14) 0 3px 4px 0, ' +
            'rgba(0, 0, 0,.12) 0 1px 8px 0'
    }
}
