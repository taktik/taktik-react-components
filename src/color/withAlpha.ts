/**
 * A colour at a fraction of its strength — for a tint, a hover wash, a softened outline, so nothing
 * restates a hex a second time as `rgba`.
 *
 * ⚠ The colour is read as `#rrggbb`. One spelled any other way — a named colour, `hsl`, a short
 * `#rgb` — yields `rgba(NaN, NaN, NaN, …)`.
 */
export const withAlpha = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
