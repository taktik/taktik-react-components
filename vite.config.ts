import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // The grid's stylesheet is emitted as `dist/style.css` — react-data-grid's own, plus whatever
    // the library adds to it — and the package names it as `taktik-react-components/style.css`.
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'ReactComponents',
            fileName: 'index',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            // react/jsx-runtime must stay external too: bundling it embeds one
            // React version's internals and breaks consumers on another (React 19
            // renamed the internals the bundled copy reaches for).
            // @mui/* and @emotion/* are peerDependencies: externalizing them makes the
            // consumer's single copy the one that runs (a bundled copy is a second MUI
            // instance the consumer's ThemeProvider can never reach).
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'react/jsx-dev-runtime',
                /^@mui\//,
                /^@emotion\//
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'ReactJsxRuntime',
                    'react/jsx-dev-runtime': 'ReactJsxDevRuntime'
                }
            }
        }
    }
})
