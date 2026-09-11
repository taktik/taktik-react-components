/**
 * Typechecks `examples/consumer-typecheck/probe.tsx` against the PACKED library, from outside.
 *
 * A registry install is the only place two of this package's promises can be checked: that
 * `dist/index.d.ts` resolves with the peers alone, and that the tarball carries what a consumer
 * needs. In this repository every bundled dependency is also a devDependency, so a declaration
 * naming `react-data-grid` or `date-fns` resolves here and fails only in the consumer — which is
 * exactly the defect this exists to make unrepeatable.
 *
 * Run it with `yarn verify:consumer` after a build; CI runs the same script.
 */
import { execFileSync } from 'node:child_process'
import {
    cpSync,
    existsSync,
    mkdtempSync,
    readdirSync,
    readFileSync,
    rmSync,
    writeFileSync
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../..')
const probeDir = join(repoRoot, 'examples/consumer-typecheck')

/**
 * Compiled INTO the bundle, so a consumer never installs them. The check is that they are ABSENT
 * from the probe's `node_modules` and unnamed by the shipped declaration.
 */
const MUST_BE_ABSENT = ['react-data-grid', 'date-fns', 'date-fns-tz', 'react-spinners']

/** Everything a consumer really does install: the peers, plus the types any project has. */
const PEERS = [
    '@mui/icons-material',
    '@mui/material',
    // MUI's own peers, which it needs for itself whatever this library's styles are written with —
    // its `@mui/styled-engine` declarations name them.
    '@emotion/react',
    '@emotion/styled',
    'react',
    'react-dom',
    'styled-components',
    '@types/react',
    '@types/react-dom',
    // styled-components' own declarations reach for `NodeJS.*` and for `stylis`, and with
    // skipLibCheck off those have to resolve or they bury the errors this script looks for.
    '@types/node',
    '@types/stylis'
]

const devDependencies = JSON.parse(
    readFileSync(join(repoRoot, 'package.json'), 'utf8')
).devDependencies

/** The version the library is built and tested against, where this repo pins one. */
const atPinnedVersion = (name) =>
    devDependencies[name] ? `${name}@${devDependencies[name]}` : name

const run = (command, args, cwd) =>
    execFileSync(command, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] })

const fail = (message) => {
    console.error(`\n✗ ${message}`)
    process.exit(1)
}

for (const artefact of ['dist/index.d.ts', 'dist/index.js', 'dist/index.cjs', 'dist/style.css']) {
    if (!existsSync(join(repoRoot, artefact))) fail(`${artefact} is missing — run the build first.`)
}

const consumerDir = mkdtempSync(join(tmpdir(), 'taktik-react-components-consumer-'))
let failure

try {
    console.log(`Packing the library into ${consumerDir}`)
    run('npm', ['pack', '--ignore-scripts', '--silent', '--pack-destination', consumerDir], repoRoot)

    // The tarball is READ OFF DISK rather than taken from npm's stdout. A lifecycle hook or npm
    // itself may write a line of its own there — husky announces `HUSKY=0 skip install` under the
    // env CI sets — and a filename scraped from that stdout becomes the noise plus the name. The
    // destination directory is ours and empty until this point, so the single `.tgz` in it is the
    // artefact, whatever anything printed.
    const tarballs = readdirSync(consumerDir).filter((entry) => entry.endsWith('.tgz'))
    if (tarballs.length !== 1) {
        fail(`expected exactly one packed tarball in ${consumerDir}, found ${tarballs.length}`)
    }
    const tarball = tarballs[0]

    writeFileSync(
        join(consumerDir, 'package.json'),
        `${JSON.stringify({ name: 'consumer-typecheck-probe', version: '0.0.0', private: true }, null, 2)}\n`
    )
    cpSync(probeDir, consumerDir, { recursive: true })

    console.log('Installing the tarball beside the peers, and nothing else')
    run(
        'npm',
        [
            'install',
            '--no-audit',
            '--no-fund',
            '--loglevel=error',
            join(consumerDir, tarball),
            ...PEERS.map(atPinnedVersion)
        ],
        consumerDir
    )

    const installed = MUST_BE_ABSENT.filter((name) =>
        existsSync(join(consumerDir, 'node_modules', name))
    )
    if (installed.length) {
        throw new Error(
            `${installed.join(', ')} landed in the consumer's node_modules. They are bundled, so\n` +
                `  nothing should pull them in — a peerDependency on one would make this check\n` +
                `  pass for the wrong reason.`
        )
    }

    const shippedTypes = readFileSync(
        join(consumerDir, 'node_modules/@taktik/taktik-react-components/dist/index.d.ts'),
        'utf8'
    )
    const named = MUST_BE_ABSENT.filter((name) =>
        new RegExp(`from ['"]${name}['"]`).test(shippedTypes)
    )
    if (named.length) {
        throw new Error(`dist/index.d.ts still imports ${named.join(', ')} by name.`)
    }

    console.log('Typechecking the probe with skipLibCheck: false')
    execFileSync(
        process.execPath,
        [join(repoRoot, 'node_modules/typescript/bin/tsc'), '-p', 'tsconfig.json'],
        { cwd: consumerDir, stdio: 'inherit' }
    )

    console.log('\n✓ A consumer resolves this package with the peers alone.')
} catch (error) {
    failure = error
} finally {
    if (process.env.KEEP_CONSUMER_DIR) console.log(`Kept ${consumerDir}`)
    else rmSync(consumerDir, { recursive: true, force: true })
}

if (failure) fail(failure.message)
