export declare enum DATE_FORMAT {
    UTC_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'",
    TEXT = "dd-MM-yyyy HH:mm",
    TEXT_WITHOUT_TIME = "dd-MM-yyyy"
}
export declare const convertDate: (value: unknown, format?: string) => string;
