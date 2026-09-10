import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import { radiusSmall } from '../../theme/tableStyles'

/**
 * The header filter's field. Its ink and its edge come from the grid's OWN custom properties, so a
 * consumer theming one grid darker than another is followed per grid rather than per theme; the
 * host theme's own field tokens are the fallback for a grid that sets none.
 */
export const Input = styled(TextField)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--rdg-color, ${({ theme }) => theme.surface.text});
    padding: 0 !important;

    .MuiInputBase-root {
        padding: 0 !important;
    }

    & input {
        padding: ${({ theme }) => theme.input.padding} !important;
        border: solid ${({ theme }) => theme.table.borderWidth}
            var(--rdg-border-color, ${({ theme }) => theme.input.borderColor});
        ${radiusSmall};
        color: var(--rdg-color, ${({ theme }) => theme.surface.text});
    }

    & label,
    & label.Mui-focused {
        color: var(--rdg-color, ${({ theme }) => theme.surface.text});
    }

    fieldset {
        display: none;
    }
`
