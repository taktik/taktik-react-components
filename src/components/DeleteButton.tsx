import React from 'react'
import styled from '@emotion/styled'
import { Button } from './Button'
import { taktikTheme } from './theme'
import DeleteIcon from '@mui/icons-material/Delete'

export const StyledButton = styled(Button)`
    border: 1px solid ${taktikTheme.red600};
    background: ${taktikTheme.red50};
    color: ${taktikTheme.red600};
`

export const DeleteButton = (props: React.ComponentProps<typeof Button>) => {
    return <StyledButton {...props} startIcon={<DeleteIcon />} />
}
