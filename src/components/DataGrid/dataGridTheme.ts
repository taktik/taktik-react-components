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
    '--rdg-header-font-size'?: string
    '--rdg-border-size'?: string
    '--rdg-cell-padding'?: string
    '--rdg-border-radius-container'?: string
    '--rdg-row-selected-color'?: string
    '--rdg-scrollbar-width'?: string
    '--rdg-scrollbar-height'?: string
    '--rdg-scrollbar-thumb-background'?: string
    '--rdg-scrollbar-track-background'?: string
    '--rdg--scrollbar-thumb-hover-background'?: string
    '--rdg--scrollbar-track-hover-background'?: string
}

export const defaultTheme: DataGridTheme = {
    '--rdg-color': taktikTheme.gray800,
    '--rdg-header-color': taktikTheme.gray700,
    '--rdg-border-color': taktikTheme.gray400,
    '--rdg-background-color': taktikTheme.forcewhite,
    '--rdg-header-background-color': taktikTheme.forcewhite,
    '--rdg-row-hover-background-color': taktikTheme.forcewhite,
    '--rdg-row-selected-hover-background-color': taktikTheme.primary400,
    '--rdg-selection-color': 'transparent',
    '--rdg-border-size': '1px',
    '--rdg-font-size': '14px',
    '--rdg-header-font-size': '14px',
    '--rdg-line-height': '16.94px',
    '--rdg-font-weight': '400',
    '--rdg-font-family': 'Inter, Helvetica, sans-serif',
    '--rdg-cell-padding': '8px 12px',
    '--rdg-border-radius-container': '8px',
    '--rdg-row-selected-background-color': taktikTheme.primary400,
    '--rdg-row-selected-color': taktikTheme.forcewhite,
    '--rdg-scrollbar-width': '8px',
    '--rdg-scrollbar-height': '8px',
    '--rdg-scrollbar-thumb-background': taktikTheme.primary500,
    '--rdg-scrollbar-track-background': taktikTheme.gray100,
    '--rdg--scrollbar-thumb-hover-background': taktikTheme.primary500,
    '--rdg--scrollbar-track-hover-background': taktikTheme.gray200
}
