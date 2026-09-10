import { describe, expect, it } from 'vitest'
import {
    ALL_MATCHING_SELECTED,
    excludedCount,
    idsSelection,
    isSelected,
    knownSelectedIds,
    NOTHING_SELECTED,
    selectedOnPage,
    selectionSize,
    toggledMatching,
    toggledSelection,
    withoutIds,
    withPageSelection,
    withSelectedId
} from './selection'

describe('toggledSelection', () => {
    it('ticks the clicked row, keeping whatever was ticked before it', () => {
        expect(toggledSelection([], 'a')).toEqual(['a'])
        expect(toggledSelection(['b'], 'a')).toEqual(['b', 'a'])
    })

    it('unticks a row that was already in the selection', () => {
        expect(toggledSelection(['a'], 'a')).toEqual([])
        expect(toggledSelection(['a', 'b'], 'a')).toEqual(['b'])
    })
})

// The all-matching half of the model, moved here with the recordings grid it was written for: the
// semantics are the same ones that page proved, and now every table can have them.
describe('MatchingSelection', () => {
    const page = ['a', 'b']

    it('names exactly the rows an ids-mode table reports, over a copy of them', () => {
        const ids = ['a', 'b']
        const selection = idsSelection(ids)
        expect(selection).toEqual({ all: false, ids: ['a', 'b'] })
        expect(selectionSize(selection, 99)).toBe(2)
        ids.push('c')
        expect(selectionSize(selection, 99)).toBe(2)
    })

    it('starts empty: nothing selected, a destructive action disabled', () => {
        expect(isSelected(NOTHING_SELECTED, 'a')).toBe(false)
        expect(excludedCount(NOTHING_SELECTED)).toBe(0)
    })

    it('ids mode: the reported rows ARE the selection', () => {
        const selection = withPageSelection(NOTHING_SELECTED, page, ['a'])
        expect(isSelected(selection, 'a')).toBe(true)
        expect(isSelected(selection, 'b')).toBe(false)
        expect(selectedOnPage(selection, page)).toEqual(['a'])
    })

    it('ids mode: a row reported as unticked leaves the selection', () => {
        const picked = withPageSelection(NOTHING_SELECTED, page, ['a', 'b'])
        const unpicked = withPageSelection(picked, page, ['b'])
        expect(isSelected(unpicked, 'a')).toBe(false)
        expect(selectedOnPage(unpicked, page)).toEqual(['b'])
    })

    it('all-matching mode: every row is selected, including one on a page never loaded', () => {
        expect(isSelected(ALL_MATCHING_SELECTED, 'anything')).toBe(true)
        expect(selectedOnPage(ALL_MATCHING_SELECTED, page)).toEqual(page)
    })

    it('all-matching mode: an unticked row becomes an exclusion, and stays selected everywhere else', () => {
        const selection = withPageSelection(ALL_MATCHING_SELECTED, page, ['b'])
        expect(isSelected(selection, 'a')).toBe(false)
        expect(isSelected(selection, 'b')).toBe(true)
        expect(isSelected(selection, 'off-page')).toBe(true)
        expect(excludedCount(selection)).toBe(1)
    })

    it('all-matching mode: re-ticking a row lifts its exclusion', () => {
        const excluded = withPageSelection(ALL_MATCHING_SELECTED, page, ['b'])
        const restored = withPageSelection(excluded, page, page)
        expect(excludedCount(restored)).toBe(0)
        expect(isSelected(restored, 'a')).toBe(true)
    })

    /**
     * The whole reason the page's ids are an argument: a page's report says nothing about the rows
     * the reader excluded on another page, and dropping those would silently widen a delete.
     */
    it('all-matching mode: exclusions made on other pages survive a report from this one', () => {
        const withOffPageExclusion: ReturnType<typeof withPageSelection> = {
            all: true,
            excludedIds: ['far-away']
        }
        const selection = withPageSelection(withOffPageExclusion, page, ['a'])
        expect(selection).toEqual({ all: true, excludedIds: ['far-away', 'b'] })
    })

    it('all-matching mode: unticking the header excludes the page and nothing else', () => {
        const selection = withPageSelection(ALL_MATCHING_SELECTED, page, [])
        expect(selection).toEqual({ all: true, excludedIds: page })
    })
})

/**
 * The four questions a page asks of a selection whose shape it must not care about: how many rows,
 * which ids (where there are any), and the two edits — dropping rows and adding one.
 */
describe('reading and editing a selection whichever shape it is in', () => {
    it('counts the ids in one mode and the query minus the exclusions in the other', () => {
        expect(selectionSize({ all: false, ids: ['a', 'b'] }, 58)).toBe(2)
        expect(selectionSize({ all: true, excludedIds: ['a'] }, 58)).toBe(57)
        // a total that has not arrived yet cannot make the count negative
        expect(selectionSize({ all: true, excludedIds: ['a', 'b'] }, 0)).toBe(0)
    })

    /** An exclusion list read as a set of picks is the bug the union exists to prevent. */
    it('names ids only where the selection actually holds them', () => {
        expect(knownSelectedIds({ all: false, ids: ['a'] })).toEqual(['a'])
        expect(knownSelectedIds({ all: true, excludedIds: ['a'] })).toBeUndefined()
    })

    it('drops rows as picks removed, or as exclusions added', () => {
        expect(withoutIds({ all: false, ids: ['a', 'b'] }, ['a'])).toEqual({
            all: false,
            ids: ['b']
        })
        expect(withoutIds({ all: true, excludedIds: ['a'] }, ['b', 'a'])).toEqual({
            all: true,
            excludedIds: ['a', 'b']
        })
    })

    it('adds a row as a pick, or as an exclusion lifted', () => {
        expect(withSelectedId({ all: false, ids: ['a'] }, 'b')).toEqual({
            all: false,
            ids: ['a', 'b']
        })
        expect(withSelectedId({ all: false, ids: ['a'] }, 'a')).toEqual({ all: false, ids: ['a'] })
        expect(withSelectedId({ all: true, excludedIds: ['a', 'b'] }, 'a')).toEqual({
            all: true,
            excludedIds: ['b']
        })
    })

    it('toggles a row the same way in both shapes', () => {
        expect(toggledMatching({ all: false, ids: ['a'] }, 'a')).toEqual({ all: false, ids: [] })
        expect(toggledMatching({ all: true, excludedIds: [] }, 'a')).toEqual({
            all: true,
            excludedIds: ['a']
        })
        expect(toggledMatching({ all: true, excludedIds: ['a'] }, 'a')).toEqual({
            all: true,
            excludedIds: []
        })
    })
})
