import { createContext, ReactNode, useContext, useMemo } from 'react'
import type { Locale } from 'date-fns'
import { formatDistanceToNowStrict } from 'date-fns'
import { englishLabels, LabelOverrides, Labels, withLabelOverrides } from './labels'

/**
 * A consumer's own translation function, for the strings the library cannot type in advance: a
 * row action's name, a table's "N things" count key. Given a key and the values it interpolates,
 * returns the text. The default returns the key itself, so an unwired consumer sees the key rather
 * than nothing.
 */
export type Translate = (key: string, options?: Record<string, unknown>) => string

export interface LabelsContextValue {
    labels: Labels
    translate: Translate
    /** "3 days ago", in the consumer's language; the default is English through date-fns. */
    formatRelativeTime: (value: string | number | Date) => string
    /** The date-fns locale a date picker renders its calendar with; unset means date-fns' English. */
    dateLocale?: Locale
}

const identityTranslate: Translate = (key) => key

const englishRelativeTime = (value: string | number | Date): string =>
    formatDistanceToNowStrict(new Date(value), { addSuffix: true })

const defaultValue: LabelsContextValue = {
    labels: englishLabels,
    translate: identityTranslate,
    formatRelativeTime: englishRelativeTime
}

const LabelsContext = createContext<LabelsContextValue>(defaultValue)

export interface LabelsProviderProps {
    /**
     * Any subset of the labels; the English default fills the rest.
     *
     * ⚠ Hoist it, and the callbacks beside it, out of the render. The context value is rebuilt when
     * one of them changes IDENTITY, so an object written inline is a fresh object per render of the
     * host and re-renders every table.
     */
    labels?: LabelOverrides
    translate?: Translate
    formatRelativeTime?: LabelsContextValue['formatRelativeTime']
    dateLocale?: Locale
    children: ReactNode
}

/**
 * Hands the library's components their strings. Wire it once, near the consumer's root, and
 * re-render it when the language changes; nothing below it threads a label through props.
 */
export const LabelsProvider = ({
    labels,
    translate = identityTranslate,
    formatRelativeTime = englishRelativeTime,
    dateLocale,
    children
}: LabelsProviderProps): ReactNode => {
    const value = useMemo<LabelsContextValue>(
        () => ({ labels: withLabelOverrides(labels), translate, formatRelativeTime, dateLocale }),
        [labels, translate, formatRelativeTime, dateLocale]
    )
    return <LabelsContext.Provider value={value}>{children}</LabelsContext.Provider>
}

export const useLabels = (): Labels => useContext(LabelsContext).labels

export const useTranslate = (): Translate => useContext(LabelsContext).translate

export const useLabelsContext = (): LabelsContextValue => useContext(LabelsContext)
