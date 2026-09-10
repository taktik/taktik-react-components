# Changelog

## 1.0.0-alpha.2 — 2026-09-10

### ⚠ Breaking

- **The public surface was curated: 357 exported names are now 154.** The entry point declares every
  export BY NAME instead of re-exporting barrels, and `src/api.test.ts` pins the whole set, so
  either direction shows up as a diff in review. What went is the library's own business that a
  barrel had made public — styled fragments, layout stores, per-hook internals, the pieces a
  component is assembled from. What a consumer composes tables out of all stays: `CrudTable`,
  `DataGrid`, `GridPage`, `GridToolbar`, `GridInDialog`, every cell, `FilterBar` with its
  filter-value vocabulary, the selection algebra, the column types, `rowActionsColumn`, and the two
  column-track helpers a column array is shaped with — `cappedTrack` and `flexTrack`. A project that
  reached one of the removed names should ask for it to be exported on purpose rather than
  deep-import it: the `exports` map has closed that route since `1.0.0-alpha.0`.
- **What is not about a collection view LEFT the package.** The README now states the boundary, and
  this is the release that applies it. Gone from the surface, and from the package where it was
  never a table's business: `statusToneColors`/`StatusTone`/`StatusToneColors` (a tone colours a
  banner and a settings row too), `loneActionTooltip`, `DetailPanelFields` with its `DetailField`
  vocabulary (a details panel is not a collection view), `TableMenu`/`TableMenuActions`,
  `capacityTone`/`CAPACITY_WARNING_RATIO` (licence-seat policy, not rendering), `useSlashFocus` and
  its global stack, `FILTER_DEBOUNCE_MS`, `withAlpha`, and `convertDate`/`DATE_FORMAT`/`asDate`.
  Each belongs to the consumer; where a table still needs the behaviour the library keeps a PRIVATE
  copy, and that duplication is deliberate — an exported twin is what lets a consumer import the
  wrong one by autocomplete. Three come back as contracts instead: the import/export kebab is a node
  the page hands to `GridToolbar` as **`trailingMenu`**, the `"/"` shortcut arrives as
  **`registerSearchField`** on `TableProvider` (absent it, the library claims no key at all), and the
  debounce as **`filterDebounceMs`** (neutral 300 ms default, privately).
- **`CountBarCell` takes a `tone`.** How full is too full is the consumer's policy, so the `capacity`
  variant no longer tones itself; the prop defaults to `neutral`.
- **`export * from 'react-data-grid'` is gone.** The two rdg types a consumer of THIS package ends
  up holding — a sort state it keeps, a cell renderer it writes — are re-exported by name:
  `SortColumn` and `RenderCellProps`. Star-exporting the rest made names as generic as `Row`, `Cell`
  and `Column` this package's promise, and every rdg upgrade a breaking change of ours. rdg is
  bundled, so a consumer still must not install or import it (see the README); anything else of its
  surface that a table genuinely needs gets re-exported by name on request.
- **`ITheme` and `taktikTheme` are no longer exported**, and the 80-colour palette behind them
  (`taktikPalette`) is **deleted** — a company palette, `mainToolBarColor` included, was never a
  table library's to hold. `TableTheme` is the contract a consumer's theme satisfies, and
  `defaultTableTheme` is now a NEUTRAL fallback (system font stack, a plain 12/14/16 scale, 2/4/8px
  radii, generic greys) rather than one product's scale restated. A default that happens to match one
  application is a drift trap: that application moves its value, the copy here does not, and nothing
  fails.
- **Every design value the library used to state is now a `TableTheme` token** the consumer authors —
  page padding and gap, cell padding, footer height and gap, focus-ring width and offset, the
  floating label's z-index/offset/padding, checkbox size, border width, line-height, the empty
  state's illustration size, input padding, scrollbar size and the dragged-row surface. ⚠ Two of
  these were LIVE, not fallbacks, so a consumer that supplies the tokens will see them change: the
  grid's own font size (`--rdg-font-size`/`--rdg-header-font-size`, previously a fixed 14px that
  nothing overrode) and the expanded-row accent (previously a fixed `#1A9BF6`, which no dark theme
  could reach).
- **styled-components replaces emotion.** The library's own styles are written with
  `styled-components` 6, and it is the peer the package asks for; `@emotion/*` is no longer one (MUI
  still needs it for itself, as before). A consumer on emotion alone must add `styled-components` —
  and mount `<StyledEngineProvider injectFirst>`, without which MUI's own sheet is injected last and
  outranks this library's rules. The README says where.
- **CJS replaces UMD.** `exports["."].require` and `main` name `dist/index.cjs`, where the UMD build
  made a consumer mixing `import` and `require` load two instances of the library — two
  `SlotsContext`s and two "/" focus stacks. A consumer reaching for `dist/index.umd.cjs` by path
  must use the `exports` map (or `dist/index.cjs`).
- **The header-ground custom property is `--tk-grid-header-ground`**, no longer
  `--flowr-grid-header-ground` — a generic library's public CSS contract carries no product's name.
  A host that declared the old one by hand renames it; `GRID_HEADER_GROUND_VAR` is the same export
  and needs no change.
- **`FilterBar`'s `values` prop is `rawValues`**, the name `GridToolbar`'s `TableFilterState`
  already used for the same map, so forwarding one into the other cannot drift. A consumer's own
  filter state usually keeps a PARSED map under `values`, and the two names stay distinct on
  purpose.

### Changed

- **The shipped types are ONE rolled-up `dist/index.d.ts`**, with the types of every bundled
  dependency inlined into it. The per-file emit named `react-data-grid` and `date-fns` as bare
  imports across ten declaration files, and a registry install has neither: the package's own types
  failed to resolve there (ten × TS2307) and a consumer read the whole library as `any` with no
  error to show for it. This closes the type roll-up recorded as a known gap under
  `1.0.0-alpha.0` — a consumer needs no devDependency on rdg to use rdg-originated types.
- **A consumer install is now verified from OUTSIDE the repository.** `npm run verify:consumer`
  packs the library, installs the tarball into a temp directory beside the peers and nothing else,
  and typechecks `examples/consumer-typecheck/probe.tsx` against it with `skipLibCheck: false` — the
  only arrangement in which a declaration naming a bundled package fails, since every bundled
  package is also a devDependency here. It also asserts that `react-data-grid`, `date-fns`,
  `date-fns-tz` and `react-spinners` are absent from that install.
- **`sideEffects` is declared** as `["dist/style.css"]`. The emitted JS carries no stylesheet import
  — vite extracts the CSS — so a consumer importing one cell can tree-shake the rest of the library,
  while the stylesheet itself stays immune to it.
- **Every function's return type is annotated, and lint enforces it.** For a published library this
  is a promise about the types: without an annotation the type a consumer installs is INFERRED from
  the implementation, so an internal edit can change the public API with nothing to show for it —
  `GridPresentation['theme']` shipped as `ReturnType<typeof buildDataGridTheme>`, naming a function
  no consumer could reach. `eslint` also runs `eqeqeq`, `no-floating-promises` and prettier as
  errors now, all at zero.
- **CI runs on every push and pull request** (`.github/workflows/verify.yml`): install, `typecheck`,
  `lint`, `test`, `build`, then the consumer typecheck above. There was none before.
- **`dist/` is no longer tracked.** The package is built by `prepublishOnly` (and by CI) at publish
  time; a local consumer builds before linking.
- **The exported functions that take a theme name their theme types explicitly** — `TableTheme` for
  the theme a consumer supplies, `DataGridTheme` for the grid variables `useGridPresentation` hands
  back. The
  library's `styled.d.ts` is never part of a consumer's compilation, so a signature naming
  styled-components' `DefaultTheme` accepted any theme at all there. See the README for the
  three-line augmentation that extends the same guarantee to a consumer's own `ThemeProvider`.
- **The column chooser renders through the slots contract.** Its menu items and its checkbox are the
  consumer's `MenuItem` and `Checkbox` slots rather than plain MUI, so a host that injected its own
  controls no longer has one menu that ignores them.

### Fixed

- **The default `DatePicker` speaks the LOCAL calendar day**, in both directions: a bound of local
  midnight no longer offers the day before it east of Greenwich, and a picked day leaves as that
  day's local midnight rather than UTC's.
- **Three default slots no longer drop what they are handed**: `IconButton` shows an action that is
  still running (`loading` — the toolbar's refresh and a row's single action both pass it), `Button`
  tightens its left padding for a leading icon (`iconLeft`), and `MenuSurface` opened with no
  `anchorPosition` anchors nothing instead of naming an `anchorEl` it has not got.
- **Enter in a filter field is the FIELD's, whether it has offered a line or not.** A table inside a
  dialog stands inside that dialog's form, whose accept button is the submit — so an Enter left
  unprevented in an EMPTY type-ahead was the dialog saving itself.

### Added

- **The tables themselves.** `CrudTable`, `GridToolbar`, `GridPage`, `gridInDialog`, the cells
  (`ChipListCell`, `CopyCell`, `CountBarCell`, `InheritedCell`, `RelativeTimeCell`, `StatusCell`,
  `TwoLineCell`), `FilterBar` with its range popover, the row actions and gestures, the copy cue,
  the selection banner and the shared grid presentation move in from the FlowR admin with their
  tests. Three contracts carry what the consumer owns:
    - **`TableTheme`** — the tokens the table code reads from the styled-components theme (colours,
      surfaces, chip/input/scrollbar groups and a `table` group for font, radius and icon scales); a
      consumer's theme satisfies it structurally, `defaultTableTheme` is a light default.
    - **`TableSlots`** — the consumer's own Button, IconButton, Tooltip, ContextMenu, MenuSurface,
      MenuItem, TextInput, DatePicker, Callout, Checkbox, CopyButton and suggestion popper, injected
      once; `defaultTableSlots` are plain MUI so nothing need be injected to start.
    - **`TableProvider`** — one root provider for labels, translate, relative-time and date locale,
      slots, `remeasureEvent` (the window event after which every table re-measures),
      `registerSearchField` (the host's `/` shortcut stack) and `filterDebounceMs`.
- **The `!`/`=` text-filter grammar** (`parseNegation`, `formatNegation`, `parseTextValue`,
  `formatTextValue`) and the type-ahead vocabulary (`ValueSuggestion`, `FilterDraft`, …).
- **A labels provider.** `<LabelsProvider labels translate formatRelativeTime dateLocale>` hands
  every component its strings — `Labels` is typed, defaults are English, a count-bearing label is a
  function — and `useLabels`/`useTranslate` read them.
- **A test suite.** Vitest + jsdom + Testing Library, `npm test`; `npm run typecheck` covers the
  tests the build excludes.
- **A table's stored layout.** `useColumnWidths`, `useColumnOrder` and `useHiddenColumns` keep a
  reader's dragged widths, arranged order and hidden columns in `localStorage` under keys derived
  from the `columnVisibilityKey`, kept in step across tables sharing a key and reset together;
  `withColumnOrder` and `withFillingColumn` shape a column array from them; the column-track helpers
  (`flexTrack`, `cappedTrack`, `columnResizeFloor`, …) behind them.
- **`DataGridTheme` names `--rdg-resize-handle-color`**, the column-resize seam the library's own
  styles already read.
- **`useRemeasureOnHostEvent`.** The subscription behind `remeasureEvent`: it reads the event name
  off `TableProvider` and re-measures a table whenever the host announces its chrome settled.
  `CrudTable` uses it, and a consumer's own grid can.
- **Copy-on-click state.** `nextArm`/`staysOnLine`/`cueAnchor` (the arming reducer) and
  `hoveredLineAt` (glyph-level line hit-testing) for a cell whose value copies on click.
- **Selection algebra.** `MatchingSelection` — picked ids, or everything matching minus a few — with
  its toggles, counts and page helpers.
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
- **The scrollbar CSS variables were renamed** from the double-dashed typo (`--rdg--scrollbar-*`) to
  `--rdg-scrollbar-*`. A consumer that spelled the typo must rename.
- **Peer ranges narrowed**: `@mui/material` `>=9 <10` (built and typed against 9.2;
  `slotProps.input` has moved between MUI majors before), `react`/`react-dom` `^19.2` — the bundled
  grid imports `useEffectEvent`, which does not exist before React 19.2.
- **An `exports` map was added** and the tarball ships `dist/` alone (plus README and this file).
  Deep imports into `src/` no longer resolve; the stylesheet is reachable as
  `taktik-react-components/dist/style.css`.
- **`onColumnResize` reports column KEYS**, not rdg's indices into its own re-sorted array.
- **Local sorting: the third header click returns to `defaultSortColumns`** (ascending → descending
  → the grid's own opening order) instead of flipping direction forever. Controlled consumers are
  untouched — they always received rdg's raw empty array.
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
  renders its own `rowsPerPageOptions` and always offers the size in use; `totalLabel` puts the row
  count at the footer's left end.
- **`sortRowsLocally`** splits where the sort VALUE lives from who ORDERS the rows, so a controlled
  sort no longer costs the ordering.
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
