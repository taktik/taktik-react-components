/** Unwrap a nullable value, failing loudly instead of asserting with a non-null assertion. */
export const required = <T>(value: T | null | undefined, label = 'value'): T => {
    if (value === null || value === undefined) {
        throw new Error(`Expected ${label} to be present, got ${value}`)
    }
    return value
}
