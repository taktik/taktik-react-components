import { ReactNode } from 'react'
import styled from 'styled-components'
import { fontSizeBig, fontSizeNormal, tableFont } from '../../theme/tableStyles'

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
    color: ${({ theme }) => theme.textLight};

    svg {
        /* deliberately off the icon scale: this one is an illustration, not a control's icon */
        font-size: 44px;
        opacity: 0.5;
    }
`

const Title = styled.p`
    ${tableFont};
    ${fontSizeBig};
    font-weight: 500;
    margin: 0;
`

const Hint = styled.p`
    ${tableFont};
    ${fontSizeNormal};
    margin: 0;
`

export interface GridEmptyStateProps {
    /** A muted icon conveying the table's subject (e.g. a barred camera for recordings). */
    icon: ReactNode
    /** Already-translated headline, e.g. "No residents". */
    title: string
    /** Optional already-translated second line, e.g. a "no rows match your filters" hint. */
    hint?: string
}

/**
 * The empty state every grid shows: a muted icon, a title and an optional hint. Content only —
 * whatever renders it does the centering, whether that is the grid's `noDataMessage` slot or a
 * consumer's own empty branch. Strings arrive already translated.
 */
export const GridEmptyState = ({ icon, title, hint }: GridEmptyStateProps) => (
    <Layout>
        {icon}
        <Title>{title}</Title>
        {hint && <Hint>{hint}</Hint>}
    </Layout>
)
