import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// Compiled INTO `dist/`, so a consumer never installs them — and so the rolled-up declaration has
// to inline their types rather than import them by name.
const BUNDLED_PACKAGES = ['react-data-grid', 'date-fns', 'date-fns-tz', 'react-spinners']

export default defineConfig({
    plugins: [
        react(),
        // ONE `dist/index.d.ts`, with the types of every bundled dependency INLINED into it. A
        // per-file emit named `react-data-grid` and `date-fns` as bare imports, and a registry
        // install has neither: the package's own types then failed to resolve and every consumer
        // read the whole library as `any`. Anything bundled must be inlined here for the same
        // reason, which is what `bundledPackages` lists.
        //
        // `apply: 'build'` because `vitest.config.ts` merges this config: a test run has no bundle
        // to declare and should not pay for a second type program.
        { ...dts({ rollupTypes: true, bundledPackages: BUNDLED_PACKAGES }), apply: 'build' }
    ],
    // The grid's stylesheet is emitted as `dist/style.css` — react-data-grid's own, plus whatever
    // the library adds to it — and the package names it as `taktik-react-components/style.css`.
    build: {
        lib: {
            entry: 'src/index.ts',
            fileName: 'index',
            cssFileName: 'style',
            // ES and CJS of the same entry, so a consumer mixing `import` and `require` still runs
            // ONE instance of the library — two would be two `SlotsContext`s and two focus stacks.
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            // react/jsx-runtime must stay external too: bundling it embeds one
            // React version's internals and breaks consumers on another (React 19
            // renamed the internals the bundled copy reaches for).
            // @mui/* and styled-components are peerDependencies: externalizing them makes the
            // consumer's single copy the one that runs (a bundled copy is a second MUI or
            // styled-components instance the consumer's ThemeProvider can never reach).
            //
            // react-data-grid is deliberately NOT external, and neither is date-fns. `dist/style.css`
            // carries the grid's own stylesheet with the grid's build baked into every class prefix
            // (`rdg-7-0-0-beta-60-*`, which does not even match the installed `7.0.0-beta.61`), and
            // the grid is a beta whose prefix and API move between releases: a consumer resolving
            // its own copy one beta off would render a grid whose generated class names miss this
            // stylesheet and lose every rule, silently. Bundling keeps the JS and the CSS one
            // artefact, and is the only way to GUARANTEE the single grid instance its contexts need
            // rather than merely ask for it. date-fns is bundled with it so the bundled date-fns-tz,
            // which is built on it, shares that one copy.
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'react/jsx-dev-runtime',
                /^@mui\//,
                'styled-components'
            ],
            output: {
                // The CJS build reads a peer's default export through a runtime `__esModule`
                // check, which is what every peer here needs: they are transpiled ESM, so their
                // default sits on `exports.default` rather than being `module.exports` itself —
                // the shape rollup's own default assumes.
                interop: 'auto'
            }
        }
    }
})
