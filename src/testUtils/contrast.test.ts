import { describe, expect, it } from 'vitest'
import { composite, contrastRatio, parseColor, relativeLuminance } from './contrast'

describe('parseColor', () => {
    it('reads the two notations a theme token can hold', () => {
        expect(parseColor('#147D64')).toEqual({ r: 20, g: 125, b: 100, a: 1 })
        expect(parseColor('rgba(62, 189, 147, 0.16)')).toEqual({ r: 62, g: 189, b: 147, a: 0.16 })
        expect(parseColor('rgb(0, 0, 0)')).toEqual({ r: 0, g: 0, b: 0, a: 1 })
    })

    it('expands a three-digit hex', () => {
        expect(parseColor('#fff')).toEqual({ r: 255, g: 255, b: 255, a: 1 })
    })

    it('gives no answer for a colour it cannot measure', () => {
        expect(parseColor('transparent')).toBeUndefined()
        expect(parseColor('linear-gradient(red, blue)')).toBeUndefined()
    })
})

describe('composite', () => {
    it('lays a translucent tint over its ground', () => {
        expect(composite('rgba(0, 0, 0, 0.5)', '#FFFFFF')).toBe('rgb(128, 128, 128)')
    })

    it('leaves an opaque colour alone', () => {
        expect(composite('#123456', '#FFFFFF')).toBe('rgb(18, 52, 86)')
    })

    /** A ground it cannot parse must not silently become black — the ratio would look fine. */
    it('returns the colour untouched when either side is unmeasurable', () => {
        expect(composite('rgba(0, 0, 0, 0.5)', 'transparent')).toBe('rgba(0, 0, 0, 0.5)')
    })
})

describe('contrastRatio', () => {
    it('spans the WCAG range', () => {
        expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 1)
        expect(contrastRatio('#336699', '#336699')).toBeCloseTo(1, 5)
    })

    it('does not care which colour is named first', () => {
        expect(contrastRatio('#147D64', '#EFFCF6')).toBeCloseTo(
            contrastRatio('#EFFCF6', '#147D64'),
            5
        )
    })

    it('reproduces a known pair', () => {
        // the amber that failed: yellow_500 on yellow_50
        expect(contrastRatio('#F0B429', '#FFFBEA')).toBeCloseTo(1.8, 1)
    })
})

describe('relativeLuminance', () => {
    it('anchors at the ends of the scale', () => {
        expect(relativeLuminance('#000000')).toBe(0)
        expect(relativeLuminance('#FFFFFF')).toBeCloseTo(1, 5)
    })
})
