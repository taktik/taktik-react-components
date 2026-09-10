import { afterEach, describe, expect, it } from 'vitest'
import { hoveredLineAt, LineMeasure } from './hoveredLine'

/**
 * What the pointer is on, decided from the GLYPHS. Every measurement is handed in — jsdom lays nothing
 * out, so neither `elementFromPoint`, `caretPositionFromPoint` nor `Range#getClientRects` can answer
 * here; the device-list E2E is the real-browser proof.
 *
 * The cases that matter most are the NEGATIVE ones: a value's box spans its whole cell, so an
 * element-level answer would arm over the blank two thirds of a wide column.
 */

const box = (left: number, top: number, right: number, bottom: number): DOMRect =>
    ({
        left,
        top,
        right,
        bottom,
        x: left,
        y: top,
        width: right - left,
        height: bottom - top,
        toJSON: () => ({})
    }) as DOMRect

/** The value's own box fills the cell — `BodyBox` is `width: 100%` — while its GLYPHS do not. */
const CELL_BAND = box(100, 18, 400, 32)
const GLYPHS = box(112, 18, 180, 32)

interface Scene {
    /** the element painted at the point */
    painted: Element | null
    /** the text node the caret resolves to, if any */
    caret: Text | undefined
    /** boxes per node */
    rects: Map<Node, DOMRect[]>
}

const measureOf = (scene: Scene): LineMeasure => ({
    elementAt: () => scene.painted,
    caretTextAt: () => scene.caret,
    rectsOf: (node) => scene.rects.get(node) ?? []
})

/** A body cell holding one value in a full-width box, as every aligned column renders it. */
const cellScene = (
    value = 'Room 105',
    role = 'gridcell'
): { scene: Scene; line: HTMLElement; cell: HTMLElement } => {
    const cell = document.createElement('div')
    cell.setAttribute('role', role)
    const line = document.createElement('div')
    line.appendChild(document.createTextNode(value))
    cell.appendChild(line)
    document.body.appendChild(cell)
    const caret = line.firstChild as Text
    return {
        cell,
        line,
        scene: {
            painted: line,
            caret,
            rects: new Map<Node, DOMRect[]>([
                [caret, [GLYPHS]],
                [line, [CELL_BAND]]
            ])
        }
    }
}

/** A point on the glyphs, and one in the same box but past the text. */
const ON_GLYPHS = { x: 140, y: 25 }
const PAST_THE_TEXT = { x: 320, y: 25 }

afterEach(() => {
    document.body.replaceChildren()
})

describe('hoveredLineAt', () => {
    it('reads the value whose glyphs are under the point, in full', () => {
        const { scene } = cellScene('3f2a5c1e-0000-4444-8888-aaaabbbbcccc')
        expect(hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf(scene))?.text).toBe(
            '3f2a5c1e-0000-4444-8888-aaaabbbbcccc'
        )
    })

    /**
     * THE case this module exists for. The value's box spans the cell, so the point is inside the
     * element and its text is right there — and the answer must still be nothing, because the pointer
     * is on the blank tail rather than on the value.
     */
    it('reads nothing on a value’s empty tail, inside its own box', () => {
        const { scene } = cellScene()
        expect(hoveredLineAt(PAST_THE_TEXT.x, PAST_THE_TEXT.y, measureOf(scene))).toBeUndefined()
    })

    it('reads nothing above or below the glyphs', () => {
        const { scene } = cellScene()
        expect(hoveredLineAt(ON_GLYPHS.x, 8, measureOf(scene))).toBeUndefined()
        expect(hoveredLineAt(ON_GLYPHS.x, 44, measureOf(scene))).toBeUndefined()
    })

    // A column's NAME is not a value, and its box is the same full-width one a value's is
    it('reads nothing in a header', () => {
        const { scene } = cellScene('Device', 'columnheader')
        expect(hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf(scene))).toBeUndefined()
    })

    it('reads nothing outside a grid cell', () => {
        const { scene } = cellScene('Room 105', 'toolbar')
        expect(hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf(scene))).toBeUndefined()
    })

    // The caret hit-test answers with the CLOSEST position, so it answers in padding too — a point
    // that resolves to no text node at all is the other half of that
    it('reads nothing where the caret finds no text', () => {
        const { scene } = cellScene()
        expect(
            hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf({ ...scene, caret: undefined }))
        ).toBeUndefined()
    })

    it('reads nothing where nothing is painted', () => {
        const { scene } = cellScene()
        expect(
            hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf({ ...scene, painted: null }))
        ).toBeUndefined()
    })

    /**
     * A two-line cell's WRAPPER measures two bands stacked vertically, so it is a container of lines
     * rather than one — which keeps the MAC under a room number a line of its own.
     */
    it('reads nothing when the enclosing element holds several lines', () => {
        const { scene, line } = cellScene()
        const stacked = new Map(scene.rects)
        stacked.set(line, [box(112, 18, 180, 32), box(112, 36, 220, 50)])
        expect(
            hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf({ ...scene, rects: stacked }))
        ).toBeUndefined()
    })

    // A value assembled from several inline nodes is ONE line, and it is copied whole
    it('joins a line assembled from several nodes', () => {
        const cell = document.createElement('div')
        cell.setAttribute('role', 'gridcell')
        const line = document.createElement('span')
        const count = document.createTextNode('12 ')
        const bold = document.createElement('b')
        bold.appendChild(document.createTextNode('devices'))
        line.append(count, bold)
        cell.appendChild(line)
        document.body.appendChild(cell)
        const scene: Scene = {
            painted: line,
            caret: count,
            rects: new Map<Node, DOMRect[]>([
                [count, [box(112, 18, 130, 32)]],
                [line, [box(112, 18, 130, 32), box(130, 18, 190, 32)]]
            ])
        }
        expect(hoveredLineAt(120, 25, measureOf(scene))?.text).toBe('12 devices')
    })

    it('reads nothing from a whitespace-only value', () => {
        const { scene } = cellScene('   ')
        expect(hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf(scene))).toBeUndefined()
    })

    /**
     * The point is asked of the DOM afresh, so a row rebuilt under a pointer that never moved is
     * measured as it is now rather than through the node some earlier event captured.
     */
    it('reads what is painted NOW, not a node captured earlier', () => {
        const { scene } = cellScene('Room 105')
        const rebuilt = cellScene('Room 111')
        expect(hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf(rebuilt.scene))?.text).toBe(
            'Room 111'
        )
        // and the stale scene is not consulted for it
        expect(hoveredLineAt(ON_GLYPHS.x, ON_GLYPHS.y, measureOf(scene))?.text).toBe('Room 105')
    })
})
