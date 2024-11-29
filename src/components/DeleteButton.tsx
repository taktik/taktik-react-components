import React from 'react'
import styled from '@emotion/styled'
import { Button } from './Button'
import DeleteIcon from '@mui/icons-material/Delete'

export const StyledButton = styled(Button)`
    border: 1px solid ${({ theme }) => theme.red600};
    background: ${({ theme }) => theme.red50};
    color: ${({ theme }) => theme.red600};
`

export const DeleteButton = (props: React.ComponentProps<typeof Button>) => {
    return <StyledButton {...props} startIcon={<DeleteIcon />} />
}
