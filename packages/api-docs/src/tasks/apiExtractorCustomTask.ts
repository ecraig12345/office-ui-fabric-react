import * as path from 'path';
import { apiExtractorUpdateTask, apiExtractorVerifyTask } from './apiExtractorTask';
import { ExtractorResult, IExtractorInvokeOptions } from '@microsoft/api-extractor';
import * as ts from 'typescript';

const configPath = path.resolve(process.cwd(), 'config/api-extractor.json');

export const verifyApiExtractor = apiExtractorVerifyTask({ configJsonFilePath: configPath, onResult });
export const updateApiExtractor = apiExtractorUpdateTask({ configJsonFilePath: configPath, onResult });

function onResult(result: ExtractorResult, extractorOptions: IExtractorInvokeOptions): void {
  // const config = result.extractorConfig;

  const program = result.compilerState.program;
  // const entry = program.getSourceFile(config.mainEntryPointFilePath);

  // const foo: ts.Node = {} as any;
  // switch (foo.kind) {
  //   case ts.SyntaxKind.
  //   case ts.SyntaxKind.InterfaceDeclaration: {
  //     const dec = foo as ts.InterfaceDeclaration;
  //     for (const clause of dec.heritageClauses!) {
  //     }
  //   }
  // }

  // config.packageJson!.name
  console.log(program.getSourceFiles().map((file: ts.SourceFile) => file.fileName));
}
