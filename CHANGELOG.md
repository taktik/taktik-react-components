# Changelog

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
