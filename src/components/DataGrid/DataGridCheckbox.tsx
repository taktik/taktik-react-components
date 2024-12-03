import styled from '@emotion/styled'
import MUICheckbox from '@mui/material/Checkbox'
import { taktikTheme } from '../theme'

export const DataGridCheckbox = styled(MUICheckbox)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${taktikTheme.primary500};
    }
`
