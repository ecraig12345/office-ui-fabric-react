import crypto from 'crypto';
import path from 'path';
import { TaskFunction } from 'just-task';
import { sassTask as defaultSassTask } from 'just-scripts';
import { splitStyles } from '@microsoft/load-themed-styles';

const _fileNameToClassMap: { [filename: string]: any } = {};

export function sassModuleTask(): TaskFunction {
  const plugins = require('postcss-modules')({
    getJSON,
    generateScopedName
  });

  return defaultSassTask(createTypeScriptModule, [plugins]);
}

function createTypeScriptModule(fileName: string, css: string) {
  // Create a source file.
  const source = [
    `// tslint:disable`,
    `import { loadStyles } from '@microsoft/load-themed-styles';`,
    `loadStyles(${JSON.stringify(splitStyles(css))});`
  ];

  const map = _fileNameToClassMap[fileName];

  for (let prop in map) {
    source.push(`export const ${prop} = "${map[prop]}";`);
  }

  return source.join('\n');
}

function generateScopedName(name: string, fileName: string, css: string) {
  const hash = crypto
    .createHmac('sha1', fileName)
    .update(css)
    .digest('hex')
    .substring(0, 8);
  return `${name}_${hash}`;
}

function getJSON(cssFileName: string, json: any) {
  _fileNameToClassMap[path.resolve(cssFileName)] = json;
}
