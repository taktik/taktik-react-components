import React from 'react'
import { Button } from './Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'

export const AddButton = (props: React.ComponentProps<typeof Button>) => {
    return <Button $level={'secondary'} {...props} startIcon={<AddCircleIcon />} />
}
