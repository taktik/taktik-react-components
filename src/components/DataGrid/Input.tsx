import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { taktikTheme } from '../theme'

export const Input = styled(TextField)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${taktikTheme.gray800};
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
  }

  & label,
  & label.Mui-focused {
    color: ${taktikTheme.gray800};
  }

  & .MuiOutlinedInput-root {
    &:hover fieldset,
    fieldset,
    &.Mui-focused fieldset {
      border-color: ${taktikTheme.gray400};
    }
  }
}
`
