import { JSX, memo, useCallback } from 'react'
import type { RenderCheckboxProps } from 'react-data-grid'
import { useTableSlots } from '../../slots'

/**
 * The selection column's checkbox — the CONSUMER's own, at the geometry a dense grid cell wants.
 *
 * It is the grid's ONLY checkbox: the header's select-all and every row's box go through it, so a
 * consumer that injects a `Checkbox` slot is followed in the one column every table has. Without it
 * react-data-grid renders a bare MUI `Checkbox`, which in a host that mounts no MUI `ThemeProvider`
 * is MUI's stock `rgba(0,0,0,0.6)` — a black box on every dark row.
 */
export const GridCheckbox = memo(
    ({
        checked,
        indeterminate,
        onChange,
        tabIndex,
        'aria-label': ariaLabel
    }: RenderCheckboxProps) => {
        const { Checkbox } = useTableSlots()
        // the grid reports shift-click so a range select works; keep that contract
        const report = useCallback(
            (isChecked: boolean, shiftKey: boolean) => onChange(isChecked, shiftKey),
            [onChange]
        )
        return (
            <Checkbox
                checked={checked}
                indeterminate={indeterminate}
                onChange={report}
                aria-label={ariaLabel}
                // The grid hands each cell the tab index its roving focus decided, and dropping it
                // makes every row's checkbox a tab stop of its own: 25 rows, 25 stops between the
                // toolbar and anything after the table. Only the focused row's box is tabbable.
                tabIndex={tabIndex}
            />
        )
    }
)

/** Handed to every grid through `useGridPresentation`, and the grid's own fallback besides. */
export const renderGridCheckbox = (props: RenderCheckboxProps): JSX.Element => (
    <GridCheckbox {...props} />
)
