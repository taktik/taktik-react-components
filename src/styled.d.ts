import 'styled-components'
import { TaktikPalette } from './components/taktikPalette'

declare module 'styled-components' {
    export interface DefaultTheme extends TaktikPalette {}
}
