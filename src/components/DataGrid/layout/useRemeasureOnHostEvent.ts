import { useEffect } from 'react'
import { useTableRuntime } from '../../../TableProvider'

/**
 * Re-measures a table whenever the host announces that the chrome around it settled at a new width
 * — a pane seam released, a sidebar collapsed, the window resized. The event name is the one the
 * consumer named once on `TableProvider`; naming none means nothing is subscribed, which is right
 * for a host whose chrome never moves.
 *
 * The name has to be the SAME string the host dispatches: a table listening for anything else keeps
 * the widths it was measured at and stops short of its own container, which is exactly the defect
 * `remeasure` exists to answer.
 */
export const useRemeasureOnHostEvent = (remeasure: () => void): void => {
    const { remeasureEvent } = useTableRuntime()
    useEffect(() => {
        if (!remeasureEvent) return
        window.addEventListener(remeasureEvent, remeasure)
        return () => window.removeEventListener(remeasureEvent, remeasure)
    }, [remeasureEvent, remeasure])
}
