import path from 'path';
import { apiExtractorVerifyTask, apiExtractorUpdateTask } from 'just-scripts';

const configPath = path.resolve(process.cwd(), 'config/api-extractor.json');

export const verifyApiExtractor = apiExtractorVerifyTask(configPath, undefined);
export const updateApiExtractor = apiExtractorUpdateTask(configPath, undefined);
