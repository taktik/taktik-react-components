import { MouseEvent, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CalculatedColumn, CellMouseArgs, CellMouseEvent } from 'react-data-grid'
import { useTableSlots } from '../../slots'
import {
    cueAnchor,
    hoveredLineAt,
    nextArm,
    staysOnLine,
    type ArmedLine,
    type ArmSignal
} from '../DataGrid/copy'
import type { DataGridRowGestures } from '../DataGrid/DataGrid'
import { clickBelongsToRow } from '../DataGrid/Expandable'
import type { ColumnDefinition, RowDefinition } from '../DataGrid/types'
import { CopiedBubble } from './CopiedBubble'
import { CopyCue } from './CopyCue'
import { ACTIONS_COLUMN_KEY, rowMenuItems } from './rowActions'
import type { RowMenuReport } from './rowMenuContext'
import { useClickToCopyLabel, useCopiedLabel } from './useGridPresentation'

/** The kebab does not fill its cell — a click in the padding beside it is that column's, not the row's. */
const EXCLUDED_COLUMNS = [ACTIONS_COLUMN_KEY]

/**
 * How long the pointer must rest on a line before it is armed to be copied. Long enough that scanning
 * a table never arms anything, short enough that stopping ON a value feels answered — the tooltip
 * delay every desktop has taught.
 */
export const COPY_DWELL_MS = 500

/**
 * Whether the pointer's target sits inside a live text selection. `containsNode` with
 * `allowPartialContainment`: a selection usually starts or ends mid-node, and a right-click lands
 * on the element carrying the text, not on the text node itself.
 */
export const selectionUnderPointer = (target: EventTarget | null): boolean => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed || !(target instanceof Node)) {
        return false
    }
    return selection.containsNode(target, true)
}

/**
 * The y below which a hint may sit: the bottom of the grid's own header row. A hint for a line in the
 * FIRST row would otherwise be drawn over the column names.
 */
const headerFloor = (element: Element): number => {
    const grid = element.closest('[role="grid"]')
    const header = grid?.querySelector('[role="columnheader"]')
    if (header) {
        return header.getBoundingClientRect().bottom
    }
    return grid ? grid.getBoundingClientRect().top : 0
}

/** Which column a hovered element sits in — the gesture rule is keyed on the column. */
const columnOf = <R extends RowDefinition>(
    target: EventTarget | null,
    columns: readonly CalculatedColumn<R, unknown>[]
): CalculatedColumn<R, unknown> | undefined => {
    if (!(target instanceof Element)) {
        return undefined
    }
    const index = target.closest('[role="gridcell"]')?.getAttribute('aria-colindex')
    return index === null || index === undefined
        ? undefined
        : columns.find((column) => column.idx === Number(index) - 1)
}

export interface RowGesturesOptions<R extends RowDefinition> {
    /** The table's own columns — where a right-click finds the row's actions. */
    columns: ColumnDefinition<R>[]
    /**
     * What a click does on this table. On a selectable table that is the checkbox's own toggle
     * (`CrudTable` defaults it); a table that EXPANDS its rows passes nothing — expanding is what
     * the grid does with a click by itself.
     */
    onRowPrimaryAction?: (row: R) => void
}

export interface RowGestures<R extends RowDefinition> {
    /** Spread onto the `DataGrid`. */
    gridProps: {
        rowGestures: DataGridRowGestures<R>
        onCellContextMenu: (args: CellMouseArgs<R>, event: CellMouseEvent) => void
        onCellClick: (args: CellMouseArgs<R>, event: CellMouseEvent) => void
    }
    /**
     * What a ROW answers to the pointer moving over it — the row renderer wires these, since a cell
     * hover is not something the grid reports.
     */
    rowHover: {
        onMouseOver: (
            row: R,
            columns: readonly CalculatedColumn<R, unknown>[],
            event: MouseEvent<HTMLElement>
        ) => void
        onMouseMove: (event: MouseEvent<HTMLElement>) => void
        onMouseLeave: () => void
        /** A press that became a drag was never a click, so the armed promise is off. */
        onDragStart: () => void
    }
    /** The right-click menu; render it beside the grid. */
    menu: ReactNode
    /**
     * The row whose actions menu is showing — opened by a right-click here, or by its kebab, which
     * says so through `reportRowMenu`. Hand it to the grid's `menuRowId`, so the row keeps its hover
     * paint while the pointer is on the menu.
     */
    menuRowId?: string
    /** What a row's kebab calls as its menu opens and closes; provide it through `RowMenuReportContext`. */
    reportRowMenu: RowMenuReport
    /** The armed line's hint, and the confirmation a copy leaves; render both beside the grid. */
    copyCue: ReactNode
    copiedBubble: ReactNode
}

/**
 * The mouse gestures a grid row answers, wired once for every table:
 *
 * - **one click** runs the row's primary action, immediately — toggling the row's selection on a
 *   selectable table, expanding the row where the table expands, or opening the record where
 *   unselectable rows show one in a panel. A table with no primary action leaves a click meaning what
 *   it always meant, which is nothing but focusing the cell.
 * - **resting the pointer ON A VALUE'S GLYPHS** for {@link COPY_DWELL_MS} ARMS that line: a "Click to
 *   copy" hint floats above it and its own cursor becomes `copy`. The next click on that line copies
 *   it — in full, so a value its column cut short comes away whole — and does NOT run the row's
 *   action, because the reader was told twice that this click means something else. Resting on a
 *   cell's padding, on a short value's empty tail, on the blank half of a wide column or on a header
 *   arms NOTHING: it is the rendered text that answers, never the box around it. Leaving the line
 *   disarms at once, and a quick click that never waited is an ordinary click.
 * - **right click** opens that row's own kebab menu where the pointer is — the same items, read off
 *   the actions column the consumer already declared. A row with no actions keeps the browser's menu.
 *
 * WHERE a gesture counts is `clickBelongsToRow`, not a second rule written here, and the dwell asks
 * it too: the checkbox cell, the expander chevron, the kebab column and any control inside a cell
 * keep answering for themselves, so none of them ever arms, and a detail row is never a handle for
 * the row above it.
 */
export const useRowGestures = <R extends RowDefinition>({
    columns,
    onRowPrimaryAction
}: RowGesturesOptions<R>): RowGestures<R> => {
    const { MenuSurface } = useTableSlots()
    const [menuFor, setMenuFor] = useState<{ row: R; top: number; left: number } | undefined>(
        undefined
    )
    const closeMenu = useCallback((): void => setMenuFor(undefined), [])
    const [kebabRowId, setKebabRowId] = useState<string | undefined>(undefined)
    // A close reported for a row whose menu is no longer the open one changes nothing: opening a
    // second row's kebab closes the first's menu, and the first's close may land after the second's open
    const reportRowMenu = useCallback<RowMenuReport>(
        (rowId, open) =>
            setKebabRowId((current) => (open ? rowId : current === rowId ? undefined : current)),
        []
    )
    const copiedLabel = useCopiedLabel()
    const clickToCopyLabel = useClickToCopyLabel()
    // `nonce` distinguishes one copy from the next, which is what remounts the bubble
    const [copied, setCopied] = useState<{ nonce: number; top: number; left: number } | undefined>(
        undefined
    )
    const hideCopied = useCallback((): void => setCopied(undefined), [])

    const [armed, setArmed] = useState<ArmedLine | undefined>(undefined)
    /**
     * The armed line, readable without re-creating a handler. Every gesture handler below reads it
     * from here rather than closing over the state, which is what keeps them — and therefore the row
     * renderer the grid builds every row from — stable for the table's whole life. A handler that
     * changed identity on each arm would re-render every row, and a row re-rendered mid-press is a
     * drag the browser abandons.
     */
    const current = useRef<ArmedLine | undefined>(undefined)
    const dwell = useRef<number | undefined>(undefined)
    /** Where the pointer is NOW, and which row it is over — the dwell asks the DOM again from here. */
    const pointer = useRef<{ x: number; y: number } | undefined>(undefined)
    const over = useRef<{ row: R; columns: readonly CalculatedColumn<R, unknown>[] } | undefined>(
        undefined
    )

    const stopDwell = useCallback((): void => {
        if (dwell.current !== undefined) {
            window.clearTimeout(dwell.current)
            dwell.current = undefined
        }
    }, [])

    /** Every transition goes through here, so they cannot drift apart. */
    const signal = useCallback((what: ArmSignal): void => {
        const next = nextArm(current.current, what)
        if (next.armed === current.current) {
            return
        }
        current.current = next.armed
        setArmed(next.armed)
    }, [])

    const disarm = useCallback((): void => {
        stopDwell()
        pointer.current = undefined
        signal({ on: 'leave' })
    }, [signal, stopDwell])

    /**
     * What the pointer has come to rest on. The question is asked of the pointer's POSITION, not of any
     * element an earlier event handed us: by now the row may have been rebuilt under a pointer that
     * never moved, and a captured node would be measured detached. `hoveredLineAt` owns every
     * measurement, so nothing here touches the DOM's geometry.
     */
    const settle = useCallback((): void => {
        dwell.current = undefined
        const at = pointer.current
        const context = over.current
        if (!at || !context) {
            return
        }
        const found = hoveredLineAt(at.x, at.y)
        const column = found && columnOf(found.element, context.columns)
        const eligible =
            !!found &&
            typeof navigator.clipboard?.writeText === 'function' &&
            !!column &&
            clickBelongsToRow(context.row, column.key, found.element, EXCLUDED_COLUMNS) &&
            // Text the reader selected themselves is theirs, and the browser's own Copy is that gesture
            !selectionUnderPointer(found.element)
        signal({
            on: 'settle',
            // The hint is anchored to the LINE's own box, never to the pointer
            line:
                eligible && found
                    ? {
                          ...found,
                          ...cueAnchor(
                              found.element.getBoundingClientRect(),
                              headerFloor(found.element)
                          )
                      }
                    : undefined
        })
    }, [signal])

    /**
     * Any pointer movement restarts the wait: the gesture is "the pointer has been still on a value",
     * and stillness is the only thing a timer can measure. It is also what makes sliding from a cell's
     * blank half onto its text arm — the two are one element, so nothing is entered or left.
     */
    const track = useCallback(
        (event: MouseEvent<HTMLElement>): void => {
            pointer.current = { x: event.clientX, y: event.clientY }
            stopDwell()
            dwell.current = window.setTimeout(settle, COPY_DWELL_MS)
        },
        [settle, stopDwell]
    )

    const onMouseOver = useCallback(
        (
            row: R,
            columns: readonly CalculatedColumn<R, unknown>[],
            event: MouseEvent<HTMLElement>
        ): void => {
            over.current = { row, columns }
            track(event)
        },
        [track]
    )

    /**
     * The armed line says so with its own CURSOR as well as the hint — two cues for one changed
     * meaning, which is what makes the click that follows honest. Set on the consumer's own node
     * because the line is consumer-authored markup, and put back exactly as found when it disarms.
     */
    useEffect(() => {
        const element = armed?.element
        if (!(element instanceof HTMLElement)) {
            return
        }
        const previous = element.style.cursor
        element.style.cursor = 'copy'
        return () => {
            element.style.cursor = previous
        }
    }, [armed])

    /**
     * Scrolling moves the rows out from under a pointer that has not moved, so an armed line would be
     * promising something about whatever slid beneath it. Mounted only while one is armed.
     */
    useEffect(() => {
        if (!armed) {
            return
        }
        window.addEventListener('scroll', disarm, true)
        return () => window.removeEventListener('scroll', disarm, true)
    }, [armed, disarm])

    /** Nothing is left running when the table goes away. */
    useEffect(() => stopDwell, [stopDwell])

    /**
     * The armed click. It is the only click this layer claims, and it claims it exactly once — the
     * cue promised one copy, so the line disarms and the next click on it selects as usual.
     */
    const onCellClick = useCallback(
        (_args: CellMouseArgs<R>, event: CellMouseEvent): void => {
            const line = current.current
            if (!line || !staysOnLine(line, event.target)) {
                return
            }
            // The press may have become a text-selection drag since the line armed — nothing disarms
            // on a move. That text is the reader's own and the browser's Copy is that gesture, so
            // the arm stands aside rather than writing the whole line out.
            if (selectionUnderPointer(event.target)) {
                return
            }
            const { text, top, left } = line
            // The cell still takes focus, so arrow-key walking continues from where the pointer was
            // — the grid activates it on the press that opened this click. Only the ROW's own
            // action is claimed.
            event.preventGridDefault()
            signal({ on: 'copy' })
            navigator.clipboard
                .writeText(text)
                // A refused clipboard says nothing: the row was not going to change either way
                .then(() =>
                    setCopied((previous) => ({ nonce: (previous?.nonce ?? 0) + 1, top, left }))
                )
                .catch(() => undefined)
        },
        [signal]
    )

    const onDragStart = useCallback((): void => {
        stopDwell()
        signal({ on: 'drag' })
    }, [signal, stopDwell])

    const onCellContextMenu = useCallback(
        (args: CellMouseArgs<R>, event: CellMouseEvent): void => {
            if (!rowMenuItems(columns, args.row).length) {
                return
            }
            if (!clickBelongsToRow(args.row, args.column.key, event.target, EXCLUDED_COLUMNS)) {
                return
            }
            // A right-click ON SELECTED TEXT is the user reaching for Copy — the browser's own
            // menu is the one that has it, so the row's menu stands aside
            if (selectionUnderPointer(event.target)) {
                return
            }
            event.preventDefault()
            setMenuFor({ row: args.row, top: event.clientY, left: event.clientX })
        },
        [columns]
    )

    // Stable while its handlers are: the grid hands these to every row it renders, and a fresh
    // object per render would re-render them all.
    const gridProps = useMemo(
        () => ({
            rowGestures: {
                onClick: onRowPrimaryAction,
                excludedColumns: EXCLUDED_COLUMNS
            },
            onCellContextMenu,
            onCellClick
        }),
        [onRowPrimaryAction, onCellContextMenu, onCellClick]
    )

    const rowHover = useMemo(
        () => ({ onMouseOver, onMouseMove: track, onMouseLeave: disarm, onDragStart }),
        [onMouseOver, track, disarm, onDragStart]
    )

    return {
        gridProps,
        rowHover,
        menuRowId: menuFor?.row.id ?? kebabRowId,
        reportRowMenu,
        menu: menuFor ? (
            <MenuSurface
                open
                onClose={closeMenu}
                anchorPosition={{ top: menuFor.top, left: menuFor.left }}
                // Rebuilt on render rather than stored with the position, so an item that disables
                // itself on the row's current state still reads it right.
                menuItems={rowMenuItems(columns, menuFor.row)}
            />
        ) : null,
        copyCue: armed ? (
            <CopyCue
                label={clickToCopyLabel}
                top={armed.top}
                left={armed.left}
                below={armed.below}
            />
        ) : null,
        // Keyed on the copy, so a second one restarts the countdown rather than inheriting the first's
        copiedBubble: copied ? (
            <CopiedBubble
                key={copied.nonce}
                label={copiedLabel}
                top={copied.top}
                left={copied.left}
                onDone={hideCopied}
            />
        ) : null
    }
}
