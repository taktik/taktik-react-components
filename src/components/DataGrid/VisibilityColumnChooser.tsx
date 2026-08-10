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
    const { columns, hiddenColumn, setHiddenColumn, chooserOpen, setChooserOpen } =
        useContext(VisibilityContext)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    /**
     * Re-anchor whenever the menu is open.
     *
     * Openness is held above the grid (see VisibilityProvider) so a toggle does not shut the menu —
     * but the toggle DOES remount react-data-grid, which replaces this component and the node the
     * menu was anchored to. On each mount the fresh node becomes the anchor, so the menu reopens in
     * exactly the same place instead of pointing at a detached element.
     */
    React.useEffect(() => {
        setAnchorEl(chooserOpen ? containerRef.current : null)
    }, [chooserOpen])

    const handleClick = useCallback(() => {
        setChooserOpen(true)
    }, [setChooserOpen])

    const handleClose = useCallback(() => {
        setChooserOpen(false)
    }, [setChooserOpen])

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
            <Menu
                id='column-visibility-menu'
                anchorEl={anchorEl}
                open={chooserOpen && Boolean(anchorEl)}
                onClose={handleClose}>
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
