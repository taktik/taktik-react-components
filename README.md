# taktik-react-components

Shared React components used by Taktik front-ends (flowr-admin-react, studio-frontend, flowr-studio-admin).

- `DataGrid`: wrapper around [react-data-grid](https://github.com/adazzle/react-data-grid) with MUI-styled header
  filters, pagination, column visibility chooser, local sorting/filtering hooks.
- `theme` / `dataGridTheme`: MUI theme helpers.
- `utils`: misc helpers (dates, ...).

Published on Taktik's Nexus npm registry as `@taktik/taktik-react-components` (same registry as
`@taktik/flowr-common-js`). `react` and `react-dom` are externals: the consumer provides them (React 18).

## Usage

The consumer needs the `@taktik` scope mapped to the Nexus registry (already the case in projects using
`@taktik/flowr-common-js`), in its `.npmrc` or `~/.npmrc`:

```
@taktik:registry=https://npm.taktik.be/repository/npm/
```

(reads are anonymous, no login needed to install). Then:

```bash
yarn add @taktik/taktik-react-components@<exact version>
```

```ts
import { DataGrid } from '@taktik/taktik-react-components'
import '@taktik/taktik-react-components/dist/assets/styles/datagrid.css'
```

## Develop

Node version is pinned in `.nvmrc` (`nvm use`). Yarn 1 (classic) lockfile.

```bash
yarn                # install (also installs the husky pre-commit hook: prettier via lint-staged)
yarn build          # vite build (ES + UMD bundles in dist/) + tsc (type declarations)
yarn format         # prettier on src/
```

To test a local change in a consumer, `yarn link` this repo (or `yarn add file:../taktik-react-components`).

## Build & publish (CI)

Publishing is done by the Taktik CI (Cloud Build, driven by the build-manager), see [`ci/cloudbuild.yaml`](ci/cloudbuild.yaml):

1. the version is computed by [git-version](https://github.com/taktik/git-version) from the last git tag, e.g. tag
   `0.1` + 12 commits → `0.1.12-g<hash>` (feature branches get a branch identifier, e.g. `0.1.12-feature.xyz.g<hash>`);
2. `yarn install --frozen-lockfile && yarn build`, then `npm version` is set to the computed version (the `version`
   field in `package.json` is never bumped by hand);
3. `npm publish` on the Nexus (registry taken from `publishConfig`, credentials from the CI Nexus account): `main`
   publishes under the `latest` dist-tag, any other built branch under a dist-tag named after the branch (so it never
   shadows `latest`).

Because the version carries a `-g<hash>` pre-release suffix, consumers should pin exact versions
(`"@taktik/taktik-react-components": "0.1.12-g3f2a9c1b7e"`), `^` ranges won't pick up new builds.

To bump the major/minor version, push a new tag on `main` (`git tag 0.2 && git push origin 0.2`).

### Manual publish (fallback only)

```bash
yarn && yarn build
npm version <version> --no-git-tag-version
npm login --registry=https://npm.taktik.be/repository/npm/ --scope=@taktik   # your Nexus account
npm publish
```
