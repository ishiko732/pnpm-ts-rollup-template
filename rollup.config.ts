import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

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
      resolve({ preferBuiltins: true }),
      // set target to node16.0 to use BigInt
      esbuild({
        target: 'node16.0',
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
]);
