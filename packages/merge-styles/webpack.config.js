// @ts-check
const resources = require('../../scripts/webpack/webpack-resources');

const BUNDLE_NAME = 'merge-styles';

module.exports = resources.createConfig(true, {
  entry: {
    [BUNDLE_NAME]: './lib/index.js',
  },

  output: {
    libraryTarget: 'var',
    library: 'MergeStyles',
  },
});
