import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded'
import type { JSX } from 'react'
import styled from 'styled-components'
import { useLabels } from '../../labels'
import { useTableSlots } from '../../slots'
import { excludedCount, MatchingSelection } from '../../selection'

const Line = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
`

export interface SelectAllMatchingBannerProps {
    selection: MatchingSelection
    /**
     * How many rows are picked while the selection is NOT the whole matching set — the page's own rows
     * where a server pages the table, the reader's ticks where the grid holds every row. It says how
     * many, not which page they came from, because the two tables reach this state differently.
     */
    pickedCount: number
    /** how many rows the current query matches, across every page */
    total: number
    onSelectAllMatching: () => void
    onClear: () => void
}

/**
 * The band over a grid whose selection can outgrow what the reader can see: it says what is picked
 * and offers the step the checkboxes cannot express.
 *
 * Two states, the Gmail pair. Part of the matching set is picked → it says how much and offers the
 * whole of it. The whole set is picked → it says so, counts the rows ticked off since, and offers the
 * way back. There is no third state: a small selection needs no band, since the checkboxes on screen
 * already say what they say.
 */
export const SelectAllMatchingBanner = ({
    selection,
    pickedCount,
    total,
    onSelectAllMatching,
    onClear
}: SelectAllMatchingBannerProps): JSX.Element => {
    const labels = useLabels()
    const { Button, Callout } = useTableSlots()
    const excluded = excludedCount(selection)
    return (
        // Announced: the count it reports jumps from a page's worth to a whole query's on one click,
        // which nothing else on screen says out loud. Named, because a page can hold two of these
        // sentences and both offer a button worded "Clear selection".
        <Callout
            tone='neutral'
            icon={<DoneAllRoundedIcon />}
            live
            ariaLabel={labels.selection.band}>
            <Line>
                {selection.all
                    ? excluded
                        ? labels.selection.allMatchingSelectedExcept(excluded, total)
                        : labels.selection.allMatchingSelected(total)
                    : labels.selection.picked(pickedCount)}
                {selection.all ? (
                    <Button tone='secondary' onClick={onClear}>
                        {labels.selection.clear}
                    </Button>
                ) : (
                    <Button tone='secondary' onClick={onSelectAllMatching}>
                        {labels.selection.selectAllMatching(total)}
                    </Button>
                )}
            </Line>
        </Callout>
    )
}
