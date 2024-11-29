import React from 'react'
import { PulseLoader } from 'react-spinners'

interface LoaderProps {
    color?: string
}

export const Loader = React.memo(({ color }: LoaderProps) => <PulseLoader color={color} />)
