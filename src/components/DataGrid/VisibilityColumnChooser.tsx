import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { VisibilityContext } from './VisibilityProvider'
import { IconButtonProps } from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
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

    /* the grab area owns the gesture: no scroll-vs-drag arbitration, no 300ms touch delay */
    touch-action: none;

    /*
     * The row being moved is LIFTED, not faded. The rows reflow live under the pointer, so THIS row
     * is the one travelling — fading it makes the thing the reader is moving the faintest item in
     * the list, which is the payload-drag idiom (the source stays put and a ghost flies) applied
     * where the source does not stay put. A neutral alpha rather than a palette colour because this
     * menu is portalled out of the grid, so the grid's own custom properties do not reach it; a mid
     * grey at low alpha lifts over a light paper and a dark one alike.
     */
    &[data-dragging='true'] {
        position: relative;
        z-index: 1;
        background-color: rgba(128, 128, 128, 0.16);
        box-shadow:
            rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
            rgba(0, 0, 0, 0.14) 0 6px 10px 0,
            rgba(0, 0, 0, 0.12) 0 1px 18px 0;
    }
`

/**
 * The grab area, at the row's trailing end so the checkbox keeps the place it has always had. It is
 * DISCREET, like every other seam in the house: it sits at a low opacity and the cursor is what says
 * it can be dragged, so the menu reads as the plain list it was until you reach for a row.
 */
const Grip = styled.span`
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 16px;
    color: currentColor;
    opacity: 0.35;
    cursor: grab;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.7;
    }

    /* pointer capture holds :active for the whole drag, wherever the pointer goes */
    &:active {
        cursor: grabbing;
        opacity: 1;
    }
`

/** Off screen, still read out: where a moved column landed. */
const LiveRegion = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`

const GripIcon = () => (
    <svg width='10' height='16' viewBox='0 0 10 16' aria-hidden='true' focusable='false'>
        {[3, 8, 13].map((cy) => (
            <g key={cy}>
                <circle cx='3' cy={cy} r='1.1' fill='currentColor' />
                <circle cx='7' cy={cy} r='1.1' fill='currentColor' />
            </g>
        ))}
    </svg>
)

/** The list with one key taken out of its place and put back at another. */
const withKeyMoved = (order: string[], from: number, to: number): string[] => {
    const next = [...order]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    return next
}

const sameOrder = (a: string[], b: string[]): boolean =>
    a.length === b.length && a.every((key, index) => key === b[index])

/**
 * Which row the pointer is over, by the rows' own boxes rather than by a row height — a column whose
 * name wraps is taller than its neighbours, and a gesture measured in average rows drifts away from
 * the pointer down a list of them. Above the first row and below the last both clamp to the end they
 * are past, so a drag that leaves the menu still lands somewhere.
 */
const rowUnderPointer = (
    clientY: number,
    order: string[],
    rows: Map<string, HTMLElement>
): number => {
    let last = -1
    for (let index = 0; index < order.length; index++) {
        const box = rows.get(order[index])?.getBoundingClientRect()
        if (!box) {
            continue
        }
        if (clientY < box.bottom) {
            return clientY < box.top && last === -1 ? 0 : index
        }
        last = index
    }
    return last
}

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
 *
 * Its rows are also where the table's columns are ARRANGED, when the consumer keeps an order
 * (`onColumnOrderChange`): top to bottom here is left to right in the table. The gesture STARTS on
 * the grip alone, so the checkbox beside it goes on toggling with a plain click, and it is DELIVERED
 * through window pointer listeners for the reason the effect below states — the rows the drag
 * reorders are the very nodes React moves, and a moved node drops its pointer capture.
 * Alt+ArrowUp/ArrowDown on a focused row is the same move without a pointer.
 *
 * ⚠ The order is the CONSUMER's, not the library's: it is reported, applied to the columns handed
 * back, and only then does the menu settle on it. `preview` is what covers that round trip — the
 * rows follow the pointer immediately and hold the arrangement until columns arrive saying the same
 * thing, which is also what keeps them still when nobody applies it.
 */
export const VisibilityMenu = () => {
    const {
        columns,
        hiddenColumn,
        setHiddenColumn,
        chooserAnchor,
        setChooserAnchor,
        resetHiddenColumns,
        resetLabel,
        reorderColumns,
        reorderAnnouncement
    } = useContext(VisibilityContext)

    const [preview, setPreview] = useState<string[] | null>(null)
    const [draggingKey, setDraggingKey] = useState<string | null>(null)
    const [announcement, setAnnouncement] = useState('')

    const columnKeys = useMemo(() => columns.map((column) => column.key), [columns])
    const order = preview ?? columnKeys
    const byKey = useMemo(() => new Map(columns.map((column) => [column.key, column])), [columns])
    const rows = useRef(new Map<string, HTMLElement>())
    /** The order the pointer is arranging RIGHT NOW — a drag moves faster than React commits. */
    const dragOrder = useRef<string[]>([])
    const dragging = useRef<{
        key: string
        moved: boolean
        pointerId: number
        grip: HTMLElement
    } | null>(null)
    /** Disarms the terminal-click suppressor an earlier drag left armed — see endDrag. */
    const disarmSuppressor = useRef<(() => void) | null>(null)

    // The columns caught up with what was reported: the preview has nothing left to say.
    useEffect(() => {
        setPreview((current) => (current && sameOrder(current, columnKeys) ? null : current))
    }, [columnKeys])

    const handleClose = useCallback(() => {
        setChooserAnchor(null)
        setPreview(null)
        setAnnouncement('')
    }, [setChooserAnchor])

    const handleReset = useCallback(() => {
        resetHiddenColumns()
        setChooserAnchor(null)
        setPreview(null)
    }, [resetHiddenColumns, setChooserAnchor])

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

    const announce = useCallback(
        (key: string, next: string[]) => {
            const name = String(byKey.get(key)?.name ?? key)
            const position = next.indexOf(key) + 1
            setAnnouncement(
                reorderAnnouncement
                    ? reorderAnnouncement(name, position, next.length)
                    : `${name} ${position}/${next.length}`
            )
        },
        [byKey, reorderAnnouncement]
    )

    const startDrag = useCallback(
        (key: string) => (event: React.PointerEvent<HTMLElement>) => {
            if (!reorderColumns || event.button !== 0) {
                return
            }
            // the menu must not read the press as a pick, and the browser must not select text
            event.preventDefault()
            event.stopPropagation()
            event.currentTarget.setPointerCapture(event.pointerId)
            dragOrder.current = order
            dragging.current = {
                key,
                moved: false,
                pointerId: event.pointerId,
                grip: event.currentTarget
            }
            setDraggingKey(key)
        },
        [order, reorderColumns]
    )

    const endDrag = useCallback(() => {
        const drag = dragging.current
        if (!drag) {
            return
        }
        dragging.current = null
        setDraggingKey(null)
        if (drag.moved) {
            reorderColumns?.(dragOrder.current)
            announce(drag.key, dragOrder.current)
            /*
             * A moved drag ends in a click, and that one must not toggle a column — but it may land
             * ANYWHERE: on the grip while capture held, on whatever row slid under the pointer, or
             * outside the menu entirely when the drag ended past its edge, in which case it lands on
             * nothing of ours at all. So no handler of ours can be trusted to see it: it is eaten at
             * the WINDOW, capture phase, and the suppressor is disarmed by the next pointerdown —
             * the terminal click is the only click that can ever arrive without a fresh pointerdown
             * of its own before it (a sticky flag cleared by our handlers ate the NEXT genuine
             * toggle whenever the terminal click missed them).
             */
            disarmSuppressor.current?.()
            const suppress = (event: MouseEvent) => event.stopPropagation()
            const disarm = () => {
                window.removeEventListener('click', suppress, true)
                window.removeEventListener('pointerdown', disarm, true)
                disarmSuppressor.current = null
            }
            disarmSuppressor.current = disarm
            window.addEventListener('click', suppress, true)
            window.addEventListener('pointerdown', disarm, true)
        }
    }, [announce, reorderColumns])

    // an armed suppressor must not outlive the menu
    useEffect(() => () => disarmSuppressor.current?.(), [])

    /**
     * The drag is DELIVERED through the window, not through the grip's own handlers.
     *
     * ⚠ Reordering the keyed rows makes React physically MOVE a row's DOM node, and a moved node
     * loses its pointer capture — whether the dragged row or its neighbours move depends on the
     * direction and on how many rows one pointer event crosses, which is why a grip-delivered drag
     * froze only on fast or far movements. Window listeners see the pointer whatever happens to the
     * grip; the capture is still taken, and RE-TAKEN after each move it survives being lost, because
     * capture is what keeps events flowing when the pointer leaves the browser window itself.
     */
    useEffect(() => {
        if (!draggingKey) {
            return undefined
        }
        const onMove = (event: PointerEvent) => {
            const drag = dragging.current
            if (!drag || event.pointerId !== drag.pointerId) {
                return
            }
            if (drag.grip.isConnected && !drag.grip.hasPointerCapture(drag.pointerId)) {
                try {
                    drag.grip.setPointerCapture(drag.pointerId)
                } catch {
                    // a pointer already released refuses capture; window delivery still stands
                }
            }
            const from = dragOrder.current.indexOf(drag.key)
            const to = rowUnderPointer(event.clientY, dragOrder.current, rows.current)
            if (from === -1 || to === -1 || to === from) {
                return
            }
            drag.moved = true
            dragOrder.current = withKeyMoved(dragOrder.current, from, to)
            setPreview(dragOrder.current)
        }
        const onEnd = (event: PointerEvent) => {
            if (event.pointerId === dragging.current?.pointerId) {
                endDrag()
            }
        }
        window.addEventListener('pointermove', onMove)
        window.addEventListener('pointerup', onEnd)
        window.addEventListener('pointercancel', onEnd)
        return () => {
            window.removeEventListener('pointermove', onMove)
            window.removeEventListener('pointerup', onEnd)
            window.removeEventListener('pointercancel', onEnd)
        }
    }, [draggingKey, endDrag])

    /**
     * The same move without a pointer. ⚠ The event is stopped before it reaches MUI's `MenuList`,
     * which reads ArrowUp/ArrowDown as "move the focus" and does not look at the modifier — so
     * without this the row would move AND the focus would step off it.
     */
    const onRowKeyDown = useCallback(
        (key: string) => (event: React.KeyboardEvent<HTMLElement>) => {
            if (!reorderColumns || !event.altKey) {
                return
            }
            const delta = event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : 0
            if (!delta) {
                return
            }
            event.preventDefault()
            event.stopPropagation()
            const from = order.indexOf(key)
            const to = from + delta
            if (from === -1 || to < 0 || to >= order.length) {
                return
            }
            const next = withKeyMoved(order, from, to)
            dragOrder.current = next
            setPreview(next)
            reorderColumns(next)
            announce(key, next)
        },
        [announce, order, reorderColumns]
    )

    const setRow = useCallback(
        (key: string) => (element: HTMLElement | null) => {
            if (element) {
                rows.current.set(key, element)
            } else {
                rows.current.delete(key)
            }
        },
        []
    )

    return (
        <>
            <Menu
                id='column-visibility-menu'
                anchorReference='anchorPosition'
                anchorPosition={chooserAnchor ?? undefined}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={chooserAnchor !== null}
                onClose={handleClose}>
                {order.map((key) => {
                    const column = byKey.get(key)
                    return column ? (
                        <Container
                            key={key}
                            ref={setRow(key)}
                            data-dragging={draggingKey === key}
                            aria-keyshortcuts={
                                reorderColumns ? 'Alt+ArrowUp Alt+ArrowDown' : undefined
                            }
                            onKeyDown={onRowKeyDown(key)}
                            onClick={toggle(key)}>
                            <DataGridCheckbox checked={!hiddenColumn.includes(key)} />
                            {column.name}
                            {reorderColumns && (
                                <Grip
                                    aria-hidden='true'
                                    onPointerDown={startDrag(key)}
                                    // a press on the grip is never a toggle, moved or not
                                    onClick={(event) => event.stopPropagation()}>
                                    <GripIcon />
                                </Grip>
                            )}
                        </Container>
                    ) : null
                })}
                {/* The way back, next to the control that broke the layout. It closes the menu, unlike
                a toggle: the reader is done, and leaving it open over columns that all just moved
                reads as though nothing happened. */}
                {resetLabel && <Divider />}
                {resetLabel && <MenuItem onClick={handleReset}>{resetLabel}</MenuItem>}
            </Menu>
            {/* Outside the Menu on purpose: it is a `MenuList`, which walks its children looking for
                the item to focus, and a bare span among them is not one. It lives exactly as long as
                the menu does — mounted EMPTY when the menu opens, which is what a live region needs
                to announce at all, and gone when it closes, so a grid does not stand permanently in
                the document holding a second empty `role="status"` beside whatever else it draws. */}
            {chooserAnchor !== null && (
                <LiveRegion role='status' aria-live='polite'>
                    {announcement}
                </LiveRegion>
            )}
        </>
    )
}
