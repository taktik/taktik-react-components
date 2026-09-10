import 'styled-components'
import { ITheme } from './components'

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
