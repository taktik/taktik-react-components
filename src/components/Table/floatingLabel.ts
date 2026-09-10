import { css } from 'styled-components'
import { floatingShadow, fontSizeSmall, radiusSmall, tableFont } from '../../theme/tableStyles'

/**
 * The look of a small label floating just above the pointer, declared ONCE.
 *
 * Two things wear it and they are two halves of one gesture — the offer to copy a value (`CopyCue`)
 * and the confirmation that it happened (`CopiedBubble`) — so the second appears exactly where the
 * first was, in the same box. It is the TOOLTIP's vocabulary (`tooltipBackground` /
 * `tooltipColor`, the small step of the type scale, the house font and radius), because that is
 * what a word hovering beside what it is about already uses.
 *
 * `position: fixed` and portalled to the body: a grid clips its own overflow, and the row the
 * pointer is on is often the last one on screen. The offset is the same for both, which is what
 * makes the confirmation land where the offer was rather than jumping.
 */
export const floatingLabel = css`
    position: fixed;
    z-index: ${({ theme }) => theme.table.floatingZIndex};
    transform: translate(-50%, calc(-100% - ${({ theme }) => theme.table.floatingOffset}));
    padding: ${({ theme }) => theme.table.floatingPadding};
    white-space: nowrap;
    background-color: ${({ theme }) => theme.tooltipBackground};
    color: ${({ theme }) => theme.tooltipColor};
    ${tableFont}
    ${fontSizeSmall}
    ${radiusSmall}
    ${floatingShadow}
`
