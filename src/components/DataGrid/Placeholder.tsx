import Skeleton from '@mui/material/Skeleton'
import styled from 'styled-components'

/**
 * The library's one placeholder for content on its way — MUI's `Skeleton` on the theme's
 * `surface.skeleton`. Left to itself MUI tints it black at a low alpha, which vanishes on a dark
 * theme, and the library mounts no MUI theme that could say otherwise.
 */
export const Placeholder = styled(Skeleton)`
    && {
        background-color: ${({ theme }) => theme.surface.skeleton};
    }

    @media (prefers-reduced-motion: reduce) {
        && {
            animation: none;
        }
    }
`
