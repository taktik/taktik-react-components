import { formatInTimeZone } from 'date-fns-tz'
import { isDate, isValid } from 'date-fns'

export enum DATE_FORMAT {
    UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'",
    DATE_WITH_TIME = 'dd-MM-yyyy HH:mm',
    DATE = 'dd-MM-yyyy',
    TIME = 'HH:mm'
}

export const convertDate = (
    value: unknown,
    format: string = DATE_FORMAT.UTC_FORMAT,
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
) => {
    if (!value) {
        return ''
    }
    const date = !isDate(value) && typeof value === 'string' ? new Date(value) : value
    if (!isValid(date)) {
        return '--'
    }
    return formatInTimeZone(value as string | number | Date, timeZone, format)
}

export const getStringToCompare = (value: string) => value.trim().toLowerCase()
