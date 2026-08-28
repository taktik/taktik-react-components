import React, { useCallback, useContext } from 'react'
import { renderHeaderCell, RenderHeaderCellProps } from 'react-data-grid'
import { ColumnDefinition, FilterType, RowDefinition } from './types'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { Input } from './Input'
import { FilterContext } from './FilterProvider'
import { Autocomplete } from './Autocomplete'

const Container = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const stopPropagation = (event: React.MouseEvent | React.KeyboardEvent) => event.stopPropagation()

type BaseProps<R extends RowDefinition = RowDefinition> = RenderHeaderCellProps<R> & {
    children?: React.ReactNode
}
const Base = <R extends RowDefinition = RowDefinition>({ children, ...props }: BaseProps<R>) => (
    <Container>
        {renderHeaderCell(props)}
        {children}
    </Container>
)

type FilterHeaderProps<R extends RowDefinition = RowDefinition> = RenderHeaderCellProps<R> & {
    col: ColumnDefinition<R>
}

/**
 * A real component on purpose, and it has to stay one.
 *
 * It re-reads the filter context on every change, which is what lets a filter typed into one column
 * keep the ones already set on the others. And react-data-grid calls `renderHeaderCell` as a plain
 * function from inside its own render body, so hooks written there would ride the header cell's
 * fiber rather than one of their own — legal only for as long as rdg keeps calling it exactly there.
 */
const FilterHeader = <R extends RowDefinition = RowDefinition>({
    col,
    ...props
}: FilterHeaderProps<R>) => {
    const { filters, setFilters } = useContext(FilterContext)
    const value = filters[col.key]
    const onChange = useCallback(
        (value: unknown) => {
            setFilters({ ...filters, [col.key]: value })
        },
        [col.key, filters, setFilters]
    )

    if (!col.filterEnabled) {
        return <Base<R> {...props} />
    }
    if (
        col.filterType === FilterType.AUTOCOMPLETE &&
        (value === undefined || typeof value === 'string')
    ) {
        return (
            <Base<R> {...props}>
                <Autocomplete
                    options={col.filterOptions ?? []}
                    onChange={onChange}
                    value={value}
                    renderInput={col.renderFilterInput}
                />
            </Base>
        )
    }
    return (
        <Base<R> {...props}>
            {col.renderFilterInput ? (
                col.renderFilterInput({
                    onChange: (e) => onChange(e.target.value),
                    value: value ?? '',
                    autoComplete: 'off',
                    onClick: stopPropagation,
                    onKeyDown: stopPropagation
                })
            ) : (
                <Input
                    autoComplete={'off'}
                    onClick={stopPropagation}
                    onKeyDown={stopPropagation}
                    value={value ?? ''}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </Base>
    )
}

export const getHeaderFilter =
    <R extends RowDefinition = RowDefinition>(col: ColumnDefinition<R>) =>
    (props: RenderHeaderCellProps<R>) => <FilterHeader<R> col={col} {...props} />
