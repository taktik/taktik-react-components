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
    border: solid 1px ${taktikTheme.gray400};
    border-radius: 4px;
  }

  & label,
  & label.Mui-focused {
    color: ${taktikTheme.gray800};
  }

  fieldset {
    display: none;
  }

}
`
