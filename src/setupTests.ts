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
