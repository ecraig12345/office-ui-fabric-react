import { webpackCliTask, argv, logger } from 'just-scripts';
import path from 'path';
import fs from 'fs';
import fp from 'find-free-port';

export function webpack() {
  const args = argv();
  return webpackCliTask({
    webpackCliArgs: args.production ? ['--production'] : [],
    nodeArgs: ['--max-old-space-size=4096']
  });
}

export async function webpackDevServer() {
  const webpackConfigFilePath = (argv().webpackConfig as string) || 'webpack.serve.config.js';
  const configPath = path.resolve(process.cwd(), webpackConfigFilePath);
  const port = await fp(4322, 4400);

  if (fs.existsSync(configPath)) {
    const webpackDevServerPath = require.resolve('webpack-dev-server/bin/webpack-dev-server.js');
    const execSync = require('../exec-sync');
    const cmd = `node ${webpackDevServerPath} --config ${configPath} --port ${port} --open`;

    logger.info(`Caching enabled: ${argv().cached}`);
    logger.info('Running: ', cmd);

    (process.env as any).cached = argv().cached;

    execSync(cmd);
  }
}

let server;
export async function webpackDevServerWithCompileResolution() {
  return new Promise((resolve, reject) => {
    const webpack = require('webpack');
    const webpackDevServer = require('webpack-dev-server');
    const webpackConfig = require(path.resolve(process.cwd(), 'webpack.serve.config.js'));

    const compiler = webpack(webpackConfig);
    compiler.plugin('done', () => {
      resolve();
    });

    const devServerOptions = Object.assign({}, webpackConfig.devServer, {
      stats: 'minimal'
    });
    server = new webpackDevServer(compiler, devServerOptions);
    const port = webpackConfig.devServer.port;
    server.listen(port, '127.0.0.1', () => {
      console.log(`started server on http://localhost:${port}`);
    });
  });
}

webpackDevServerWithCompileResolution.done = async function() {
  return new Promise((resolve, reject) => {
    server.close(() => {
      resolve();
    });
  });
};
