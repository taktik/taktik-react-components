import { describe, expect, it } from 'vitest'
import { AA_CONTRAST, contrastRatio } from '../testUtils/contrast'
import { darkTheme } from './dark'
import { lightTheme } from './light'
import { ITheme } from './ITheme'

/**
 * The app ships two themes, and CLAUDE.md's rule for them is specific: a token is added to BOTH
 * files with a REAL dark value, never the light value copied over.
 *
 * These families are the ones that name a HUE rather than a surface — a content-type badge, a
 * card's record type, a planner meal, a planner activity, a planner birthday, a license grant's
 * category and the shield on it. Four of them broke the rule the same way:
 * the dark block spread (or re-typed) the light one, so a pale `*_50`/`*_100` block glared out of a
 * dark list, card grid or scheduler. This pins the fix AND the class, for the whole family list at
 * once — `type` was fixed first and guarded alone, which is exactly why the other three shipped.
 *
 * Whatever the next hue family is, add it here on the day it is written.
 */
const TINTED_FAMILIES = [
    'type',
    'cardType',
    'meal',
    'activity',
    'birthday',
    'grantType',
    'grantShield'
] as const

/** `meal` nests a block per sitting, so the leaves are compared by flattened path. */
const leaves = (value: unknown, path = ''): [string, string][] =>
    typeof value === 'string'
        ? [[path, value]]
        : Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
              leaves(child, path ? `${path}.${key}` : key)
          )

/**
 * Families where every leaf must be AUTHORED per theme, but which are surfaces rather than hues, so
 * the translucent-tint rule above does not apply to them. `assetCard` earned its row: the dark block
 * spread the light one and overrode five keys of six, leaving a picked card outlined in the light
 * theme's accent.
 */
const AUTHORED_FAMILIES = ['assetCard', 'destructive'] as const

const familyLeaves = (
    theme: ITheme,
    family: (typeof TINTED_FAMILIES)[number] | (typeof AUTHORED_FAMILIES)[number]
) => leaves(theme[family])

describe.each(AUTHORED_FAMILIES)('every leaf is authored per theme: %s', (family) => {
    const light = familyLeaves(lightTheme, family)
    const dark = familyLeaves(darkTheme, family)

    it('covers exactly the leaves the light theme does', () => {
        expect(dark.map(([path]) => path).sort()).toEqual(light.map(([path]) => path).sort())
    })

    it.each(light)('gives %s its own dark value', (path, lightValue) => {
        expect(Object.fromEntries(dark)[path]).not.toBe(lightValue)
    })
})

/**
 * Two scalars the dark theme also has to author rather than inherit. The fold shadow is the one that
 * bit: `gray_900` at 26 % is the cue on a near-white panel and nothing at all on a `gray_900` one.
 */
describe('the scalars the dark theme authors', () => {
    it('the fold shadow is not the light one', () => {
        expect(darkTheme.panelFoldShadow).not.toBe(lightTheme.panelFoldShadow)
    })

    it('the fold shadow is translucent in both themes — it is painted ON the panel', () => {
        expect(lightTheme.panelFoldShadow).toMatch(/^rgba\(/)
        expect(darkTheme.panelFoldShadow).toMatch(/^rgba\(/)
    })

    it('the JSON viewer wears a different base-16 theme per app theme', () => {
        expect(darkTheme.jsonViewerTheme).not.toBe(lightTheme.jsonViewerTheme)
    })
})

describe.each(TINTED_FAMILIES)('the dark theme does not borrow light values: %s', (family) => {
    const light = familyLeaves(lightTheme, family)
    const dark = familyLeaves(darkTheme, family)

    it('covers exactly the leaves the light theme does', () => {
        expect(dark.map(([path]) => path).sort()).toEqual(light.map(([path]) => path).sort())
    })

    it.each(light)('gives %s its own dark value', (path, lightValue) => {
        expect(Object.fromEntries(dark)[path]).not.toBe(lightValue)
    })

    /**
     * A tint sits ON the dark surface, so it has to be translucent rather than a solid pale block —
     * that is what lets each hue keep its identity without lighting up the row.
     */
    it.each(light.filter(([path]) => /background/i.test(path)))(
        '%s is a translucent tint, not a solid block',
        (path) => {
            expect(Object.fromEntries(dark)[path]).toMatch(/^rgba?\(/)
        }
    )
})

/**
 * A colour that is painted ON another token cannot BE it: `navItem.highlight*` was
 * `gray_800`/`gray_800` in dark, so a highlighted nav row's label was invisible.
 */
describe('a label is never painted in its own background', () => {
    const themes = { light: lightTheme, dark: darkTheme }

    it.each(Object.entries(themes))('%s: the highlighted nav row reads', (_name, theme) => {
        expect(theme.navItem.highlightColor).not.toBe(theme.navItem.highlightBackground)
    })

    it.each(Object.entries(themes))('%s: every toast reads', (_name, theme) => {
        for (const variant of ['success', 'error', 'info', 'warning', 'default'] as const) {
            expect(theme.snackbar[`${variant}Background`]).not.toBe(
                theme.snackbar[`${variant}TextColor`]
            )
        }
    })

    /**
     * The dark info toast rendered RED: `infoBackground` was a copy of the `errorBackground`
     * line above it. A toast's whole job is to say which of the two it is.
     */
    it.each(Object.entries(themes))('%s: an info toast is not an error toast', (_name, theme) => {
        expect(theme.snackbar.infoBackground).not.toBe(theme.snackbar.errorBackground)
    })

    /** A picked row's label sits on `selected.background`, hovered or not. */
    it.each(Object.entries(themes))('%s: a selected row reads', (_name, theme) => {
        expect(theme.selected.color).not.toBe(theme.selected.background)
        expect(theme.selected.color).not.toBe(theme.selected.backgroundHover)
    })
})

/**
 * ONE destructive treatment, app-wide: the tinted fill and red words a row kebab's delete entry
 * wears are what a destructive BUTTON wears too. These pin the SHAPE rather than the hue — a tint
 * the words read on, deepening when hovered, and translucent on dark so it cannot become the
 * saturated red block that a per-component copy of this drifts into.
 */
describe('the destructive treatment is a tint the words read on', () => {
    const themes = { light: lightTheme, dark: darkTheme }

    it.each(Object.entries(themes))('%s: the words read on the fill', (_name, theme) => {
        expect(theme.destructive.color).not.toBe(theme.destructive.background)
        expect(theme.destructive.colorHover).not.toBe(theme.destructive.backgroundHover)
    })

    it.each(Object.entries(themes))('%s: hovering deepens the fill', (_name, theme) => {
        expect(theme.destructive.backgroundHover).not.toBe(theme.destructive.background)
    })

    /** On dark the fill sits ON a near-black surface, so it is a translucent tint of the hue. */
    it('the dark fill is a tint rather than a solid red block', () => {
        expect(darkTheme.destructive.background).toMatch(/^rgba?\(/)
        expect(darkTheme.destructive.backgroundHover).toMatch(/^rgba?\(/)
    })
})

/**
 * The one rule the merged families exist to keep: "what colour is a selected row" and "what colour
 * is a grid row" each have ONE answer. A component family growing its own copy is how six identical
 * selected-backgrounds ended up with four different dark hovers.
 */
describe('the surfaces that were merged stay merged', () => {
    const themes = { light: lightTheme, dark: darkTheme }

    it.each(Object.entries(themes))('%s: the selected accent is the app accent', (_name, theme) => {
        expect(theme.selected.color).toBe(theme.primaryMain)
    })

    /**
     * A hover that equals the border erases the row's borders under the cursor — the reason dark's
     * grid hover is `gray_800` and not `gray_700`.
     */
    it.each(Object.entries(themes))('%s: a hovered row keeps its borders', (_name, theme) => {
        expect(theme.surface.rowHover).not.toBe(theme.surface.border)
    })

    /**
     * A dialog's action band is its own tone in BOTH themes. Light said `background` for both, so
     * every dialog in the app grew a footer band on dark and none at all on light — one component,
     * two anatomies, decided by a token nobody was comparing.
     */
    it.each(Object.entries(themes))(
        '%s: the dialog action band is not the dialog paper',
        (_name, theme) => {
            expect(theme.dialog.buttonsBackground).not.toBe(theme.dialog.background)
        }
    )

    /**
     * A grid's header band is the ground its host stands on, so on a PAGE it is the canvas — and
     * the canvas has to stay tellable from the rows, which is the one place that ground is not
     * also the rows' own colour. Inside a dialog it deliberately IS (below).
     */
    it.each(Object.entries(themes))(
        '%s: a page grid header is tellable from the rows under it',
        (_name, theme) => {
            expect(theme.backgroundDark).not.toBe(theme.surface.row)
        }
    )

    /**
     * Inside a dialog the ground IS the rows' colour on dark, and a hair off it on light
     * (`gray_100` over `gray_50` is #FBFBFB on #FEFEFF). That is the ruling — a header there is
     * flat against its rows and told from one by the border under it — and it is pinned so the
     * next reader meets a decision rather than what looks like an oversight.
     */
    it('dark stands a dialog grid header on the rows own colour, by ruling', () => {
        expect(darkTheme.dialog.background).toBe(darkTheme.surface.row)
    })

    /**
     * The column names have to READ on whichever ground their host gives them, and the library
     * would otherwise fix them at one hex for both themes — which measured 1.67:1 over a dark
     * page's canvas.
     *
     * The floor is 4:1 rather than `AA_CONTRAST` because light's own value is the one the library
     * shipped and measures 4.41:1 over the page canvas; raising it is a design call about the light
     * theme, not part of making the ink follow its ground. Every other pair clears 4.5.
     */
    it.each(Object.entries(themes))(
        '%s: the grid header names read on both grounds a host can give them',
        (_name, theme) => {
            for (const ground of [theme.backgroundDark, theme.dialog.background]) {
                expect(contrastRatio(theme.surface.gridHeaderText, ground)).toBeGreaterThan(4)
            }
        }
    )
})

/**
 * A disabled control drops its hue instead of wearing it at a lower alpha. An alpha is one number
 * composited against the backdrop, so the value that bleached a blue fill to near-white on light
 * only darkened it on dark, where a dark saturated fill still reads as an armed button. These pin
 * the replacement: `theme.disabled` is authored per theme, and it is never the colour a control
 * wears when it CAN be used.
 */
describe('a disabled control never wears an enabled colour', () => {
    const themes = { light: lightTheme, dark: darkTheme }

    it.each(Object.entries(themes))('%s: the fill is not a button fill', (_name, theme) => {
        expect(theme.disabled.background).not.toBe(theme.button.primaryBackground)
        expect(theme.disabled.background).not.toBe(theme.destructive.background)
    })

    it.each(Object.entries(themes))('%s: the label is not an enabled label', (_name, theme) => {
        for (const enabled of [
            theme.button.primaryText,
            theme.button.secondaryText,
            theme.destructive.color,
            theme.button.defaultText
        ]) {
            expect(theme.disabled.text).not.toBe(enabled)
        }
    })

    it.each(Object.entries(themes))(
        '%s: the outline is dimmer than an enabled one',
        (_name, theme) => {
            expect(theme.disabled.border).not.toBe(theme.button.secondaryBorder)
        }
    )

    /** The label has to stay readable ON the fill it sits on — a disabled button still says what it is. */
    it.each(Object.entries(themes))('%s: the label reads on the fill', (_name, theme) => {
        expect(theme.disabled.text).not.toBe(theme.disabled.background)
    })

    /** Dark authors its own fill: the surfaces it sits on are the opposite end of the scale. */
    it('the dark fill is not the light one', () => {
        expect(darkTheme.disabled.background).not.toBe(lightTheme.disabled.background)
        expect(darkTheme.disabled.border).not.toBe(lightTheme.disabled.border)
    })
})

/**
 * A field says it is wrong in ONE family — `input.errorColor` for the words (the message line under
 * the field, and its label), `input.errorBorderColor` for the box's line and the `!` mark's fill.
 * Both are authored per theme: light's deep reds are the unreadable half on a near-black paper, and
 * the dark block inherits the light one unless it says otherwise.
 *
 * Each half is measured against the ground it actually sits on. The words sit on the PAPER — a
 * dialog's or a page's — and are body text, so they clear AA. The box's line sits on the field's own
 * fill and is a graphic that carries meaning, so it clears the 3:1 of WCAG 1.4.11 instead.
 */
describe('a field says it is wrong in colours that read', () => {
    /** WCAG 1.4.11, for a mark that carries meaning without being text. */
    const GRAPHIC_CONTRAST = 3

    const themes = { light: lightTheme, dark: darkTheme }

    it.each(Object.entries(themes))('%s: both halves of the family are named', (_name, theme) => {
        expect(theme.input.errorColor).toMatch(/^#/)
        expect(theme.input.errorBorderColor).toMatch(/^#/)
    })

    it("the dark theme authors its own reds rather than inheriting light's", () => {
        expect(darkTheme.input.errorColor).not.toBe(lightTheme.input.errorColor)
        expect(darkTheme.input.errorBorderColor).not.toBe(lightTheme.input.errorBorderColor)
    })

    it.each(Object.entries(themes))('%s: the words read on the paper', (_name, theme) => {
        for (const paper of [theme.dialog.background, theme.surface.background]) {
            expect(contrastRatio(theme.input.errorColor, paper)).toBeGreaterThanOrEqual(AA_CONTRAST)
        }
    })

    it.each(Object.entries(themes))("%s: the box's line reads on the field", (_name, theme) => {
        for (const ground of [theme.input.background, theme.dialog.background]) {
            expect(contrastRatio(theme.input.errorBorderColor, ground)).toBeGreaterThanOrEqual(
                GRAPHIC_CONTRAST
            )
        }
    })

    /**
     * A message line hangs just under the box, so the words brush the field's own fill even though
     * they are not painted on it — they stay visible there rather than clearing AA against it.
     */
    it.each(Object.entries(themes))(
        '%s: the words stay visible beside the field',
        (_name, theme) => {
            expect(
                contrastRatio(theme.input.errorColor, theme.input.background)
            ).toBeGreaterThanOrEqual(GRAPHIC_CONTRAST)
        }
    )
})
