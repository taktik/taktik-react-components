/**
 * One license-grant category's colours. `usedBackground` paints the part of a capacity already
 * taken, so the chip carrying it IS its own bar — the production page's shape, restored.
 *
 * `color` paints the label AND the shield beside it while the capacity is quiet: a separate,
 * lighter mark could not clear 3:1 against these tints in either theme (WCAG 1.4.11 for a graphic
 * that carries meaning), and a shield nobody can see is the one thing this chip cannot afford —
 * with the tone deliberately kept off the fill, the shield is the ONLY carrier of "nearly full".
 */
export interface GrantTypeSwatch {
    background: string
    usedBackground: string
    color: string
}

export interface ITheme {
    primaryMain: string
    primaryLight: string
    primaryDark: string
    primarySuperLight: string
    primaryContrastText: string
    textMain: string
    textLight: string
    textLighter: string
    textDark: string
    backgroundLight: string
    backgroundMedium: string
    backgroundDark: string
    backgroundDarker: string
    borderColor: string
    /**
     * The scroll cue at a panel's fold — the soft edge that says a list is clipped rather than
     * finished. It is painted ON the panel's own ground, so it cannot be a shade of that ground: a
     * darkening reads on light, a lightening reads on dark, and each theme authors its own.
     */
    panelFoldShadow: string
    /**
     * Which of the JSON viewer's own base-16 themes a raw-record dialog wears. That widget is themed
     * by NAME rather than by colours, so the choice cannot be said in tokens and is made here, where
     * both themes are authored side by side — a dark JSON tree on a light dialog is what a single
     * hardcoded name gave every page that opens one.
     */
    jsonViewerTheme: 'rjv-default' | 'solarized'
    logoColor: string
    /**
     * The ground a third-party BRAND mark is drawn on. Vendor artwork (webOS, Tizen, LG, BrightSign)
     * is authored for a near-white page and carries near-black ink, so on a dark row the mark loses
     * most of itself. This paints the ground back under it. On light there is nothing to paint —
     * the surface already IS that ground — so it resolves to `transparent` and no icon gains a
     * plate it does not need. It is not a background of the app's own: never use it behind text or
     * behind an icon the theme already colours.
     */
    brandMarkGround: string
    /**
     * "This one is picked" — a nav row, a grid row, a tab, a context-menu entry, a card, a tree
     * node. ONE answer for the whole app: the same three leaves used to be declared six times over
     * (once per component family), agreed in light, and had already drifted into four different
     * hovers in dark.
     */
    selected: {
        background: string
        backgroundHover: string
        /** the accent a picked thing is labelled in — the app's `primaryMain` */
        color: string
    }
    /**
     * "This one cannot be used" — one answer for every control, as `selected` is for the opposite
     * state. A disabled control DROPS its hue rather than keeping it at a lower alpha: an alpha is
     * one number composited against the backdrop, so the same value that washes a blue fill out to
     * near-white on light merely darkens it on dark, where a dark saturated fill still reads as an
     * ordinary button. These are authored per theme instead, so the greying is a colour decision
     * rather than a side effect of what happens to sit behind the control.
     */
    disabled: {
        /** the flat fill of a control that HAS a fill (a primary or a destructive button) */
        background: string
        /** label and icon, for every variant including the ones with no fill */
        text: string
        /** the outline of an outlined control — dimmed, but still drawn, so the shape survives */
        border: string
    }
    dangerMain: string
    dangerLight: string
    dangerDark: string
    dangerSuperLight: string
    /**
     * "This one destroys something" — ONE answer for every control that does, as `selected` and
     * `disabled` are for their own states: a red-tinted fill, the hue's own words and mark on it, a
     * deeper tint hovered. A row kebab's delete entry, a destructive dialog's accept button and an
     * icon-only delete on a card all read as the same thing, because they read the same tokens; a
     * per-component copy of it is the drift this family replaces.
     *
     * Both themes author the fill: a translucent red over near-black and a pale red over white say
     * the same thing and are not the same value.
     */
    destructive: {
        background: string
        backgroundHover: string
        /** label AND icon: a destructive control's mark is the same red as its words */
        color: string
        colorHover: string
    }
    navItem: {
        background: string
        color: string
        inheritedInfoColor: string
        inheritedBorderColor: string
        inheritedBackground: string
        inheritedColor: string
        selectedInheritedBorderColor: string
        highlightColor: string
        highlightBackground: string
        hoverBackground: string
    }
    /**
     * The grant shield when the capacity is no longer quiet. It has to clear 3:1 on EVERY one of the
     * eight category tints, over both halves of the fill, which is what puts it several steps darker
     * (light) or lighter (dark) than the `yellowMain`/`redMain` a status dot uses on a plain row.
     */
    grantShield: {
        warning: string
        danger: string
    }
    /**
     * What a license grants, by category — the one splash of colour on the License page, and what
     * lets a reader find "how much Signage do we have left" without reading a word. A vocabulary of
     * its own like `type` and `cardType`: the hues collide with theirs here and there, and merging
     * them would tie a signage grant to a slide asset.
     */
    grantType: {
        browser: GrantTypeSwatch
        iptvStb: GrantTypeSwatch
        signage: GrantTypeSwatch
        signageLight: GrantTypeSwatch
        signageMini: GrantTypeSwatch
        signageRms: GrantTypeSwatch
        tabletMobile: GrantTypeSwatch
        pcBedside: GrantTypeSwatch
    }
    /**
     * The content-type badge on a row — audio, channel, document, image, slide, video, package.
     * A separate vocabulary from `cardType`, which names the kind of RECORD a card holds; they
     * collide on a palette step here and there, and merging them would be wrong.
     */
    type: {
        audioBackground: string
        audioColor: string
        channelBackground: string
        channelColor: string
        documentBackground: string
        documentColor: string
        imageBackground: string
        imageColor: string
        slideBackground: string
        slideColor: string
        videoBackground: string
        videoColor: string
        packageBackground: string
        packageColor: string
        errorColor: string
        errorBackground: string
    }
    snackbar: {
        successBackground: string
        successTextColor: string
        errorTextColor: string
        errorBackground: string
        infoTextColor: string
        infoBackground: string
        warningTextColor: string
        warningBackground: string
        defaultTextColor: string
        defaultBackground: string
    }
    tooltipBackground: string
    tooltipColor: string
    greenMain: string
    greenLight: string
    greenDark: string
    greenSuperLight: string
    yellowMain: string
    yellowLight: string
    yellowDark: string
    yellowSuperLight: string
    redMain: string
    redLight: string
    redDark: string
    redSuperLight: string
    button: {
        primaryBackground: string
        primaryText: string
        primaryTextHover: string
        primaryBackgroundHover: string
        /** The outlined primary: the accent as a border and a label, on the host's own ground. */
        primaryOutlineBorder: string
        primaryOutlineText: string
        primaryOutlineBackgroundHover: string
        secondaryBorder: string
        secondaryText: string
        /** The outlined control's fill at rest — the card plane, so it stands on the canvas as a control. */
        secondaryBackground: string
        secondaryBackgroundHover: string
        secondaryBorderHover: string
        secondaryTextHover: string
        defaultText: string
        defaultTextHover: string
        defaultBackgroundHover: string
    }
    input: {
        background: string
        color: string
        backgroundHover: string
        colorHover: string
        colorIcon: string
        borderColor: string
        borderColorFocus: string
        secondBorderColor: string
        /**
         * A field's error WORDS — the message line under it, and its label while it is wrong.
         * `errorBorderColor` is the box's own line and the fill of the `!` mark, a graphic rather
         * than text and held to the lower non-text minimum. One family answers the whole state:
         * `destructive.*` is the delete action's red and says something else entirely.
         */
        errorColor: string
        errorBorderColor: string
        secondBorderErrorColor: string
    }
    iconButton: {
        defaultBackground: string
        defaultIcon: string
        defaultBackgroundHover: string
        defaultIconHover: string
        /** the base selected look is `theme.selected`; only the hovered accent is this button's own */
        selectedIconHover: string
        secondaryBackground: string
        secondaryIcon: string
        secondaryBorder: string
        secondaryBackgroundHover: string
        secondaryIconHover: string
        secondaryBorderHover: string
        background: string
        icon: string
        backgroundHover: string
        iconHover: string
    }
    dialog: {
        background: string
        /**
         * The action band under a dialog's content, and it is a DISTINCT tone from the paper in both
         * themes: the row holding Save and Delete has to read as its own band, or a delete button
         * floats in the content it would act on. Light said `background` for both, so every dialog
         * grew a footer on dark and none on light. `themes.test.ts` pins that they differ.
         */
        buttonsBackground: string
    }
    contextMenu: {
        background: string
        color: string
        colorHover: string
        backgroundHover: string
        icon: string
        iconHover: string
        /** the base selected look is `theme.selected`; only the hovered accent is the menu's own */
        colorSelectedHover: string
    }
    mainLabel: {
        color: string
    }
    /**
     * Rows in a panel — the shared grid AND the hand-rolled lists (the signage drawers, the tile
     * grid, the SIP cards). One family, because a grid row and a drawer row are the same idea and
     * the two families they grew from had already crossed over: the grid took its header colour
     * from the list's while everything else came from the table's.
     */
    surface: {
        /** the panel the rows sit in — a grid paints its whole body with this */
        background: string
        /** one row's own fill, where the list draws rows itself */
        row: string
        /**
         * MUST stay distinguishable from `border` — a hover that matches it erases the row's
         * borders (dark learnt this the hard way at `gray_700`).
         */
        rowHover: string
        /**
         * The title band of a card — the SIP card's head, the rich-text toolbar, a keycap.
         *
         * ⚠ Not a GRID's header row. That one is painted the ground its host stands on instead —
         * the page's `backgroundDark` canvas, a dialog's own paper — because a step of its own read
         * as a strip belonging to nothing around it. What separates it from the rows then depends
         * on the host: a difference in ground on a page, the border under it in a dialog.
         */
        header: string
        headerHover: string
        /**
         * The column names in a GRID's header.
         *
         * Its own token because the library ships this as a fixed hex in both themes, and the
         * header's ground is not fixed: it is whatever the grid's host is painted in. That hex
         * measured 1.67:1 over a dark page's canvas — a ghost line under fully legible rows — so
         * the ink is authored per theme and `themes.test` measures it over both dark grounds.
         */
        gridHeaderText: string
        /**
         * A CARD standing on the page's own ground — a tile of a `TileGrid`.
         *
         * It is its own pair rather than `header`, because a card and a header answer opposite
         * questions: a header is the band ON a surface and shares that surface's step, while a card
         * has to read as a separate object sitting on the page. Painted in `header` a tile was
         * exactly the page's ground in BOTH themes and only its 1px hairline said it was a card.
         *
         * ⚠ Both themes say "raised" the same way — the card is the LIGHTEST plane there is — but
         * they start from opposite ends, so neither value is the other's: on dark it lifts off a
         * near-black page, on light it stays near-white against a page that is near-white too,
         * where the 1px border carries the separation on its own — a tile draws no resting shadow,
         * and lifts to `ShadowElevation3` only under the pointer.
         *
         * ⚠ The PAGE is never painted for this. A tile page keeps the app's own background like
         * every other page (Olivier, 2026-09-01: a grey plane behind the cards "clashes a lot" with
         * the white chrome around it, and the seam against the toolbar and the menu shows at once).
         * Where that leaves light-theme contrast subtler than ideal, that is accepted: border and
         * shadow are the mockup's own scheme and the app-wide convention wins.
         *
         * `cardWell` is what a card CONTAINS — a preview box, a thumbnail — a step DOWN from the
         * card so the recess reads as one, and never the card's own hover colour, which would make
         * it vanish under the cursor.
         */
        card: string
        cardHover: string
        cardWell: string
        /** the muted label colour of that header */
        headerText: string
        /** text on a row */
        text: string
        /**
         * a SELECTED row of a GRID — the design's light blue; hovering a selected row keeps it.
         *
         * ⚠ It is the one picked-thing colour that is NOT `selected.background`, and it cannot be:
         * react-data-grid paints a row by colouring the ROW and letting its cells inherit
         * (`background-color: inherit`), so a translucent wash — which is what `selected.background`
         * is on dark — would let the columns scrolling underneath show through the frozen actions
         * cell. This one has to be OPAQUE. Everything else that is picked (a nav row, a tab, a tree
         * node, a context-menu entry, an asset card) reads `theme.selected`.
         */
        rowSelected: string
        border: string
        /** the drop line while a row is dragged */
        dragIndicator: string
        selectedDragIndicator: string
    }
    schedulerColor: {
        blue: string
        yellow: string
        teal: string
        pink: string
        purple: string
        red: string
    }
    /**
     * One colour per kind of package content, so a count and its bar say WHICH kind at a glance.
     *
     * The four hues are Polymer's own (`packages-manager.html`: primary / red / teal / yellow) and the
     * light values are the identical palette entries. Only the track differs by theme — Polymer keeps
     * a dark, desaturated tint of each hue for its dark theme, which is what these carry.
     */
    packageContents: {
        medias: { mark: string; track: string }
        channels: { mark: string; track: string }
        scenes: { mark: string; track: string }
        devices: { mark: string; track: string }
    }
    assetCard: {
        background: string
        textMain: string
        textLight: string
        borderColor: string
        borderColorSelected: string
        previewBackgroundSelected: string
    }
    /**
     * The kind of RECORD a card holds — a playlist, a device, a package. Its own vocabulary, not
     * `type`'s (which names a piece of CONTENT); the two collide on a palette step or two by
     * coincidence and must not be merged.
     */
    cardType: {
        playlistBackground: string
        playlistColor: string
        deviceBackground: string
        deviceColor: string
        packageBackground: string
        packageColor: string
    }
    switch: {
        track: string
        trackChecked: string
        thumb: string
        thumbChecked: string
    }
    /** The HomeTV planner's meal vocabulary — one hue per sitting. */
    meal: {
        background: string
        color: string
        hoverBackground: string
        hoverColor: string
        breakfast: {
            background: string
            color: string
            hoverBackground: string
            hoverColor: string
        }
        lunch: {
            background: string
            color: string
            hoverBackground: string
            hoverColor: string
        }
        dinner: {
            background: string
            color: string
            hoverBackground: string
            hoverColor: string
        }
    }
    /** The planner's other event kind, beside `meal`. */
    activity: {
        background: string
        color: string
        hoverBackground: string
        hoverColor: string
    }
    /** A resident's birthday on the planner — derived from the resident, never a planner item. */
    birthday: {
        background: string
        color: string
        hoverBackground: string
        hoverColor: string
    }
    scheduler: {
        border: string
        headerBackground: string
        headerColor: string
        cellBackground: string
        cellColor: string
        offRangeCellBackground: string
        offRangeCellColor: string
        todayCellBackground: string
        todayBackground: string
        todayBarShadow: string
        todayColor: string
        hover: {
            cellBackground: string
        }
    }
    chip: {
        color: string
        background: string
        border: string
        hover: {
            color: string
            background: string
            border: string
        }
        selected: {
            color: string
            background: string
            border: string
            hover: {
                color: string
                background: string
                border: string
            }
        }
    }
    onlineStatus: {
        onlineColor: string
        onlineBackground: string
        offlineColor: string
        offlineBackground: string
        recentlyOnlineColor: string
        recentlyOnlineBackground: string
        deletedColor: string
        deletedBackground: string
        notFoundColor: string
        notFoundBackground: string
        defaultColor: string
        defaultBackground: string
    }
    pairings: {
        bubbleColor: string
        bubbleBackground: string
        red: string
        green: string
    }
    scrollbar: {
        thumbBackground: string
        trackBackground: string
        thumbBackgroundHover: string
        trackBackgroundHover: string
    }
}
