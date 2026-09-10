import 'styled-components'
import { ITheme } from './theme/ITheme'

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
