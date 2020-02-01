// Dependencies
import mustache from 'mustache';
import fs from 'fs';

import { argv } from 'yargs';
const newComponentName = argv.name;
const stateless = argv.stateless;

// Template Sequences
const statefulSequence = ['GlobalIndex', 'Styles', 'Test', 'Index', 'View', 'ViewTest', 'Types', 'Component', 'State', 'StateTest'];
const statelessSequence = ['GlobalIndex', 'Styles', 'Test', 'Index', 'View', 'ViewTest', 'TypesStateless', 'ComponentStateless'];

// Paths/File Names
const rootComponentFolderPath = './packages/experiments/src/';
const componentFolderPath = rootComponentFolderPath + 'components/' + newComponentName + '/';
const componentPathNamePrefix = rootComponentFolderPath + 'components/' + newComponentName + '/' + newComponentName;

let templateFolderPath = './scripts/templates/create-component';

const outputFiles = {
  Component: componentPathNamePrefix + '.ts',
  ComponentStateless: componentPathNamePrefix + '.ts',
  GlobalIndex: rootComponentFolderPath + newComponentName + '.ts',
  Index: componentFolderPath + 'index.ts',
  State: componentPathNamePrefix + '.state.ts',
  StateTest: componentPathNamePrefix + '.state.test.tsx',
  Styles: componentPathNamePrefix + '.styles.ts',
  Test: componentPathNamePrefix + '.test.tsx',
  Types: componentPathNamePrefix + '.types.ts',
  TypesStateless: componentPathNamePrefix + '.types.ts',
  View: componentPathNamePrefix + '.view.tsx',
  ViewTest: componentPathNamePrefix + '.view.test.tsx'
};

// Error strings
const errorCreatingComponentDir = 'Error creating component directory';
const errorComponentName = 'Please pass in the component name using --name';

const errorUnableToOpenTemplate = (templateFile: string) => `Unable to open mustache template ${templateFile} for component`;
const errorUnableToWriteFile = (step: string) => `Unable to write ${step} file`;

// Success strings
const successComponentCreated = 'New component ' + newComponentName + ' successfully created';

function handleError(error: any, errorPrependMessage: string) {
  if (error) {
    console.error(errorPrependMessage, error);
    return false;
  } else {
    return true;
  }
}

function createComponentFiles(sequence: string[], stepIndex: number) {
  if (stepIndex >= sequence.length) {
    // Success! The component has been created.
    console.log(successComponentCreated);
    return;
  }
  const step = sequence[stepIndex];
  const mustacheTemplateName = `Empty${step}.mustache`;

  console.log('Creating ' + outputFiles[step] + '...');

  fs.readFile(templateFolderPath + '/' + mustacheTemplateName, 'utf8', (error, data) => {
    readFileCallback(
      error,
      data,
      outputFiles[step],
      () => createComponentFiles(sequence, stepIndex + 1),
      errorUnableToOpenTemplate(mustacheTemplateName),
      errorUnableToWriteFile(step)
    );
  });
}

function readFileCallback(
  error: any,
  data: string,
  filePath: string,
  cb: () => void,
  openMustacheTemplateError: string,
  createFileError: string
) {
  if (!handleError(error, openMustacheTemplateError)) {
    return;
  }

  const fileData = mustache.render(data, { componentName: newComponentName });
  fs.writeFile(filePath, fileData, error => {
    writeFileCallback(error, createFileError, cb);
  });
}

function writeFileCallback(error: any, createFileError: string, cb: () => void) {
  if (!handleError(error, createFileError)) {
    return;
  }

  if (cb) {
    cb();
  }
}

function makeComponent(error: any) {
  if (!handleError(error, errorCreatingComponentDir)) {
    return;
  }

  if (stateless) {
    console.log('Creating stateless component...');
    createComponentFiles(statelessSequence, 0);
  } else {
    console.log('Creating stateful component... (if you want a stateless component, use --stateless arg)');
    createComponentFiles(statefulSequence, 0);
  }
}

if (newComponentName) {
  // Create new folder in packages/src/office-ui-fabric-react
  fs.mkdir(componentFolderPath, makeComponent);
} else {
  console.error(errorComponentName);
}
