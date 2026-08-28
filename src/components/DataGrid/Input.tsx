import styled from '@emotion/styled'
import TextField from '@mui/material/TextField'
import { taktikTheme } from '../theme'

/**
 * The header filter's field. Its ink and its edge come from the grid's OWN custom properties rather
 * than from `taktikTheme` at module scope: a consumer theming the grid dark got a light-grey box
 * with near-black text in it. The palette values stay as the fallback, so a consumer that sets
 * nothing sees what it always did.
 */
export const Input = styled(TextField)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--rdg-color, ${taktikTheme.gray800});
  padding: 0 !important;

  .MuiInputBase-root {
    padding: 0 !important;
  }

  & input {
    padding: 0.5rem !important;
    border: solid 1px var(--rdg-border-color, ${taktikTheme.gray400});
    border-radius: 4px;
    color: var(--rdg-color, ${taktikTheme.gray800});
  }

  & label,
  & label.Mui-focused {
    color: var(--rdg-color, ${taktikTheme.gray800});
  }

  fieldset {
    display: none;
  }

}
`
