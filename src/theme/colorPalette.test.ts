import { describe, expect, it } from 'vitest'
import { colorPalette, withAlpha } from './colorPalette'

describe('withAlpha', () => {
    it('converts a palette hex to rgba at the given opacity', () => {
        expect(withAlpha(colorPalette.blue_400, 0.15)).toBe('rgba(26, 155, 246, 0.15)')
    })

    it('keeps full precision on the channel values', () => {
        expect(withAlpha('#3EBD93', 0.16)).toBe('rgba(62, 189, 147, 0.16)')
        expect(withAlpha('#000000', 1)).toBe('rgba(0, 0, 0, 1)')
    })
})
