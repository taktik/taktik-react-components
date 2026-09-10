import { JSX, ReactNode } from 'react'
import styled from 'styled-components'
import { fontSizeSmall, fontSizeSmaller, tableFont } from '../../../theme/tableStyles'

export interface TwoLineCellProps {
    /** What the row IS — the name, the status word, the identity the reader scans for. */
    primary: ReactNode
    /** What qualifies it: a description, how long ago it was seen. Omit for a one-line cell. */
    secondary?: ReactNode
    /** Native tooltip on the first line, for text the column may truncate. */
    primaryTitle?: string
    /** Native tooltip on the second line, same reason. */
    secondaryTitle?: string
    className?: string
}

const Lines = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
`

const Primary = styled.span`
    ${tableFont};
    ${fontSizeSmall};
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Secondary = styled.span`
    ${tableFont};
    ${fontSizeSmaller};
    color: ${({ theme }) => theme.textLight};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

/**
 * A value over the line that qualifies it — one shape, so a name over its description reads as the
 * same kind of thing as a status over its last-seen time.
 *
 * Both lines ellipsise rather than wrap: a cell shares its width with the rest of the row, and a
 * wrapping second line would make one row taller than its neighbours for no signal. Presentational,
 * like every cell here — the consumer passes translated text.
 */
export const TwoLineCell = ({
    primary,
    secondary,
    primaryTitle,
    secondaryTitle,
    className
}: TwoLineCellProps): JSX.Element => (
    <Lines className={className}>
        <Primary title={primaryTitle}>{primary}</Primary>
        {secondary !== undefined && secondary !== '' && (
            <Secondary title={secondaryTitle}>{secondary}</Secondary>
        )}
    </Lines>
)
