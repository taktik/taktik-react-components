import { createContext } from 'react'

/** Says which row's kebab menu is open, or has just closed. */
export type RowMenuReport = (rowId: string, open: boolean) => void

/**
 * How a row's kebab tells the table its menu is showing. The kebab is rendered by a column the
 * consumer declared, far from the table that draws the row, so the report travels by context rather
 * than by prop — `CrudTable` provides it, `rowActionsColumn`'s cell consumes it. Absent (a grid
 * mounted outside `CrudTable`), the kebab reports to nobody and nothing is painted.
 */
export const RowMenuReportContext = createContext<RowMenuReport | undefined>(undefined)
