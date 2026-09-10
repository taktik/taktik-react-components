import { StatusTone } from './statusTone'

/** Past this share of the capacity a count starts warning — there is still room, but not much. */
export const CAPACITY_WARNING_RATIO = 0.8

/**
 * How full a capacity is, as the tone the count and its bar read in.
 *
 * Reaching the capacity exactly is already `danger`, not a warning: the next device to ask for a
 * seat is refused, which is the same problem as being over.
 */
export const capacityTone = (used: number, total?: number): StatusTone => {
    if (total === undefined) {
        return 'neutral'
    }
    if (total <= 0) {
        return used > 0 ? 'danger' : 'neutral'
    }
    if (used >= total) {
        return 'danger'
    }
    return used / total > CAPACITY_WARNING_RATIO ? 'warning' : 'neutral'
}

/** How much of the bar is filled, clamped — a capacity 3× over would otherwise draw past the track. */
export const capacityPercent = (used: number, total?: number): number => {
    if (!total || total <= 0) {
        return used > 0 ? 100 : 0
    }
    return Math.min(Math.max((used / total) * 100, 0), 100)
}
