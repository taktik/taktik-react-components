import React from 'react'

import styled from '@emotion/styled'
import MUIIconButton from '@mui/material/IconButton'

export const IconButton = styled(MUIIconButton, {
    shouldForwardProp: (prop) =>
        !['$background', '$hoverBackground', '$activeBackground', '$color'].includes(prop)
})<{
    $background?: string
    $hoverBackground?: string
    $activeBackground?: string
    $color?: string
}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    background: ${({ $background }) => $background ?? 'transparent'};

    &:hover {
        background: ${({ $hoverBackground, theme }) => $hoverBackground ?? theme.gray300};
    }

    &:active {
        background: ${({ $activeBackground, theme }) => $activeBackground ?? theme.gray400};
        transition: background 0.1s ease-in-out;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    > svg {
        width: 24px;
        height: 24px;
    }

    > * {
        color: ${({ $color }) => $color ?? '#3E4F5F'};
    }
`
