import {
  task as addTask,
  series,
  parallel,
  argv,
  condition,
  option,
  logger,
  TaskFunction
} from 'just-task';
import { tslintTask, webpackTask } from 'just-scripts';
import { readPackageJson } from 'just-scripts-utils';

import {
  cleanTask,
  copyTask,
  ts,
  jestTask,
  jestWatchTask,
  sassModuleTask,
  webpackDevServerTask
} from '../tasks';

const packageJson = readPackageJson(process.cwd());
const disabledTasks = (packageJson && packageJson.disabledTasks) || [];

export function registerTask<TName extends string = TaskName>(
  name: TName,
  task: TaskFunction | string
) {
  addTask(
    name,
    disabledTasks.includes(name)
      ? () => {
          logger.info(`${name} task is disabled in package.json`);
        }
      : task
  );
}

// TODO:
// prettier task
// auto-include microsoft tslint rules?
// lint/prettier on staged files

// INTENTIONALLY NOT INCLUDED:
// options:
// - prdeploy
// - npm-install-mode
// tasks:
// - build-jest-serializer-merge-styles
// - build-codepen-examples
// - bundle-size-collect
// - lint-imports
// - check-for-modified-files
// - api-extractor
// - generate-version-files

export type BasicTaskName =
  | 'clean'
  | 'copy'
  | 'jest'
  | 'jest-watch'
  // | 'prettier'
  | 'sass'
  | 'ts:amd'
  | 'ts:commonjs'
  | 'ts:commonjs-only'
  | 'ts:esm'
  | 'tslint'
  | 'webpack'
  | 'webpack-dev-server';

export type ComposedTaskName = 'build' | 'build-commonjs-only' | 'code-style' | 'dev' | 'ts';

export type TaskName = BasicTaskName | ComposedTaskName;

export type Task = Parallel | Condition | Series | string;

export interface Parallel {
  parallel: Task[];
}

export interface Series {
  series: Task[];
}

export interface Condition {
  name: string;
  condition: () => boolean;
}

export function fabricWebapp(composedTasks?: { [key: string]: Task }) {
  option('production');

  option('webpackConfig', { alias: 'w' });

  registerTask('clean', cleanTask());
  registerTask('copy', copyTask());
  registerTask('jest', jestTask());
  registerTask('jest-watch', jestWatchTask());
  // registerTask('prettier', prettier);
  registerTask('sass', sassModuleTask());
  registerTask('ts:amd', ts.amdTask());
  registerTask('ts:commonjs', ts.commonjsTask());
  registerTask('ts:commonjs-only', ts.commonjsOnlyTask());
  registerTask('ts:esm', ts.esmTask());
  registerTask('tslint', tslintTask());
  registerTask('webpack', webpackTask());
  registerTask('webpack-dev-server', webpackDevServerTask());

  composedTasks = composedTasks || getDefaultComposedTasks();

  for (let taskName of Object.keys(composedTasks)) {
    registerTask(taskName, processTask(composedTasks[taskName]));
  }

  // from just-scripts webapp

  // task('clean', cleanTask());

  // task('ts:commonjs', tscTask({ module: 'commonjs', outDir: 'lib-commonjs' }));
  // task('ts:esm', tscTask({ module: 'esnext', outDir: 'lib' }));
  // task('ts:watch', tscTask({ module: 'esnext', outDir: 'lib', watch: true }));
  // task('ts', parallel('ts:commonjs', 'ts:esm'));

  // task('jest', jestTask());
  // task('jest:watch', jestTask({ watch: true }));

  // task('webpack', webpackTask());
  // task('webpack:watch', webpackDevServerTask());

  // task('build', series('clean', 'ts', parallel('jest', 'webpack')));
  // task('test', series('clean', 'jest'));
  // task('start', series('clean', 'webpack:watch'));
  // task('start-test', series('clean', 'jest:watch'));

  // task('upgrade-stack', upgradeStackTask());
}

/**
 * Gets the composed tasks included in the preset by default.
 * All values of ComposedTaskName should be included (TS doesn't allow union types in index signatures).
 * You can mess with the existing tasks or add your own, then pass it back to fabricWebapp().
 */
export function getDefaultComposedTasks(): { [taskName: string]: Task } {
  return {
    ts: {
      parallel: [
        'ts:commonjs',
        'ts:esm',
        { name: 'ts:amd', condition: () => argv().production && !argv().min }
      ]
    },
    build: {
      series: [
        'clean',
        'copy',
        'sass', // parallel: build-codepen-examples
        {
          parallel: [
            { name: 'tslint', condition: () => !argv().min },
            { name: 'jest', condition: () => !argv().min },
            {
              series: [
                'ts',
                // lint-imports,
                {
                  parallel: [
                    { name: 'webpack', condition: () => !argv().min }
                    // condition('verify-api-extractor', () => !args.min)
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    'build-commonjs-only': { series: ['clean', 'ts:commonjs-only'] },
    'code-style': { series: [/*'prettier',*/ 'tslint'] },
    dev: { series: ['clean', 'copy', 'sass', /*build-codepen-examples*/ 'webpack-dev-server'] }
  };
}

function isParallel(task: any): task is Parallel {
  return !!(task as Parallel).parallel;
}

function isSeries(task: any): task is Series {
  return !!(task as Series).series;
}

function isCondition(task: any): task is Condition {
  return !!(task as Condition).condition;
}

function processTask(task: Task): TaskFunction | string {
  if (isParallel(task)) {
    return parallel(...task.parallel.map(processTask));
  } else if (isSeries(task)) {
    return series(...task.series.map(processTask));
  } else if (isCondition(task)) {
    return condition(task.name, task.condition);
  }
  return task;
}
