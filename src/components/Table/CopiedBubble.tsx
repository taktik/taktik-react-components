import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { floatingLabel } from './floatingLabel'

/** Long enough to read three words, short enough to never be in the way of the next click. */
const VISIBLE_MS = 1200

/**
 * The same floating box the copy offer wears, so the confirmation appears exactly where the offer
 * was. `pointer-events: none` is the one difference: it says something rather than offering it, so it
 * must never swallow the click that follows.
 */
const Bubble = styled.div`
    ${floatingLabel}
    pointer-events: none;
`

export interface CopiedBubbleProps {
    /**
     * The already-translated confirmation. This IS the feedback for a copy made from a grid row —
     * the toast layer is app-level and out of reach from here.
     */
    label: string
    /** Where the pointer was; the bubble sits just above it. */
    top: number
    left: number
    /** Called once the bubble has had its time, so the owner can drop it. */
    onDone: () => void
}

/**
 * The "copied" confirmation over the pointer. Mounted per copy — the caller keys it on the copy, so
 * a second copy restarts the countdown instead of inheriting the first one's.
 */
export const CopiedBubble = ({ label, top, left, onDone }: CopiedBubbleProps) => {
    useEffect(() => {
        const timer = window.setTimeout(onDone, VISIBLE_MS)
        return () => window.clearTimeout(timer)
    }, [onDone])

    return createPortal(
        <Bubble style={{ top, left }} role='status' aria-live='polite'>
            {label}
        </Bubble>,
        document.body
    )
}
