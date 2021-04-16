// @ts-check

const resources = require('../../scripts/webpack/webpack-resources');

const BUNDLE_NAME = 'test-app';

module.exports = resources.createBundleConfig({
  isProduction: true,
  onlyProduction: true,
  bundleName: BUNDLE_NAME,
  // use the default output config rather than adding var config
  output: {},
});
