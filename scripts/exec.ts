import path from 'path';
import child_process from 'child_process';
import chalk from 'chalk';
import { logStatus } from './logging';

const SEPARATOR = process.platform === 'win32' ? ';' : ':',
  env = Object.assign({}, process.env);

env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

export interface IExecResult {
  stdout: string | Buffer;
  stderr: string | Buffer;
}
/**
 * Execute a command.
 *
 * @param cmd - Command to execute
 * @param displayName - Display name for the command
 * @param cwd - Working directory in which to run the command
 * @param opts - Pipe stdout/stderr somewhere. Can pass `process` global.
 */
export function exec(
  cmd: string,
  displayName?: string,
  cwd: string = process.cwd(),
  opts: { stdout?: NodeJS.WriteStream; stderr?: NodeJS.WriteStream } = {}
): Promise<IExecResult> {
  logStatus(chalk.gray('Executing: ') + chalk.cyan(displayName || cmd));

  const execOptions = {
    cwd,
    env: env,
    encoding: 'utf8'
  };

  return new Promise((resolve, reject) => {
    const child = child_process.exec(cmd, execOptions, (error, stdout, stderr) =>
      error
        ? reject({
            error,
            stdout: stdout,
            stderr: stderr
          })
        : resolve({
            stdout: stdout,
            stderr: stderr
          })
    );

    if (opts.stdout) {
      child.stdout.pipe(opts.stdout);
    }
    if (opts.stderr) {
      child.stderr.pipe(opts.stderr);
    }
  });
}
