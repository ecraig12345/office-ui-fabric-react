# @uifabric/monaco-bundle

Bundled version of Monaco for use with `@uifabric/tsx-editor`, so consumers of that package won't need to add additional webpack loaders to make Monaco work.

## What's included

\*

## What you still need to do

There are some additional manual steps to get Monaco working. Note that if you're using `ExampleCard` from `@uifabric/example-app-base` or `EditorWrapper` from `@uifabric/tsx-editor` and don't follow these steps, users will still be able to _view_ code samples, but not edit them.

### Set the global object (if using webpack)

In the webpack config for your project, add the following (required due to [this issue](https://github.com/webpack/webpack/issues/6642)):

```js
{
  output: {
    globalObject: 'self';
  }
}
```

###

### Include the files in your project OR upload to CDN

### Add global configuration

HOPEFULLY configure.ts should do this?

<!--
Monaco requires a global configuration object to work. This can be created either in the index of your
In the HTML file hosting your code,

```

```

      // Required configuration to make Monaco work (this is simpler than the fabric-website version
      // since demo app JS is never served cross-domain from a CDN)
      self.MonacoEnvironment = {
        getWorkerUrl: function(workerId, label) {
          var workerName = label === 'typescript' || label === 'javascript' ? 'ts.worker' : 'editor.worker';
          return workerName + jsSuffix;
        }
      };


              // Required configuration to make Monaco work
        window.MonacoEnvironment = {
          // This is needed for cases where the JS files will be on a different domain (the CDN)
          // instead of the domain the HTML is running on. Web workers (used by Monaco) can't be
          // loaded by script residing on a different domain, so we use this proxy script on the
          // main domain to load the worker script. (Also do this with localhost/devhost for testing.)
          // https://github.com/microsoft/monaco-editor/blob/master/docs/integrate-amd-cross.md
          getWorkerUrl: function(workerId, label) {
            var workerName = label === 'typescript' || label === 'javascript' ? 'ts.worker' : 'editor.worker';
            return (
              'data:text/javascript;charset=utf-8,' +
              encodeURIComponent(
                'self.MonacoEnvironment = { baseUrl: "' + appPath + '" }; importScripts("' + appPath + workerName + jsSuffix + '");'
              )
            );
          }
        }; -->
