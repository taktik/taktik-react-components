import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

// Shares the build's Vite pipeline so a test resolves modules exactly like the bundle does.
export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            setupFiles: ['./src/setupTests.ts'],
            include: ['src/**/*.test.{ts,tsx}'],
            css: false,
            restoreMocks: true
        }
    })
)
