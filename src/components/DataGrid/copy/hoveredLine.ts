/**
 * Which line of a grid cell the pointer is on — decided from the GLYPHS, never from the element box.
 *
 * That distinction is the whole of this module. A cell's value sits inside `BodyBox`, which is
 * `width: 100%` so the header above it lines up with it, and its `textContent` is the value — so an
 * element-level test says "on the value" anywhere in the cell, including the blank two thirds of a
 * column sized for its longest row. Resting on a cell's padding, on a short value's empty tail or on
 * the blank half of a wide column must offer nothing, and only a hit on the rendered text says
 * otherwise.
 *
 * So the answer is composed of three measurements: what is painted at the point, which text node the
 * caret resolves to there, and whether the point is inside that node's own boxes. The last one is
 * load-bearing — the caret hit-test answers with the CLOSEST position and therefore answers in
 * whitespace too.
 */

/** What the DOM is asked, as one seam — a test hands in its own; jsdom measures nothing. */
export interface LineMeasure {
    /** What is painted at a point, which is also how a stale captured node is avoided. */
    elementAt: (x: number, y: number) => Element | null
    /** The text node whose caret position the point resolves to, from whichever spelling ships. */
    caretTextAt: (x: number, y: number) => Text | undefined
    /** The boxes a node's own text occupies — one per rendered line. */
    rectsOf: (node: Node) => DOMRect[]
}

/** The two spellings of the same caret hit-test: the current one, and the Range form WebKit ships. */
interface CaretDocument {
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node } | null
    caretRangeFromPoint?: (x: number, y: number) => { startContainer: Node } | null
}

const asText = (node: Node | null | undefined): Text | undefined =>
    node?.nodeType === Node.TEXT_NODE ? (node as Text) : undefined

export const domLineMeasure: LineMeasure = {
    elementAt: (x, y) => document.elementFromPoint(x, y),
    caretTextAt: (x, y) => {
        const doc: Document & CaretDocument = document
        if (typeof doc.caretPositionFromPoint === 'function') {
            return asText(doc.caretPositionFromPoint(x, y)?.offsetNode)
        }
        if (typeof doc.caretRangeFromPoint === 'function') {
            return asText(doc.caretRangeFromPoint(x, y)?.startContainer)
        }
        return undefined
    },
    rectsOf: (node) => {
        const range = (node.ownerDocument ?? document).createRange()
        range.selectNodeContents(node)
        return Array.from(range.getClientRects())
    }
}

export interface HoveredLine {
    /** The element whose text a copy would take. */
    element: Element
    /** That text, in full — so a value its column cut short is copied whole. */
    text: string
}

const contains = (box: DOMRect, x: number, y: number): boolean =>
    x >= box.left && x <= box.right && y >= box.top && y <= box.bottom

/** Whether a node's own text sits on a single horizontal band. */
const isOneBand = (boxes: DOMRect[]): boolean => {
    const first = boxes[0]
    return !!first && !boxes.some((box) => box.top >= first.bottom || box.bottom <= first.top)
}

/**
 * The line whose GLYPHS are under the point, or nothing at all — the point is beside the text, the
 * cell is empty, the element holds several lines rather than being one, or the point is not in a
 * body cell.
 *
 * A HEADER never answers: a column's name is not a value, and its own box is the same full-width one
 * a value's is.
 */
export const hoveredLineAt = (
    x: number,
    y: number,
    measure: LineMeasure = domLineMeasure
): HoveredLine | undefined => {
    const painted = measure.elementAt(x, y)
    if (
        !painted ||
        painted.closest('[role="columnheader"]') ||
        !painted.closest('[role="gridcell"]')
    ) {
        return undefined
    }
    const node = measure.caretTextAt(x, y)
    if (!node || !measure.rectsOf(node).some((box) => contains(box, x, y))) {
        return undefined
    }
    const element = node.parentElement
    const text = element?.textContent?.trim()
    if (!element || !text || !isOneBand(measure.rectsOf(element))) {
        return undefined
    }
    return { element, text }
}
