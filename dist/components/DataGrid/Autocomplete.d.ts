import { TextFieldProps } from '@mui/material/TextField/TextField';
import React from 'react';
type Props = Omit<TextFieldProps, 'onChange' | 'value'> & {
    options: {
        label: string;
        value: string;
    }[];
    onChange?: (value?: string) => void;
    value?: string;
    renderInput?: (props: TextFieldProps) => React.ReactNode;
};
export declare const Autocomplete: ({ options, renderInput, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
