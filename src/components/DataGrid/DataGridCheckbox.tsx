import styled from '@emotion/styled'
import MUICheckbox from '@mui/material/Checkbox'
import { taktikTheme } from '../theme'

/**
 * The tick's colour is the grid's own custom property rather than `taktikTheme` at module scope, so
 * a consumer theming the grid does not have to accept this palette's blue. The palette value stays
 * as the fallback.
 */
export const DataGridCheckbox = styled(MUICheckbox)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: var(--rdg-checkbox-color, ${taktikTheme.primary500});
    }
`
