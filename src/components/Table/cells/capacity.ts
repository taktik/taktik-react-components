/**
 * How much of the bar is filled, clamped — a capacity 3× over would otherwise draw past the track.
 *
 * Geometry only. WHETHER a count is in trouble, and at what share of its capacity, is the
 * consumer's product rule and arrives as `CountBarCell`'s `tone`.
 */
export const capacityPercent = (used: number, total?: number): number => {
    if (!total || total <= 0) {
        return used > 0 ? 100 : 0
    }
    return Math.min(Math.max((used / total) * 100, 0), 100)
}
