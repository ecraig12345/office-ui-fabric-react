import * as monaco from 'monaco-editor';
import * as React from 'react';
import { IEditorProps, ITextModel } from './Editor.types';
import { codeFontFamily } from './TypeScriptSnippet';

const typescript = monaco.languages.typescript;
const typescriptDefaults = typescript.typescriptDefaults as monaco.languages.typescript.LanguageServiceDefaults & {
  getCompilerOptions: () => monaco.languages.typescript.CompilerOptions;
};

const typescript = monaco.languages.typescript;
const typescriptDefaults = typescript.typescriptDefaults as monaco.languages.typescript.LanguageServiceDefaults & {
  getCompilerOptions: () => monaco.languages.typescript.CompilerOptions;
};

export const Editor: React.FunctionComponent<IEditorProps> = (props: IEditorProps) => {
  const { width, height, onChange, language = 'typescript', code } = props;

  // Hooks must be called unconditionally, so we have to create a backup ref here even if we
  // immediately throw it away to use the one passed in.
  const backupModelRef = React.useRef<ITextModel>();
  const modelRef = props.modelRef || backupModelRef;

  const ref = React.useRef<HTMLDivElement>(null);
  const style = { width, height };

  React.useEffect(() => {
    typescriptDefaults.setCompilerOptions({
      allowNonTsExtensions: true,
      target: typescript.ScriptTarget.ES5,
      jsx: typescript.JsxEmit.React,
      jsxFactory: 'React.createElement',
      experimentalDecorators: true,
      preserveConstEnums: true,
      noUnusedLocals: true,
      strictNullChecks: true,
      noImplicitAny: true,
      outDir: 'lib',
      module: typescript.ModuleKind.ESNext,
      baseUrl: 'file:///'
    });

    // Initially disable type checking, and load real types after 2 seconds
    typescriptDefaults.setDiagnosticsOptions({ noSemanticValidation: true });
    const typesTimeout = setTimeout(_loadTypes, 2000);

    const model = (modelRef.current = monaco.editor.createModel(code, language, monaco.Uri.parse('file:///main.tsx')));

    if (onChange) {
      onChange(model);
    }

    const editor = monaco.editor.create(ref.current!, {
      model: model,
      value: code,
      language,
      minimap: { enabled: false },
      fontFamily: codeFontFamily
    });

    editor.onDidChangeModelContent(() => {
      if (onChange) {
        onChange(editor.getModel()!);
      }
    });

    return () => {
      editor.getModel()!.dispose();
      editor.dispose();
      clearTimeout(typesTimeout);
      modelRef.current = undefined;
    };
  }, [onChange, language, code, modelRef]);

  return <div ref={ref} style={style} />;
};

function _loadTypes() {
  // Fetch typings to allow for intellisense in editor
  Promise.all([
    fetch('https://unpkg.com/office-ui-fabric-react/dist/office-ui-fabric-react.d.ts'),
    fetch('https://unpkg.com/@types/react@16.8/index.d.ts')
  ])
    .then(([fabricResponse, reactResponse]) => Promise.all([fabricResponse.text(), reactResponse.text()]))
    .then(([fabricTypings, reactTypings]) => {
      typescriptDefaults.addExtraLib(fabricTypings, 'file:///node_modules/@types/office-ui-fabric-react/index.d.ts');
      typescriptDefaults.addExtraLib(reactTypings, 'file:///node_modules/@types/react/index.d.ts');

      typescriptDefaults.setDiagnosticsOptions({ noSemanticValidation: false });
      typescriptDefaults.setCompilerOptions({
        ...typescriptDefaults.getCompilerOptions(),
        noEmitOnError: true,
        paths: {
          'office-ui-fabric-react/lib/*': ['file:///node_modules/@types/office-ui-fabric-react/index']
        }
      });
    });
}

export default Editor;

interface IPackageTypings {
  /** Loader path for the .d.ts file */
  dtsPath: string;
  /** Name for the pretend `@types` package: for scoped packages, it will be `scope__packageName` */
  typesPackageName: string;
  /** Full package name */
  packageName: string;
}

const exampleDataFiles = {
  TestImages: 'common/TestImages',
  PeopleExampleData: 'components/ExtendedPicker/examples/PeopleExampleData',
  FacepileExampleData: 'components/Facepile/examples/FacepileExampleData',
  PeoplePickerExampleData: 'components/pickers/PeoplePicker/examples/PeoplePickerExampleData',
  exampleData: '/utilities/exampleData'
};

function _loadTypes() {
  const typesPrefix = 'file:///node_modules/@types';
  const promises: Promise<void>[] = [];
  promises.push(
    new Promise<void>((resolve, reject) => {
      // Load React and example data typings by full path (unfortunately have to use literal paths for bundling)
      require.ensure(
        [
          '!raw-loader!@types/react/index.d.ts',
          '!raw-loader!office-ui-fabric-react/lib/common/TestImages.d.ts',
          '!raw-loader!office-ui-fabric-react/lib/components/ExtendedPicker/examples/PeopleExampleData.d.ts',
          '!raw-loader!office-ui-fabric-react/lib/components/Facepile/examples/FacepileExampleData.d.ts',
          '!raw-loader!office-ui-fabric-react/lib/components/pickers/PeoplePicker/examples/PeoplePickerExampleData.ts',
          '!raw-loader!office-ui-fabric-react/lib/utilities/exampleData.d.ts'
        ],
        require => {
          try {
            typescriptDefaults.addExtraLib(require('!raw-loader!@types/react/index.d.ts'), `${typesPrefix}/react/index.d.ts`);

            const oufrPrefix = `${typesPrefix}/office-ui-fabric-react/lib`;
            typescriptDefaults.addExtraLib(
              require('!raw-loader!office-ui-fabric-react/lib/common/TestImages.d.ts'),
              `${oufrPrefix}/common/TestImages.d.ts`
            );
            typescriptDefaults.addExtraLib(
              require('!raw-loader!office-ui-fabric-react/lib/components/ExtendedPicker/examples/PeopleExampleData.d.ts'),
              `${oufrPrefix}/components/ExtendedPicker/examples/PeopleExampleData.d.ts`
            );
            typescriptDefaults.addExtraLib(
              require('!raw-loader!office-ui-fabric-react/lib/components/Facepile/examples/FacepileExampleData.d.ts'),
              `${oufrPrefix}/components/Facepile/examples/FacepileExampleData.d.ts`
            );
            typescriptDefaults.addExtraLib(
              require('!raw-loader!office-ui-fabric-react/lib/utilities/exampleData.d.ts'),
              `${oufrPrefix}/utilities/exampleData.d.ts`
            );
            resolve();
          } catch (ex) {
            reject(ex);
          }
        },
        reject,
        'editor-types'
      );
    })
  );

  // Other packages' typings are copied into dist by a build step.
  // Load all of those typings dynamically (lazy-once puts them in a chunk together).
  const requireContext = require.context('!raw-loader!@uifabric/tsx-editor/dist', false, /.*\.d\.ts$/, 'lazy-once');
  // Get the pretend @types package name and the real package name from the path
  // (for example, the dts path for utilities will be '!raw-loader!@uifabric/tsx-editor/dist/utilities.d.ts')
  const packages: IPackageTypings[] = requireContext.keys().map(dtsPath => {
    const packageShortName = dtsPath.match(/\/(.*?)\.d\.ts$/)![1];
    if (packageShortName === 'office-ui-fabric-react') {
      return { dtsPath, typesPackageName: packageShortName, packageName: packageShortName };
    }
    return { dtsPath, typesPackageName: 'uifabric__' + packageShortName, packageName: '@uifabric/' + packageShortName };
  });
  // Load each package and add it to TS
  promises.push(
    ...packages.map(({ dtsPath, typesPackageName }) => {
      return (requireContext(dtsPath) as Promise<string>).then(contents => {
        typescriptDefaults.addExtraLib(contents, `${typesPrefix}/${typesPackageName}/index.d.ts`);
      });
    })
  );

  Promise.all(promises).then(() => {
    // TS should now find package-level imports automatically, but we have to use paths to override
    // the location of deeper path imports.
    const paths: { [path: string]: string[] } = {};
    for (const { packageName, typesPackageName } of packages) {
      paths[packageName + '/lib/*'] = [
        '*', // try matching the actual module name first
        `${typesPrefix}/${typesPackageName}/index` // then the package index
      ];
    }

    typescriptDefaults.setCompilerOptions({
      ...typescriptDefaults.getCompilerOptions(),
      noEmitOnError: true,
      paths
    });

    typescriptDefaults.setDiagnosticsOptions({ noSemanticValidation: false });
  });
}
