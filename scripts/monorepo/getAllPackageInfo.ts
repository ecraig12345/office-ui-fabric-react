import { rollup as lernaAliases } from 'lerna-alias';
import path from 'path';
import { findGitRoot } from './findGitRoot';
import { IPackageJson } from '../types';

export interface IPackageInfo {
  /** Package path relative to the project root */
  packagePath: string;
  /** package.json contents */
  packageJson: IPackageJson;
}

export type AllPackageInfo = { [packageName: string]: IPackageInfo };

let packageInfoCache: AllPackageInfo | null = null;

export function getAllPackageInfo(): AllPackageInfo {
  if (packageInfoCache) {
    return packageInfoCache;
  }

  const gitRoot = findGitRoot();
  const packagePaths = lernaAliases({ sourceDirectory: false });

  const packageInfo: { [key: string]: IPackageInfo } = {};

  for (const [packageName, packagePath] of Object.entries(packagePaths)) {
    try {
      packageInfo[packageName] = {
        packagePath: path.relative(gitRoot, packagePath),
        packageJson: require(path.join(packagePath, 'package.json'))
      };
    } catch (ex) {
      /* eslint-disable-next-line no-console */
      console.warn(`Error parsing package.json for ${packageName}: ${ex}`);
    }
  }

  packageInfoCache = packageInfo;

  return packageInfo;
}
