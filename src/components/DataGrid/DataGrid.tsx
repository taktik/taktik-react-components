import React, { useCallback } from 'react'
import Grid, { Column, DataGridProps as DataGridPropsFromLib } from 'react-data-grid'
import { DataGridTheme, defaultTheme } from './dataGridTheme'
import { Container } from './Container'
import { Loader } from '../Loader'
import styled from '@emotion/styled'
import { taktikTheme } from '../theme'

export type DataGridProps<Row extends RowDefinition> = DataGridPropsFromLib<Row> & {
    theme?: DataGridTheme
    loading?: boolean
}
export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row>

export type RowDefinition<Row = {}> = Row & {
    id: string
}

const ContainerLoading = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > div:first-child {
        background-color: ${taktikTheme.primary500};
        opacity: 0.1;

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }
`
export const DataGrid = React.memo(({ theme, loading, ...rest }: DataGridProps<RowDefinition>) => {
    const computeRawClass = useCallback(
        (_: RowDefinition, index: number) => {
            if (index === 0) {
                return 'first-row'
            } else if (index === rest.rows.length - 1) {
                return 'last-row'
            }
            return ''
        },
        [rest.rows]
    )
    return (
        <Container>
            <Grid
                {...rest}
                rowClass={computeRawClass}
                rowHeight={50}
                style={{ ...defaultTheme, ...(theme ?? {}) } as React.CSSProperties}
            />
            {loading ? (
                <ContainerLoading>
                    <div></div>
                    <Loader color={'secondary'} />
                </ContainerLoading>
            ) : null}
        </Container>
    )
})
