# Changelog

## Unreleased

### ⚠ Breaking

- **styled-components replaces emotion.** The library's own styles are written with
  `styled-components` 6, and it is the peer the package asks for; `@emotion/*` is no longer one
  (MUI still needs it for itself, as before). A consumer on emotion alone must add
  `styled-components`.

### Changed

- **`dist/` is no longer tracked.** The package is built by `prepublishOnly` (and by CI) at publish
  time; a local consumer builds before linking.

### Added

- **The tables themselves.** `CrudTable`, `GridToolbar`, `GridPage`, `gridInDialog`, the cells
  (`ChipListCell`, `CopyCell`, `CountBarCell`, `InheritedCell`, `RelativeTimeCell`, `StatusCell`,
  `TwoLineCell`), `FilterBar` with its range popover, `TableMenu`, the row actions and gestures, the
  copy cue, the selection banner and the shared grid presentation move in from the FlowR admin with
  their tests. Three contracts carry what the consumer owns:
  - **`TableTheme`** — the tokens the table code reads from the styled-components theme (colours,
    surfaces, chip/input/scrollbar groups and a `table` group for font, radius and icon scales); a
    consumer's theme satisfies it structurally, `defaultTableTheme` is a light default.
  - **`TableSlots`** — the consumer's own Button, IconButton, Tooltip, ContextMenu, MenuSurface,
    MenuItem, TextInput, DatePicker, Callout, Checkbox, CopyButton and suggestion popper, injected
    once; `defaultTableSlots` are plain MUI so nothing need be injected to start.
  - **`TableProvider`** — one root provider for labels, translate, relative-time and date locale,
    slots, and `remeasureEvent` (the window event after which every table re-measures).
- **The `!`/`=` text-filter grammar** (`parseNegation`, `formatNegation`, `parseTextValue`,
  `formatTextValue`), the type-ahead vocabulary (`ValueSuggestion`, `FilterDraft`, …) and
  `useSlashFocus`.
- **The palette scales the grid falls back to are `taktikPalette` (`TaktikPalette`)**, no longer
  `ITheme` — that name is reserved for a consumer's own theme.
- **A labels provider.** `<LabelsProvider labels translate formatRelativeTime dateLocale>` hands
  every component its strings — `Labels` is typed, defaults are English, a count-bearing label is
  a function — and `useLabels`/`useTranslate` read them.
- **A test suite.** Vitest + jsdom + Testing Library, `npm test`; `npm run typecheck` covers the
  tests the build excludes.
- **A table's stored layout.** `useColumnWidths`, `useColumnOrder` and `useHiddenColumns` keep a
  reader's dragged widths, arranged order and hidden columns in `localStorage` under keys derived
  from the `columnVisibilityKey`, kept in step across tables sharing a key and reset together;
  `withColumnOrder` and `withFillingColumn` shape a column array from them; the column-track
  helpers (`flexTrack`, `cappedTrack`, `columnResizeFloor`, …) behind them.
- **Copy-on-click state.** `nextArm`/`staysOnLine`/`cueAnchor` (the arming reducer) and
  `hoveredLineAt` (glyph-level line hit-testing) for a cell whose value copies on click.
- **Selection algebra.** `MatchingSelection` — picked ids, or everything matching minus a few —
  with its toggles, counts and page helpers.
- **Filter values.** The vocabulary a filter chip carries (`FilterValue`, `RangeValue`,
  `TextFilterValue`, `textValue`, `negationMode`, …), shared by a bar and a URL codec.

## 1.0.0-alpha.1 — 2026-09-09

### Fixed

- **A row paints nothing; its cells carry the plane.** A data row is a grid box of its own and rdg
  painted the row colour on it, the cells inheriting — so behind the rounded corner cells of the
  first and last rows the row's square plane showed as a square of row colour around every rounded
  corner of every table. The cells now carry the plane in every state (resting, hovered, selected,
  selected and hovered) and the row box is transparent. A consumer painting rows itself paints the
  cells: `.rdg-row > .rdg-cell`, not `.rdg-row`.
- **A grid ends where its rows end.** rdg painted the grid BOX from `--rdg-background-color`, the
  same variable its rows take, so a table with opaque rows reached a plane of its own all the way
  down to the pager — and the only way out was to blank the variable and repaint the rows from
  outside, which every host box then had to remember. The grid's own ground is transparent now and
  shows whatever the grid stands on; `--rdg-background-color` answers what a ROW is painted and
  nothing else. A consumer wanting a filled box puts the grid inside one.
- **The empty state no longer fades with the pinned-column shadows.** The rule dimming rdg's shadow
  elements matched every role-less child of `.rdg`, and the `.rdg-no-data` box is one: a consumer
  setting `--rdg-frozen-shadow-opacity` to `0` lost its "no rows" message and icon entirely. The box
  is named out of that rule.

## 1.0.0-alpha.0 — 2026-08-31

Everything since 0.0.33, which is the whole of the `feature/ImproveAdmin` branch. Driven by the
FlowR admin migration; reviewed end to end (findings-only review, then fix waves) before this
publish.

### ⚠ Breaking

- **`react-data-grid` left `dependencies` — the package is BUNDLED.** The grid is compiled into
  `dist/` and re-exported whole, so a consumer reaches rdg's own exports (`SortColumn`,
  `RenderCellProps`, `useRowSelection`, …) through this package and must **never** import
  `react-data-grid` directly: that is a second grid instance, which fails only once a context is
  involved. Until the shipped `.d.ts` is rolled up, a consumer using rdg-originated **types** still
  needs `react-data-grid` resolvable (a devDependency suffices).
- **The scrollbar CSS variables were renamed** from the double-dashed typo (`--rdg--scrollbar-*`)
  to `--rdg-scrollbar-*`. A consumer that spelled the typo must rename.
- **Peer ranges narrowed**: `@mui/material` `>=9 <10` (built and typed against 9.2;
  `slotProps.input` has moved between MUI majors before), `react`/`react-dom` `^19.2` — the
  bundled grid imports `useEffectEvent`, which does not exist before React 19.2.
- **An `exports` map was added** and the tarball ships `dist/` alone (plus README and this file).
  Deep imports into `src/` no longer resolve; the stylesheet is reachable as
  `taktik-react-components/dist/style.css`.
- **`onColumnResize` reports column KEYS**, not rdg's indices into its own re-sorted array.
- **Local sorting: the third header click returns to `defaultSortColumns`** (ascending →
  descending → the grid's own opening order) instead of flipping direction forever. Controlled
  consumers are untouched — they always received rdg's raw empty array.
- **The row click runs the consumer's row action immediately**; the double-click gesture retired.

### Added

- **react-data-grid 7.0.0-beta.47 → beta.61**, with both pinned edges native (`frozen` +
  `frozenRight` as end-frozen bands) and column/row **virtualization back on**.
- **Expandable detail rows** (`expandable`, `withDetailRows`, `ExpanderToggle`, …), with
  collision-proof synthetic row ids.
- **Column chooser**: persisted hidden columns (`onHiddenColumnsChange`), a live "reset column
  layout" (`onReset`), and **column reordering** — drag a row or Alt+Arrow it
  (`onColumnOrderChange`, announcements via `reorderAnnouncement`).
- **Column resizing** by dragging the header boundary, the house 8px seam inside the cell's clip,
  double-click to auto-fit; stored measured widths are dropped when the column set changes, so a
  toggle cannot freeze yesterday's layout.
- **Controlled-or-uncontrolled local pagination** (`pagination.control`), per half; the footer
  renders its own `rowsPerPageOptions` and always offers the size in use; `totalLabel` puts the
  row count at the footer's left end.
- **`sortRowsLocally`** splits where the sort VALUE lives from who ORDERS the rows, so a
  controlled sort no longer costs the ordering.
- **Theming**: `DataGridTheme` custom properties (checkbox, header filter, loading dots, the
  frozen-edge shadow via `--rdg-frozen-shadow-opacity`) — the grid stops dressing its consumers.
- **A flat eslint config** (`react-hooks` only), run by hand: `npm run lint`.

### Fixed

- The header filter is a real component: two filtered columns no longer erase each other's values,
  and its input follows the consumer's theme.
- `localStorage` access is guarded everywhere — a partitioned or blocked-storage context (an
  embedded iframe) no longer takes the whole grid down.
- Local sorting sees comparators that arrive after first paint; each sort resolves its comparator
  once per column instead of once per comparison.
- The chooser survives its own gestures: it stays open across toggles, a drag past the menu edge
  cannot freeze it, the click that ends a drag is eaten once and only once — including when
  dispatched by the keyboard — and a reorder no longer remounts the grid per step.
- A rapid row click is never eaten by the selection it just made.
- The measured-width cache is keyed to the column set, so a set that changes after first paint
  cannot leave the grid wider or narrower than its container.

### Known gaps (tracked for a stable 1.0)

- The shipped `.d.ts` still names `react-data-grid` (see Breaking); a type roll-up retires the
  consumer-side devDependency.
- No tests in this repository — the consuming application's suites are the guard.
