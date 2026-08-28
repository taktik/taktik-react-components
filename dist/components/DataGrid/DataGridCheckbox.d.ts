/**
 * The tick's colour is the grid's own custom property rather than `taktikTheme` at module scope, so
 * a consumer theming the grid does not have to accept this palette's blue. The palette value stays
 * as the fallback.
 */
export declare const DataGridCheckbox: import("@emotion/styled").StyledComponent<import("@mui/material/Checkbox").CheckboxProps & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
