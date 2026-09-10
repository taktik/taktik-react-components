# TAKTIK REACT COMPONENTS

## What belongs in here, and what does not

This package renders a **collection view**: a set of records a reader browses, filters, selects and
pages — drawn as rows today, and tiles are the same idea. Deciding what may live here is three
tests, in order. "Is it a table?" is deliberately not one of them: that is a question about a
thing's nature, so every case turns into an argument about words.

**1. The consumer veto.** Is it used by a surface that is NOT a collection view — a settings page, a
banner, a details panel, a calendar, a form? Then it belongs to the consumer, whatever it looks
like. This is a question about actual imports, so it has exactly one answer.

**2. Mechanism, not policy.** Of what survives the veto, this package owns the *mechanism*: layout,
measurement, persistence, gestures, keyboard, state algebra, the grammar of a filter value. The
consumer owns the *policy*: what values mean, where data comes from, the words, and every design
token. The filter bar is the worked example — the chip row, the operator, the debounce and the
`!`/`=` grammar live here; which fields are searchable, where suggestions come from and how a chip
becomes a query belong to the consumer and arrive as props.

**3. A contract, never a default.** What this package needs from its host arrives as a `TableTheme`
token, a `TableSlots` slot, a `TableProvider` input or a callback. A fallback may exist so a table
renders with no host theme at all, but it must be **neutral** — never one consumer's own scale,
palette or wording. A default that happens to match one application is a silent drift trap: that
application changes its value, this package keeps the copy, and nothing fails.

⚠ **Duplication across this boundary is correct, not a defect.** Two small copies in two layers beat
one shared copy that makes an unrelated screen depend on a collection-view library. Never
"deduplicate" a helper by moving it in here. Where a name would sensibly exist on both sides, this
package keeps its copy **private** instead of exporting it — an exported twin is what lets a
consumer reach the wrong one by autocomplete.

## The package is BUNDLED

`react-data-grid` is compiled INTO `dist/`, which is why it sits in `devDependencies` beside the
three other bundled packages (`react-spinners`, `date-fns`, `date-fns-tz`) and is not a runtime
dependency of this one. `DataGrid` re-exports the two rdg types a consumer ends up holding —
`SortColumn` and `RenderCellProps` — **through this package**:

```ts
import { DataGrid, SortColumn } from 'taktik-react-components'
```

⚠ Never write `from 'react-data-grid'` in a consumer, and do not install it. A second copy is a
SECOND instance of the grid: the shared constants are plain strings and still match, so nothing
fails until a context is involved and a cell renderer throws `useRowSelection must be used within
renderCell` from a cell that visibly is inside one.

It also could not be styled. `dist/style.css` carries the grid's own stylesheet with the grid's
build baked into every class prefix (`rdg-7-0-0-beta-60-*`, which does not even match the installed
`7.0.0-beta.61`), and rdg is a beta whose prefix and API move between releases — a consumer's own
copy, one beta off, would render a grid whose generated class names miss this stylesheet and lose
every rule, silently. One bundled copy keeps the JS and the CSS a single artefact.

Everything the library uses at RUNTIME rather than bundling — React, `@mui/material`,
`@mui/icons-material`, `styled-components` — is external, so the copy that runs is the consumer's
own and the consumer's `ThemeProvider` is the one the grid reads.

The shipped types are one rolled-up `dist/index.d.ts` with every bundled type inlined into it, so a
consumer resolves them with the peers alone.

## Peer ranges

- **`react` / `react-dom`: `^19.2`, and it must not be loosened.** It looks over-tight next to the
  others and it is the honest one: the bundled react-data-grid imports `useEffectEvent`, which does
  not exist before React 19.2, so a consumer on 19.1 fails at import time.
- **`@mui/material` / `@mui/icons-material`: `>=9 <10`.** The library is built, typed and only ever
  run against 9.2, and it passes `slotProps.input`, which has moved between MUI majors before.
- **`styled-components`: `>=6`.** The library's own styles are written with it (transient `$` props
  throughout, which is a v6 contract), and it must be the consumer's copy for the consumer's
  `ThemeProvider` to reach the grid.

## Using this library in a new project

### 1. Install the peers

```bash
npm install taktik-react-components
npm install react react-dom @mui/material @mui/icons-material styled-components
# MUI needs emotion for itself, whatever this library's own styles are written with
npm install @emotion/react @emotion/styled
```

Nothing else. `react-data-grid` and `date-fns` in particular are bundled — see above.

### 2. Import the stylesheet once

```ts
import 'taktik-react-components/style.css'
```

Once, anywhere the bundler will reach — the application entry point is the usual place. It is
react-data-grid's stylesheet plus everything this library adds, and without it the tables have no
styles at all. (`sideEffects` names this file, so importing one cell still lets a bundler
tree-shake the rest of the library.)

### 3. ⚠ `<StyledEngineProvider injectFirst>` — the one that is easy to miss

The library's components are MUI components wrapped in styled-components. Both engines write to the
document, and by default MUI's emotion sheet is injected LAST, so it outranks the library's rules at
equal specificity: buttons, inputs and menus come out looking like bare MUI and no error says why.
`injectFirst` puts MUI's sheet first and settles the order.

```tsx
<StyledEngineProvider injectFirst>
    <ThemeProvider theme={myTheme}>
        <TableProvider …>{children}</TableProvider>
    </ThemeProvider>
</StyledEngineProvider>
```

It wraps the whole application, not each table.

### 4. The theme: `TableTheme`

Every colour, surface and scale a table reads comes off the styled-components theme, and
`TableTheme` is the shape it has to have — colours, surfaces, the chip/input/scrollbar/dialog
groups, and a `table` group for the font, radius and icon scales. A consumer's own theme satisfies
it structurally; `defaultTableTheme` is a light default to start from, and to extend:

```tsx
import { defaultTableTheme, type TableTheme } from 'taktik-react-components'

const myTheme: TableTheme = { ...defaultTableTheme, primary: '#0b5fff' }
```

#### Making the contract a compile error (opt-in, three lines)

`ThemeProvider` accepts whatever styled-components' `DefaultTheme` is in the CONSUMER's own
compilation, and by default that is an empty interface — so a theme missing half the tokens a table
reads compiles, and the gaps show up as `undefined` colours at runtime. The library's exported
functions that take a theme (`useGridPresentation`) name `TableTheme` and are checked; a
`ThemeProvider` is not. Three lines in the consumer close that:

```ts
// styled.d.ts, anywhere in the consumer's own sources
import type { TableTheme } from 'taktik-react-components'

declare module 'styled-components' {
    export interface DefaultTheme extends TableTheme {}
}
```

### 5. `TableProvider`: what the host owes a table

One provider, mounted once above every table. Each input is optional, and each has a default:

- **`labels`** — any subset of the library's fixed strings (`Labels`); English fills the rest.
- **`translate`** — the consumer's own `t`, for the keys the library cannot type in advance.
- **`slots`** — any subset of `TableSlots`: the host's own Button, IconButton, Tooltip, ContextMenu,
  MenuSurface, MenuItem, TextInput, DatePicker, Callout, Checkbox, CopyButton and suggestion popper.
  `defaultTableSlots` (plain MUI) fills the rest, so nothing need be injected to start.
- **`remeasureEvent`** — the window event name after which every table drops its MEASURED column
  widths and asks for fresh ones. A grid re-measures a flexible column only while every column is
  inside its viewport, so a table wide enough to have scrolled one out keeps the widths it was
  measured at and stops short of its own container; whatever settles the chrome around it — a pane
  seam, a collapsing sidebar, the window — announces it. Unset means no table ever re-measures
  itself, which is right for a host with no resizable chrome.
- **`formatRelativeTime`** — "3 days ago", in the reader's language; what `RelativeTimeCell` shows.
- **`dateLocale`** — the date-fns `Locale` a date filter renders its calendar with.
- **`registerSearchField`** — how a filter bar's search field joins the HOST's keyboard-shortcut
  stack, so that pressing `/` focuses whichever field is frontmost — a table's, or one of the
  application's own. An app-wide shortcut cannot be owned here: two stacks would both answer the same
  keypress. The host hands over a registration function returning its own unregister; unset, the
  library claims no key at all.
- **`filterDebounceMs`** — how long until typing has settled. It is the application's interaction
  pause rather than a table's, so the consumer states it; the default is a neutral 300 ms.

```tsx
<TableProvider
    labels={{ rowsPerPage: 'Rows' }}
    translate={t}
    slots={{ Button: MyButton, DatePicker: MyDatePicker }}
    remeasureEvent='shell:pane-settled'
    formatRelativeTime={(value) => formatDistanceToNow(new Date(value))}
    dateLocale={fr}
    registerSearchField={registerSlashTarget}
    filterDebounceMs={300}>
    <MyPage />
</TableProvider>
```

Every `CrudTable`, `FilterBar` and cell below reads those from context; no page threads anything.
`LabelsProvider` and `SlotsProvider` stay exported for a consumer that wants only one of them (a
test harness), but an application mounts `TableProvider`.

### 6. A table

```tsx
<CrudTable
    rows={devices}
    columns={columns}
    columnVisibilityKey='fleet.devices'
    totalLabel={(count) => `${count} devices`}
/>
```

`columnVisibilityKey` is required and required to be UNIQUE: the hidden columns, dragged widths and
arranged order are persisted under it.

## Working on the library

```bash
npm test                 # Vitest + jsdom + Testing Library; a module moves in WITH its tests
npm run typecheck        # tsc over src including the tests, which the build excludes
npm run lint             # react-hooks, return types, eqeqeq, floating promises, prettier
npm run build            # dist/ is NOT tracked: build before linking locally
npm run verify:consumer  # packs dist/ and typechecks examples/consumer-typecheck against it
```

CI (`.github/workflows/verify.yml`) runs all five on every push and pull request. There is no
pre-commit hook, so a local run before committing is still worth the seconds.

`verify:consumer` is the one that cannot be replaced by anything inside `src`: every bundled
dependency is also a devDependency here, so a declaration file naming `react-data-grid` or
`date-fns` resolves locally and breaks only in a consumer.
