import { describe, expect, it } from 'vitest'
import { withAlpha } from './withAlpha'

describe('withAlpha', () => {
    it('reads a #rrggbb colour into rgba channels', () => {
        expect(withAlpha('#3EBD93', 0.4)).toBe('rgba(62, 189, 147, 0.4)')
    })

    it('keeps the channels at full strength when the alpha is 1', () => {
        expect(withAlpha('#000000', 1)).toBe('rgba(0, 0, 0, 1)')
        expect(withAlpha('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)')
    })
})
