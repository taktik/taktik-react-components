import '@emotion/react'
import { ITheme } from './components'

declare module '@emotion/react' {
    export interface Theme extends ITheme {}
}
