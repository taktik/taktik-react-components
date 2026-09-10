/**
 * WCAG contrast arithmetic, so "does this read?" is a measurement rather than an opinion.
 *
 * The themes are the only caller today: a status tone's words sit on the tone's own tint, and the
 * light theme once painted amber-on-amber at 1.80:1 because nothing checked. Kept React-free and
 * theme-free so a test can hand it any two CSS colours the themes produce.
 */

/** WCAG AA for body text, which is what every toned label in the app is. */
export const AA_CONTRAST = 4.5

export interface Rgba {
    r: number
    g: number
    b: number
    a: number
}

/**
 * The two notations a theme token can hold: a `#rrggbb` palette step, or the `rgba()` string
 * `withAlpha` mints. Anything else (a keyword, a gradient) is not a colour this can measure.
 */
export const parseColor = (color: string): Rgba | undefined => {
    const value = color.trim()
    const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.[1]
    if (hex !== undefined) {
        const digits = hex.length === 3 ? hex.replace(/./g, (digit) => digit + digit) : hex
        return {
            r: parseInt(digits.slice(0, 2), 16),
            g: parseInt(digits.slice(2, 4), 16),
            b: parseInt(digits.slice(4, 6), 16),
            a: 1
        }
    }
    const body = value.match(/^rgba?\(([^)]+)\)$/i)?.[1]
    if (body === undefined) {
        return undefined
    }
    const [r, g, b, alpha] = body.split(/[,/]/).map((part) => Number(part.trim()))
    if (r === undefined || g === undefined || b === undefined) {
        return undefined
    }
    if ([r, g, b].some(Number.isNaN)) {
        return undefined
    }
    return { r, g, b, a: alpha === undefined || Number.isNaN(alpha) ? 1 : alpha }
}

/**
 * A translucent tint over what it lands on. A dark-theme status tint is `rgba(hue, 0.16)`, so its
 * effective colour — the one a ratio has to be measured against — depends on the row underneath.
 */
export const composite = (color: string, ground: string): string => {
    const top = parseColor(color)
    const bottom = parseColor(ground)
    if (!top || !bottom) {
        return color
    }
    const mix = (over: number, under: number) => Math.round(over * top.a + under * (1 - top.a))
    return `rgb(${mix(top.r, bottom.r)}, ${mix(top.g, bottom.g)}, ${mix(top.b, bottom.b)})`
}

const channelLuminance = (value: number): number => {
    const scaled = value / 255
    return scaled <= 0.03928 ? scaled / 12.92 : Math.pow((scaled + 0.055) / 1.055, 2.4)
}

/** Relative luminance per WCAG 2.x. An alpha is ignored — composite the colour first. */
export const relativeLuminance = (color: string): number => {
    const rgba = parseColor(color)
    if (!rgba) {
        return 0
    }
    return (
        0.2126 * channelLuminance(rgba.r) +
        0.7152 * channelLuminance(rgba.g) +
        0.0722 * channelLuminance(rgba.b)
    )
}

/**
 * The WCAG ratio between two OPAQUE colours, 1 (identical) to 21 (black on white). Composite any
 * translucent input over its ground first — an alpha read as opaque flatters the result.
 */
export const contrastRatio = (foreground: string, background: string): number => {
    const first = relativeLuminance(foreground)
    const second = relativeLuminance(background)
    const lighter = Math.max(first, second)
    const darker = Math.min(first, second)
    return (lighter + 0.05) / (darker + 0.05)
}
