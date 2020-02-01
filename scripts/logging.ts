import chalk from 'chalk';

const isProduction = process.argv.indexOf('--production') > -1;
const isVerbose = process.argv.indexOf('--verbose') > -1;

export function logStartTask(packageName: string, task: string): void {
  console.log(`${getTimePrefix(packageName)} Starting: ${chalk.cyan(task)}`);
}

export function logEndTask(packageName: string, task: string, startTime: number, errorMessage?: string): void {
  console.log(
    `${getTimePrefix(packageName)} ${getPassFail(errorMessage === undefined)}: ${chalk.cyan(task)} (${getDuration(startTime)})${
      errorMessage ? chalk.white(': ') + chalk.red(errorMessage) : ''
    }`
  );
}

export function logStatus(taskStatus: string): void {
  if (isProduction || isVerbose) {
    console.log('  ' + taskStatus);
  }
}

export function logEndBuild(packageName: string, passed: boolean, startTime: number): void {
  console.log();
  console.log(
    `${chalk.grey('============') +
      chalk.white('[ ') +
      chalk.cyan(packageName) +
      chalk.white(' ]') +
      chalk.grey('=') +
      chalk.white('[ ') +
      getPassFail(passed) +
      chalk.white(' ]') +
      chalk.grey('=') +
      chalk.white('[ ') +
      getDuration(startTime) +
      chalk.white(' ]') +
      chalk.grey('============')}
  `
  );
}

function getDuration(startTime: number): string {
  let duration = new Date().getTime() - startTime;

  return chalk.yellow(formatTime(duration));
}
function getPassFail(passed: boolean): string {
  return passed ? chalk.green('Pass') : chalk.red('Error');
}

function getTimePrefix(packageName: string): string {
  return `[${chalk.magenta(packageName)} ${chalk.gray(new Date().toLocaleTimeString({ hour12: false }))}]`;
}

function formatTime(milliseconds: number): string {
  if (milliseconds >= 1000) {
    return milliseconds / 1000 + 's';
  } else {
    return milliseconds + 'ms';
  }
}
