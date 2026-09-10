import 'styled-components'
import { TableTheme } from './theme/tableTheme'

declare module 'styled-components' {
    export interface DefaultTheme extends TableTheme {}
}
