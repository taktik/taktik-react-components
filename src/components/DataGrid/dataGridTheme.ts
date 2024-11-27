import { taktikTheme } from '../theme'

export type DataGridTheme = {
    '--rdg-color'?: string
    '--rdg-header-color'?: string
    '--rdg-border-color'?: string
    '--rdg-summary-border-color'?: string
    '--rdg-background-color'?: string
    '--rdg-header-background-color'?: string
    '--rdg-header-draggable-background-color'?: string
    '--rdg-row-hover-background-color'?: string
    '--rdg-row-selected-background-color'?: string
    '--rdg-row-selected-hover-background-color'?: string
    '--rdg-checkbox-focus-color'?: string
    '--rdg-selection-color'?: string
    '--rdg-font-size'?: string
    '--rdg-cell-frozen-box-shadow'?: string
    '--rdg-line-height'?: string
    '--rdg-font-weight'?: string
    '--rdg-font-family'?: string
    '--rdg-border-size'?: string
    '--rdg-cell-padding'?: string
    '--rdg-border-radius-container'?: string
}

export const defaultTheme: DataGridTheme = {
    '--rdg-color': taktikTheme.gray800,
    '--rdg-header-color': taktikTheme.gray700,
    '--rdg-border-color': taktikTheme.gray400,
    '--rdg-background-color': 'transparent',
    '--rdg-header-background-color': 'transparent',
    '--rdg-row-hover-background-color': 'transparent',
    '--rdg-row-selected-hover-background-color': 'transparent',
    '--rdg-selection-color': 'transparent',
    '--rdg-border-size': '1px',
    '--rdg-font-size': '14px',
    '--rdg-line-height': '16.94px',
    '--rdg-font-weight': '400',
    '--rdg-font-family': 'Inter, Helvetica, sans-serif',
    '--rdg-cell-padding': '8px 12px',
    '--rdg-border-radius-container': '8px'
}
