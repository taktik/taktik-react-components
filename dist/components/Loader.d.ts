import React from 'react';
type LoaderColor = 'primary' | 'secondary' | 'error';
interface LoaderProps {
    color?: LoaderColor;
}
export declare const StyledLoader: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & {
    $color?: LoaderColor;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Loader: React.MemoExoticComponent<({ color }: LoaderProps) => import("react/jsx-runtime").JSX.Element>;
export {};
