import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
            include: '**/*.svg'
        }),
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: 'node_modules/react-data-grid/lib/styles.css', // Chemin source
                    dest: 'assets/styles', // Dossier de destination
                    rename: 'datagrid.css' // Nouveau nom
                }
            ]
        })
    ],
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
            external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
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
