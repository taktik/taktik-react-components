import {
    ComponentType,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    ReactNode,
    RefCallback
} from 'react'
import type { StatusTone } from '../status/statusTone'

/**
 * The consumer's own controls, as the library's tables render them.
 *
 * A table is made of buttons, tooltips, menus and fields, and those belong to the CONSUMER's design
 * system rather than to a table library: a grid whose kebab looks unlike every other kebab on the
 * page is exactly the drift a shared table is supposed to prevent. So each one arrives as a
 * component, the library renders it, and the prop contract below is the whole of what a table asks
 * of it — derived from what the tables actually pass, so an adapter is a rename at worst.
 *
 * Every slot has a working default built on plain `@mui/material`, so a table renders with nothing
 * injected; a consumer overrides the ones it has a house answer for.
 */

/**
 * How loud a text control is. Absent is the QUIET form — no fill, no outline — which is what the
 * filter bar's own "Add filter" wears.
 */
export type TableButtonTone = 'primary' | 'secondary' | 'error'

/** An icon-only control's own register: the quiet square, the outlined one, the destructive one. */
export type TableIconButtonTone = 'default' | 'secondary' | 'error'

export interface TableButtonProps {
    tone?: TableButtonTone
    /** The control leads with an icon — the consumer tightens its left padding for one. */
    iconLeft?: boolean
    disabled?: boolean
    /** Also the accessible name where the label alone does not say why the control is off. */
    tooltipText?: string
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    children?: ReactNode
    className?: string
}

export interface TableIconButtonProps {
    tone?: TableIconButtonTone
    /** An icon carries no words, so this is what NAMES the button as well as what it says. */
    tooltipText?: string
    /** The button says an action it started is still running. */
    loading?: boolean
    disabled?: boolean
    /**
     * The tab index a grid decided. A grid is ONE tab stop, so only the focused row's controls join
     * the tab sequence — a control in a cell that ignores this is one tab stop per row.
     */
    tabIndex?: number
    'aria-label'?: string
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    children?: ReactNode
    className?: string
}

export interface TableTooltipProps {
    title: ReactNode
    /** ONE element: a tooltip needs something to hang on and something to listen to. */
    children: ReactElement
}

/**
 * One entry of a menu the library builds — a row's actions, a table's import and export.
 *
 * `name` is a KEY the consumer's `translate` resolves and `label` is already translated, which is
 * what lets a consumer declare its actions in its own dictionary while the library appends entries
 * of its own (a row's delete) from strings it was handed.
 */
export interface TableMenuItem {
    /** Stable across renders — what the entry IS, not where it sits. */
    id: string
    /** A translation key, resolved by the consumer's `translate`. */
    name?: string
    /** Already translated. Wins over `name`. */
    label?: string
    /** The mark before the label. A NODE, so a consumer may hand over a wrapped or decorated icon. */
    icon?: ReactNode
    /**
     * What the entry does. The event is OPTIONAL, because the same entry is also shown OUTSIDE a
     * menu — a row's lone action, a panel mirroring the entries beside the record — and there is no
     * pointer event to hand it there. An entry that reads the event must cope with it being absent.
     */
    onClick?: (event?: MouseEvent) => void
    /** Draws a rule before this entry — the destructive one, in practice. */
    divider?: boolean
    danger?: boolean
    disabled?: boolean
    /**
     * WHY this entry is off, already translated. Shown as a second line under the label and
     * repeated as the entry's tooltip; ignored unless `disabled`, so a consumer may compute one
     * unconditionally.
     */
    disabledReason?: string
    /**
     * A LIST behind this entry rather than an act: a menu opens it beside the entry, and the entry
     * runs no `onClick` of its own. One level deep in the library's own menus; a consumer's menu may
     * nest as far as its vocabulary goes.
     *
     * A FUNCTION is read when the list opens, so a surface holding one menu per row pays a closure
     * per row rather than every label and gate the nested list could show.
     */
    children?: TableMenuItem[] | (() => TableMenuItem[])
}

/** The entries behind a parent entry, built now where the consumer deferred them. */
export const menuChildren = (item: TableMenuItem): TableMenuItem[] =>
    typeof item.children === 'function' ? item.children() : (item.children ?? [])

/** Whether this entry opens a LIST instead of acting. A deferred list counts without being built. */
export const hasMenuChildren = (item: TableMenuItem): boolean =>
    typeof item.children === 'function' || !!item.children?.length

export interface TableContextMenuProps {
    menuItems: TableMenuItem[]
    /** Names the trigger for a screen reader — "Actions for Reception agent". */
    label?: string
    /** The mark on the trigger; the consumer's own kebab where none is given. */
    menuIcon?: ReactElement
    tabIndex?: number
    /** An action started from this menu is still running, so its trigger says so. */
    loading?: boolean
    /**
     * Reports the menu opening and closing. The table paints the row whose menu is showing, and the
     * kebab's menu is the consumer's — this is how the table learns about it.
     *
     * ⚠ `false` is owed on EVERY close, unmounting included. A grid virtualises its rows, so the row
     * holding an open menu can be scrolled away; without the report the table goes on painting a row
     * whose menu is gone.
     */
    onOpenChange?: (open: boolean) => void
}

export interface TableMenuSurfaceProps {
    menuItems: TableMenuItem[]
    open: boolean
    onClose: (event: MouseEvent) => void
    /** Where the menu hangs: at the point the pointer was at, which is what a right-click wants. */
    anchorPosition?: { top: number; left: number }
}

/**
 * One row of a menu or of a suggestion list. The library renders it with whatever `role` the
 * surface it sits in needs, so the slot has to pass its aria attributes through.
 */
export interface TableMenuItemProps {
    id?: string
    role?: string
    'aria-selected'?: boolean
    'aria-checked'?: boolean
    /** The keystrokes this row answers, where it answers any — "Alt+ArrowUp Alt+ArrowDown". */
    'aria-keyshortcuts'?: string
    selected?: boolean
    disabled?: boolean
    onClick?: (event: MouseEvent<HTMLElement>) => void
    onMouseMove?: (event: MouseEvent<HTMLElement>) => void
    onMouseDown?: (event: MouseEvent<HTMLElement>) => void
    /** A row that is ARRANGED as well as picked reads its own modifier keys — see `VisibilityMenu`. */
    onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void
    /**
     * Handed the row's own element. A menu whose rows can be dragged into another order measures
     * them by their boxes, so it needs the element each row actually rendered as.
     *
     * A callback rather than a `RefObject` on purpose: it stays assignable however narrowly the
     * consumer's own control types its ref.
     */
    ref?: RefCallback<HTMLElement>
    children?: ReactNode
    className?: string
}

export interface TableTextInputProps {
    label?: string
    type?: string
    value?: string | number
    onChange?: (event: { target: { value: string } }) => void
    placeholder?: string
    className?: string
}

export interface TableDatePickerProps {
    label?: string
    /** An ISO string, since that is what a range chip carries. */
    value?: string
    /** `undefined` when the reader emptied the field. */
    onChange?: (value: Date | undefined) => void
    minDate?: Date
    maxDate?: Date
}

export interface TableCalloutProps {
    /** The same four tones every status reads as. */
    tone: StatusTone
    /** A mark leading the text. */
    icon?: ReactNode
    /** Announce it when it appears or changes (`role="status"`). */
    live?: boolean
    /** What this banner IS, for anything that has to tell two of them apart. */
    ariaLabel?: string
    children: ReactNode
}

export interface TableCheckboxProps {
    checked?: boolean
    indeterminate?: boolean
    /** `shiftKey` rides along, because that is how a grid selects a RANGE of rows. */
    onChange?: (checked: boolean, shiftKey: boolean) => void
    'aria-label'?: string
    tabIndex?: number
}

export interface TableCopyButtonProps {
    /** What lands on the clipboard. */
    value: string
    /** Tooltip and accessible name — an icon carries no words. */
    tooltipText: string
    /**
     * Runs the copy. The consumer passes whatever reports success and failure: a table cannot reach
     * a toast layer itself.
     */
    onCopy: (value: string) => void
    disabled?: boolean
    /** The dense form, for a row of a narrow panel rather than a control in a toolbar. */
    dense?: boolean
}

export interface TableSuggestionPopperProps {
    open: boolean
    /** The field the list hangs under. */
    anchorEl: HTMLElement | null
    children: ReactNode
}

export interface TableSuggestionListBoxProps {
    /** The list's own DOM id — what the field's `aria-controls` names. */
    id: string
    children: ReactNode
}

export interface TableSlots {
    Button: ComponentType<TableButtonProps>
    IconButton: ComponentType<TableIconButtonProps>
    Tooltip: ComponentType<TableTooltipProps>
    /** A trigger and the menu behind it — a row's kebab, a table's import and export. */
    ContextMenu: ComponentType<TableContextMenuProps>
    /** The same menu with no trigger, anchored at a point: what a right-click opens. */
    MenuSurface: ComponentType<TableMenuSurfaceProps>
    MenuItem: ComponentType<TableMenuItemProps>
    TextInput: ComponentType<TableTextInputProps>
    DatePicker: ComponentType<TableDatePickerProps>
    Callout: ComponentType<TableCalloutProps>
    /** A grid's selection box, at the geometry a dense selection cell wants. */
    Checkbox: ComponentType<TableCheckboxProps>
    CopyButton: ComponentType<TableCopyButtonProps>
    SuggestionPopper: ComponentType<TableSuggestionPopperProps>
    SuggestionListBox: ComponentType<TableSuggestionListBoxProps>
}
