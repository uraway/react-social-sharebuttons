import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import flow from 'rollup-plugin-flow'

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        flow(),
        nodeResolve({ extensions: ['.js', '.jsx']}),
        external(),
        babel({
          exclude: 'node_modules/**',
          presets: ["@babel/env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
