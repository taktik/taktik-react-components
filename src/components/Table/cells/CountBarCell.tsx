import { ReactNode } from 'react'
import Skeleton from '@mui/material/Skeleton'
import styled from 'styled-components'
import { useTableSlots } from '../../../slots'
import { fontSizeSmall, fontSizeSmaller, tableFont } from '../../../theme/tableStyles'
import { capacityPercent, capacityTone } from './capacity'
import { statusToneColors, StatusTone } from './statusTone'

/**
 * What the bar is measuring.
 *
 * `capacity` — `used` out of a limit: the cell prints `used/total` and tones itself as it fills.
 * `share` — `used` as a part of a whole: the cell prints `used` alone and stays neutral, because a
 * type making up all of a package's contents is information, not a problem. Repeating the same whole
 * in four side-by-side columns would be noise too.
 */
export type CountBarVariant = 'capacity' | 'share'

export interface CountBarCellProps {
    /** How much of the capacity is in use, or how much of the whole this part is. */
    used: number
    /** The capacity, or the whole. `undefined` means none, which the cell says rather than draws. */
    total?: number
    /** Defaults to `capacity`. */
    variant?: CountBarVariant
    /**
     * Explicit colours for the count and its bar, overriding the tone.
     *
     * Only the CONSUMER knows whether a colour carries meaning here: a licence grant's tone says how
     * full it is, while a package's four content types are colour-CODED so the reader can tell the
     * columns apart without reading the headers. Same principle as `StatusCell`'s tone map.
     */
    color?: { mark: string; track: string }
    /** A word before the count — a category name in a field list. A grid's header names it. */
    label?: string
    /** Shown instead of the count when nothing is granted. */
    emptyLabel?: string
    tooltipText?: string
    /** Pulses in place of the count and its bar while the numbers are still being read. */
    loading?: boolean
    /** Rendered after the count — an "over capacity" pill, a link. */
    suffix?: ReactNode
}

/** Nothing granted reads as an em-dash: an empty bar would claim a capacity of zero in use. */
const EMPTY_LABEL = '—'

const BAR_HEIGHT = 4

const Layout = styled.div`
    ${tableFont};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    min-width: 0;
    max-width: 100%;
    width: 100%;
`

const Line = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
`

/* Takes the free space, so a count sits at the right edge whenever the cell carries a label. */
const Label = styled.span`
    ${fontSizeSmall};
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

/* Tabular figures: a column of counts only compares at a glance when its digits line up. */
const Count = styled.span<{ $tone: StatusTone; $color?: string }>`
    ${fontSizeSmall};
    flex: 0 0 auto;
    font-variant-numeric: tabular-nums;
    color: ${({ $tone, $color, theme }) =>
        $color ?? ($tone === 'neutral' ? theme.textMain : statusToneColors($tone, theme).text)};
`

const Empty = styled.span`
    ${fontSizeSmall};
    color: ${({ theme }) => theme.textLight};
`

const Track = styled.div<{ $color?: string }>`
    height: ${BAR_HEIGHT}px;
    border-radius: ${BAR_HEIGHT / 2}px;
    background: ${({ $color, theme }) => $color ?? theme.backgroundDark};
    overflow: hidden;
`

const Fill = styled.div<{ $tone: StatusTone; $percent: number; $color?: string }>`
    height: 100%;
    width: ${({ $percent }) => $percent}%;
    border-radius: inherit;
    background: ${({ $tone, $color, theme }) => $color ?? statusToneColors($tone, theme).mark};
`

const Suffix = styled.span`
    ${fontSizeSmaller};
    flex: 0 0 auto;
    display: flex;
    align-items: center;
`

/**
 * A `used/total` count over the capacity bar that says how close to full it is — a license's grants,
 * a package's contents.
 *
 * The tone carries the reading: quiet while there is room, `warning` past
 * `CAPACITY_WARNING_RATIO`, `danger` once the capacity is reached. The bar is clamped, so being
 * over capacity shows as a full bar plus a count that says by how much.
 *
 * `variant="share"` measures a part of a whole instead — the same count and bar, printed as a bare
 * number and always neutral (see `CountBarVariant`).
 */
export const CountBarCell = ({
    used,
    total,
    variant = 'capacity',
    color,
    label,
    emptyLabel = EMPTY_LABEL,
    tooltipText,
    loading,
    suffix
}: CountBarCellProps) => {
    const { Tooltip } = useTableSlots()
    const tone = variant === 'share' ? 'neutral' : capacityTone(used, total)
    const percent = capacityPercent(used, total)
    const granted = total !== undefined

    const content = (
        <Layout>
            <Line>
                {label && <Label title={label}>{label}</Label>}
                {loading ? (
                    <Skeleton variant='text' width={48} />
                ) : granted ? (
                    <Count $tone={tone} $color={color?.mark}>
                        {variant === 'share' ? used : `${used}/${total}`}
                    </Count>
                ) : (
                    <Empty>{emptyLabel}</Empty>
                )}
                {suffix && <Suffix>{suffix}</Suffix>}
            </Line>
            {loading ? (
                <Skeleton variant='rectangular' height={BAR_HEIGHT} />
            ) : (
                granted && (
                    <Track
                        role='progressbar'
                        aria-valuemin={0}
                        aria-valuemax={total}
                        aria-valuenow={used}
                        $color={color?.track}>
                        <Fill $tone={tone} $percent={percent} $color={color?.mark} />
                    </Track>
                )
            )}
        </Layout>
    )

    return tooltipText ? <Tooltip title={tooltipText}>{content}</Tooltip> : content
}
