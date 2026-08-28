/**
 * The header filter's field. Its ink and its edge come from the grid's OWN custom properties rather
 * than from `taktikTheme` at module scope: a consumer theming the grid dark got a light-grey box
 * with near-black text in it. The palette values stay as the fallback, so a consumer that sets
 * nothing sees what it always did.
 */
export declare const Input: import("@emotion/styled").StyledComponent<{
    variant?: import("@mui/material/TextField").TextFieldVariants | undefined;
} & Omit<import("@mui/material/TextField").FilledTextFieldProps | import("@mui/material/TextField").OutlinedTextFieldProps | import("@mui/material/TextField").StandardTextFieldProps, "variant"> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
