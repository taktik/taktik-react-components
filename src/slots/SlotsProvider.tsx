import { createContext, ReactNode, useContext, useMemo } from 'react'
import { defaultTableSlots } from './defaultTableSlots'
import type { TableSlots } from './tableSlots'

const SlotsContext = createContext<TableSlots>(defaultTableSlots)

export interface SlotsProviderProps {
    /** Any subset; the MUI-based default fills the rest. */
    slots?: Partial<TableSlots>
    children: ReactNode
}

/**
 * Hands the library's tables the consumer's own controls. Wire it once, near the root —
 * `TableProvider` does it for you.
 */
export const SlotsProvider = ({ slots, children }: SlotsProviderProps): ReactNode => {
    const value = useMemo<TableSlots>(
        () => (slots ? { ...defaultTableSlots, ...slots } : defaultTableSlots),
        [slots]
    )
    return <SlotsContext.Provider value={value}>{children}</SlotsContext.Provider>
}

export const useTableSlots = (): TableSlots => useContext(SlotsContext)
