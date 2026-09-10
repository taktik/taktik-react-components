import styled from 'styled-components'
import { useTableSlots } from '../../../slots'
import { TruncatingCell } from '../gridCells'

const Layout = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    max-width: 100%;
`

export interface CopyCellProps {
    /** What lands on the clipboard. No button is offered when it is empty. */
    value: string | undefined
    /** What the cell shows, when that is not the copied value itself (a name over its id). */
    display?: string
    /** Tooltip and accessible name of the copy button, already translated. */
    tooltipText: string
    /**
     * Runs the copy. The consumer passes whatever reports success and failure — a cell cannot reach
     * a toast layer itself.
     */
    onCopy: (value: string) => void
    disabled?: boolean
}

/** A value too long for its column, with a button that puts the whole of it on the clipboard. */
export const CopyCell = ({ value, display, tooltipText, onCopy, disabled }: CopyCellProps) => {
    const { CopyButton } = useTableSlots()
    const shown = display ?? value ?? ''
    return (
        <Layout>
            <TruncatingCell title={shown}>{shown}</TruncatingCell>
            {value && (
                <CopyButton
                    value={value}
                    tooltipText={tooltipText}
                    onCopy={onCopy}
                    disabled={disabled}
                />
            )}
        </Layout>
    )
}
