import React, { useCallback, useContext, useMemo } from 'react'
import { renderHeaderCell, RenderHeaderCellProps } from 'react-data-grid'
import { ColumnDefinition, RowDefinition } from './types'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { Input } from './Input'
import { FilterContext } from './FilterProvider'

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
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setFilters({ ...filters, [col.key]: event.target.value })
            },
            [col]
        )

        if (!col.filterEnabled) {
            return <Base<R> {...props} />
        }
        return (
            <Base<R> {...props}>
                <Input
                    onClick={stopPropagation}
                    onKeyDown={stopPropagation}
                    value={value ?? ''}
                    onChange={onChange}
                />
            </Base>
        )
    }
