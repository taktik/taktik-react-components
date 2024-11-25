import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: 'src/index.ts',  // Point d'entrée de la bibliothèque
            name: 'TaktikReactComponents', // Nom de la bibliothèque
            fileName: 'index', // Nom du fichier de sortie
            formats: ['es', 'umd'], // Formats d'export : ESModule et UMD
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // Exclure react et react-dom pour éviter de les inclure dans la bibliothèque
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
