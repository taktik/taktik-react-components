import { renderHook } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { describe, expect, it, vi } from 'vitest'
import type { CellKeyboardEvent } from 'react-data-grid'
import { defaultTableTheme as lightTheme } from '../../theme/tableTheme'
import { GRID_HEADER_GROUND_VAR, useGridPresentation } from './useGridPresentation'

const wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
)

describe('useGridPresentation', () => {
    it('maps the consumer theme onto the rdg CSS variables', () => {
        const { result } = renderHook(() => useGridPresentation(), { wrapper })
        // the ROW's plane: the library's grid box paints nothing, so the empty grid under the last
        // row shows what the grid stands on
        expect(result.current.theme['--rdg-background-color']).toBe(lightTheme.surface.row)
        // The header band is read THROUGH the ground variable, so a host standing the grid on
        // something other than the page's canvas (a dialog's paper) can answer for it. A host that
        // says nothing falls back to the page's canvas.
        expect(result.current.theme['--rdg-header-background-color']).toBe(
            `var(${GRID_HEADER_GROUND_VAR}, ${lightTheme.backgroundDark})`
        )
        expect(result.current.theme['--rdg-header-color']).toBe(lightTheme.surface.gridHeaderText)
        expect(result.current.theme['--rdg-color']).toBe(lightTheme.surface.text)
        expect(result.current.theme['--rdg-border-color']).toBe(lightTheme.surface.border)
    })

    /**
     * The focused-cell ring must NOT be set at theme level: the library draws it however focus
     * arrived, so a theme colour follows every mouse click. `gridFocus` scopes it to
     * `:focus-visible` instead — keyboard only.
     */
    it('leaves the focused-cell ring to gridFocus, so a mouse click paints nothing', () => {
        const { result } = renderHook(() => useGridPresentation(), { wrapper })
        expect(result.current.theme['--rdg-selection-color']).toBe('transparent')
    })

    it('paints a selected row with the design blue, hover included', () => {
        const { result } = renderHook(() => useGridPresentation(), { wrapper })
        expect(result.current.theme['--rdg-row-selected-background-color']).toBe(
            lightTheme.surface.rowSelected
        )
        // hovering a selected row keeps its selected fill rather than reverting to the grey hover
        expect(result.current.theme['--rdg-row-selected-hover-background-color']).toBe(
            lightTheme.surface.rowSelected
        )
    })

    /**
     * The grid is ONE tab stop. Without this every cell is one, which is what put the device list's
     * action rail 192 Tab presses away from its filter bar.
     */
    it('hands Tab back to the browser and keeps every other key', () => {
        const { result } = renderHook(() => useGridPresentation(), { wrapper })
        const preventGridDefault = vi.fn()

        result.current.onCellKeyDown(undefined, {
            key: 'Tab',
            preventGridDefault
        } as unknown as CellKeyboardEvent)
        expect(preventGridDefault).toHaveBeenCalledOnce()

        for (const key of ['ArrowDown', 'ArrowRight', 'Home', 'End', 'Enter']) {
            preventGridDefault.mockClear()
            result.current.onCellKeyDown(undefined, {
                key,
                preventGridDefault
            } as unknown as CellKeyboardEvent)
            expect(preventGridDefault).not.toHaveBeenCalled()
        }
    })

    /**
     * The library's own edge beside a pinned column is two masked strips per side — no edge on the
     * header or the first row, full strength through the middle. It is turned off here, and nothing
     * replaces it: a pinned column casts no edge.
     */
    it('turns off the library edge beside a pinned column', () => {
        const { result } = renderHook(() => useGridPresentation(), { wrapper })
        expect(result.current.theme['--rdg-frozen-shadow-opacity']).toBe('0')
    })

    it('gives every grid the same row rhythm', () => {
        const { result } = renderHook(() => useGridPresentation(), { wrapper })
        expect(result.current.headerRowHeight).toBe(40)
        expect(result.current.rowHeight).toBe(50)
    })

    it('keeps a stable reference across rerenders with the same theme', () => {
        const { result, rerender } = renderHook(() => useGridPresentation(), { wrapper })
        const first = result.current
        rerender()
        expect(result.current).toBe(first)
    })
})
