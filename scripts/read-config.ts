import fs from 'fs';
import { findConfig } from './find-config';
import jju from 'jju';
import { IPackageJson } from './types';

/**
 * Read and parse the given config file.
 *
 * @param file - Full path to or name of the config file. If no file exists at the location
 * as given, `file` is assumed to be a config file name and the method will run
 * `findConfig(file)` to find the full path.
 * @returns Parsed config file contents
 */
export function readConfig(file: string): IPackageJson | undefined {
  file = findConfig(file);
  if (file && fs.existsSync(file)) {
    return jju.parse(fs.readFileSync(file, 'utf8'));
  }
}
