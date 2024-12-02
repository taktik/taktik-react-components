import styled from '@emotion/styled'
import MUICheckbox from '@mui/material/Checkbox'

export const DataGridCheckbox = styled(MUICheckbox)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: ${({ theme }) => theme.primary500};
    }
`
