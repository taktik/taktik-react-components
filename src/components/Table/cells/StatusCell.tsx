import { JSX, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { useTableSlots } from '../../../slots'
import { iconSizeSmall, radiusPill, visuallyHidden } from '../../../theme/tableStyles'
import { statusToneColors, StatusTone } from '../../../status/statusTone'
import { TwoLineCell } from './TwoLineCell'

export interface StatusCellProps {
    /** Which of the four states this is — the consumer maps its own status onto it. */
    tone: StatusTone
    /** The status as a word, already translated. */
    label: string
    /** A second line under the label, e.g. how long ago the thing was last seen. */
    secondary?: ReactNode
    tooltipText?: string
    /**
     * `dot` (the default) is the grid presentation: a coloured mark beside plain text. `pill` tints
     * the whole thing, for a status shown on its own outside a table. `icon` drops the words
     * altogether — the mark alone, with the label as its tooltip and its accessible name — for a
     * column whose header already names what the mark is about and whose width is better spent
     * elsewhere.
     */
    variant?: 'dot' | 'pill' | 'icon'
    /** Replaces the dot, for a status whose shape says something the colour cannot. */
    icon?: ReactNode
    /**
     * The coloured mark before the label, on by default. A pill whose label names an IDENTITY rather
     * than a state — a platform, a model — turns it off: there is no state for a colour to code, and
     * the outline alone is what such a value wears.
     */
    mark?: boolean
}

const Layout = styled.div<{ $tone: StatusTone; $pill: boolean }>`
    display: flex;
    align-items: center;
    max-width: 100%;
    /* the icon-only variant hides its label in an absolute box; without this it would resolve
       against whatever ancestor happens to be positioned, which in a grid is the cell or the row */
    position: relative;

    /* A cell shares its width with the rest of the row, so it may shrink and ellipsise. A pill is
       sized by its own text — shrinking it would truncate a status word to nothing. It is OUTLINED:
       a tinted fill alone dissolves into a light page, and the edge is what makes the thing read as
       one object at a glance, whether it stands in a band or in a column of its own. */
    ${({ $pill, $tone, theme }) =>
        $pill
            ? css`
                  display: inline-flex;
                  justify-content: center;
                  gap: 6px;
                  ${radiusPill};
                  padding: 1px 8px;
                  border: 1px solid ${statusToneColors($tone, theme).border};
                  background: ${statusToneColors($tone, theme).background};
                  color: ${statusToneColors($tone, theme).text};
                  font-weight: 500;
              `
            : css`
                  gap: 6px;
                  min-width: 0;
              `}
`

const Dot = styled.span<{ $tone: StatusTone }>`
    flex: 0 0 auto;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $tone, theme }) => statusToneColors($tone, theme).mark};
`

const Mark = styled.span<{ $tone: StatusTone }>`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    color: ${({ $tone, theme }) => statusToneColors($tone, theme).mark};

    svg {
        ${iconSizeSmall};
    }
`

/**
 * Read by assistive tech, never seen: the icon-only variant still has to SAY what it means, and a
 * `title` alone is not reliably announced.
 */
const OnlyForScreenReaders = styled.span`
    ${visuallyHidden};
`

/** A status as a coloured mark plus its label, optionally over a second line of detail. */
export const StatusCell = ({
    tone,
    label,
    secondary,
    tooltipText,
    variant = 'dot',
    icon,
    mark = true
}: StatusCellProps): JSX.Element => {
    const { Tooltip } = useTableSlots()
    const iconOnly = variant === 'icon'
    const content = (
        <Layout $tone={tone} $pill={variant === 'pill'}>
            {mark && (icon ? <Mark $tone={tone}>{icon}</Mark> : <Dot $tone={tone} />)}
            {iconOnly ? (
                <OnlyForScreenReaders>{label}</OnlyForScreenReaders>
            ) : (
                <TwoLineCell primary={label} secondary={secondary} />
            )}
        </Layout>
    )
    // Without the words the mark is unreadable on its own, so the label becomes the tooltip
    const title = tooltipText ?? (iconOnly ? label : undefined)
    return title ? <Tooltip title={title}>{content}</Tooltip> : content
}
