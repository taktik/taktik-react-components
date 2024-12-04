import { TextFieldProps } from '@mui/material/TextField/TextField';
type Props = Omit<TextFieldProps, 'onChange' | 'value'> & {
    options: {
        label: string;
        value: string;
    }[];
    onChange?: (value?: string) => void;
    value?: string;
};
export declare const Autocomplete: ({ options, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
