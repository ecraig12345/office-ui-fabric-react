import { cleanTask as defaultCleanTask } from 'just-scripts';
import { TaskFunction } from 'just-task/lib/task';

export function cleanTask(): TaskFunction {
  // clean these dirs in addition to the defaults
  return defaultCleanTask(['lib-amd', 'lib-commonjs', 'lib-es2015', 'src/**/*.scss.ts']);
}
