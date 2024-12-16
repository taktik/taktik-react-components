import React, { useCallback, useContext } from 'react'
import { VisibilityContext } from './VisibilityProvider'
import { IconButtonProps } from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { DataGridCheckbox } from './DataGridCheckbox'
import styled from '@emotion/styled'

type Props = {
    IconComponent: (props: IconButtonProps) => React.ReactNode
}
const Container = styled(MenuItem)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
`
export const VisibilityColumnChooser = ({ IconComponent }: Props) => {
    const { columns, hiddenColumn, setHiddenColumn } = useContext(VisibilityContext)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = useCallback(() => {
        setAnchorEl(containerRef.current)
    }, [])

    const handleClose = useCallback(() => {
        setAnchorEl(null)
    }, [])

    const toggle = useCallback(
        (columnName: string) => () => {
            const index = hiddenColumn.indexOf(columnName)
            setHiddenColumn(
                index === -1
                    ? [...hiddenColumn, columnName]
                    : hiddenColumn.filter((name) => name !== columnName)
            )
        },
        [hiddenColumn]
    )

    return (
        <div ref={containerRef}>
            {<IconComponent onClick={handleClick} />}
            <Menu id='column-visibility-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
                {columns.map((column) => (
                    <Container key={column.key} onClick={toggle(column.key)}>
                        <DataGridCheckbox checked={!hiddenColumn.includes(column.key)} />
                        {column.name}
                    </Container>
                ))}
            </Menu>
        </div>
    )
}
