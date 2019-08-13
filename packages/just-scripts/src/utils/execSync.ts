import path from 'path';
import child_process from 'child_process';
import chalk from 'chalk';
import { logger } from 'just-task';

const SEPARATOR = process.platform === 'win32' ? ';' : ':';
const env = Object.assign({}, process.env);

env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

/**
 * Execute a command synchronously, passing on the current process's environment and
 * stdout/stderr.
 *
 * @param cmd  Command to execute
 * @param displayName Display name for the command
 * @param cwd Working directory in which to run the command
 */
export function execSync(cmd: string, displayName?: string, cwd: string = process.cwd()): void {
  logger.info(chalk.gray('Executing:'), chalk.cyan(displayName || cmd));

  child_process.execSync(cmd, {
    cwd,
    env: env,
    stdio: 'inherit'
  });
}
