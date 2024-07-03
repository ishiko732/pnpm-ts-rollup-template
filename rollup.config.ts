import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths';

export default defineConfig([
  {
    input: {
      index: 'src/index.ts',
    },
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        footer: ({ exports }) =>
          exports.length > 0
            ? 'module.exports = Object.assign(exports.default || {}, exports)'
            : '',
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      tsConfigPaths(),
      resolve({ preferBuiltins: true }),
      // set target to node18.0 to use BigInt
      esbuild({
        target: 'node18.0',
        sourceMap: true,
        minify: true,
      }),
      commonjs(),
    ],
    external: [],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [
      dts({
        // https://github.com/Swatinem/rollup-plugin-dts/issues/143
        compilerOptions: { preserveSymlinks: false },
        respectExternal: true,
      }),
    ],
    external: [],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'tmp',
      sourcemap: true,
    },
    plugins: [
      tsConfigPaths(),
      resolve(),
      esbuild({
        target: 'es2017',
        // minify: true,
        sourceMap: true,
      }),
      commonjs(),
    ],
    external: [],
  },
]);
