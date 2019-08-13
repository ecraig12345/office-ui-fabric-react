import path from 'path';

import { argv } from 'just-task';
import { tscTask } from 'just-scripts';
import { TaskFunction } from 'just-task/lib/task';

function getExtraTscParams() {
  const args = argv();
  const libPath = path.resolve(process.cwd(), 'lib');
  const srcPath = path.resolve(process.cwd(), 'src');
  return {
    pretty: true,
    target: 'es5',
    ...(args.production && {
      inlineSources: true,
      sourceRoot: path.relative(libPath, srcPath)
    })
  };
}

export const ts = {
  commonjsTask(): TaskFunction {
    const extraOptions = getExtraTscParams();
    return tscTask({ ...extraOptions, outDir: 'lib-commonjs', module: 'commonjs' });
  },
  esmTask(): TaskFunction {
    const extraOptions = getExtraTscParams();
    return tscTask({ ...extraOptions, outDir: 'lib', module: 'es2015' });
  },
  amdTask(): TaskFunction {
    const extraOptions = getExtraTscParams();
    return tscTask({ ...extraOptions, outDir: 'lib-amd', module: 'amd' });
  },
  commonjsOnlyTask(): TaskFunction {
    const extraOptions = getExtraTscParams();
    return tscTask({ ...extraOptions, outDir: 'lib', module: 'commonjs' });
  }
};
