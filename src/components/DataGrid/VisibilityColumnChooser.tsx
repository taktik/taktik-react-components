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

/**
 * The eye button in the actions column header — the TRIGGER only.
 *
 * Toggling a column changes the column set, which remounts react-data-grid, and this component is
 * rendered inside a header cell: it dies with every toggle. That is why it holds nothing — it
 * captures where it sits and opens the menu through the context, and `VisibilityMenu` (rendered by
 * `DataGrid` OUTSIDE the remounted grid, anchored to that captured point) is what stays up while
 * several columns are toggled in one visit.
 */
export const VisibilityColumnChooser = ({ IconComponent }: Props) => {
    const { setChooserAnchor } = useContext(VisibilityContext)
    const containerRef = React.useRef<HTMLDivElement>(null)

    const handleClick = useCallback(() => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            setChooserAnchor({ top: rect.bottom, left: rect.right })
        }
    }, [setChooserAnchor])

    return <div ref={containerRef}>{<IconComponent onClick={handleClick} />}</div>
}

/**
 * The column-visibility menu itself, rendered once per grid by `DataGrid` — never inside
 * react-data-grid, whose remount-per-column-set would close it (or, re-anchored per mount, visibly
 * close and reopen it) on every toggle. Anchored to the point the trigger captured, so it holds
 * still while the grid underneath it is rebuilt.
 */
export const VisibilityMenu = () => {
    const { columns, hiddenColumn, setHiddenColumn, chooserAnchor, setChooserAnchor } =
        useContext(VisibilityContext)

    const handleClose = useCallback(() => {
        setChooserAnchor(null)
    }, [setChooserAnchor])

    const toggle = useCallback(
        (columnName: string) => () => {
            const index = hiddenColumn.indexOf(columnName)
            setHiddenColumn(
                index === -1
                    ? [...hiddenColumn, columnName]
                    : hiddenColumn.filter((name) => name !== columnName)
            )
        },
        [hiddenColumn, setHiddenColumn]
    )

    return (
        <Menu
            id='column-visibility-menu'
            anchorReference='anchorPosition'
            anchorPosition={chooserAnchor ?? undefined}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={chooserAnchor !== null}
            onClose={handleClose}>
            {columns.map((column) => (
                <Container key={column.key} onClick={toggle(column.key)}>
                    <DataGridCheckbox checked={!hiddenColumn.includes(column.key)} />
                    {column.name}
                </Container>
            ))}
        </Menu>
    )
}
