import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/scripts/comic-script.ts',
    output: {
        file: 'src/scripts/dist/bundle.js'
    },
    plugins: [
        nodeResolve({ browser: true }),
        terser(),
        typescript(),
        commonjs()
    ],
    external: ['node_modules/moment']
};