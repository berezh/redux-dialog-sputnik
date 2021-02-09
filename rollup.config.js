import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';
import { uglify } from 'rollup-plugin-uglify';
import fs from 'fs';

const plugins = [
    typescript({
        typescript: require('typescript'),
    }),
    scss({
        output: true,
        output: function(styles, styleNodes) {
            fs.writeFileSync('dist/index.scss', styles);
            fs.writeFileSync('example/src/dialog-redux/index.scss', styles);
        },
    }),
];

if (process.env.BUILD === 'production') {
    plugins.push(
        uglify({
            nameCache: {},
        }),
    );
}

export default [
    {
        input: 'src/index.ts',
        dest: 'index.js',
        external: Object.keys(pkg.peerDependencies || {}),
        plugins,
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'esm' },
            {
                file: 'example/src/dialog-redux/index.js',
                format: 'es',
                banner: '/* eslint-disable */',
            },
        ],
    },
];
