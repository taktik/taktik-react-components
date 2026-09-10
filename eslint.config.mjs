import reactHooks from 'eslint-plugin-react-hooks'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

/**
 * Run by hand (`npm run lint`) and by CI on every push and pull request. There is still no
 * pre-commit hook, so a local run before a commit is worth the seconds.
 *
 * Every rule is an error and the pool is empty: a deliberate exception is annotated at its site with
 * the reason, never with a bare disable. What each is doing here:
 *
 *  - `react-hooks` — the two rules that read a hook's dependency arrays, which nothing else checks.
 *  - `explicit-function-return-type` — the one that matters most for a PUBLISHED library. Without an
 *    annotation the type a consumer installs is INFERRED from the implementation, so an internal
 *    edit can change the public API with nothing to show for it: `GridPresentation['theme']` once
 *    shipped as `ReturnType<typeof buildDataGridTheme>`, naming a function no consumer could reach.
 *  - `eqeqeq` and `no-floating-promises` — two bug classes the type checker lets through.
 *  - `prettier/prettier` — formatting as an error, so `lint` and `prettier --check` cannot disagree.
 */
export default [
    { ignores: ['dist/**', 'node_modules/**', 'examples/**'] },
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
                // `no-floating-promises` needs types. The project named is the CHECK one, which
                // covers all of `src`: the build's own excludes the tests, and a file outside the
                // project cannot be type-linted at all.
                project: ['./tsconfig.check.json'],
                tsconfigRootDir: import.meta.dirname
            }
        },
        plugins: { 'react-hooks': reactHooks, '@typescript-eslint': tseslint.plugin },
        rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            eqeqeq: 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    // An inline callback takes its type from the parameter it is passed to, and a
                    // typed variable from its own annotation; neither reaches the published surface
                    // unannotated, and spelling either out says nothing a reader did not have.
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true
                }
            ]
        }
    },
    prettierRecommended
]
