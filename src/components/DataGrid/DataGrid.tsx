import React, { useCallback } from 'react'
import Grid, { Column, DataGridProps as DataGridPropsFromLib } from 'react-data-grid'
import { DataGridTheme, defaultTheme } from './dataGridTheme'
import { Container } from './Container'

export type DataGridProps<Row extends RowDefinition> = DataGridPropsFromLib<Row> & {
    theme?: DataGridTheme
}
export type ColumnDefinition<Row extends RowDefinition = RowDefinition> = Column<Row>

export type RowDefinition<Row = {}> = Row & {
    id: string
}

export const DataGrid = React.memo(({ theme, ...rest }: DataGridProps<RowDefinition>) => {
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
        </Container>
    )
})
