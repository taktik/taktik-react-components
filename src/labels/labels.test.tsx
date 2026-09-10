import { renderHook } from '@testing-library/react'
import { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { englishLabels, withLabelOverrides } from './labels'
import { LabelsProvider, useLabels, useLabelsContext, useTranslate } from './LabelsProvider'

describe('labels', () => {
    it('reads English with no provider at all', () => {
        const { result } = renderHook(() => useLabels())
        expect(result.current.addFilter).toBe('Add filter')
        expect(result.current.selection.picked(3)).toBe('3 rows are selected.')
    })

    it('overrides a subset and keeps the rest, the nested selection group included', () => {
        const labels = withLabelOverrides({ clear: 'Effacer', selection: { clear: 'Vider' } })
        expect(labels.clear).toBe('Effacer')
        expect(labels.selection.clear).toBe('Vider')
        expect(labels.selection.band).toBe(englishLabels.selection.band)
        expect(labels.addFilter).toBe(englishLabels.addFilter)
    })

    it('hands the provider value down', () => {
        const wrapper = ({ children }: { children: ReactNode }): ReactNode => (
            <LabelsProvider labels={{ searching: 'Recherche…' }} translate={(key) => `<${key}>`}>
                {children}
            </LabelsProvider>
        )
        const { result } = renderHook(() => useLabelsContext(), { wrapper })
        expect(result.current.labels.searching).toBe('Recherche…')
        expect(result.current.translate('app.total')).toBe('<app.total>')
        expect(result.current.formatRelativeTime(Date.now() - 3 * 86_400_000)).toBe('3 days ago')
    })

    it('translates to the key itself when no translate is wired', () => {
        const { result } = renderHook(() => useTranslate())
        expect(result.current('app.total', { count: 2 })).toBe('app.total')
    })

    it('pluralises the English defaults', () => {
        expect(englishLabels.clearFilters(1)).toBe('Clear the filter')
        expect(englishLabels.clearFilters(4)).toBe('Clear the 4 filters')
        expect(englishLabels.selection.allMatchingSelectedExcept(1, 40)).toBe(
            'All 40 matching rows are selected, except one.'
        )
        expect(englishLabels.columnMovedTo('Name', 2, 5)).toBe('Name moved to position 2 of 5')
    })
})
