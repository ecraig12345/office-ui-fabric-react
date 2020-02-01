import path from 'path';
import chalk from 'chalk';
import { execSync } from './exec-sync';
import { getAllPackageInfo } from './monorepo/getAllPackageInfo';

const allPackages = getAllPackageInfo();
const packages = [];

Object.keys(allPackages).forEach(name => {
  const info = allPackages[name];
  if (info.packageJson.private !== true) {
    packages.push(info);
  }
});

for (const pkg of packages) {
  const packagePath = path.resolve(__dirname, '..', pkg.packagePath);

  console.log(`Publishing ${chalk.magenta(pkg.packageName)} in ${packagePath}`);
  execSync('npm publish --tag next', undefined, packagePath);
}
