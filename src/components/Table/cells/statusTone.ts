import { DefaultTheme } from 'styled-components'

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
 * A hue at a fraction of its strength.
 *
 * ⚠ The three tone hues (`greenMain`, `yellowMain`, `redMain`) are read as `#rrggbb`: the outline
 * is derived from them, and a theme naming one of them any other way would produce `NaN` channels.
 */
const withAlpha = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const statusToneColors = (tone: StatusTone, theme: DefaultTheme): StatusToneColors => {
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
