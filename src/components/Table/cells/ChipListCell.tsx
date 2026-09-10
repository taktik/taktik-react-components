import Chip from '@mui/material/Chip'
import { JSX, ReactElement } from 'react'
import styled from 'styled-components'
import { useTableSlots } from '../../../slots'
import { fontSizeSmaller, iconSizeSmall, radiusSmall, tableFont } from '../../../theme/tableStyles'
import { statusToneColors, StatusTone } from '../../../status/statusTone'

/**
 * A chip's own colours, overriding the tone.
 *
 * Only the CONSUMER knows whether a colour CODES rather than judges: a license grant's hue says
 * which category it is — the same reason `CountBarCell` takes a `color`. `usedBackground` paints
 * the part of the chip already in use, which is what turns a chip into its own capacity bar.
 */
export interface ChipColors {
    background: string
    usedBackground: string
    /**
     * The rule marking where the used part ends — the boundary between the chip's two states.
     *
     * It carries the separation the two washes cannot: the label and the mark both ride ON them, and
     * each has to stay legible over both halves, which caps how far apart the washes may go. So the
     * boundary is drawn in a colour that reads against both of them instead.
     */
    fillEdge: string
    /** The leading mark — an icon riding beside the label, which may read louder than the label. */
    mark: string
    color: string
}

export interface ChipListItem {
    /** Stable across renders — the entity's id, not its position. */
    key: string
    label: string
    /**
     * A value pinned to the chip's far end — a `used/total` count. The label ellipsises before this
     * does, because the number is the half a reader came for and a truncated one is a lie.
     */
    trailing?: string
    /**
     * `default` is the quiet chip. The four status tones tint it the way `StatusCell` tints a
     * status, for a value the reader is meant to judge rather than just read — `danger` for one to
     * act on (an orphan reference, a capacity already reached).
     */
    tone?: 'default' | StatusTone
    tooltipText?: string
    /** A mark before the label, in `colors.mark` — a shield saying how full a capacity is. */
    icon?: ReactElement
    /** Consumer-supplied colours; they win over the tone. */
    colors?: ChipColors
    /**
     * 0–100. How much of the chip reads as used, painted in `colors.usedBackground` and closed by a
     * rule in `colors.fillEdge`. Absent, the chip is a flat hue and says nothing about capacity.
     */
    fillPercent?: number
}

export interface ChipListCellProps {
    items: ChipListItem[]
    /** Chips shown before the rest collapse into a "+N"; 0 shows them all. */
    maxVisible?: number
    /** Shown instead of the chips when there are none. */
    emptyLabel?: string
    /**
     * Show every chip, wrapping onto as many lines as they need instead of counting the tail into a
     * "+N". Only for a grid whose rows grow with their content — see `chipListLines`, which says how
     * many lines to budget for.
     */
    wrap?: boolean
    /**
     * Lay the chips out in that many equal columns instead of letting them flow (needs `wrap`).
     *
     * Flowing chips pack by their own width, so how many fit on a line depends on the words in
     * them — a grid sizing its rows from `chipListLines` can then only GUESS, and a guess low enough
     * to be safe leaves half the row empty. Fixed columns make that count exact.
     */
    columns?: number
}

/** Enough to read at a glance; beyond it the cell becomes a wall of pills. */
const DEFAULT_MAX_VISIBLE = 3

/** A chip plus the gap under it — what one wrapped line of them occupies. */
export const CHIP_LINE_HEIGHT = 24

/**
 * How many lines `count` chips wrap onto, given how many fit across the cell.
 *
 * Exact when the cell lays its chips out in that many `columns`. For chips left to FLOW it is an
 * upper bound derived from the narrowest the cell can be — a row is then never too short for its
 * chips, at worst a good deal too tall for them, which is why a fixed-column cell is the exact one.
 */
export const chipListLines = (count: number, chipsPerLine: number): number =>
    Math.max(1, Math.ceil(count / Math.max(chipsPerLine, 1)))

const Layout = styled.div<{ $wrap: boolean; $columns?: number }>`
    align-items: center;
    gap: 4px;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;

    ${({ $columns }) =>
        $columns
            ? `
        display: grid;
        grid-template-columns: repeat(${$columns}, minmax(0, 1fr));
        align-content: center;
        /* A grid cell is a flex container, so a block child is sized to its CONTENT there — without
           this the tracks shrink to the chips inside them and the columns stop lining up. */
        width: 100%;
    `
            : `
        display: flex;
    `}

    ${({ $wrap, $columns }) =>
        $wrap &&
        !$columns &&
        `
        flex-wrap: wrap;
        align-content: center;
        row-gap: 4px;
    `}
`

const Empty = styled.span`
    color: ${({ theme }) => theme.textLight};
`

/** The rule between the two halves — thin enough to read as a boundary, not as a third band. */
const FILL_EDGE_WIDTH = 2

/**
 * A chip that reports a fill is drawn as its own capacity bar: the used part in `usedBackground`,
 * the rest in `background`, and a hard rule in `fillEdge` where one ends. One paint, so a full chip
 * reads hotter than an empty one without a second element inside it.
 *
 * The rule is what tells the two states apart. Both washes are tints of ONE hue carrying a label and
 * a mark that each have to read over both of them, which caps the step between them at 1.07–1.19:1
 * on a light theme — present, but not a difference anyone sees at a glance. The boundary carries it.
 *
 * It is drawn INSIDE the used part, so it marks the boundary exactly rather than moving it. A chip
 * with nothing used and one with nothing left have no boundary to mark, and are painted flat.
 */
export const chipBackground = (colors: ChipColors, fillPercent?: number): string => {
    if (fillPercent === undefined || fillPercent <= 0) {
        return colors.background
    }
    if (fillPercent >= 100) {
        return colors.usedBackground
    }
    const edge = `calc(${fillPercent}% - ${FILL_EDGE_WIDTH}px)`
    return `linear-gradient(to right, ${colors.usedBackground} 0 ${edge}, ${colors.fillEdge} ${edge} ${fillPercent}%, ${colors.background} ${fillPercent}% 100%)`
}

/** In a fixed grid the chips fill their track, so their fills and their counts line up. */
const ChipHolder = styled.span<{ $stretch: boolean }>`
    display: ${({ $stretch }) => ($stretch ? 'block' : 'inline-flex')};
    min-width: 0;
`

const ChipLabel = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
`

const ChipText = styled.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

/* Tabular figures: a column of counts only compares at a glance when its digits line up. */
const ChipTrailing = styled.span`
    flex: 0 0 auto;
    margin-left: auto;
    font-variant-numeric: tabular-nums;
`

const ChipStyled = styled(Chip)<{
    $tone: ChipListItem['tone']
    $colors?: ChipColors
    $fillPercent?: number
    $stretch: boolean
}>`
    height: 20px;
    ${({ $stretch }) => ($stretch ? 'width: 100%;' : '')}
    max-width: ${({ $colors }) => ($colors ? '100%' : '160px')};
    ${radiusSmall};
    background: ${({ $tone, $colors, $fillPercent, theme }) =>
        $colors
            ? chipBackground($colors, $fillPercent)
            : $tone && $tone !== 'default'
              ? statusToneColors($tone, theme).background
              : theme.chip.background};
    color: ${({ $tone, $colors, theme }) =>
        $colors
            ? $colors.color
            : $tone && $tone !== 'default'
              ? statusToneColors($tone, theme).text
              : theme.chip.color};

    .MuiChip-label {
        ${tableFont};
        ${fontSizeSmaller};
        padding: 0 6px;
        flex: 1 1 auto;
        min-width: 0;
    }

    .MuiChip-icon {
        ${iconSizeSmall};
        margin: 0 -2px 0 5px;
        color: ${({ $colors, theme }) => $colors?.mark ?? theme.chip.color};
    }
`

/**
 * Several small values in one cell — the networks an agent serves, the packages a device carries.
 *
 * Only the first few are drawn; the rest are counted in a trailing chip that names them on hover,
 * so a row with twenty of them stays one line high and the column keeps its width. `wrap` trades
 * that away: every chip is drawn, on as many lines as they need, for a table whose rows are sized
 * from their chip count and whose reader has to see the whole set at once — with `columns`, in a
 * fixed grid, so the row's height and what it holds agree exactly.
 *
 * A chip may also carry its own `colors`, a leading `icon` and a `fillPercent`, which together turn
 * it into a small capacity bar that says what it is (the hue), how full it is (the fill) and
 * whether that is a problem (the mark).
 */
export const ChipListCell = ({
    items,
    maxVisible = DEFAULT_MAX_VISIBLE,
    emptyLabel = '-',
    wrap = false,
    columns
}: ChipListCellProps): JSX.Element => {
    const { Tooltip } = useTableSlots()

    const chip = (
        { key, label, trailing, tone, tooltipText, icon, colors, fillPercent }: ChipListItem,
        stretch: boolean
    ): JSX.Element => {
        const rendered = (
            <ChipStyled
                key={key}
                label={
                    trailing ? (
                        <ChipLabel>
                            <ChipText>{label}</ChipText>
                            <ChipTrailing>{trailing}</ChipTrailing>
                        </ChipLabel>
                    ) : (
                        label
                    )
                }
                icon={icon}
                $tone={tone}
                $colors={colors}
                $fillPercent={fillPercent}
                $stretch={stretch}
            />
        )
        return tooltipText ? (
            <Tooltip key={key} title={tooltipText}>
                <ChipHolder $stretch={stretch}>{rendered}</ChipHolder>
            </Tooltip>
        ) : (
            rendered
        )
    }

    if (!items.length) {
        return <Empty>{emptyLabel}</Empty>
    }

    const limit = wrap || maxVisible <= 0 ? items.length : maxVisible
    const visible = items.slice(0, limit)
    const hidden = items.slice(limit)

    const gridColumns = wrap ? columns : undefined
    return (
        <Layout $wrap={wrap} $columns={gridColumns}>
            {visible.map((item) => chip(item, !!gridColumns))}
            {hidden.length > 0 && (
                <Tooltip title={hidden.map((item) => item.label).join(', ')}>
                    <span>
                        <ChipStyled
                            label={`+${hidden.length}`}
                            $stretch={false}
                            $tone={
                                hidden.some((item) => item.tone === 'danger') ? 'danger' : 'default'
                            }
                        />
                    </span>
                </Tooltip>
            )}
        </Layout>
    )
}
