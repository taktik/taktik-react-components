import React, { useCallback, useContext, useMemo } from 'react'
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

export const getHeaderFilter =
    <R extends RowDefinition = RowDefinition>(col: ColumnDefinition<R>) =>
    (props: RenderHeaderCellProps<R>) => {
        const { filters, setFilters } = useContext(FilterContext)
        const value = useMemo(() => filters[col.key], [filters, col])
        const onChange = useCallback(
            (value: unknown) => {
                setFilters({ ...filters, [col.key]: value })
            },
            [col]
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
                    />
                </Base>
            )
        }
        return (
            <Base<R> {...props}>
                <Input
                    autoComplete={'off'}
                    onClick={stopPropagation}
                    onKeyDown={stopPropagation}
                    value={value ?? ''}
                    onChange={(e) => onChange(e.target.value)}
                />
            </Base>
        )
    }
