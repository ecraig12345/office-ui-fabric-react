import path from 'path';
import { sassTask } from 'just-scripts';
import postcssModules from 'postcss-modules';

const modules = postcssModules({
  getJSON,
  generateScopedName
});
const _fileNameToClassMap = {};

function createTypeScriptModule(fileName: string, css: any) {
  const { splitStyles } = require('@microsoft/load-themed-styles');

  // Create a source file.
  const source = [
    `/* tslint:disable */`,
    `import { loadStyles } from \'@microsoft/load-themed-styles\';`,
    `loadStyles(${JSON.stringify(splitStyles(css))});`
  ];

  const map = _fileNameToClassMap[fileName];

  for (let prop in map) {
    source.push(`export const ${prop} = "${map[prop]}";`);
  }

  return source.join('\n');
}

function generateScopedName(name: string, fileName: string, css: any) {
  const crypto = require('crypto');

  return (
    name +
    '_' +
    crypto
      .createHmac('sha1', fileName)
      .update(css)
      .digest('hex')
      .substring(0, 8)
  );
}

function getJSON(cssFileName: string, json: any) {
  _fileNameToClassMap[path.resolve(cssFileName)] = json;
}

export const sass = sassTask(createTypeScriptModule, [modules]);
