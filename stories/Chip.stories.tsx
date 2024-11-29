import { Chip } from '../dist'
import { Container } from './Container'
import { StoryObj } from '@storybook/react'

export default {
    component: Chip
}

export const Chips = () => {
    return (
        <Container>
            <Chip label='Chip' />
            <Chip label='Chip' $color={'red'} $backgroundColor={'white'} />
            <Chip label='Chip' $color={'black'} $backgroundColor={'white'} />
            <Chip label='Chip' $color={'white'} $backgroundColor={'green'} />
        </Container>
    )
}

export const BasicChip: StoryObj = {
    args: {
        label: 'Chip',
        $color: 'red',
        $backgroundColor: 'white'
    }
}
