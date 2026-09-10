import { useLabelsContext } from '../../../labels'
import { useTableSlots } from '../../../slots'
import { asDate, convertDate, DATE_FORMAT } from '../../../utils'
import { TruncatingCell } from '../gridCells'

/**
 * Past this age a relative label stops helping: "8 months ago" is less use than the date itself.
 * The absolute form is what a date column shows, so an aged-out cell reads like its neighbours.
 */
export const RELATIVE_TIME_MAX_DAYS = 30

const DAY_MS = 24 * 60 * 60 * 1000

export interface RelativeTimeCellProps {
    value: string | number | Date | null | undefined
    /** Shown when there is no timestamp at all. */
    fallback?: string
    /** Age at which the cell switches to the absolute date; 0 to always show the date. */
    absoluteAfterDays?: number
}

/**
 * A timestamp as "3 minutes ago", with the exact date on hover — and as the date itself once it is
 * old enough that the relative form says nothing useful.
 */
export const RelativeTimeCell = ({
    value,
    fallback = '-',
    absoluteAfterDays = RELATIVE_TIME_MAX_DAYS
}: RelativeTimeCellProps) => {
    const { formatRelativeTime } = useLabelsContext()
    const { Tooltip } = useTableSlots()
    const date = value === null || value === undefined ? undefined : asDate(value)
    if (!date) {
        return <TruncatingCell>{fallback}</TruncatingCell>
    }

    const absolute = convertDate(date, DATE_FORMAT.DATE_WITH_TIME)
    const aged = Date.now() - date.getTime() > absoluteAfterDays * DAY_MS
    const shown = aged ? absolute : formatRelativeTime(date)

    return (
        <Tooltip title={absolute}>
            <TruncatingCell>{shown}</TruncatingCell>
        </Tooltip>
    )
}
