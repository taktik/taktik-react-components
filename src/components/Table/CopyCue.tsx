import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { floatingLabel } from './floatingLabel'

/**
 * The hint that says what the next click will do, floating above the line it is about.
 *
 * It is TEXT and nothing else — no icon anywhere in this flow — and it is `pointer-events: none` on
 * purpose: it is a cue, not a target. That is the whole difference from the shape before it, where the
 * reader had to travel onto a small floating control to use it; here the thing to click is the value
 * the reader is already pointing at, and the cue only says so.
 *
 * It is anchored to the LINE rather than to the pointer, so a small move within the value does not
 * make it jitter or chase.
 */
const Cue = styled.div<{ $below: boolean }>`
    ${floatingLabel}
    pointer-events: none;
    transform: ${({ $below }) =>
        $below ? 'translate(-50%, 8px)' : 'translate(-50%, calc(-100% - 8px))'};
`

export interface CopyCueProps {
    /** The already-translated instruction ("Click to copy"). */
    label: string
    top: number
    left: number
    /** Hangs under the line instead of over it, where sitting over it would cover the header. */
    below: boolean
}

export const CopyCue = ({ label, top, left, below }: CopyCueProps) =>
    createPortal(
        <Cue $below={below} style={{ top, left }}>
            {label}
        </Cue>,
        document.body
    )
