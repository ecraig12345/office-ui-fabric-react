import path from 'path';
import fs from 'fs';
import fp from 'find-free-port';
import { argv, TaskFunction } from 'just-task';
import { execSync } from '../utils';

export function webpackDevServerTask(): TaskFunction {
  return async function webpackDevServer() {
    const webpackConfigFilePath: string = argv().webpackConfig || 'webpack.serve.config.js';
    const configPath = path.resolve(process.cwd(), webpackConfigFilePath);
    const port = await fp(4322, 4400);

    if (fs.existsSync(configPath)) {
      const webpackDevServerPath = path.resolve(
        __dirname,
        '../node_modules/webpack-dev-server/bin/webpack-dev-server.js'
      );

      execSync(`node ${webpackDevServerPath} --config ${configPath} --port ${port} --open`);
    }
  };
}
