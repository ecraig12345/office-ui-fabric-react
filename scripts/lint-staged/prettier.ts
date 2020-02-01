import { runPrettierMultiProject } from '../prettier/prettier-helpers';

const files = process.argv.slice(2);
runPrettierMultiProject(files);
