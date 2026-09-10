import { JSX, memo, useCallback } from 'react'
import type { RenderCheckboxProps } from 'react-data-grid'
import { useTableSlots } from '../../slots'

/**
 * The selection cell's checkbox — the CONSUMER's own, at the geometry a dense grid cell wants.
 *
 * react-data-grid renders a bare MUI `Checkbox` when nothing is supplied, which in a host that
 * mounts no MUI `ThemeProvider` is MUI's stock `rgba(0,0,0,0.6)` — a black box on every dark row, in
 * the one column every table has. `renderers.renderCheckbox` is the extension point for exactly
 * this, so the grid's selection box is the same control, with the same tokens, as every other
 * checkbox around it.
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

/** Handed to every grid through `useGridPresentation`, so no consumer wires it. */
export const renderGridCheckbox = (props: RenderCheckboxProps): JSX.Element => (
    <GridCheckbox {...props} />
)
