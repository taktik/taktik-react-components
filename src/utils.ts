import { formatInTimeZone } from 'date-fns-tz'
import { isDate, isValid, parseISO } from 'date-fns'

export enum DATE_FORMAT {
    UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'",
    DATE_WITH_TIME = 'dd-MM-yyyy HH:mm',
    DATE = 'dd-MM-yyyy',
    /** The compact form a filter chip's date range reads in, where width is what it is short of. */
    DATE_SHORT = 'dd-MM-yy',
    TIME = 'HH:mm'
}

/**
 * A date whatever shape it arrived in, or `undefined` when it is not one.
 *
 * A string is read as ISO rather than handed to `new Date`, whose parsing of a non-ISO string is
 * left to the engine.
 */
export const asDate = (value: string | number | Date): Date | undefined => {
    const date = typeof value === 'string' ? parseISO(value) : new Date(value)
    return isValid(date) ? date : undefined
}

export const convertDate = (
    value: unknown,
    format: string = DATE_FORMAT.UTC_FORMAT,
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
): string => {
    if (!value) {
        return ''
    }
    const date = !isDate(value) && typeof value === 'string' ? new Date(value) : value
    if (!isValid(date)) {
        return '--'
    }
    return formatInTimeZone(value as string | number | Date, timeZone, format)
}

export const getStringToCompare = (value: string): string => value.trim().toLowerCase()
