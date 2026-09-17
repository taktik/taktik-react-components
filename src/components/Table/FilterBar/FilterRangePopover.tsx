import Popover from '@mui/material/Popover'
import styled from 'styled-components'
import { useLabels } from '../../../labels'
import { useTableSlots } from '../../../slots'
import { fontSizeNormal } from '../../../theme/tableStyles'
import type { JSX } from 'react'
import type { RangeValue } from '../../../filterValue'
import type { FilterDefinition } from './FilterBar'

export type { RangeValue }

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    width: 240px;
`

const ClearButton = styled.button`
    align-self: flex-end;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.primaryMain};
    font: inherit;
    ${fontSizeNormal};
    cursor: pointer;
    padding: 0;
`

export interface FilterRangePopoverProps {
    anchorEl: HTMLElement | null
    def: FilterDefinition
    value: RangeValue
    onChange: (value: RangeValue) => void
    onClose: () => void
}

/**
 * The editor for a `range` filter chip: two date pickers (rangeType 'date') or two
 * number inputs (rangeType 'number'). Emits `{from,to}`; either bound may be left open.
 */
export const FilterRangePopover = ({
    anchorEl,
    def,
    value,
    onChange,
    onClose
}: FilterRangePopoverProps): JSX.Element => {
    const labels = useLabels()
    const { DatePicker, TextInput } = useTableSlots()
    const bounds =
        def.rangeType === 'date'
            ? { from: labels.from, to: labels.to }
            : { from: labels.min, to: labels.max }

    const setBound = (bound: 'from' | 'to', next: number | string | undefined): void =>
        onChange({ ...value, [bound]: next })

    const isEmpty = value.from === undefined && value.to === undefined

    return (
        <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            // Which filter's bounds these are — two fields called "From" and "To" say nothing on
            // their own to a reader who cannot see the chip they opened.
            slotProps={{ paper: { 'aria-label': def.label } }}>
            <Body>
                {def.rangeType === 'date' ? (
                    <>
                        <DatePicker
                            label={bounds.from}
                            value={value.from as string | undefined}
                            maxDate={value.to ? new Date(value.to) : undefined}
                            onChange={(date) => setBound('from', date?.toISOString())}
                        />
                        <DatePicker
                            label={bounds.to}
                            value={value.to as string | undefined}
                            minDate={value.from ? new Date(value.from) : undefined}
                            onChange={(date) => setBound('to', date?.toISOString())}
                        />
                    </>
                ) : (
                    <>
                        <TextInput
                            type='number'
                            label={`${bounds.from}${def.unit ? ` (${def.unit})` : ''}`}
                            value={value.from ?? ''}
                            onChange={(event) => {
                                const raw = event.target.value
                                setBound('from', raw === '' ? undefined : Number(raw))
                            }}
                        />
                        <TextInput
                            type='number'
                            label={`${bounds.to}${def.unit ? ` (${def.unit})` : ''}`}
                            value={value.to ?? ''}
                            onChange={(event) => {
                                const raw = event.target.value
                                setBound('to', raw === '' ? undefined : Number(raw))
                            }}
                        />
                    </>
                )}
                {/* `type` is stated: a bare button submits, and a filter bar can stand in a form. */}
                {!isEmpty && (
                    <ClearButton type='button' onClick={() => onChange({})}>
                        {labels.clear}
                    </ClearButton>
                )}
            </Body>
        </Popover>
    )
}
