import styled from '@emotion/styled'
import MUIButton from '@mui/material/Button'
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
    ${({ $level, theme }) => {
        switch ($level) {
            case 'primary': {
                return css`
                    background: ${theme.primary500};
                    color: ${theme.gray100};
                `
            }
            case 'secondary': {
                return css`
                    border: 1px solid ${theme.primary500};
                    background: ${theme.gray100};
                    color: ${theme.primary500};
                `
            }
            default: {
                return css`
                    background: ${theme.gray100};
                    color: ${theme.gray700};
                `
            }
        }
    }}
`
