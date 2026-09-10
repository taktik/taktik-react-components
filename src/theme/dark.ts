import { lightTheme } from './light'
import { colorPalette, withAlpha } from './colorPalette'
import { ITheme } from './ITheme'

/** The dark theme's own picked look — read by the families that wear it, never restated by them. */
const selected = {
    background: colorPalette.scrimSelected,
    backgroundHover: withAlpha(colorPalette.blue_400, 0.15),
    color: colorPalette.blue_400
}

export const darkTheme: ITheme = {
    ...lightTheme,
    primaryMain: colorPalette.blue_400,
    primaryLight: colorPalette.blue_200,
    primaryDark: colorPalette.blue_600,
    textMain: colorPalette.gray_200,
    textLight: colorPalette.gray_300,
    textLighter: colorPalette.gray_500,
    textDark: colorPalette.gray_500,
    backgroundLight: colorPalette.gray_900,
    backgroundMedium: colorPalette.gray_850,
    backgroundDark: colorPalette.gray_700,
    backgroundDarker: colorPalette.gray_600,
    borderColor: colorPalette.gray_700,
    /**
     * A LIGHTENING, because the panel it is painted on is already the palette's darkest step: the
     * light theme's darkening is `gray_900` over `gray_50`, and repeating it here paints `gray_900`
     * on `gray_900` — a fold that says nothing at all. The alpha is picked so the cue lands at the
     * same strength in both themes: measured at the gradient's peak, 1.62:1 against the panel here
     * and 1.63:1 on light.
     */
    panelFoldShadow: withAlpha(colorPalette.gray_50, 0.17),
    jsonViewerTheme: 'solarized',
    /**
     * A step LIGHTER than the panels it sits on (`gray_800`/`gray_900`), where light greys a step
     * darker than its near-white surfaces. Both directions say the same thing — this control is
     * inert grey, not a coloured call to action.
     */
    disabled: {
        background: colorPalette.gray_700,
        text: colorPalette.gray_500,
        border: colorPalette.gray_600
    },
    logoColor: colorPalette.gray_100,
    /**
     * OPAQUE, and one step off white on purpose. A translucent plate would take the tint of whatever
     * it lands on, so a vendor mark would read differently on a row, on its hover, on a picked row
     * and in a dialog — and the near-black ink it exists to rescue is exactly what those few percent
     * cost. Pure white would out-glare the app's own text.
     */
    brandMarkGround: colorPalette.gray_200,
    /**
     * A tooltip LIFTS off its surface. On light that means a dark bubble; on dark it means a
     * lighter one — the light theme's `gray_700` would sit a single step from the `gray_800`
     * panels it floats over and read as a smudge.
     */
    tooltipBackground: withAlpha(colorPalette.gray_600, 0.95),
    tooltipColor: colorPalette.gray_100,
    /* Tone tokens flip meaning on dark: *Dark reads as text (lighter shade for contrast),
	   *SuperLight as a translucent tint over dark surfaces — without these, status pills
	   inherit light-mode pastel backgrounds and glare against dark rows. */
    greenDark: colorPalette.teal_300,
    yellowDark: colorPalette.yellow_300,
    redDark: colorPalette.red_300,
    greenSuperLight: withAlpha(colorPalette.teal_400, 0.16),
    yellowSuperLight: withAlpha(colorPalette.yellow_400, 0.16),
    redSuperLight: withAlpha(colorPalette.red_400, 0.16),
    /**
     * A translucent tint of the hue with the hue's LIGHT end for the words on it — the shape every
     * tone family takes on dark. Light's pale `red_50` fill would be a lit slab on a near-black
     * page, and its `red_500` ink near-invisible on that slab.
     */
    destructive: {
        background: withAlpha(colorPalette.red_400, 0.18),
        backgroundHover: withAlpha(colorPalette.red_400, 0.3),
        color: colorPalette.red_300,
        colorHover: colorPalette.red_200
    },
    /**
     * ⚠ Real dark values, like `type` below: a grant chip sits ON a dark row, so its hue is a
     * translucent tint of itself and its words are the hue's light end. `usedBackground` is the same
     * hue at roughly twice the alpha — the chip's fill has to read as "more of the same", not as a
     * second colour, or a half-full capacity looks like two categories in one pill.
     */
    grantShield: {
        warning: colorPalette.yellow_200,
        danger: colorPalette.red_100
    },
    grantType: {
        browser: {
            background: withAlpha(colorPalette.gray_400, 0.18),
            usedBackground: withAlpha(colorPalette.gray_400, 0.36),
            color: colorPalette.gray_200
        },
        iptvStb: {
            background: withAlpha(colorPalette.purple_400, 0.18),
            usedBackground: withAlpha(colorPalette.purple_400, 0.36),
            color: colorPalette.purple_200
        },
        signage: {
            background: withAlpha(colorPalette.teal_400, 0.18),
            usedBackground: withAlpha(colorPalette.teal_400, 0.36),
            color: colorPalette.teal_200
        },
        /* mint_500 rather than mint_400: at a tint this faint, mint_400 over a dark row is barely
		   separable from Signage's teal_400 — the pair the hues exist to distinguish. */
        signageLight: {
            background: withAlpha(colorPalette.mint_500, 0.18),
            usedBackground: withAlpha(colorPalette.mint_500, 0.36),
            color: colorPalette.mint_200
        },
        signageMini: {
            background: withAlpha(colorPalette.orange_400, 0.18),
            usedBackground: withAlpha(colorPalette.orange_400, 0.36),
            color: colorPalette.orange_200
        },
        signageRms: {
            background: withAlpha(colorPalette.yellow_400, 0.18),
            usedBackground: withAlpha(colorPalette.yellow_400, 0.36),
            color: colorPalette.yellow_200
        },
        tabletMobile: {
            background: withAlpha(colorPalette.blue_400, 0.18),
            usedBackground: withAlpha(colorPalette.blue_400, 0.36),
            color: colorPalette.blue_200
        },
        pcBedside: {
            background: withAlpha(colorPalette.pink_400, 0.18),
            usedBackground: withAlpha(colorPalette.pink_400, 0.36),
            color: colorPalette.pink_200
        }
    },
    /**
     * ⚠ Real dark values, not the light ones. This block used to spread `lightTheme.type`, so a
     * content-type badge kept its pale `*_50`/`*_100` background and `*_600` text on a dark panel —
     * a bright block glaring out of the list. Same shape as `packageContents`: a translucent tint of
     * the hue for the background, and the hue's LIGHT end for the text, so each type keeps its
     * identity while the badge sits in the surface instead of on top of it.
     */
    type: {
        audioBackground: withAlpha(colorPalette.teal_400, 0.18),
        audioColor: colorPalette.teal_300,
        channelBackground: withAlpha(colorPalette.blue_400, 0.18),
        channelColor: colorPalette.blue_300,
        documentBackground: withAlpha(colorPalette.gray_400, 0.22),
        documentColor: colorPalette.gray_300,
        imageBackground: withAlpha(colorPalette.yellow_400, 0.18),
        imageColor: colorPalette.yellow_300,
        slideBackground: withAlpha(colorPalette.purple_400, 0.18),
        slideColor: colorPalette.purple_300,
        videoBackground: withAlpha(colorPalette.pink_400, 0.18),
        videoColor: colorPalette.pink_300,
        packageBackground: withAlpha(colorPalette.orange_400, 0.18),
        packageColor: colorPalette.orange_300,
        errorBackground: withAlpha(colorPalette.red_400, 0.18),
        errorColor: colorPalette.red_300
    },
    /**
     * Selected on dark is a DARKENING (the scrim), hovered is a blue lift — the same direction
     * light travels (`blue_100` → `blue_200`). The four dark hovers this replaces had drifted to
     * `gray_700`, `gray_800` and two different blue alphas; the blue is the one that still reads as
     * "picked" rather than as "merely hovered".
     */
    selected,
    button: {
        ...lightTheme.button,
        primaryOutlineBorder: colorPalette.blue_700,
        primaryOutlineText: colorPalette.blue_400,
        primaryOutlineBackgroundHover: withAlpha(colorPalette.blue_400, 0.15),
        secondaryText: colorPalette.gray_100,
        secondaryBackground: colorPalette.gray_800,
        secondaryBackgroundHover: withAlpha(colorPalette.blue_400, 0.15),
        secondaryBorderHover: colorPalette.blue_700,
        secondaryTextHover: colorPalette.gray_50,
        defaultText: colorPalette.gray_100,
        defaultTextHover: colorPalette.gray_50,
        defaultBackgroundHover: colorPalette.scrimHoverOnDark
    },
    iconButton: {
        ...lightTheme.iconButton,
        defaultBackground: 'transparent',
        defaultIcon: colorPalette.gray_100,
        defaultBackgroundHover: colorPalette.scrimSelected,
        defaultIconHover: colorPalette.gray_50,
        selectedIconHover: colorPalette.blue_400,
        secondaryBackground: 'transparent',
        secondaryIcon: colorPalette.gray_100,
        secondaryBorder: colorPalette.gray_600,
        secondaryBackgroundHover: colorPalette.scrimSelected,
        secondaryIconHover: colorPalette.gray_50,
        secondaryBorderHover: colorPalette.gray_500,
        icon: colorPalette.gray_100,
        backgroundHover: colorPalette.scrimHoverOnDark,
        iconHover: colorPalette.gray_50
    },
    input: {
        ...lightTheme.input,
        background: colorPalette.gray_800,
        color: colorPalette.gray_100,
        colorIcon: colorPalette.gray_200,
        backgroundHover: colorPalette.gray_800,
        colorHover: colorPalette.gray_50,
        borderColor: colorPalette.gray_700,
        secondBorderColor: colorPalette.gray_700,
        /* the hue's light end — the light theme's deep reds are the unreadable half on this paper */
        errorColor: colorPalette.red_300,
        errorBorderColor: colorPalette.red_400,
        secondBorderErrorColor: colorPalette.red_900
    },
    switch: {
        track: colorPalette.gray_700,
        trackChecked: colorPalette.blue_400,
        thumb: colorPalette.gray_300,
        // the thumb rides ON the track: the two are one control and take one accent
        thumbChecked: colorPalette.blue_400
    },
    dialog: {
        background: colorPalette.gray_900,
        buttonsBackground: colorPalette.gray_800
    },
    contextMenu: {
        background: colorPalette.gray_700,
        color: colorPalette.gray_100,
        colorHover: colorPalette.gray_50,
        backgroundHover: colorPalette.gray_800,
        icon: colorPalette.gray_200,
        iconHover: colorPalette.gray_100,
        colorSelectedHover: colorPalette.blue_200
    },
    mainLabel: {
        color: colorPalette.gray_100
    },
    surface: {
        ...lightTheme.surface,
        background: colorPalette.gray_900,
        row: colorPalette.gray_900,
        /* One step above the row, BELOW the border: a gray_700 hover matched the borders exactly
		   and made them vanish under the cursor. */
        rowHover: colorPalette.gray_800,
        /* A card's title band, one step above the plane it sits on, as on light. A GRID's header is
		   not this: it takes the ground its host stands on. */
        header: colorPalette.gray_850,
        headerHover: colorPalette.gray_800,
        /* Authored, and it has to be: the library's fixed ink measured 1.67:1 over this
		   theme's page canvas. 5.26:1 there and 9.64:1 over a dialog's paper. */
        gridHeaderText: colorPalette.gray_400,
        /* Unchanged by the light-theme flip, and that is the point: on dark the card was already
		   the lighter plane over the page's own near-black ground, which is what raised means. */
        card: colorPalette.gray_800,
        cardHover: colorPalette.gray_700,
        /* One step DOWN from the card, which is what makes what a card contains read as a recess:
		   here that lands on the page's own near-black. */
        cardWell: colorPalette.gray_900,
        text: colorPalette.gray_100,
        /* The light theme's blue_100 would glow on dark rows; blue_800 is the same statement
		   at this palette's depth, still distinct from rowHover's gray_800. */
        rowSelected: colorPalette.blue_800,
        border: colorPalette.gray_700,
        dragIndicator: colorPalette.gray_700,
        selectedDragIndicator: colorPalette.gray_600
    },
    snackbar: {
        successTextColor: colorPalette.teal_50,
        successBackground: colorPalette.teal_400,
        errorTextColor: colorPalette.red_50,
        errorBackground: colorPalette.red_400,
        infoTextColor: colorPalette.blue_50,
        infoBackground: colorPalette.blue_400,
        warningTextColor: colorPalette.yellow_50,
        warningBackground: colorPalette.yellow_400,
        defaultTextColor: colorPalette.gray_800,
        defaultBackground: colorPalette.gray_100
    },
    // the marks are the same four hues; only the tracks change, to the dark tints Polymer's own dark
    // theme defines for them (`flowr-admin/app/styles/theme.ts`)
    packageContents: {
        medias: { mark: colorPalette.blue_500, track: 'hsl(205, 29%, 21%)' },
        channels: { mark: colorPalette.red_500, track: 'hsl(0, 14%, 23%)' },
        scenes: { mark: colorPalette.teal_500, track: 'hsl(154, 16%, 20%)' },
        devices: { mark: colorPalette.yellow_500, track: 'hsl(48, 21%, 23%)' }
    },
    /**
     * ⚠ Every key authored, none spread: `borderColorSelected` used to fall through to the light
     * `blue_500`, so a picked card was outlined in a blue a step brighter than the accent everything
     * else on the dark theme is picked in. It is the accent, which on dark is `blue_400`.
     */
    assetCard: {
        background: 'transparent',
        textMain: colorPalette.gray_50,
        textLight: colorPalette.gray_500,
        borderColor: colorPalette.gray_700,
        borderColorSelected: colorPalette.blue_400,
        previewBackgroundSelected: colorPalette.blue_800
    },
    /**
     * ⚠ Real dark values, not the light ones — same defect and same fix as `type` above: this block
     * used to spread `lightTheme.cardType`, so a playlist / device / package badge kept its pale
     * `*_50` background and `*_600` text on a dark card. Translucent tint of the hue for the
     * background, the hue's light end for the text.
     */
    cardType: {
        playlistBackground: withAlpha(colorPalette.purple_400, 0.18),
        playlistColor: colorPalette.purple_300,
        deviceBackground: withAlpha(colorPalette.teal_400, 0.18),
        deviceColor: colorPalette.teal_300,
        packageBackground: withAlpha(colorPalette.blue_400, 0.18),
        packageColor: colorPalette.blue_300
    },
    navItem: {
        background: 'transparent',
        color: colorPalette.gray_100,
        inheritedInfoColor: colorPalette.gray_400,
        inheritedBorderColor: colorPalette.gray_700,
        inheritedBackground: colorPalette.gray_900,
        inheritedColor: colorPalette.gray_600,
        selectedInheritedBorderColor: colorPalette.gray_700,
        hoverBackground: colorPalette.gray_800,
        highlightColor: colorPalette.teal_300,
        highlightBackground: withAlpha(colorPalette.teal_400, 0.18)
    },
    pairings: {
        ...lightTheme.pairings,
        bubbleColor: colorPalette.gray_700,
        bubbleBackground: colorPalette.gray_100
    },
    onlineStatus: {
        onlineColor: colorPalette.teal_200,
        onlineBackground: colorPalette.teal_700,
        offlineColor: colorPalette.red_200,
        offlineBackground: colorPalette.red_700,
        recentlyOnlineColor: colorPalette.yellow_200,
        recentlyOnlineBackground: colorPalette.yellow_700,
        deletedColor: colorPalette.orange_500,
        deletedBackground: colorPalette.orange_100,
        notFoundColor: colorPalette.purple_500,
        notFoundBackground: colorPalette.purple_100,
        defaultColor: colorPalette.gray_200,
        defaultBackground: colorPalette.gray_700
    },
    scrollbar: {
        thumbBackground: colorPalette.gray_600,
        trackBackground: 'transparent',
        thumbBackgroundHover: colorPalette.gray_500,
        trackBackgroundHover: 'transparent'
    },
    /**
     * ⚠ Real dark values, not the light ones — the planner's events used to re-type the light block
     * verbatim, so a pale `purple_100` block sat on the dark scheduler. Same shape as `type`: a
     * translucent tint of the hue as the background, the hue's light end as the text, and one alpha
     * step up for the hovered state.
     */
    meal: {
        background: withAlpha(colorPalette.purple_400, 0.18),
        color: colorPalette.purple_300,
        hoverBackground: withAlpha(colorPalette.purple_400, 0.28),
        hoverColor: colorPalette.purple_200,
        breakfast: {
            background: withAlpha(colorPalette.yellow_400, 0.18),
            color: colorPalette.yellow_300,
            hoverBackground: withAlpha(colorPalette.yellow_400, 0.28),
            hoverColor: colorPalette.yellow_200
        },
        lunch: {
            background: withAlpha(colorPalette.purple_400, 0.18),
            color: colorPalette.purple_300,
            hoverBackground: withAlpha(colorPalette.purple_400, 0.28),
            hoverColor: colorPalette.purple_200
        },
        dinner: {
            background: withAlpha(colorPalette.teal_400, 0.18),
            color: colorPalette.teal_300,
            hoverBackground: withAlpha(colorPalette.teal_400, 0.28),
            hoverColor: colorPalette.teal_200
        }
    },
    activity: {
        background: withAlpha(colorPalette.pink_400, 0.18),
        color: colorPalette.pink_300,
        hoverBackground: withAlpha(colorPalette.pink_400, 0.28),
        hoverColor: colorPalette.pink_200
    },
    birthday: {
        background: withAlpha(colorPalette.teal_400, 0.18),
        color: colorPalette.teal_300,
        hoverBackground: withAlpha(colorPalette.teal_400, 0.28),
        hoverColor: colorPalette.teal_200
    },
    scheduler: {
        border: colorPalette.gray_700,
        headerBackground: colorPalette.gray_900,
        headerColor: colorPalette.gray_100,
        cellBackground: colorPalette.gray_800,
        cellColor: colorPalette.gray_50,
        offRangeCellBackground: colorPalette.gray_900,
        offRangeCellColor: colorPalette.gray_300,
        todayCellBackground: colorPalette.gray_900,
        todayBackground: colorPalette.blue_500,
        todayBarShadow: 'rgba(205,89,96,0.1)',
        todayColor: colorPalette.gray_50,
        hover: {
            cellBackground: colorPalette.gray_700
        }
    },
    chip: {
        color: colorPalette.gray_100,
        background: 'transparent',
        border: colorPalette.gray_700,
        hover: {
            color: colorPalette.gray_50,
            background: colorPalette.gray_700,
            border: colorPalette.gray_700
        },
        // the picked look is `selected`'s wash and blue, not a saturated fill of its own. Only the
        // edges are the chip's own — `selected` paints no border.
        selected: {
            color: selected.color,
            background: selected.background,
            border: colorPalette.blue_700,
            hover: {
                color: colorPalette.blue_300,
                background: selected.backgroundHover,
                border: colorPalette.blue_600
            }
        }
    }
}
