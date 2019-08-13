import { jestTask as defaultJestTask, JestTaskOptions } from 'just-scripts';
import { TaskFunction } from 'just-task';
import { argv } from 'just-task';

export function jestTask(options: JestTaskOptions = {}): TaskFunction {
  return defaultJestTask({
    ...getCommonOptions(),
    ...options
  });
}

export function jestWatchTask(options: JestTaskOptions = {}): TaskFunction {
  return defaultJestTask({
    ...getCommonOptions(),
    watch: true,
    runInBand: true,
    _: (argv()._ || []).filter((arg: string) => arg !== 'jest-watch'),
    ...options
  });
}

function getCommonOptions(): JestTaskOptions {
  const args = argv();
  const options: JestTaskOptions = {};
  if (args.production) {
    options.coverage = true;
  }
  if (args.u || args.updateSnapshot) {
    options.updateSnapshot = true;
  }
  if (process.env.TRAVIS) {
    options.runInBand = true;
  }
  return options;
}
