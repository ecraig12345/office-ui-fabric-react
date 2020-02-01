import { resolveCwd, argv } from 'just-scripts';
import path from 'path';

import storybook from '@storybook/react/standalone';

export function storybookConfigExists() {
  return !!resolveCwd('./.storybook/config.js');
}

export function startStorybookTask(options) {
  options = options || {};
  return async function() {
    let { port, quiet, ci } = argv();

    port = options.port || port;
    quiet = options.quiet || quiet;
    ci = options.ci || ci;

    await storybook({
      mode: 'dev',
      staticDir: [path.join(process.cwd(), 'static')],
      configDir: path.join(process.cwd(), '.storybook'),
      port: port || 3000,
      quiet,
      ci
    });
  };
}

export function buildStorybookTask(options) {
  options = options || {};
  return async function() {
    let { port, quiet, ci } = argv();

    port = options.port || port;
    quiet = options.quiet || quiet;
    ci = options.ci || ci;

    await storybook({
      mode: 'static',
      staticDir: [path.join(process.cwd(), 'static')],
      configDir: path.join(process.cwd(), '.storybook'),
      outputDir: path.join(process.cwd(), 'dist-storybook'),
      quiet,
      port: port || 3000,
      ci
    });
  };
}
