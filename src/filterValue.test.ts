import { describe, expect, it } from 'vitest'
import { asTextFilter, canBeExact, negationMode, QUICK_SEARCH_KEY, textValue } from './filterValue'

/**
 * One chip, ONE grammar. Which one a chip speaks is decided here and nowhere else — the URL codec,
 * the bar's operator and the type-ahead's `!` all read this answer, so they cannot disagree about
 * what a leading `!` in a value means.
 */
describe('negationMode', () => {
    it('gives a per-column text chip its own is/is-not operator', () => {
        expect(negationMode({ key: 'location', kind: 'text' })).toBe('chip')
        // an undeclared kind is text, as everywhere else
        expect(negationMode({ key: 'location' })).toBe('chip')
    })

    // its text is an expression over words (`tizen !lobby`), so the words carry the exclusions
    it('gives the cross-column chip the per-word grammar', () => {
        expect(negationMode({ key: QUICK_SEARCH_KEY, kind: 'text' })).toBe('word')
    })

    // a set's neutral state is "Any" and a range has two bounds: neither negates (ruled out of B-5)
    it('gives a select or a range no negation at all', () => {
        expect(negationMode({ key: 'status', kind: 'select' })).toBe('none')
        expect(negationMode({ key: 'created', kind: 'range' })).toBe('none')
    })

    // a page that compiles its chips into backend parameters has no complement to send
    it('honours a page that declares its text chip unnegatable', () => {
        expect(negationMode({ key: 'firstName', kind: 'text', negatable: false })).toBe('none')
        expect(negationMode({ key: QUICK_SEARCH_KEY, kind: 'text', negatable: false })).toBe('none')
    })
})

describe('textValue', () => {
    // ONE shape per meaning: a matching chip is a bare string, so there is no `negated: false`
    // object for a reader — or a URL — to disagree with
    it('builds a bare string while it matches and the object once it excludes', () => {
        expect(textValue('room 10')).toBe('room 10')
        expect(textValue('room 10', { negated: false })).toBe('room 10')
        expect(textValue('room 10', { negated: true })).toEqual({ text: 'room 10', negated: true })
    })

    // the same rule for the second flag, and the two compose: picking a suggested value while the
    // chip excludes means "is not exactly this"
    it('writes the exact flag only when the value was picked, and both together', () => {
        expect(textValue('room 105', { exact: false })).toBe('room 105')
        expect(textValue('room 105', { exact: true })).toEqual({ text: 'room 105', exact: true })
        expect(textValue('room 105', { negated: true, exact: true })).toEqual({
            text: 'room 105',
            negated: true,
            exact: true
        })
    })
})

describe('canBeExact', () => {
    // only a field whose values the bar can offer can hold one — there is no operator for it
    it('is true for a suggestable per-column text chip alone', () => {
        expect(canBeExact({ key: 'location', kind: 'text', suggestable: true })).toBe(true)
        expect(canBeExact({ key: 'location', kind: 'text' })).toBe(false)
        expect(canBeExact({ key: QUICK_SEARCH_KEY, kind: 'text', suggestable: true })).toBe(false)
        expect(canBeExact({ key: 'status', kind: 'select', suggestable: true })).toBe(false)
        expect(
            canBeExact({ key: 'firstName', kind: 'text', negatable: false, suggestable: true })
        ).toBe(false)
    })
})

describe('asTextFilter', () => {
    // what a query needs, and nothing it does not: the exact flag is absent unless it is set
    it('carries the exact flag to the builders, and omits it otherwise', () => {
        expect(asTextFilter('room 10')).toEqual({ term: 'room 10', negated: false })
        expect(asTextFilter({ text: 'room 105', exact: true })).toEqual({
            term: 'room 105',
            negated: false,
            exact: true
        })
        expect(asTextFilter({ text: 'room 105', negated: true, exact: true })).toEqual({
            term: 'room 105',
            negated: true,
            exact: true
        })
    })
})
