export declare enum DATE_FORMAT {
    UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'",
    DATE_WITH_TIME = "dd-MM-yyyy HH:mm",
    DATE = "dd-MM-yyyy",
    TIME = "HH:mm"
}
export declare const convertDate: (value: unknown, format?: string, timeZone?: string) => string;
export declare const getStringToCompare: (value: string) => string;
