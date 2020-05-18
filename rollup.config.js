import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import sass from 'node-sass'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import packageJson from './package.json'

export default {
  input: 'src/index.js', // All of your library files will be named exports from here
  output: [ 
    {
      // This is an easy way to keep your `main` in sync between rollup & the package
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    // This prevents needing an additional `external` prop in this config file by automaticall excluding peer dependencies
    peerDepsExternal(),
    // Convert CommonJS modules to ES6
    commonjs({ 
      include: 'node_modules/**',
      // This was required to fix some random errors while building
      namedExports: {
        'react-is': ['isForwardRef', 'isValidElementType'],
      },
    }),
    // "...locates modules using the Node resolution algorithm"
    resolve(),
    // Do Babel transpilation
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    // Does a number of things; Compiles sass, run autoprefixer, creates a sourcemap, and saves a .css file
    postcss({
      preprocessor: (content, id) => new Promise((res) => {
        const result = sass.renderSync({ file: id })

        res({ code: result.css.toString() })
      }),
      plugins: [autoprefixer],
      modules: {
        scopeBehaviour: 'global',
      },
      sourceMap: true,
      extract: true,
    }),
  ],
}