import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pluginCommonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  plugins: [
    typescript(),
    pluginCommonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    nodeResolve({ browser: true, extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    external(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(),
    del({ targets: ['dist/*'] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
