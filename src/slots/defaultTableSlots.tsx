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
import { type JSX, MouseEvent, useId, useState } from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import { useLabels, useTranslate } from '../labels'
import { asDate } from '../utils'
import { statusToneColors } from '../status/statusTone'
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

const muiButtonColor = (tone: TableButtonTone | undefined): 'error' | 'secondary' | 'primary' =>
    tone === 'error' ? 'error' : tone === 'secondary' ? 'secondary' : 'primary'

const DefaultButton: TableSlots['Button'] = ({
    tone,
    iconLeft,
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
            // The icon arrives as a CHILD rather than through MUI's `startIcon`, which is what
            // would otherwise carry the tightened left padding and the gap before the words.
            sx={iconLeft ? { pl: 1, gap: 0.5 } : undefined}
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
    loading,
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
            loading={loading}
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
}): JSX.Element => {
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
}: TableMenuSurfaceProps): JSX.Element => (
    <Menu
        open={open}
        onClose={onClose}
        // No point given means nothing to hang on: `'none'` leaves the surface where its own box
        // lands, where `'anchorEl'` with no element would put it in the window's top-left corner.
        anchorReference={anchorPosition ? 'anchorPosition' : 'none'}
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
    loading,
    onOpenChange
}: TableContextMenuProps): JSX.Element => {
    const labels = useLabels()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const menuId = useId()
    const close = (): void => {
        setAnchorEl(null)
        onOpenChange?.(false)
    }
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
                    onOpenChange?.(true)
                }}>
                {menuIcon ?? <MoreVertRoundedIcon />}
            </IconButton>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={close}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <MenuEntries menuItems={menuItems} onClose={close} />
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
 * The day a native date field speaks, which is the LOCAL calendar day — the one the reader sees on
 * the row and picks in the field. `toISOString` answers the UTC day instead, so east of Greenwich a
 * bound of local midnight would name the day before and the field would offer a day the caller
 * excluded.
 */
const asLocalDay = (value?: string | Date): string | undefined => {
    const date = value === undefined ? undefined : asDate(value)
    return date && format(date, 'yyyy-MM-dd')
}

/**
 * A native date field rather than a calendar widget: `@mui/x-date-pickers` is not a dependency of
 * this library, and a consumer with a house picker injects it.
 */
const DefaultDatePicker = ({
    label,
    value,
    onChange,
    minDate,
    maxDate
}: TableDatePickerProps): JSX.Element => {
    const labels = useLabels()
    return (
        <TextField
            size='small'
            type='date'
            label={label}
            value={asLocalDay(value) ?? ''}
            slotProps={{
                htmlInput: {
                    min: asLocalDay(minDate),
                    max: asLocalDay(maxDate),
                    'aria-label': label ?? labels.chooseDate
                }
            }}
            // A day read back as local midnight, so the instant that leaves is the one the bound
            // arrived as: `new Date('2026-09-10')` would be UTC midnight instead.
            onChange={(event) => onChange?.(asDate(event.target.value))}
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

const DefaultCallout = ({
    tone,
    icon,
    live,
    ariaLabel,
    children
}: TableCalloutProps): JSX.Element => (
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
}: TableCheckboxProps): JSX.Element => (
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
}: TableCopyButtonProps): JSX.Element => (
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

const DefaultSuggestionPopper = ({
    open,
    anchorEl,
    children
}: TableSuggestionPopperProps): JSX.Element => (
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
