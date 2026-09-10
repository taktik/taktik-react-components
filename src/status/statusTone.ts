import { withAlpha } from '../color/withAlpha'
import type { TableTheme } from '../theme/tableTheme'

/**
 * The four tones a table's own cells read a status in.
 *
 * Library-private on purpose. A consumer's other toned surfaces — a banner, a settings row, a
 * standalone pill — are not tables, and importing a table library to colour one would be the wrong
 * dependency; so the consumer keeps its own four tones over the same theme tokens. Two small copies,
 * one per layer, is the intended shape here rather than a duplication to remove.
 */

/** The states a status can read as. The consumer maps its own statuses onto them. */
export type StatusTone = 'success' | 'warning' | 'danger' | 'neutral'

export interface StatusToneColors {
    /** the dot, or an icon standing in for it */
    mark: string
    /** the label, where the tone carries it too (the pill variant) */
    text: string
    background: string
    /** the outline a pill is drawn with */
    border: string
}

/**
 * A pill's outline: the tone's own hue, softened, so the edge reads as the same colour as the mark
 * and the words without competing with either. Derived rather than declared per theme — a tint of
 * the mark lands correctly over a near-white page and over a dark row alike, where a fixed pale
 * step would vanish on one of the two.
 */
const OUTLINE_ALPHA = 0.4

/**
 * The four tones as colours, off the theme the CONSUMER supplies.
 *
 * Typed against `TableTheme` rather than styled-components' `DefaultTheme`: a consumer's
 * `DefaultTheme` is whatever it augmented the interface to be, so naming it here would let a theme
 * carrying none of these tokens compile and hand back `rgba(NaN, NaN, NaN, …)`.
 *
 * ⚠ The three tone hues (`greenMain`, `yellowMain`, `redMain`) are read as `#rrggbb`, since the
 * outline is derived from them — see `withAlpha`.
 */
export const statusToneColors = (tone: StatusTone, theme: TableTheme): StatusToneColors => {
    switch (tone) {
        case 'success':
            return {
                mark: theme.greenMain,
                text: theme.greenDark,
                background: theme.greenSuperLight,
                border: withAlpha(theme.greenMain, OUTLINE_ALPHA)
            }
        case 'warning':
            return {
                mark: theme.yellowMain,
                text: theme.yellowDark,
                background: theme.yellowSuperLight,
                border: withAlpha(theme.yellowMain, OUTLINE_ALPHA)
            }
        case 'danger':
            return {
                mark: theme.redMain,
                text: theme.redDark,
                background: theme.redSuperLight,
                border: withAlpha(theme.redMain, OUTLINE_ALPHA)
            }
        case 'neutral':
            return {
                mark: theme.textLighter,
                text: theme.textLight,
                background: theme.backgroundMedium,
                // The app's own line, not a tint: a neutral pill states no tone to soften.
                border: theme.borderColor
            }
    }
}
