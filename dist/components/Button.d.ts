type Level = 'primary' | 'secondary' | 'default';
export declare const Button: import("@emotion/styled").StyledComponent<import("@mui/material/Button").ButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import("react").DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "style" | "className" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "href" | "color" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "size" | "startIcon" | "variant"> & {
    theme?: import("@emotion/react").Theme;
} & {
    $level?: Level;
}, {}, {}>;
export {};
