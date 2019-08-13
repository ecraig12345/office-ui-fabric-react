import fs from 'fs';
import path from 'path';
import jju from 'jju';
import { series, resolveCwd } from 'just-task';
import { copyTask as defaultCopyTask } from 'just-scripts';

export interface PreCopyConfig {
  copyTo?: { [dir: string]: string[] };
}

export function copyTask() {
  let tasks = [];
  let configPath = path.resolve(process.cwd(), 'config/pre-copy.json');

  if (!fs.existsSync(configPath)) {
    return;
  }

  const config: PreCopyConfig = jju.parse(fs.readFileSync(configPath, 'utf8'));

  if (config && config.copyTo) {
    for (let destination in config.copyTo) {
      const sources = config.copyTo[destination];
      const resolvedSources = sources.map(src => expandSourcePath(src)).filter(p => !!p);
      destination = path.resolve(process.cwd(), destination);

      tasks.push(defaultCopyTask(resolvedSources, destination));
    }
  }

  return series(...tasks);
}

function expandSourcePath(pattern: string): string {
  if (!pattern) {
    return '';
  }

  // just returns the relative paths
  if (pattern.startsWith('.')) {
    return pattern;
  }

  // tries to resolve the packages, handling scoped packages
  const splitPattern = pattern.split('/');
  const packageName = pattern[0] == '@' ? `${splitPattern[0]}/${splitPattern[1]}` : splitPattern[0];

  try {
    const resolvedPackageJson = resolveCwd(`${packageName}/package.json`);

    if (!resolvedPackageJson) {
      // returns pattern if the packageName didn't contain a package.json (not really a package)
      return pattern;
    }

    return pattern.replace(packageName, path.dirname(resolvedPackageJson));
  } catch (e) {
    console.error(e);
    return '';
  }
}
