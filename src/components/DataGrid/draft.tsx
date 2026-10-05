import type { RenderCellProps } from 'react-data-grid'
import { EXPANDER_COLUMN_KEY, SELECTION_COLUMN_KEY } from './Expandable'
import { Placeholder } from './Placeholder'
import type { ColumnDefinition, RowDefinition } from './types'

/** How many rows a grid drafts while its first answer is on its way. */
export const DRAFT_ROW_COUNT = 6

/** Widths the bars cycle through, so the draft reads as text rather than as a ruler. */
const BAR_WIDTHS = ['70%', '50%', '60%', '40%']

const DRAFT_ROWS: RowDefinition[] = Array.from({ length: DRAFT_ROW_COUNT }, (_, index) => ({
    id: `draft-${index}`
}))

/** The placeholder rows: an id and nothing else, so nothing can read a field off one. */
export const draftRows = <R extends RowDefinition>(): R[] => DRAFT_ROWS as R[]

/** The selection and expander columns hold controls, which a placeholder row must not offer. */
const holdsControls = (key: string): boolean =>
    key === SELECTION_COLUMN_KEY || key === EXPANDER_COLUMN_KEY

const renderNothing = (): null => null

/**
 * The grid's own columns — their headers, widths and frozen edges — with every cell drawn as a
 * placeholder bar, so the draft has the shape of what replaces it. Everything react-data-grid would
 * call with a row is dropped: the placeholder rows have no fields to give it. Nor do the headers
 * sort: a sort asked for before the first answer would only ask the question again.
 */
export const draftColumns = <R extends RowDefinition>(
    columns: ColumnDefinition<R>[]
): ColumnDefinition<R>[] =>
    columns.map((column, columnIndex) => ({
        ...column,
        sortable: false,
        cellClass: typeof column.cellClass === 'function' ? undefined : column.cellClass,
        colSpan: undefined,
        editable: false,
        renderEditCell: undefined,
        ...(holdsControls(column.key)
            ? { renderCell: renderNothing, renderHeaderCell: renderNothing }
            : {
                  renderCell: ({ rowIdx }: RenderCellProps<R>) => (
                      <Placeholder
                          aria-hidden
                          variant='text'
                          width={BAR_WIDTHS[(rowIdx + columnIndex) % BAR_WIDTHS.length]}
                      />
                  )
              })
    }))

/** The first and last rows' classes, which round the grid's corners — the only ones a draft has. */
export const draftRowClass = (_row: unknown, index: number): string =>
    index === 0 ? 'first-row' : index === DRAFT_ROW_COUNT - 1 ? 'last-row' : ''
