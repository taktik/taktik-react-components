import { describe, expect, it } from 'vitest'
import { defaultTableTheme as lightTheme } from '../theme/tableTheme'
import { statusToneColors, type StatusTone } from './statusTone'

describe('statusToneColors', () => {
    it('answers for every tone', () => {
        const tones: StatusTone[] = ['success', 'warning', 'danger', 'neutral']
        tones.forEach((tone) => {
            const colors = statusToneColors(tone, lightTheme)
            expect(colors.mark).toBeTruthy()
            expect(colors.text).toBeTruthy()
            expect(colors.background).toBeTruthy()
            expect(colors.border).toBeTruthy()
        })
    })

    // The pill is outlined, so every tone owes an edge — a tint of its own hue, except neutral,
    // which states no tone and takes the app's own line.
    it('outlines a toned pill in its own hue and a neutral one in the app line', () => {
        expect(statusToneColors('success', lightTheme).border).toContain('rgba')
        expect(statusToneColors('neutral', lightTheme).border).toBe(lightTheme.borderColor)
    })

    // The pill this generalises showed connected/undetermined/disconnected in these three colours;
    // the mapping moved here, so pin that it still resolves to the same palette entries.
    it('keeps the green/yellow/red scale the connection pill was built on', () => {
        expect(statusToneColors('success', lightTheme).mark).toBe(lightTheme.greenMain)
        expect(statusToneColors('warning', lightTheme).mark).toBe(lightTheme.yellowMain)
        expect(statusToneColors('danger', lightTheme).mark).toBe(lightTheme.redMain)
    })
})
