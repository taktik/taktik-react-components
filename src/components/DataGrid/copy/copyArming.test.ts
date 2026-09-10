import { describe, expect, it } from 'vitest'
import { ArmedLine, cueAnchor, nextArm, staysOnLine } from './copyArming'

/** The arm/disarm machine, with no DOM measurement in it — the transitions ARE the contract. */

const lineOf = (element: Element): ArmedLine => ({
    element,
    text: 'Room 105',
    top: 10,
    left: 20,
    below: false
})

const spanWith = (child?: Element): HTMLElement => {
    const span = document.createElement('span')
    if (child) {
        span.appendChild(child)
    }
    document.body.appendChild(span)
    return span
}

describe('staysOnLine', () => {
    it('holds on the line itself', () => {
        const element = spanWith()
        expect(staysOnLine(lineOf(element), element)).toBe(true)
    })

    // A value assembled from several inline nodes is ONE line: crossing between its nodes must not
    // disarm, which is the whole of what keeps the hint still under a wobbling pointer
    it('holds on anything inside the line', () => {
        const inner = document.createElement('b')
        const element = spanWith(inner)
        expect(staysOnLine(lineOf(element), inner)).toBe(true)
    })

    it('lets go anywhere else', () => {
        const element = spanWith()
        expect(staysOnLine(lineOf(element), spanWith())).toBe(false)
    })

    it('lets go with nothing armed, and on a target that is not a node', () => {
        expect(staysOnLine(undefined, spanWith())).toBe(false)
        expect(staysOnLine(lineOf(spanWith()), null)).toBe(false)
    })
})

describe('cueAnchor', () => {
    /** A line 14px tall, 60px wide, at y=200. The grid's header ends wherever a test says it does. */
    const box = { top: 200, bottom: 214, left: 100, width: 60 } as DOMRect

    // Anchored to the LINE, centred on it — never to the pointer, which is what used to make it jitter
    it('sits over the line when there is room above it', () => {
        expect(cueAnchor(box, 100)).toEqual({ top: 200, left: 130, below: false })
    })

    /**
     * A line in the FIRST row has the header immediately above it, and a hint drawn there covers the
     * column names — which is exactly what a reader met. It hangs under the line instead.
     */
    it('hangs under the line when the header is in the way', () => {
        expect(cueAnchor(box, 190)).toEqual({ top: 214, left: 130, below: true })
    })

    // Exactly its own clearance of room is room enough
    it('takes the space above when it fits exactly', () => {
        expect(cueAnchor(box, 170).below).toBe(false)
        expect(cueAnchor(box, 171).below).toBe(true)
    })
})

describe('nextArm', () => {
    const element = spanWith()
    const armed = lineOf(element)

    // Settling is the only thing that arms, and it re-asks the question every time
    it('arms what the pointer settled on', () => {
        expect(nextArm(undefined, { on: 'settle', line: armed })).toEqual({ armed })
    })

    /**
     * Coming to rest on nothing — a cell's padding, a value's empty tail, a header — disarms. This is
     * the same signal as arming on purpose: the pointer can slide from a value onto the blank half of
     * its own cell without entering or leaving a single element, so only re-asking can tell.
     */
    it('disarms when the pointer settles on no value', () => {
        expect(nextArm(armed, { on: 'settle', line: undefined })).toEqual({ armed: undefined })
    })

    // A reader resting still must not re-render the table twice a second, nor watch the hint re-anchor
    it('hands back the very same line when it settles on the armed one again', () => {
        const again = { ...armed, top: 999 }
        expect(nextArm(armed, { on: 'settle', line: again }).armed).toBe(armed)
    })

    it('moves the arm when the pointer settles on a different line', () => {
        const other = lineOf(spanWith())
        expect(nextArm(armed, { on: 'settle', line: other })).toEqual({ armed: other })
    })

    // Leaving, scrolling, the one promised copy, and a press that turned into a drag: all let go
    it.each(['leave', 'scroll', 'copy', 'drag'] as const)('disarms on %s', (on) => {
        expect(nextArm(armed, { on })).toEqual({ armed: undefined })
    })
})
