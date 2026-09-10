import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { useTableSlots } from '../../slots'

export interface DeleteSelectedButtonProps {
    /**
     * Whether anything is selected. A count would force a grid with an inverted selection
     * ("everything except these") to invent one, since it does not hold the rows it would delete.
     */
    hasSelection: boolean
    /** already-translated label naming what gets deleted, e.g. "Delete resident" */
    label: string
    onClick: () => void
    /** disabled for a reason other than an empty selection, e.g. a read-only organisation */
    disabled?: boolean
    /**
     * Why it is disabled, as a tooltip. A greyed button with no explanation reads as a bug; the
     * button slot wraps itself in a span when given one, so the tooltip still fires while disabled.
     */
    tooltipText?: string
}

/**
 * A toolbar's delete: visible from the start, enabled only once something is picked, and red
 * because it destroys. The click handler is expected to confirm before mutating.
 *
 * ⚠ Its home is a grid in a DIALOG, where there is no selection panel to put an action in. On a
 * page-level table the delete belongs beside the selection, with the row's own menu as its second
 * door.
 */
export const DeleteSelectedButton = ({
    hasSelection,
    label,
    onClick,
    disabled,
    tooltipText
}: DeleteSelectedButtonProps) => {
    const { Button } = useTableSlots()
    return (
        <Button
            tone='error'
            iconLeft
            disabled={disabled || !hasSelection}
            onClick={onClick}
            tooltipText={tooltipText}>
            <DeleteRoundedIcon />
            {label}
        </Button>
    )
}
