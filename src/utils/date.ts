import { formatInTimeZone } from 'date-fns-tz'
import { isDate, isValid } from 'date-fns'

export enum DATE_FORMAT {
    UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'",
    TEXT = 'dd-MM-yyyy HH:mm',
    TEXT_WITHOUT_TIME = 'dd-MM-yyyy'
}

export const convertDate = (value: unknown, format: string = DATE_FORMAT.UTC_FORMAT) => {
    if (!value) {
        return ''
    }
    const date = !isDate(value) && typeof value === 'string' ? new Date(value) : value
    if (!isValid(date)) {
        return '--'
    }
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return formatInTimeZone(value as string | number | Date, timeZone, format)
}
