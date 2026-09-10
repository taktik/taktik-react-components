import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it, vi } from 'vitest'
import { defaultTableTheme as lightTheme } from '../../../theme/tableTheme'
import { RelativeTimeCell, RELATIVE_TIME_MAX_DAYS } from './RelativeTimeCell'

const DAY_MS = 24 * 60 * 60 * 1000

// the house Tooltip reads the theme, so this cell needs a provider like any other surface
const textOf = (props: Parameters<typeof RelativeTimeCell>[0]): string =>
    render(
        <ThemeProvider theme={lightTheme}>
            <RelativeTimeCell {...props} />
        </ThemeProvider>
    ).container.textContent ?? ''

describe('RelativeTimeCell', () => {
    it('shows a recent timestamp as a relative time', () => {
        expect(textOf({ value: new Date(Date.now() - 3 * 60 * 1000).toISOString() })).toBe(
            '3 minutes ago'
        )
    })

    it('falls back to the absolute date once the value is too old to read relatively', () => {
        const old = new Date(Date.now() - (RELATIVE_TIME_MAX_DAYS + 1) * DAY_MS)
        expect(textOf({ value: old.toISOString() })).not.toContain('ago')
    })

    it('honours a page-supplied age threshold', () => {
        const twoDaysAgo = new Date(Date.now() - 2 * DAY_MS).toISOString()
        expect(textOf({ value: twoDaysAgo, absoluteAfterDays: 1 })).not.toContain('ago')
        expect(textOf({ value: twoDaysAgo, absoluteAfterDays: 7 })).toContain('ago')
    })

    it('shows the fallback when there is no timestamp', () => {
        expect(textOf({ value: undefined })).toBe('-')
        expect(textOf({ value: null, fallback: 'Never seen' })).toBe('Never seen')
    })

    it('shows the fallback for a value that is not a date', () => {
        expect(textOf({ value: 'not-a-date', fallback: 'Never seen' })).toBe('Never seen')
    })

    // An aged-out cell has to read like the date columns beside it, not like a second date format
    it('degrades to the house dd-MM-yyyy HH:mm form', () => {
        const old = new Date(Date.now() - (RELATIVE_TIME_MAX_DAYS + 1) * DAY_MS)
        expect(textOf({ value: old.toISOString() })).toMatch(/^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/)
    })
})
