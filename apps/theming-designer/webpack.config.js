// @ts-check
const resources = require('../../scripts/webpack/webpack-resources');

module.exports = resources.createBundleConfig({
  bundleName: 'theming-designer',
  output: 'ThemingDesigner',
});
