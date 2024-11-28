import styled from '@emotion/styled'
import MUIButton from '@mui/material/Button'
import { taktikTheme } from './theme'
import { css } from '@emotion/react'

type Level = 'primary' | 'secondary' | 'default'
export const Button = styled(MUIButton, {
    shouldForwardProp: (prop) => prop !== '$level'
})<{ $level?: Level }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.125rem 0.75rem 0.125rem 0.5rem;
    height: 2rem;
    border-radius: 4px;
    ${({ $level }) => {
        switch ($level) {
            case 'primary': {
                return css`
                    background: ${taktikTheme.primary500};
                    color: ${taktikTheme.gray100};
                `
            }
            case 'secondary': {
                return css`
                    border: 1px solid ${taktikTheme.primary500};
                    background: ${taktikTheme.gray100};
                    color: ${taktikTheme.primary500};
                `
            }
            default: {
                return css`
                    background: ${taktikTheme.gray100};
                    color: ${taktikTheme.gray700};
                `
            }
        }
    }}
`
