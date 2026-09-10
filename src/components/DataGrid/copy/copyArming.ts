/**
 * The state machine behind "this line is armed to be copied".
 *
 * A reader who rests on a value is told, twice, that the next click will copy it: a hint floats above
 * the line and the line's own cursor changes. Only then does a click copy — which is what makes the
 * changed meaning honest rather than a surprise, and what lets the click itself do the copying instead
 * of asking the reader to hit a small moving target.
 *
 * The whole of it is one reducer, and it is driven by the pointer coming to REST rather than by
 * entering an element: the question "are the glyphs under the pointer" has no entry event to hang on,
 * because a cell's value box spans the whole cell and sliding from its blank half onto its text
 * crosses nothing. Resting is also the only moment at which the answer matters.
 */

export interface ArmedLine {
    /** The element whose text a click would copy. */
    element: Element
    /** That text, in full — so a value its column cut short is copied whole. */
    text: string
    /** Where the hint sits: anchored to the LINE, so it does not move with the pointer. */
    top: number
    left: number
    /** Whether it hangs UNDER the line rather than over it — see {@link cueAnchor}. */
    below: boolean
}

export type ArmSignal =
    /**
     * The pointer has been still long enough, and this is the line whose GLYPHS are under it — or
     * nothing, when it came to rest on padding, on a value's empty tail, or on a header.
     */
    | { on: 'settle'; line: ArmedLine | undefined }
    /** The pointer left the row. */
    | { on: 'leave' }
    /** The rows moved out from under a pointer that did not. */
    | { on: 'scroll' }
    /** The armed click happened: the promise is kept once and no more. */
    | { on: 'copy' }
    /** A drag started from here, so the press was never a click. */
    | { on: 'drag' }

export interface ArmState {
    armed: ArmedLine | undefined
}

/**
 * Whether a click landed on the armed line: on that element or anything inside it — a value assembled
 * from several inline nodes is one line, and the click's target may be any of them.
 */
export const staysOnLine = (armed: ArmedLine | undefined, target: EventTarget | null): boolean =>
    !!armed && target instanceof Node && armed.element.contains(target)

/** What the hint occupies above a line: its own height plus the gap it keeps. */
const CUE_CLEARANCE = 30

/**
 * Where the hint goes for a line: centred on it, above it by default — and BELOW it when there is no
 * room above.
 *
 * `floor` is the y the hint must not cross, and the honest reference is the bottom of the grid's own
 * HEADER row: above that the hint would sit on the column names, which is what a first-row arm did. It
 * is not the viewport's top, because a grid has the page's chrome above it and the header is what the
 * hint would actually cover.
 */
export const cueAnchor = (
    box: DOMRect,
    floor: number
): { top: number; left: number; below: boolean } => {
    const below = box.top - CUE_CLEARANCE < floor
    return {
        top: below ? box.bottom : box.top,
        left: box.left + box.width / 2,
        below
    }
}

/**
 * What one signal does to the armed line.
 *
 * The machine is settle-driven: the pointer coming to rest is the ONLY thing that arms, and it re-asks
 * the question every time it settles. That is what makes a pointer sliding from a cell's blank half
 * onto its value arm — the element never changed, so no entry event ever fired — and what disarms one
 * sliding the other way. Everything else only lets go.
 *
 * Settling on the line already armed returns the SAME object, so a reader resting still does not
 * re-render the table every half second, and the hint does not re-anchor under them.
 */
export const nextArm = (armed: ArmedLine | undefined, signal: ArmSignal): ArmState => {
    if (signal.on !== 'settle') {
        return { armed: undefined }
    }
    const settled = signal.line
    if (settled && armed && settled.element === armed.element) {
        return { armed }
    }
    return { armed: settled }
}
