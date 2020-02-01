import path from 'path';
import fs from 'fs';
import { getAllPackageInfo } from '../monorepo/getAllPackageInfo';
import { findGitRoot } from '../monorepo/findGitRoot';

export function generatePackageManifestTask() {
  const allPackageInfo = getAllPackageInfo();
  const root = findGitRoot();
  fs.writeFileSync(path.join(root, 'package-manifest.json'), JSON.stringify(allPackageInfo, null, 2));
}
