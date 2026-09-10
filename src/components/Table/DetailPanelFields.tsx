import { ReactNode } from 'react'
import styled from 'styled-components'
import { useTableSlots } from '../../slots'
import { fontSizeSmall, fontSizeSmaller } from '../../theme/tableStyles'
import { TruncatingCell } from './gridCells'

export interface DetailField {
    /** Stable across renders — what the field is, not where it sits. */
    key: string
    /** The label above the value, already translated. */
    label: string
    /** Text, or anything a cell renders (a relative time, a status). */
    value?: ReactNode
    /** Hover text for a value its column clips; a string value is its own by default. */
    title?: string
    /**
     * What lands on the clipboard. The field grows a copy button only when the panel also has an
     * `onCopy` and the field a `copyTooltipText` — a button with no words is not an affordance.
     */
    copyValue?: string
    /** Tooltip and accessible name of that button, already translated. */
    copyTooltipText?: string
    /**
     * The value is a SENTENCE, not a token — let it wrap onto as many lines as it needs instead of
     * ellipsising. A one-line row can only shorten one of its two halves, and a long value shortens
     * the label, so the reader loses the name of the field as well as its value.
     *
     * A property of the FIELD, not of this record's value for it: a cron summary is prose whether it
     * says "every day at 08:00" or something longer.
     */
    wrap?: boolean
}

/**
 * Runs the copy for a field carrying a `copyValue`. The consumer passes whatever reports success and
 * failure — a table cannot reach a toast layer itself.
 *
 * The FIELD rides along because the renderer is holding it: a panel with two copyable ids has to
 * know which one was taken, and reading that back off the value misroutes the moment a third
 * copyable field appears or two of them carry the same string.
 */
export type DetailFieldCopy = (value: string, field: DetailField) => void

/** A field the record left empty — its label still shows, over the panel's `emptyLabel`. */
export const isEmptyFieldValue = (value: ReactNode): boolean =>
    value === undefined || value === null || value === ''

/**
 * Whether the field is one a reader takes elsewhere — an id, a MAC, a version.
 *
 * It is a property of the FIELD, not of this record's value for it, which is what keeps a panel's
 * copy gutter open at the same width on a record that carries a serial number and on one that does
 * not. A button with no words to name it, or one the consumer cannot service, is not an affordance.
 */
export const fieldOffersCopy = (field: DetailField, onCopy?: DetailFieldCopy): boolean =>
    !!field.copyTooltipText && !!onCopy

/**
 * What a field's copy button is given, or `undefined` where there is no button to draw.
 *
 * ONE answer for both renderers, and it is deliberately independent of the value shown: `copyValue`
 * decides whether a button is offered, `value` decides what the row reads. So a field the record
 * left empty says so and still hands over what it has, and a button is never drawn over an empty
 * clipboard. Showing the `copyValue` in place of a missing value would answer a different question
 * from the one the field asked.
 */
export const fieldCopy = (
    field: DetailField,
    onCopy?: DetailFieldCopy
): { value: string; tooltipText: string; onCopy: (value: string) => void } | undefined =>
    field.copyValue && field.copyTooltipText && onCopy
        ? {
              value: field.copyValue,
              tooltipText: field.copyTooltipText,
              onCopy: (value: string) => onCopy(value, field)
          }
        : undefined

export interface DetailPanelFieldsProps {
    fields: DetailField[]
    /** Shown for a field the record left empty. */
    emptyLabel?: string
    /** The width a column keeps before the grid wraps to fewer of them. */
    minColumnWidth?: number
    onCopy?: DetailFieldCopy
}

/** Fits an id, a date pair or a short sentence; below it the labels start wrapping instead. */
const MIN_COLUMN_WIDTH = 180

const Layout = styled.div<{ $minColumnWidth: number }>`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(${({ $minColumnWidth }) => $minColumnWidth}px, 1fr)
    );
    gap: 8px 24px;
    align-content: flex-start;
    min-width: 0;
    overflow: auto;
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;
`

const Label = styled.span`
    ${fontSizeSmaller};
    color: ${({ theme }) => theme.textLight};
`

const Value = styled.div`
    ${fontSizeSmall};
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({ theme }) => theme.textMain};
`

const Empty = styled.span`
    ${fontSizeSmall};
    color: ${({ theme }) => theme.textLighter};
`

/**
 * The value absorbs the field's slack, which puts a copy button on the field's right edge — so a
 * panel of ids reads as a column of buttons instead of a ragged edge following whatever each value
 * happened to be long enough to say. A long value was already flush by accident, a short one was
 * not, and a drawer shows both side by side.
 */
const ValueText = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    min-width: 0;
`

/**
 * The label-above-value field grid an expanded row's detail is made of — a record's identity beside
 * the lists that say what it grants.
 *
 * Columns wrap by width rather than being counted out, so the same panel reads at a 1280 window and
 * at 1920 without a per-page column count. Values truncate: an id belongs on the clipboard, not
 * spread over three lines.
 */
export const DetailPanelFields = ({
    fields,
    emptyLabel = '-',
    minColumnWidth = MIN_COLUMN_WIDTH,
    onCopy
}: DetailPanelFieldsProps) => {
    const { CopyButton } = useTableSlots()
    return (
        <Layout $minColumnWidth={minColumnWidth}>
            {fields.map((field) => {
                const copy = fieldCopy(field, onCopy)
                return (
                    <Field key={field.key}>
                        <Label title={field.label}>{field.label}</Label>
                        <Value>
                            <ValueText>
                                {isEmptyFieldValue(field.value) ? (
                                    <Empty>{emptyLabel}</Empty>
                                ) : typeof field.value === 'string' ? (
                                    <TruncatingCell title={field.title ?? field.value}>
                                        {field.value}
                                    </TruncatingCell>
                                ) : (
                                    field.value
                                )}
                            </ValueText>
                            {copy && <CopyButton {...copy} />}
                        </Value>
                    </Field>
                )
            })}
        </Layout>
    )
}
