import styled from 'styled-components'
import MUICheckbox from '@mui/material/Checkbox'
import { taktikPalette } from '../taktikPalette'

/**
 * The tick's colour is the grid's own custom property rather than `taktikPalette` at module scope, so
 * a consumer theming the grid does not have to accept this palette's blue. The palette value stays
 * as the fallback.
 */
export const DataGridCheckbox = styled(MUICheckbox)`
    width: 20px;
    height: 20px;

    .Mui-checked {
        color: var(--rdg-checkbox-color, ${taktikPalette.primary500});
    }
`
