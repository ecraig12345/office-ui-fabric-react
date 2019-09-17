const path = require('path');
const resources = require('@uifabric/build/webpack/webpack-resources');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PACKAGE_NAME = 'monaco-bundle';
const IS_PRODUCTION = process.argv.indexOf('--production') > -1;

module.exports = resources.createConfig(PACKAGE_NAME, IS_PRODUCTION, {
  // Based on https://github.com/microsoft/monaco-editor/blob/master/docs/integrate-esm.md
  entry: {
    //
    index: 'monaco-editor/esm/vs/editor/edcore.main.js',
    // index: './src/index.js'
    complete: 'monaco-editor/esm/vs/editor/editor.main.js',
    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker.js',
    'css.worker': 'monaco-editor/esm/vs/language/css/css.worker.js',
    'html.worker': 'monaco-editor/esm/vs/language/html/html.worker.js',
    'json.worker': 'monaco-editor/esm/vs/language/json/json.worker.js',
    typescript: './src/typescript.js',
    css: './src/css.js',
    html: './src/html.js',
    json: './src/json.js'
  },

  output: {
    libraryTarget: 'commonjs2'
    //library: 'Monaco'
    // globalObject: 'self' // required for monaco--see https://github.com/webpack/webpack/issues/6642
  },

  devServer: {
    inline: true,
    port: 4322,
    contentBase: path.resolve(process.cwd(), 'dist'),
    writeToDisk: true
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new resources.webpack.ProgressPlugin()
    // new resources.webpack.optimize.LimitChunkCountPlugin({
    //   maxChunks: 1
    // })
  ]
});
// ...resources.createConfig(PACKAGE_NAME, IS_PRODUCTION, {
//   entry: {
//     complete: 'monaco-editor/esm/vs/editor/editor.main.js',
//     'basic-languages': 'monaco-editor/esm/vs/basic-languages/monaco.contribution.js'
//   },
//   ...commonConfig
// })
