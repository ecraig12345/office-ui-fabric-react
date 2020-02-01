import path from 'path';
import child_process from 'child_process';
import chalk from 'chalk';
import { logStatus } from './logging';

const SEPARATOR = process.platform === 'win32' ? ';' : ':';

/**
 * Execute a command synchronously.
 *
 * @param cmd - Command to execute
 * @param displayName - Display name for the command
 * @param cwd - Working directory in which to run the command
 */
export function execSync(cmd: string, displayName?: string, cwd: string = process.cwd()): void {
  // delay copying the env so that mods to the process.env are captured
  const env = Object.assign({}, process.env);
  env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

  logStatus(chalk.gray('Executing: ') + chalk.cyan(displayName || cmd));

  child_process.execSync(cmd, {
    cwd,
    env,
    stdio: 'inherit'
  });
}
