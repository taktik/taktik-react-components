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
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import {
    type Dispatch,
    type FocusEvent,
    type JSX,
    KeyboardEvent,
    MouseEvent,
    type SetStateAction,
    useEffect,
    useEffectEvent,
    useId,
    useRef,
    useState
} from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import { useLabels, useTranslate } from '../labels'
import { asDate } from '../utils'
import { statusToneColors } from '../status/statusTone'
import { fontSizeSmall, iconSizeSmall, radiusMedium, tableFont } from '../theme/tableStyles'
import { hasMenuChildren, menuChildren } from './tableSlots'
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

/**
 * How long the pointer may be off both the owning entry and its list before the list closes.
 *
 * The diagonal from the entry to its list crosses neither of them, so a list that shuts on the way
 * is a list nobody can reach.
 */
const SUBMENU_LEAVE_MS = 200

/**
 * The entry whose list is open, which the entries of one menu share so that at most one list shows.
 * A list a KEY opened takes the focus; one the pointer opened leaves it on the owning entry.
 */
interface OpenList {
    id: string
    element: HTMLElement
    byKeyboard: boolean
}

/** One entry of a menu: an act that runs and closes, or the owner of a list beside it. */
const MenuEntry = ({
    item,
    openList,
    setOpenList,
    onClose
}: {
    item: TableMenuItem
    openList?: OpenList
    setOpenList: Dispatch<SetStateAction<OpenList | undefined>>
    onClose: (event: MouseEvent) => void
}): JSX.Element => {
    const translate = useTranslate()
    const owner = hasMenuChildren(item)
    const mine = openList?.id === item.id ? openList : undefined
    const anchorEl = mine?.element ?? null
    const byKeyboard = mine?.byKeyboard ?? false
    /**
     * The entry's list, resolved the first time it is asked for: held while the list closes so it
     * does not empty on the way out, and not asked for twice — a pointer crossing the entry fires a
     * move per pixel, and building the list is the expensive half of a deferred one.
     */
    const [children, setChildren] = useState<TableMenuItem[]>()
    const submenuId = useId()
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

    const stay = (): void => clearTimeout(leaveTimer.current)
    /** Only this entry's own list goes: by the time the grace is up, a sibling's may be the open one. */
    const closeSubmenu = (): void => {
        stay()
        setOpenList((current) => (current?.id === item.id ? undefined : current))
    }
    const leave = (): void => {
        stay()
        leaveTimer.current = setTimeout(closeSubmenu, SUBMENU_LEAVE_MS)
    }
    /** Nothing is left running when the entry goes away. */
    useEffect(() => stay, [])

    const openSubmenu = (element: HTMLElement, fromKeyboard: boolean): void => {
        stay()
        // A pointer resting on a list that is already open asks for nothing
        if (anchorEl === element && byKeyboard === fromKeyboard) return
        const list = children ?? menuChildren(item)
        setChildren(list)
        // An entry whose list turns out to be empty opens nothing — a gated list that yields no
        // entry for this row would otherwise draw an empty paper
        if (!list.length) return
        setOpenList({ id: item.id, element, byKeyboard: fromKeyboard })
    }
    /** Back up the tree: the list goes, and the entry that owns it takes the focus again. */
    const back = (): void => {
        const owning = anchorEl
        closeSubmenu()
        owning?.focus()
    }
    /**
     * The focus left this entry for another element while its list was open. MUI's own list walks
     * the focus between entries on ArrowDown without the pointer moving, and an entry nobody is on
     * that still says `aria-expanded` is two entries' worth of state for one reader.
     *
     * Focus moving INTO the list is the way DOWN the tree and keeps it open, and focus lost to
     * nothing at all is nobody walking away — a click on the paper's own padding, which leaves the
     * reader on the list they opened.
     */
    const focusLeft = (event: FocusEvent<HTMLElement>): void => {
        const next = event.relatedTarget
        if (!anchorEl || !next || document.getElementById(submenuId)?.contains(next)) return
        closeSubmenu()
    }

    const label = item.label ?? (item.name ? translate(item.name) : '')
    return (
        <>
            <MenuItem
                divider={item.divider}
                disabled={item.disabled}
                aria-haspopup={owner ? 'menu' : undefined}
                aria-expanded={owner ? !!anchorEl : undefined}
                aria-controls={owner && anchorEl ? submenuId : undefined}
                onClick={(event) => {
                    if (owner) {
                        // the owner's click opens its list; it must not reach the menu's own close
                        event.stopPropagation()
                        openSubmenu(event.currentTarget, false)
                        return
                    }
                    item.onClick?.(event)
                    onClose(event)
                }}
                // ⚠ A MOVE, not an enter: a browser re-dispatches hover on whatever appears under a
                // stationary pointer, so a list closing over its own owner would hand that owner a
                // hover and reopen at once. A pointer that has not moved has asked for nothing.
                onMouseMove={
                    owner && !item.disabled
                        ? (event) => openSubmenu(event.currentTarget, false)
                        : undefined
                }
                onMouseLeave={owner ? leave : undefined}
                onBlur={owner ? focusLeft : undefined}
                onKeyDown={
                    owner && !item.disabled
                        ? (event) => {
                              if (event.key === 'ArrowRight') {
                                  event.preventDefault()
                                  event.stopPropagation()
                                  openSubmenu(event.currentTarget, true)
                              }
                              // A list the POINTER opened left the focus here, so the way back up
                              // the tree is answered here too.
                              if (event.key === 'ArrowLeft' && anchorEl) {
                                  event.preventDefault()
                                  event.stopPropagation()
                                  back()
                              }
                          }
                        : undefined
                }>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText
                    primary={label}
                    secondary={item.disabled ? item.disabledReason : undefined}
                />
                {owner && <ChevronRightRoundedIcon fontSize='small' aria-hidden />}
            </MenuItem>
            {owner && (
                <Menu
                    id={submenuId}
                    anchorEl={anchorEl}
                    open={!!anchorEl}
                    // Escape closes the LIST alone and hands focus back to its owner; a picked entry
                    // closes the whole menu.
                    onClose={(_event, reason) =>
                        reason === 'escapeKeyDown' ? back() : closeSubmenu()
                    }
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    // It draws no backdrop, or the menu under it would stop answering the pointer.
                    hideBackdrop
                    // A list the POINTER opened must not take the focus the owning entry holds, nor
                    // give it back to whatever the parent menu had focused when it closes.
                    autoFocus={byKeyboard}
                    // ⚠ MUI reads `autoFocus` as `disableAutoFocus={autoFocus}` on the popover
                    // beneath it, so `autoFocus={false}` ARMS the focus trap and hands it the paper.
                    // The flag is named here so only the list's own `autoFocus` may move focus in.
                    disableAutoFocus
                    disableAutoFocusItem={!byKeyboard}
                    // ⚠ No second focus trap: the menu underneath is already modal, and a trap here
                    // would pull the focus back out of the owning entry that ArrowLeft and Escape
                    // hand it to — into the paper being closed, before the close has committed. The
                    // trade is that focus dropped on the paper's own padding lands on the page body,
                    // where nothing recovers it until the close hands it back to the owner.
                    disableEnforceFocus
                    disableRestoreFocus
                    slotProps={{
                        // ⚠ Without a backdrop the ROOT still covers the page and would swallow the
                        // pointer over the parent list: the root lets it through, the paper takes it
                        // back.
                        root: { sx: { pointerEvents: 'none' } },
                        paper: {
                            sx: { pointerEvents: 'auto' },
                            onMouseEnter: stay,
                            onMouseLeave: leave
                        },
                        list: {
                            'aria-label': label,
                            onKeyDown: (event: KeyboardEvent) => {
                                // the way back up the tree, from the keyboard
                                if (event.key === 'ArrowLeft') {
                                    event.stopPropagation()
                                    back()
                                }
                            }
                        }
                    }}>
                    <MenuEntries
                        menuItems={children ?? []}
                        onClose={(event) => {
                            closeSubmenu()
                            onClose(event)
                        }}
                    />
                </Menu>
            )}
        </>
    )
}

/**
 * The entries of one menu. Which of them has its list open is held here, so opening one closes its
 * sibling at once — a pointer dragged down the list past two owners would otherwise show two lists
 * for as long as the leave grace lasts.
 */
const MenuEntries = ({
    menuItems,
    onClose
}: {
    menuItems: TableMenuItem[]
    onClose: (event: MouseEvent) => void
}): JSX.Element => {
    const [openList, setOpenList] = useState<OpenList>()
    return (
        <>
            {menuItems.map((item) => (
                <MenuEntry
                    key={item.id}
                    item={item}
                    openList={openList}
                    setOpenList={setOpenList}
                    onClose={onClose}
                />
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

    /**
     * A menu that goes away while it is open still owes its report. A grid virtualises its rows, so
     * scrolling the open row out of the viewport unmounts this whole control without MUI ever
     * calling `onClose` — and the table would go on painting a row whose menu is gone.
     */
    const reportClosedOnUnmount = useEffectEvent((): void => {
        if (anchorEl) onOpenChange?.(false)
    })
    useEffect(() => () => reportClosedOnUnmount(), [])

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

/**
 * The tick's colour is the grid's own custom property, so a consumer theming one grid is followed
 * per grid; the host theme's accent is the fallback for a grid that sets none.
 */
const GridCheckbox = styled(Checkbox)`
    width: ${({ theme }) => theme.table.checkboxSize};
    height: ${({ theme }) => theme.table.checkboxSize};
    padding: 0;

    .Mui-checked {
        color: var(--rdg-checkbox-color, ${({ theme }) => theme.primaryMain});
    }
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
