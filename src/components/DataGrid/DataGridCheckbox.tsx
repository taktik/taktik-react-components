import styled from 'styled-components'
import MUICheckbox from '@mui/material/Checkbox'

/**
 * The tick's colour is the grid's own custom property, so a consumer theming one grid is followed
 * per grid; the host theme's accent is the fallback for a grid that sets none.
 */
export const DataGridCheckbox = styled(MUICheckbox)`
    width: ${({ theme }) => theme.table.checkboxSize};
    height: ${({ theme }) => theme.table.checkboxSize};

    .Mui-checked {
        color: var(--rdg-checkbox-color, ${({ theme }) => theme.primaryMain});
    }
`
