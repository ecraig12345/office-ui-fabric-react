// @ts-check
const { preset, just } = require('@uifabric/build');
const { task, series, cleanTask, copyInstructionsTask, copyInstructions, tscTask, webpackTask } = just;

preset.basic();

task('clean', cleanTask());
task(
  'copy',
  copyInstructionsTask({
    copyInstructions: copyInstructions.copyFileToDestinationDirectoryWithRename(
      require.resolve('monaco-editor/esm/vs/editor/editor.api.d.ts'),
      'index.d.ts',
      'dist'
    )
  })
);
task('ts', tscTask({ module: 'commonjs', outDir: './lib' }));
task('webpack', webpackTask());

task('build', series('clean', 'copy', 'ts', 'webpack')).cached();
