import path from 'path';
import { readConfig } from '../read-config';
import { getAllPackageInfo, IPackageInfo } from './getAllPackageInfo';
import { IPackageJson } from '../types';

function getDeps(packageJson: IPackageJson): string[] {
  if (!packageJson) {
    return [];
  }

  return Object.keys({ ...packageJson.dependencies, ...packageJson.devDependencies });
}

/**
 * Find all the dependencies (and their dependencies) within the repo for a specific package (in the CWD when this was called)
 */
export function findRepoDeps(): IPackageInfo[] {
  const packageInfo = getAllPackageInfo();
  let cwd = process.cwd();
  const packageJson = readConfig(path.join(cwd, 'package.json'));
  const packageDeps = getDeps(packageJson);
  const result = new Set<string>();

  while (packageDeps.length > 0) {
    const dep = packageDeps.pop();

    if (dep && packageInfo[dep]) {
      result.add(dep);
    }
  }

  return [...result].map(dep => packageInfo[dep]);
}

if (require.main === module) {
  console.log(findRepoDeps());
}
