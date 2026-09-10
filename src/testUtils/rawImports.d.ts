/**
 * Vite's `?raw` suffix, which hands a module's own SOURCE to the importer. Declared here rather than
 * by pulling in `vite/client`, and under `testUtils` so the published types never carry it: the one
 * reader is the API-surface test, which asserts what the entry point declares — including the type
 * names, which leave no trace at run time to look at.
 */
declare module '*?raw' {
    const source: string
    export default source
}
