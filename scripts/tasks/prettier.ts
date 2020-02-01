import { runPrettierForProject } from '../prettier/prettier-helpers';

export function prettier() {
  runPrettierForProject(process.cwd());
}
