# TAKTIK REACT COMPONENTS

## The package is BUNDLED

`react-data-grid` is compiled INTO `dist/`, which is why it sits in `devDependencies` beside the
three other bundled packages (`react-spinners`, `date-fns`, `date-fns-tz`) and is not a runtime
dependency of this one. `DataGrid` re-exports it whole, so a consumer reaches react-data-grid's own
exports — `SortColumn`, `RenderCellProps`, `useRowSelection` — **through this package**:

```ts
import { DataGrid, SortColumn } from 'taktik-react-components'
```

⚠ Never write `from 'react-data-grid'` in a consumer. Installing it there gives you a SECOND
instance of the grid: the shared constants are plain strings and still match, so nothing fails until
a context is involved and a cell renderer throws `useRowSelection must be used within renderCell`
from a cell that visibly is inside one.

Everything the library uses at RUNTIME rather than bundling — React, `@mui/material`, `styled-components` —
is external, so the copy that runs is the consumer's own and the consumer's `ThemeProvider` is the
one the grid reads.

## Peer ranges

- **`react` / `react-dom`: `^19.2`, and it must not be loosened.** It looks over-tight next to the
  others and it is the honest one: the bundled react-data-grid imports `useEffectEvent`, which does
  not exist before React 19.2, so a consumer on 19.1 fails at import time.
- **`@mui/material`: `>=9 <10`.** The library is built, typed and only ever run against 9.2, and it
  passes `slotProps.input`, which has moved between MUI majors before.
- **`styled-components`: `>=6`.** The library's own styles are written with it (transient `$` props
  throughout, which is a v6 contract), and it must be the consumer's copy for the consumer's
  `ThemeProvider` to reach the grid.

## Using the tables

Wrap the consumer once: a styled-components `ThemeProvider` whose theme satisfies `TableTheme`
(`defaultTableTheme` to start), then `TableProvider` with the consumer's labels (`translate` for its
own keys), its primitives as `slots`, and the window event after which tables re-measure. Every
`CrudTable`, `FilterBar` and cell below reads those from context; no page threads anything.

## Working on the library

```bash
npm test          # Vitest + jsdom + Testing Library; a module moves in WITH its tests
npm run typecheck # tsc over src including the tests, which the build's tsc excludes
npm run lint      # react-hooks only, by hand — there is no CI and no pre-commit hook
npm run build     # dist/ is NOT tracked: build before linking locally; prepublishOnly (and CI) build for publish
```
