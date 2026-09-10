import { colorPalette, withAlpha } from './colorPalette'
import { ITheme } from './ITheme'

/**
 * The one "this one is picked" answer — a picked row, a picked tab, a picked chip. Named before the
 * theme so the families that wear it can READ it rather than restate its values, which is how a
 * per-component copy of the picked look starts drifting from the picked look.
 */
const selected = {
    background: colorPalette.blue_100,
    backgroundHover: colorPalette.blue_200,
    color: colorPalette.blue_500
}

export const lightTheme: ITheme = {
    primaryMain: colorPalette.blue_500,
    primaryLight: colorPalette.blue_300,
    primaryDark: colorPalette.blue_700,
    primarySuperLight: colorPalette.blue_50,
    primaryContrastText: colorPalette.gray_100,
    textMain: colorPalette.gray_800,
    textLight: colorPalette.gray_600,
    textLighter: colorPalette.gray_500,
    textDark: colorPalette.gray_900,
    backgroundLight: colorPalette.gray_50,
    backgroundMedium: colorPalette.gray_100,
    backgroundDark: colorPalette.gray_200,
    backgroundDarker: colorPalette.gray_300,
    borderColor: colorPalette.gray_300,
    /* A darkening, on a near-white panel. */
    panelFoldShadow: withAlpha(colorPalette.gray_900, 0.26),
    jsonViewerTheme: 'rjv-default',
    selected,
    disabled: {
        background: colorPalette.gray_300,
        text: colorPalette.gray_500,
        border: colorPalette.gray_300
    },
    dangerMain: colorPalette.red_500,
    dangerLight: colorPalette.red_400,
    dangerDark: colorPalette.red_600,
    dangerSuperLight: colorPalette.red_50,
    destructive: {
        background: colorPalette.red_50,
        backgroundHover: colorPalette.red_100,
        color: colorPalette.red_600,
        colorHover: colorPalette.red_700
    },
    grantShield: {
        warning: colorPalette.yellow_800,
        danger: colorPalette.red_700
    },
    grantType: {
        /* ⚠ `_200`/`_300` rather than the `_50`/`_100` its siblings use, for the same reason
		   `signageLight` deviates: `gray_50`/`gray_100` are #FEFEFF/#FBFBFB, indistinguishable from
		   a white row, and their step is no step at all. Grey is the one hue whose light end IS the
		   surface. */
        browser: {
            background: colorPalette.gray_200,
            usedBackground: colorPalette.gray_300,
            color: colorPalette.gray_700
        },
        iptvStb: {
            background: colorPalette.purple_50,
            usedBackground: colorPalette.purple_100,
            color: colorPalette.purple_700
        },
        signage: {
            background: colorPalette.teal_50,
            usedBackground: colorPalette.teal_100,
            color: colorPalette.teal_800
        },
        /* ⚠ Deeper steps than its siblings, on purpose. Mint's own `_50` (#ECFEFA) is a shade off
		   Signage's `teal_50` (#EFFCF6) on a white row — the one pair a reader most needs to tell
		   apart — its `_50`→`_100` fill is invisible, and `mint_800` on it is 2.9:1, below AA. */
        signageLight: {
            background: colorPalette.mint_200,
            usedBackground: colorPalette.mint_300,
            color: colorPalette.mint_900
        },
        /* Orange, not the production page's red: red is what a capacity already reached reads as
		   here, and a category that always looked like a problem would cry wolf. */
        signageMini: {
            background: colorPalette.orange_50,
            usedBackground: colorPalette.orange_100,
            color: colorPalette.orange_800
        },
        signageRms: {
            background: colorPalette.yellow_50,
            usedBackground: colorPalette.yellow_100,
            color: colorPalette.yellow_800
        },
        tabletMobile: {
            background: colorPalette.blue_50,
            usedBackground: colorPalette.blue_100,
            color: colorPalette.blue_700
        },
        pcBedside: {
            background: colorPalette.pink_50,
            usedBackground: colorPalette.pink_100,
            color: colorPalette.pink_700
        }
    },
    type: {
        audioBackground: colorPalette.teal_50,
        audioColor: colorPalette.teal_600,
        channelBackground: colorPalette.blue_50,
        channelColor: colorPalette.blue_600,
        documentBackground: colorPalette.gray_200,
        documentColor: colorPalette.gray_600,
        imageBackground: colorPalette.yellow_50,
        imageColor: colorPalette.yellow_600,
        slideBackground: colorPalette.purple_50,
        slideColor: colorPalette.purple_500,
        videoBackground: colorPalette.pink_50,
        videoColor: colorPalette.pink_600,
        packageBackground: colorPalette.orange_100,
        packageColor: colorPalette.orange_600,
        errorColor: colorPalette.red_600,
        errorBackground: colorPalette.red_50
    },
    snackbar: {
        successTextColor: colorPalette.teal_50,
        successBackground: colorPalette.teal_500,
        errorTextColor: colorPalette.red_50,
        errorBackground: colorPalette.red_500,
        infoTextColor: colorPalette.blue_50,
        infoBackground: colorPalette.blue_500,
        warningTextColor: colorPalette.yellow_50,
        warningBackground: colorPalette.yellow_500,
        defaultTextColor: colorPalette.gray_100,
        defaultBackground: colorPalette.gray_800
    },
    tooltipBackground: withAlpha(colorPalette.gray_700, 0.8),
    tooltipColor: colorPalette.gray_100,
    greenMain: colorPalette.teal_400,
    greenLight: colorPalette.teal_300,
    /*
     * A `*Dark` token is TEXT — a status pill's words over its own `*SuperLight` tint, an amber
     * warning line, a red error chip — so on light it has to be the step that reads, not the one
     * that matches the mark beside it. The mid steps did not: amber words on the amber tint measured
     * 1.80:1. These are the deepest steps of each hue that still read as that hue, and each clears
     * 4.5:1 over BOTH its own tint and every row background the app paints text on, selected rows
     * included. Green needs one step more than the other two: at teal_700 a success word on a
     * selected blue row is 4.33:1. Pinned by `Grids/cells/statusTone.test.ts`.
     */
    greenDark: colorPalette.teal_800,
    greenSuperLight: colorPalette.teal_50,
    yellowMain: colorPalette.yellow_400,
    yellowLight: colorPalette.yellow_300,
    yellowDark: colorPalette.yellow_800,
    yellowSuperLight: colorPalette.yellow_50,
    redMain: colorPalette.red_400,
    redLight: colorPalette.red_300,
    redDark: colorPalette.red_700,
    redSuperLight: colorPalette.red_50,
    logoColor: colorPalette.blue_500,
    /* Every light surface is already the near-white page vendor artwork was drawn for. */
    brandMarkGround: 'transparent',
    button: {
        primaryBackground: colorPalette.blue_500,
        primaryText: colorPalette.gray_100,
        primaryTextHover: colorPalette.gray_50,
        primaryBackgroundHover: colorPalette.blue_700,
        primaryOutlineBorder: colorPalette.blue_300,
        primaryOutlineText: colorPalette.blue_500,
        primaryOutlineBackgroundHover: colorPalette.blue_100,
        secondaryBorder: colorPalette.gray_400,
        secondaryText: colorPalette.gray_800,
        /* the card plane: an outlined control is a surface, and on the canvas a transparent one read grey */
        secondaryBackground: colorPalette.gray_50,
        secondaryBackgroundHover: colorPalette.gray_300,
        secondaryBorderHover: colorPalette.gray_500,
        secondaryTextHover: colorPalette.gray_900,
        defaultText: colorPalette.gray_800,
        defaultTextHover: colorPalette.gray_900,
        // Translucent, not a flat colour: a default button sits on whatever ground its host has — a
        // dialog's footer band is the same gray_200 a flat hover would paint, so the hover vanished
        // there. A darkening reads against any ground, as the icon button's already does.
        defaultBackgroundHover: colorPalette.scrimHoverOnLight
    },
    iconButton: {
        defaultBackground: 'transparent',
        defaultIcon: colorPalette.gray_800,
        // Translucent, not a flat colour: most of these buttons sit inside a row that is ALREADY
        // hovered by the time the pointer reaches them, and a flat hover either matches the row's
        // (invisible — every grid kebab read as dead) or clashes with it (grey on a selected blue
        // row). A darkening reads against whatever it happens to sit on. Dark theme does the same.
        defaultBackgroundHover: colorPalette.scrimHoverOnLight,
        defaultIconHover: colorPalette.gray_900,
        selectedIconHover: colorPalette.blue_700,
        secondaryBackground: 'transparent',
        secondaryIcon: colorPalette.gray_800,
        secondaryBorder: colorPalette.gray_400,
        secondaryBackgroundHover: colorPalette.gray_300,
        secondaryIconHover: colorPalette.gray_900,
        secondaryBorderHover: colorPalette.gray_500,
        background: 'transparent',
        icon: colorPalette.gray_800,
        // same reason as defaultBackgroundHover above
        backgroundHover: colorPalette.scrimHoverOnLight,
        iconHover: colorPalette.gray_900
    },
    input: {
        background: colorPalette.gray_100,
        color: colorPalette.gray_800,
        colorIcon: colorPalette.gray_700,
        backgroundHover: colorPalette.gray_200,
        colorHover: colorPalette.gray_900,
        borderColor: colorPalette.gray_300,
        borderColorFocus: colorPalette.blue_500,
        secondBorderColor: colorPalette.blue_100,
        /* a step deeper than the box's line: `red_500` words measure 4.38:1 on this paper, under AA */
        errorColor: colorPalette.red_600,
        errorBorderColor: colorPalette.red_500,
        secondBorderErrorColor: colorPalette.red_100
    },
    switch: {
        track: colorPalette.gray_300,
        trackChecked: colorPalette.blue_500,
        thumb: colorPalette.gray_100,
        thumbChecked: colorPalette.blue_500
    },
    dialog: {
        background: colorPalette.gray_50,
        // gray_200 rather than the next step up: `gray_100` over a `gray_50` paper is #FBFBFB on
        // #FEFEFF, a band nobody can see — technically distinct, visually the flat surface this is
        // meant to fix. This is the same step the theme's own `backgroundDark` uses.
        buttonsBackground: colorPalette.gray_200
    },
    contextMenu: {
        background: colorPalette.gray_50,
        color: colorPalette.gray_800,
        colorHover: colorPalette.gray_900,
        backgroundHover: colorPalette.gray_200,
        icon: colorPalette.gray_700,
        iconHover: colorPalette.gray_800,
        colorSelectedHover: colorPalette.blue_700
    },
    mainLabel: {
        color: colorPalette.blue_500
    },
    surface: {
        background: colorPalette.gray_50,
        row: colorPalette.gray_100,
        rowHover: colorPalette.gray_200,
        /* A card's title band, which reads only if it differs from what sits under it. A GRID's
		   header is not this: it takes the ground its host stands on. */
        header: colorPalette.gray_200,
        headerHover: colorPalette.gray_300,
        /* The grid header's own ink, which the library would otherwise fix in both themes.
		   This is the value it ships, kept: 4.41:1 over the page's canvas and 5.01:1 over a
		   dialog's paper. */
        gridHeaderText: colorPalette.gray_600,
        /* Near-white, like the page behind it: on light the card is told apart by its border and
		   its shadow, not by a fill. The hover is a hair on its own (gray_100 against gray_50), so
		   what actually reads is the lift the tile raises with it. */
        card: colorPalette.gray_50,
        cardHover: colorPalette.gray_100,
        cardWell: colorPalette.gray_200,
        headerText: colorPalette.gray_500,
        text: colorPalette.gray_900,
        rowSelected: colorPalette.blue_100,
        border: colorPalette.gray_300,
        dragIndicator: colorPalette.gray_300,
        selectedDragIndicator: colorPalette.blue_300
    },
    schedulerColor: {
        blue: colorPalette.blue_600,
        yellow: colorPalette.yellow_600,
        teal: colorPalette.teal_600,
        pink: colorPalette.pink_600,
        purple: colorPalette.purple_600,
        red: colorPalette.red_600
    },
    packageContents: {
        medias: { mark: colorPalette.blue_500, track: colorPalette.blue_100 },
        channels: { mark: colorPalette.red_500, track: colorPalette.red_100 },
        scenes: { mark: colorPalette.teal_500, track: colorPalette.teal_100 },
        devices: { mark: colorPalette.yellow_500, track: colorPalette.yellow_100 }
    },
    assetCard: {
        background: colorPalette.gray_50,
        textMain: colorPalette.gray_900,
        textLight: colorPalette.gray_600,
        borderColor: colorPalette.gray_400,
        borderColorSelected: colorPalette.blue_500,
        previewBackgroundSelected: colorPalette.blue_100
    },
    cardType: {
        playlistBackground: colorPalette.purple_50,
        playlistColor: colorPalette.purple_600,
        deviceBackground: colorPalette.teal_50,
        deviceColor: colorPalette.teal_600,
        packageBackground: colorPalette.blue_50,
        packageColor: colorPalette.blue_600
    },
    navItem: {
        background: 'transparent',
        color: colorPalette.gray_800,
        inheritedInfoColor: colorPalette.gray_600,
        inheritedBorderColor: colorPalette.gray_400,
        inheritedBackground: colorPalette.gray_100,
        inheritedColor: colorPalette.gray_600,
        selectedInheritedBorderColor: colorPalette.blue_600,
        highlightColor: colorPalette.teal_600,
        highlightBackground: colorPalette.teal_50,
        hoverBackground: colorPalette.gray_200
    },
    meal: {
        background: colorPalette.purple_100,
        color: colorPalette.purple_600,
        hoverBackground: colorPalette.purple_200,
        hoverColor: colorPalette.purple_700,
        breakfast: {
            background: colorPalette.yellow_100,
            color: colorPalette.yellow_500,
            hoverBackground: colorPalette.yellow_200,
            hoverColor: colorPalette.yellow_600
        },
        lunch: {
            background: colorPalette.purple_100,
            color: colorPalette.purple_500,
            hoverBackground: colorPalette.purple_200,
            hoverColor: colorPalette.purple_600
        },
        dinner: {
            background: colorPalette.teal_100,
            color: colorPalette.teal_500,
            hoverBackground: colorPalette.teal_200,
            hoverColor: colorPalette.teal_600
        }
    },
    activity: {
        background: colorPalette.pink_100,
        color: colorPalette.pink_600,
        hoverBackground: colorPalette.pink_200,
        hoverColor: colorPalette.pink_700
    },
    birthday: {
        background: colorPalette.teal_100,
        color: colorPalette.teal_600,
        hoverBackground: colorPalette.teal_200,
        hoverColor: colorPalette.teal_700
    },
    scheduler: {
        border: colorPalette.gray_300,
        headerBackground: colorPalette.gray_50,
        headerColor: colorPalette.gray_700,
        cellBackground: colorPalette.gray_50,
        cellColor: colorPalette.gray_800,
        offRangeCellBackground: colorPalette.gray_100,
        offRangeCellColor: colorPalette.gray_500,
        todayCellBackground: colorPalette.blue_50,
        todayBackground: colorPalette.blue_500,
        todayBarShadow: 'rgba(205,89,96,.1)',
        todayColor: colorPalette.gray_50,
        hover: {
            /* a whole step below the cell: gray_100 over a gray_50 cell was a hover nobody saw */
            cellBackground: colorPalette.gray_200
        }
    },
    chip: {
        color: colorPalette.gray_800,
        background: 'transparent',
        border: colorPalette.gray_300,
        hover: {
            color: colorPalette.gray_700,
            background: colorPalette.gray_200,
            border: colorPalette.gray_300
        },
        // the picked look is `selected`'s: one blue for "this one is picked" across chips, tabs and
        // rows. Only the edges are the chip's own — `selected` paints no border.
        selected: {
            color: selected.color,
            background: selected.background,
            border: colorPalette.blue_200,
            hover: {
                color: colorPalette.blue_600,
                background: selected.backgroundHover,
                border: colorPalette.blue_300
            }
        }
    },
    onlineStatus: {
        onlineColor: colorPalette.teal_500,
        onlineBackground: colorPalette.teal_100,
        offlineColor: colorPalette.red_500,
        offlineBackground: colorPalette.red_100,
        recentlyOnlineColor: colorPalette.yellow_500,
        recentlyOnlineBackground: colorPalette.yellow_100,
        deletedColor: colorPalette.orange_500,
        deletedBackground: colorPalette.orange_100,
        notFoundColor: colorPalette.purple_500,
        notFoundBackground: colorPalette.purple_100,
        defaultColor: colorPalette.gray_500,
        defaultBackground: colorPalette.gray_300
    },
    pairings: {
        bubbleColor: colorPalette.gray_50,
        bubbleBackground: colorPalette.gray_700,
        red: colorPalette.red_300,
        green: colorPalette.teal_300
    },
    /* The thumb is the thing to see and the track is not: a gray_200 thumb was the canvas's own
	   colour, and a near-white track read as a white strip down a grid's edge. */
    scrollbar: {
        thumbBackground: colorPalette.gray_400,
        trackBackground: 'transparent',
        thumbBackgroundHover: colorPalette.gray_500,
        trackBackgroundHover: 'transparent'
    }
}
