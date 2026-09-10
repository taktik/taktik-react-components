import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// vitest runs with globals:false, so Testing Library's auto-cleanup never self-registers —
// without this, renders leak across tests within a file.
afterEach(cleanup)

// jsdom ships no ResizeObserver; MUI constructs one on mount (Menu, Tabs, …).
if (typeof globalThis.ResizeObserver === 'undefined') {
    globalThis.ResizeObserver = class {
        observe = vi.fn()
        unobserve = vi.fn()
        disconnect = vi.fn()
    }
}

// jsdom implements no layout, so every element measures 0 wide — and react-data-grid reads the
// grid's own clientWidth to decide which columns are in view. At 0 it renders exactly one column
// beside the pinned ones, so a test asserting on any other column would be reading a grid a browser
// would have drawn in full. Report a plausible viewport, for the grid element alone.
const GRID_TEST_VIEWPORT_WIDTH = 1200
const clientWidth = Object.getOwnPropertyDescriptor(Element.prototype, 'clientWidth')
Object.defineProperty(Element.prototype, 'clientWidth', {
    configurable: true,
    get(this: Element): number {
        return this.classList.contains('rdg')
            ? GRID_TEST_VIEWPORT_WIDTH
            : ((clientWidth?.get?.call(this) as number | undefined) ?? 0)
    }
})

// jsdom implements no layout, so `scrollIntoView` is absent; a grid scrolls its active cell into
// view when the roving focus moves.
if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = vi.fn()
}
