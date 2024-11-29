import { ITheme, taktikTheme } from './components'
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react'

export const ThemeProvider = ({
    children,
    theme
}: {
    children: React.ReactNode
    theme?: ITheme
}) => {
    return <ThemeProviderEmotion theme={theme ?? taktikTheme}>{children}</ThemeProviderEmotion>
}
