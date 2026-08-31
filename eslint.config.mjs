import tsParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'

/**
 * `react-hooks` and nothing else, run by hand (`npm run lint`) — no CI, no pre-commit hook.
 *
 * The library has no test suite and the consuming app is its guard, so the two rules that read a
 * hook's dependency arrays are the only automated check anything here gets. Both are errors: the
 * pool is empty and a deliberate exception is annotated at its site with the reason, never with a
 * bare disable.
 */
export default [
    { ignores: ['dist/**', 'node_modules/**'] },
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true }
            }
        },
        plugins: { 'react-hooks': reactHooks },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error'
        }
    }
]
