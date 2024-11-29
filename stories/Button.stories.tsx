import { Button } from '../dist'
import { StoryObj } from '@storybook/react'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Container } from './Container'

export default {
    component: Button
}

export const Buttons = () => {
    return (
        <Container>
            <Button>Default</Button>
            <Button $level='primary'>Primary</Button>
            <Button $level='secondary'>Secondary</Button>
            <Button $level='secondary' startIcon={<AccountCircleIcon />}>
                With start icon
            </Button>
            <Button $level='secondary' endIcon={<AccountCircleIcon />}>
                With end icon
            </Button>
        </Container>
    )
}

export const DefaultButton: StoryObj = {
    args: {
        children: 'Click here'
    }
}

export const PrimaryButton: StoryObj = {
    args: {
        $level: 'primary',
        children: 'Click here'
    }
}
export const SecondaryButton: StoryObj = {
    args: {
        $level: 'secondary',
        children: 'Click here'
    }
}

export const ButtonWithEndIcon: StoryObj = {
    args: {
        $level: 'secondary',
        endIcon: <LogoutIcon />,
        children: 'Logout'
    }
}
export const ButtonWithStartIcon: StoryObj = {
    args: {
        $level: 'secondary',
        startIcon: <AccountCircleIcon />,
        children: 'User name'
    }
}
