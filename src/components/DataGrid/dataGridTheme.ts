export type DataGridTheme = {
    '--rdg-color'?: string
    '--rdg-header-color'?: string
    '--rdg-border-color'?: string
    /** The column-resize seam under the pointer; the border colour where none is named. */
    '--rdg-resize-handle-color'?: string
    '--rdg-summary-border-color'?: string
    '--rdg-background-color'?: string
    '--rdg-header-background-color'?: string
    '--rdg-header-draggable-background-color'?: string
    '--rdg-row-hover-background-color'?: string
    '--rdg-row-selected-background-color'?: string
    /** The bar down an open row and its detail. */
    '--rdg-expanded-accent-color'?: string
    '--rdg-row-selected-hover-background-color'?: string
    '--rdg-checkbox-focus-color'?: string
    /** The tick inside a ticked selection checkbox. */
    '--rdg-checkbox-color'?: string
    /**
     * The veil and the spinner shown while the grid is loading. It is ONE colour: the veil is that
     * colour at a tenth, the spinner is it at full strength, and a grid on a dark ground wants both
     * changed together.
     */
    '--rdg-loading-color'?: string
    '--rdg-selection-color'?: string
    '--rdg-font-size'?: string
    '--rdg-line-height'?: string
    '--rdg-font-weight'?: string
    '--rdg-font-family'?: string
    '--rdg-header-font-size'?: string
    '--rdg-border-size'?: string
    '--rdg-cell-padding'?: string
    /**
     * How much of the gradient react-data-grid paints beside a pinned column is actually shown,
     * 0 to 1. Defaults to a whisper; a consumer whose two themes want different strengths (a dark
     * shadow reads far less over a dark ground) names its own value per theme.
     */
    '--rdg-frozen-shadow-opacity'?: string
    '--rdg-border-radius-container'?: string
    '--rdg-row-selected-color'?: string
    '--rdg-scrollbar-width'?: string
    '--rdg-scrollbar-height'?: string
    '--rdg-scrollbar-thumb-background'?: string
    '--rdg-scrollbar-track-background'?: string
    '--rdg-scrollbar-thumb-hover-background'?: string
    '--rdg-scrollbar-track-hover-background'?: string
}

/**
 * What a grid draws with before a host has said anything — NEUTRAL, and nobody's design system:
 * generic greys, a system font stack, plain steps.
 *
 * ⚠ Every value here is LIVE for the keys `buildDataGridTheme` (`useGridPresentation`) does not
 * name, since that hook spreads this object and overrides part of it. So a value left here is a
 * value the host cannot answer for: anything belonging to a design system goes THERE, read off the
 * theme, and only the fallback stays behind.
 */
export const defaultTheme: DataGridTheme = {
    '--rdg-color': '#212121',
    '--rdg-header-color': '#616161',
    '--rdg-border-color': '#E0E0E0',
    '--rdg-background-color': '#FFFFFF',
    '--rdg-header-background-color': '#FFFFFF',
    '--rdg-row-hover-background-color': '#F5F5F5',
    '--rdg-row-selected-hover-background-color': '#E3F2FD',
    '--rdg-selection-color': 'transparent',
    '--rdg-border-size': '1px',
    '--rdg-font-size': '14px',
    '--rdg-header-font-size': '14px',
    '--rdg-line-height': '1.4',
    '--rdg-font-weight': '400',
    '--rdg-font-family': 'system-ui, -apple-system, sans-serif',
    '--rdg-cell-padding': '8px 12px',
    '--rdg-border-radius-container': '8px',
    '--rdg-row-selected-background-color': '#E3F2FD',
    '--rdg-expanded-accent-color': '#1976D2',
    '--rdg-row-selected-color': '#212121',
    '--rdg-scrollbar-width': '8px',
    '--rdg-scrollbar-height': '8px',
    '--rdg-scrollbar-thumb-background': '#BDBDBD',
    '--rdg-scrollbar-track-background': 'transparent',
    '--rdg-scrollbar-thumb-hover-background': '#9E9E9E',
    '--rdg-scrollbar-track-hover-background': 'transparent',
    '--rdg-checkbox-color': '#1976D2',
    '--rdg-loading-color': '#1976D2'
}
