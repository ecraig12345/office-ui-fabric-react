import { spawnSync } from 'child_process';
import path from 'path';

const msCustomRulesMain = require.resolve('tslint-microsoft-contrib');
const rulesPath = path.dirname(msCustomRulesMain);
const tslintPath = require.resolve('tslint/lib/tslintCli.js');

const files = process.argv.slice(2);

runTsLintOnFilesGroupedPerPackage(groupFilesByPackage(files));

interface IFilesByPackage {
  [packageName: string]: string[];
}

/**
 * Since we have a tslint.json config file per package we need to respect this when running
 * tslint for staged files. To do this we group the files per package name. This function takes
 * a list of package names and returns an object with the package name as the key and the files
 * in that package as the value.
 */
function groupFilesByPackage(files: string[]): IFilesByPackage {
  const rootDirectory = path.join(path.resolve(__dirname, '..', '..'), path.sep);

  return files
    .map(fileName => {
      const parts = fileName.replace(rootDirectory, '').split(path.sep);
      const packageRoot = [parts[0], parts[1]].join(path.sep);

      return [packageRoot, fileName];
    })
    .reduce((filesByPackage, [pkg, file]) => {
      if (path.dirname(pkg) === 'typings') {
        return filesByPackage; // ignore custom typings package
      }
      if (!filesByPackage[pkg]) {
        filesByPackage[pkg] = [];
      }
      filesByPackage[pkg].push(file);
      return filesByPackage;
    }, {});
}

/**
 * Runs tslint for the staged files in the packages that require it.
 * Excludes all API extractor files.
 */
function runTsLintOnFilesGroupedPerPackage(filesGroupedByPackage: IFilesByPackage) {
  // Log an empty line on error to make the tslint output look better
  console.log('');

  const fileEntries: [string, string[]][] = Object.keys(filesGroupedByPackage).map(pkg => [pkg, filesGroupedByPackage[pkg]]);

  for (let [pkg, files] of fileEntries) {
    const tslintConfig = path.join(path.resolve(__dirname, '..', '..'), pkg, 'tslint.json');
    const filteredFiles = files.filter(f => !f.endsWith('.api.ts'));

    if (filteredFiles.length === 0) {
      continue;
    }

    spawnSync(process.execPath, [tslintPath, '--config', tslintConfig, '-t', 'stylish', '-r', rulesPath, ...filteredFiles], {
      stdio: 'inherit'
    });
  }
}
