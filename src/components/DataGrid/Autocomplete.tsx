import MUIAutocomplete from '@mui/material/Autocomplete'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import React, { useMemo } from 'react'
import { Input } from './Input'

const stopPropagation = (event: React.MouseEvent | React.KeyboardEvent) => event.stopPropagation()

type Props = Omit<TextFieldProps, 'onChange' | 'value'> & {
    options: { label: string; value: string }[]
    onChange?: (value?: string) => void
    value?: string
    renderInput?: (props: TextFieldProps) => React.ReactNode
}
export const Autocomplete = ({ options, renderInput, ...props }: Props) => {
    const selected = useMemo(
        () => options.find((option) => option.value === props.value),
        [options, props.value]
    )

    return (
        <MUIAutocomplete
            onChange={(_, value) => props.onChange?.(value?.value)}
            value={selected ?? null}
            options={options}
            onClick={stopPropagation}
            onKeyDown={stopPropagation}
            getOptionLabel={(option) => option.label}
            renderInput={
                renderInput
                    ? renderInput
                    : (params) => (
                          <Input
                              {...params}
                              onClick={stopPropagation}
                              label={props.label}
                              error={props.error}
                              helperText={props.helperText}
                          />
                      )
            }
        />
    )
}
