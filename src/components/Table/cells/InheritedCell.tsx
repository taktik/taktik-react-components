import { JSX, ReactNode } from 'react'
import styled from 'styled-components'

export interface InheritedCellProps {
    /** True when the row belongs to another organisation and is only visible from here. */
    inherited: boolean
    children: ReactNode
}

const Dimmed = styled.span`
    font-style: italic;
    opacity: 0.7;
`

/**
 * A cell of a row this organisation does not own — one that came from a parent and cannot be edited
 * here.
 *
 * Italic AND dimmed, not dimmed alone: opacity on its own reads as "disabled", and dimming far
 * enough to be noticed leaves the text barely legible on the dark theme. The slant is what says
 * "borrowed" at a glance. Marks the CELL rather than the row: the actions column and the checkbox
 * stay at full contrast, because what they offer is unchanged.
 */
export const InheritedCell = ({ inherited, children }: InheritedCellProps): JSX.Element =>
    inherited ? <Dimmed>{children}</Dimmed> : <>{children}</>
