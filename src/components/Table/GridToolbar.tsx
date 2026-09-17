import { JSX, ReactNode } from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded'
import styled from 'styled-components'
import { useTableSlots } from '../../slots'
import { fontSizeSmall, tableFont } from '../../theme/tableStyles'
import type { FilterValue } from '../../filterValue'
import type { FilterDraft, ValueSuggestions } from '../../valueSuggestions'
import { FilterBar, type FilterDefinition, type PinnedFilter } from './FilterBar/FilterBar'
import { DeleteSelectedButton, DeleteSelectedButtonProps } from './DeleteSelectedButton'

/**
 * What the toolbar needs from whatever holds the chip state — the LIVE values it renders, the way to
 * change one, and the way back.
 *
 * It is the state alone: matching the rows is the consumer's business, and a toolbar carrying both
 * would let a server-filtered table narrow the page in hand by mistake. A consumer's own filter
 * state satisfies this structurally, extra fields and a row type included.
 */
export interface TableFilterState {
    /** Live values — what the chips render from, so typing stays responsive. */
    rawValues: Record<string, FilterValue | undefined>
    onChange: (key: string, value: FilterValue | undefined) => void
    definitions: FilterDefinition[]
    /** The column the type-ahead offers first. */
    primaryKey?: string
    /** Back to the bar the consumer opened with. */
    onReset: () => void
}

/**
 * The note's own look, declared here rather than left to the consumer, so the second note to be
 * written cannot read differently from the first.
 */
const Summary = styled.span`
    ${tableFont};
    ${fontSizeSmall};
    color: ${({ theme }) => theme.textLight};
    white-space: nowrap;
`

export interface GridToolbarAction {
    /** already-translated, naming the entity: "Add resident" */
    label: string
    onClick: () => void
    disabled?: boolean
}

/**
 * Re-reading the table. An icon carries no text, so `tooltipText` is also what names the button —
 * the consumer's own wording, since "Refresh" means the agents AND their networks on one page and
 * the schedules, their events and their devices on another.
 */
export interface GridToolbarRefresh {
    /** already-translated */
    tooltipText: string
    onClick: () => void
    /** Spins on the control the reader pressed, rather than scrimming the table they are working in. */
    loading?: boolean
    disabled?: boolean
}

export interface GridToolbarProps {
    filters: TableFilterState
    /** The destructive action over the current selection — see DeleteSelectedButton. */
    remove?: DeleteSelectedButtonProps
    create?: GridToolbarAction
    /** Always-on chips the user cannot remove, e.g. an organisation scope. */
    pinned?: PinnedFilter[]
    /**
     * A note about what the actions would act on, e.g. how many rows are selected. Sits beside the
     * buttons it qualifies rather than out at the edge, and wears the toolbar's own muted small text.
     */
    summary?: ReactNode
    refresh?: GridToolbarRefresh
    /**
     * The page's own kebab, drawn at the very END of the row — after `children` — whatever it holds
     * (import, export, a template).
     *
     * A node rather than a declaration: WHICH acts a kebab offers, and under which marks, is the
     * application's to decide and to keep consistent across its own surfaces — a calendar owes the
     * reader the same menu a grid does. What the toolbar owns is the PLACE, which is why this is a
     * slot of its own instead of more `children`.
     */
    trailingMenu?: ReactNode
    /**
     * The values the consumer's own fields hold for what is being typed — the type-ahead's value
     * rows. A consumer opts in by declaring which of its chips are `suggestable` and answering with
     * the values; the pair travels straight through to the bar.
     */
    suggestions?: ValueSuggestions
    /** What is being typed and where — the consumer's cue to read the values above. */
    onDraftChange?: (draft: FilterDraft) => void
    /**
     * Whatever else this consumer owns — a settings popover, an inheritance indicator. Rendered
     * after the declared controls above and BEFORE the kebab, so the standard ones keep the same
     * place on every grid and the kebab keeps the end of the row.
     */
    children?: ReactNode
}

/**
 * The one toolbar above a grid, and it owns the ORDER: the filter chips, then the acts on the table
 * in front of the reader — remove, create, refresh — then the consumer's own controls as children,
 * and the table's kebab at the very end of the row. `refresh` sits with the declared controls so a
 * consumer's own additions cannot land between the toolbar's own buttons.
 *
 * The trailing controls are DECLARED rather than handed in as children, because the toolbar owns
 * their ORDER: left to convention, sibling grids put the same control in different places.
 *
 * The consumer's kebab (`trailingMenu`) is the one trailing thing handed in as a node, because what
 * it offers is the consumer's own vocabulary. Only its PLACE is the toolbar's: last, the way a row's
 * kebab ends a row. Refresh stays a bare icon — it is the one trailing control that acts on what the
 * reader is looking at, rather than opening a conversation about something else.
 */
export const GridToolbar = ({
    filters,
    remove,
    create,
    pinned,
    summary,
    refresh,
    trailingMenu,
    suggestions,
    onDraftChange,
    children
}: GridToolbarProps): JSX.Element => {
    const { Button, IconButton } = useTableSlots()
    return (
        <FilterBar
            definitions={filters.definitions}
            rawValues={filters.rawValues}
            onChange={filters.onChange}
            primaryKey={filters.primaryKey}
            pinned={pinned}
            onReset={filters.onReset}
            suggestions={suggestions}
            onDraftChange={onDraftChange}
            trailing={
                <>
                    {summary && <Summary>{summary}</Summary>}
                    {remove && <DeleteSelectedButton {...remove} />}
                    {create && (
                        <Button
                            tone='primary'
                            iconLeft
                            onClick={create.onClick}
                            disabled={create.disabled}>
                            <AddRoundedIcon />
                            {create.label}
                        </Button>
                    )}
                    {refresh && (
                        <IconButton
                            tone='default'
                            tooltipText={refresh.tooltipText}
                            loading={refresh.loading}
                            disabled={refresh.disabled}
                            onClick={refresh.onClick}>
                            <RefreshRoundedIcon />
                        </IconButton>
                    )}
                    {children}
                    {trailingMenu}
                </>
            }
        />
    )
}
