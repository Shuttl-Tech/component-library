import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import multiEntry from 'rollup-plugin-multi-entry';
import globby from 'globby';

import pkg from './package.json';

process.env.SASS_PATH = 'src';

const plugins = [
  external(),
  postcss({
    autoModules: true,
  }),
  url(),
  svgr(),
  resolve(),
  typescript({
    rollupCommonJSResolveHack: true,
    clean: true,
  }),
  commonjs({
    namedExports: {
      'react-is': ['ForwardRef'],
    },
  }),
  multiEntry(),
];

const files = globby.sync('src/components/**/index.tsx');

const configs = files.map(file => ({
  external: ['react', 'react-dom'],
  input: file,
  output: [
    {
      file: file.replace('src', 'dist').replace(/\.tsx?$/, '.js'),
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins,
}));

export default [
  {
    external: ['react', 'react-dom'],
    input: 'src/components/**/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    ],
    plugins,
  },
  ...configs,
];
