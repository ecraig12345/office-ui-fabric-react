// @ts-check

const exec = require('../exec');
const readConfig = require('../read-config');

module.exports = function postbuild() {
  const packageJson = readConfig('package.json');
  if (packageJson && packageJson.scripts && packageJson.scripts['postbuild']) {
    return exec('npm run postbuild', undefined, process.cwd(), process);
  }
};
