import { render, renderHook } from '@testing-library/react'
import { act, FC, ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { TableProvider } from '../../../TableProvider'
import { useRemeasureOnHostEvent } from './useRemeasureOnHostEvent'

const HOST_EVENT = 'flowr:layout-settled'

const hostAnnouncing = (remeasureEvent?: string): FC<{ children: ReactNode }> => {
    const Wrapper = ({ children }: { children: ReactNode }): ReactNode => (
        <TableProvider remeasureEvent={remeasureEvent}>{children}</TableProvider>
    )
    return Wrapper
}

const announce = (event: string): void => {
    // React's synchronous `act` hands back a thenable a synchronous callback never has to await.
    void act(() => {
        window.dispatchEvent(new Event(event))
    })
}

describe('useRemeasureOnHostEvent', () => {
    it('re-measures on the event the host named, however often it is announced', () => {
        const remeasure = vi.fn()
        renderHook(() => useRemeasureOnHostEvent(remeasure), {
            wrapper: hostAnnouncing(HOST_EVENT)
        })

        announce(HOST_EVENT)
        announce(HOST_EVENT)

        expect(remeasure).toHaveBeenCalledTimes(2)
    })

    // A table listening for anything else keeps yesterday's measured widths, which is the defect
    it('listens for that name and no other', () => {
        const remeasure = vi.fn()
        renderHook(() => useRemeasureOnHostEvent(remeasure), {
            wrapper: hostAnnouncing(HOST_EVENT)
        })

        announce('resize')
        announce('flowr:layout-settled-')

        expect(remeasure).not.toHaveBeenCalled()
    })

    it('leaves nothing subscribed once the table is gone', () => {
        const remeasure = vi.fn()
        const { unmount } = renderHook(() => useRemeasureOnHostEvent(remeasure), {
            wrapper: hostAnnouncing(HOST_EVENT)
        })

        unmount()
        announce(HOST_EVENT)

        expect(remeasure).not.toHaveBeenCalled()
    })

    it('follows a host that renames its event', () => {
        const remeasure = vi.fn()
        const Probe = (): ReactNode => {
            useRemeasureOnHostEvent(remeasure)
            return null
        }
        const { rerender } = render(
            <TableProvider remeasureEvent={HOST_EVENT}>
                <Probe />
            </TableProvider>
        )

        rerender(
            <TableProvider remeasureEvent='shell:pane-settled'>
                <Probe />
            </TableProvider>
        )

        announce(HOST_EVENT)
        expect(remeasure).not.toHaveBeenCalled()
        announce('shell:pane-settled')
        expect(remeasure).toHaveBeenCalledTimes(1)
    })

    // A host with no resizable chrome names no event, and then no table listens for one
    it('subscribes to nothing when the host named no event', () => {
        const addEventListener = vi.spyOn(window, 'addEventListener')
        renderHook(() => useRemeasureOnHostEvent(vi.fn()), { wrapper: hostAnnouncing() })

        expect(addEventListener).not.toHaveBeenCalled()
    })
})
