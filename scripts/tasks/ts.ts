import path from 'path';
import { tscTask, argv } from 'just-scripts';

const libPath = path.resolve(process.cwd(), 'lib');

const srcPath = path.resolve(process.cwd(), 'src');

function getExtraTscParams(args) {
  return { pretty: true, target: 'es5', ...(args.production && { inlineSources: true, sourceRoot: path.relative(libPath, srcPath) }) };
}

export const ts = {
  commonjs: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib-commonjs', module: 'commonjs' });
  },
  esm: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib', module: 'esnext' });
  },
  amd: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib-amd', module: 'amd' });
  },
  commonjsOnly: () => {
    const extraOptions = getExtraTscParams(argv());
    return tscTask({ ...extraOptions, outDir: 'lib', module: 'commonjs' });
  }
};
