import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { taktikTheme } from '../theme'

export const Input = styled(TextField)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${taktikTheme.gray800};

  & input {
    padding: 0.5rem;
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
