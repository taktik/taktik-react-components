import MUIChip from '@mui/material/Chip'
import styled from '@emotion/styled'
import { taktikTheme } from './theme'

export const Chip = styled(MUIChip, { shouldForwardProp: (prop) => !prop.startsWith('$') })<{
    $color?: string
    $backgroundColor?: string
}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;
    height: 1rem;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 0.65625rem;
    color: ${({ $color }) => $color ?? taktikTheme.primary500};
    background: ${({ $backgroundColor }) => $backgroundColor ?? taktikTheme.primary100};
    width: fit-content;
`
