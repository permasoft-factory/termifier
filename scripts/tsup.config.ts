import { relative, resolve } from 'node:path';
import { defineConfig } from 'tsup'

import type { Options } from 'tsup';

export const createTsupConfig = (options: Options = {}) => defineConfig({
    clean: true,
    dts: true,
    keepNames: true,
    minify: false,
    skipNodeModulesBundle: true,
    sourcemap: true,

    entry: [ './src/index.ts' ],
    format: [ 'cjs', 'esm' ],
    target: 'es2021',

    tsconfig: relative(__dirname, resolve(process.cwd(), 'tsconfig.json')),

    ...options
})