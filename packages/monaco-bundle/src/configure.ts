/**
 * Add required global configuration to make Monaco work.
 * @param rootPath {string} - Root path where the Monaco files will be at runtime
 * @param min Whether to use minified versions of the files
 */
export function configureMonaco(rootPath: string, min: boolean): void {
  const globalObj: any = typeof self !== 'undefined' ? self : window;
  globalObj.MonacoEnvironment = {
    getWorkerUrl: (workerId: string, label: string) => _getWorkerPath(rootPath, min, label)
  };
}

// This may not be necessary if the configuration lives in a script rather than the HTML
// export function configureMonacoCrossDomain(rootPath: string, min: boolean): void {
//   ((self || window) as any).MonacoEnvironment = {
//     // This is needed for cases where the JS files will be on a different domain (the CDN)
//     // instead of the domain the HTML is running on. Web workers (used by Monaco) can't be
//     // loaded by script residing on a different domain, so we use this proxy script on the
//     // main domain to load the worker script. (Also do this with localhost/devhost for testing.)
//     // https://github.com/microsoft/monaco-editor/blob/master/docs/integrate-amd-cross.md
//     getWorkerUrl: (workerId: string, label: string) => {
//       const line1 = `self.MonacoEnvironment = { baseUrl: "${rootPath}" }; `;
//       const line2 = `importScripts("${_getWorkerPath(rootPath, min, label)}");`;
//       return 'data:text/javascript;charset=utf-8,' + encodeURIComponent(line1 + line2);
//     }
//   };
// }

const labelMap: { [key: string]: string } = {
  typescript: 'ts',
  javascript: 'ts',
  css: 'css',
  scss: 'css',
  less: 'css',
  html: 'html',
  json: 'json'
};

function _getWorkerPath(rootPath: string, min: boolean, label: string): string {
  const workerName = labelMap[label] || 'editor';
  const minPart = min ? '.min' : '';
  return `${rootPath}/${workerName}.worker${minPart}.js`.replace(/\/+/g, '/');
}
