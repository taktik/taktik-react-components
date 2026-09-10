import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Popper from '@mui/material/Popper'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import { MouseEvent, useId, useState } from 'react'
import styled from 'styled-components'
import { useLabels, useTranslate } from '../labels'
import { statusToneColors } from '../components/Table/cells/statusTone'
import { fontSizeSmall, iconSizeSmall, radiusMedium, tableFont } from '../theme/tableStyles'
import type {
    TableButtonTone,
    TableCalloutProps,
    TableCheckboxProps,
    TableContextMenuProps,
    TableCopyButtonProps,
    TableDatePickerProps,
    TableMenuItem,
    TableMenuSurfaceProps,
    TableSlots,
    TableSuggestionPopperProps
} from './tableSlots'

/**
 * A table's controls with nothing injected: plain `@mui/material`, so the library renders and
 * behaves correctly on its own. A consumer with a design system of its own replaces the slots it
 * has a house answer for; these are the fallback, never the recommendation.
 */

const muiButtonColor = (tone: TableButtonTone | undefined) =>
    tone === 'error' ? 'error' : tone === 'secondary' ? 'secondary' : 'primary'

const DefaultButton: TableSlots['Button'] = ({
    tone,
    disabled,
    tooltipText,
    onClick,
    children,
    className
}) => {
    const button = (
        <Button
            size='small'
            variant={tone === undefined ? 'text' : tone === 'secondary' ? 'outlined' : 'contained'}
            color={muiButtonColor(tone)}
            disabled={disabled}
            onClick={onClick}
            className={className}>
            {children}
        </Button>
    )
    // The span is what lets a DISABLED control still answer a hover: MUI cannot listen on the
    // control itself once it is off.
    return tooltipText ? (
        <Tooltip title={tooltipText}>
            <span>{button}</span>
        </Tooltip>
    ) : (
        button
    )
}

const DefaultIconButton: TableSlots['IconButton'] = ({
    tone,
    tooltipText,
    disabled,
    tabIndex,
    'aria-label': ariaLabel,
    onClick,
    children,
    className
}) => {
    // An icon carries no text, so the tooltip is what names the button.
    const named = ariaLabel ?? tooltipText
    const button = (
        <IconButton
            size='small'
            color={tone === 'error' ? 'error' : 'default'}
            disabled={disabled}
            tabIndex={tabIndex}
            aria-label={named}
            onClick={onClick}
            className={className}>
            {children}
        </IconButton>
    )
    return tooltipText ? (
        <Tooltip title={tooltipText}>
            <span aria-label={undefined}>{button}</span>
        </Tooltip>
    ) : (
        button
    )
}

const DefaultTooltip: TableSlots['Tooltip'] = ({ title, children }) => (
    <Tooltip title={title}>{children}</Tooltip>
)

const MenuEntries = ({
    menuItems,
    onClose
}: {
    menuItems: TableMenuItem[]
    onClose: (event: MouseEvent) => void
}) => {
    const translate = useTranslate()
    return (
        <>
            {menuItems.map((item) => (
                <MenuItem
                    key={item.id}
                    divider={item.divider}
                    disabled={item.disabled}
                    onClick={(event) => {
                        item.onClick?.(event)
                        onClose(event)
                    }}>
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText
                        primary={item.label ?? (item.name ? translate(item.name) : '')}
                        secondary={item.disabled ? item.disabledReason : undefined}
                    />
                </MenuItem>
            ))}
        </>
    )
}

const DefaultMenuSurface = ({
    menuItems,
    open,
    onClose,
    anchorPosition
}: TableMenuSurfaceProps) => (
    <Menu
        open={open}
        onClose={onClose}
        anchorReference={anchorPosition ? 'anchorPosition' : 'anchorEl'}
        anchorPosition={anchorPosition}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
        <MenuEntries menuItems={menuItems} onClose={onClose} />
    </Menu>
)

const DefaultContextMenu = ({
    menuItems,
    label,
    menuIcon,
    tabIndex,
    loading
}: TableContextMenuProps) => {
    const labels = useLabels()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const menuId = useId()
    return (
        <>
            <IconButton
                size='small'
                aria-label={label ?? labels.moreActions}
                aria-controls={anchorEl ? menuId : undefined}
                aria-haspopup
                aria-expanded={anchorEl ? true : undefined}
                disabled={loading}
                tabIndex={tabIndex}
                onClick={(event) => {
                    event.stopPropagation()
                    event.preventDefault()
                    setAnchorEl(event.currentTarget)
                }}>
                {menuIcon ?? <MoreVertRoundedIcon />}
            </IconButton>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <MenuEntries menuItems={menuItems} onClose={() => setAnchorEl(null)} />
            </Menu>
        </>
    )
}

const DefaultMenuItem: TableSlots['MenuItem'] = (props) => <MenuItem {...props} />

const DefaultTextInput: TableSlots['TextInput'] = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    className
}) => (
    <TextField
        size='small'
        label={label}
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={(event) => onChange?.({ target: { value: event.target.value } })}
    />
)

/**
 * A native date field rather than a calendar widget: `@mui/x-date-pickers` is not a dependency of
 * this library, and a consumer with a house picker injects it.
 */
const DefaultDatePicker = ({ label, value, onChange, minDate, maxDate }: TableDatePickerProps) => {
    const labels = useLabels()
    const asDay = (iso?: string) => (iso ? iso.slice(0, 10) : '')
    return (
        <TextField
            size='small'
            type='date'
            label={label}
            value={asDay(value)}
            slotProps={{
                htmlInput: {
                    min: minDate ? minDate.toISOString().slice(0, 10) : undefined,
                    max: maxDate ? maxDate.toISOString().slice(0, 10) : undefined,
                    'aria-label': label ?? labels.chooseDate
                }
            }}
            onChange={(event) =>
                onChange?.(event.target.value ? new Date(event.target.value) : undefined)
            }
        />
    )
}

const CalloutBox = styled.div<{ $tone: TableCalloutProps['tone'] }>`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 14px;
    ${radiusMedium};
    ${tableFont};
    ${fontSizeSmall};
    background: ${({ $tone, theme }) => statusToneColors($tone, theme).background};
    color: ${({ $tone, theme }) => statusToneColors($tone, theme).text};

    > svg {
        ${iconSizeSmall};
        flex: none;
        color: ${({ $tone, theme }) => statusToneColors($tone, theme).mark};
    }
`

const DefaultCallout = ({ tone, icon, live, ariaLabel, children }: TableCalloutProps) => (
    <CalloutBox $tone={tone} role={live ? 'status' : undefined} aria-label={ariaLabel}>
        {icon}
        {children}
    </CalloutBox>
)

const GridCheckbox = styled(Checkbox)`
    width: 20px;
    height: 20px;
    padding: 0;
`

const DefaultCheckbox = ({
    checked,
    indeterminate,
    onChange,
    'aria-label': ariaLabel,
    tabIndex
}: TableCheckboxProps) => (
    <GridCheckbox
        checked={checked}
        indeterminate={indeterminate}
        // the shift key rides along so a range select works
        onChange={(event, isChecked) =>
            onChange?.(isChecked, (event.nativeEvent as globalThis.MouseEvent).shiftKey)
        }
        slotProps={{ input: { 'aria-label': ariaLabel, tabIndex } }}
    />
)

const DefaultCopyButton = ({
    value,
    tooltipText,
    onCopy,
    disabled,
    dense
}: TableCopyButtonProps) => (
    <Tooltip title={tooltipText}>
        <span aria-label={undefined}>
            <IconButton
                size='small'
                aria-label={tooltipText}
                disabled={disabled}
                sx={dense ? { width: 24, height: 24 } : undefined}
                onClick={() => onCopy(value)}>
                <ContentCopyRoundedIcon fontSize='small' />
            </IconButton>
        </span>
    </Tooltip>
)

/**
 * One step above MUI's modal layer (`zIndex.modal` is 1300 in the stock theme): a `Popper` root
 * carries no z-index of its own, so inside a dialog a list that declared none paints underneath the
 * very dialog it was opened from.
 */
const SUGGESTION_Z_INDEX = 1301

const DefaultSuggestionPopper = ({ open, anchorEl, children }: TableSuggestionPopperProps) => (
    <Popper
        open={open}
        anchorEl={anchorEl}
        placement='bottom-start'
        sx={{ zIndex: SUGGESTION_Z_INDEX }}
        modifiers={[{ name: 'offset', options: { offset: [0, 4] } }]}>
        {children}
    </Popper>
)

/**
 * The rows' box. Focus stays in the FIELD while the reader arrows, so the list never takes it and
 * carries neither the key handler nor the `aria-activedescendant`.
 */
const DefaultSuggestionListBox: TableSlots['SuggestionListBox'] = ({ id, children }) => (
    <MenuList id={id} role='listbox' autoFocus={false} dense>
        {children}
    </MenuList>
)

export const defaultTableSlots: TableSlots = {
    Button: DefaultButton,
    IconButton: DefaultIconButton,
    Tooltip: DefaultTooltip,
    ContextMenu: DefaultContextMenu,
    MenuSurface: DefaultMenuSurface,
    MenuItem: DefaultMenuItem,
    TextInput: DefaultTextInput,
    DatePicker: DefaultDatePicker,
    Callout: DefaultCallout,
    Checkbox: DefaultCheckbox,
    CopyButton: DefaultCopyButton,
    SuggestionPopper: DefaultSuggestionPopper,
    SuggestionListBox: DefaultSuggestionListBox
}
