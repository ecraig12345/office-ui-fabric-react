import { execSync } from 'child_process';
import path from 'path';
import { EOL, cpus } from 'os';
import { runPrettierMultiProject, runPrettierForProject, prettierExtensions } from './prettier/prettier-helpers';
import PQueue from 'p-queue';
import { getAllPackageInfo } from './monorepo/getAllPackageInfo';

const runOnAllFiles = require('yargs').argv.all;

/**
 * Run prettier for some files.
 * @param filePaths Run for these file paths
 */
function runPrettierForFiles(filePaths: string[]) {
  if (filePaths.length === 0) {
    return Promise.resolve();
  }

  console.log(`Running for ${filePaths.length} files!`);
  return runPrettierMultiProject(filePaths, true /*async*/);
}

const numberOfCpus = cpus().length / 2;
console.log(`Running prettier on ${runOnAllFiles ? 'all' : 'changed'} files (on ${numberOfCpus} processes):`);

const queue = new PQueue({ concurrency: numberOfCpus });
if (runOnAllFiles) {
  const allPackages = getAllPackageInfo();
  queue.addAll(Object.keys(allPackages).map(name => () => runPrettierForProject(allPackages[name].packagePath)));
} else {
  const prettierIntroductionCommit = 'HEAD~1';
  const passedDiffTarget = process.argv.slice(2).length ? process.argv.slice(2)[0] : prettierIntroductionCommit;

  const projectPath = path.resolve(__dirname, '..');
  const cmd = `git --no-pager diff ${passedDiffTarget} --diff-filter=AM --name-only --stat-name-width=0`;

  const gitDiffOutput = execSync(cmd, { cwd: projectPath });
  const prettierExtRegex = new RegExp(`\\.(${prettierExtensions.join('|')})$`);
  const files = gitDiffOutput
    .toString('utf8')
    .split(EOL)
    .filter(fileName => prettierExtRegex.test(fileName));

  const fileGroups = [];
  for (let chunkStart = 0; chunkStart < files.length; chunkStart += numberOfCpus) {
    fileGroups.push(files.slice(chunkStart, chunkStart + numberOfCpus));
  }

  queue.addAll(fileGroups.map(group => () => runPrettierForFiles(group)));
}

queue
  .onEmpty()
  .then(() => {
    console.log('🙌 All done! 🙌');
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
