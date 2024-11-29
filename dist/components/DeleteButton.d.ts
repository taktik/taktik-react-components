import React from 'react';
import { Button } from './Button';
export declare const StyledButton: import("@emotion/styled").StyledComponent<import("@mui/material").ButtonOwnProps & Omit<import("@mui/material").ButtonBaseOwnProps, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
}, "style" | "className" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "href" | "color" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "size" | "startIcon" | "variant"> & {
    theme?: import("@emotion/react").Theme;
} & {
    $level?: "primary" | "secondary" | "default";
}, {}, {}>;
export declare const DeleteButton: (props: React.ComponentProps<typeof Button>) => import("react/jsx-runtime").JSX.Element;
