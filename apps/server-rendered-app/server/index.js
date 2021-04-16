const express = require('express');
const compression = require('compression');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { renderStatic } = require('@fluentui/merge-styles/lib-commonjs/server');
const { configureLoadStyles } = require('@microsoft/load-themed-styles');
const { initializeIcons } = require('@fluentui/font-icons-mdl2');

const scripts = [
  '//cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js',
  '//cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js',
  'test-app.min.js',
]
  .map(src => `<script type="text/javascript" src="${src}"></script>`)
  .join('\n');

initializeIcons();

// Store registered styles in a variable used later for injection.
let _allStyles = '';

// Push styles into variables for injecting later.
configureLoadStyles(styles => {
  _allStyles += styles;
});

const app = express();
const TodoApp = require('../lib-commonjs/TodoApp').default;

app.use(compression());
app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.send(
    //     renderClientOnly()
    renderIsomorphic(),
  );
});

function renderIsomorphic() {
  const { html, css } = renderStatic(() => {
    return ReactDOMServer.renderToString(React.createElement(TodoApp, {}));
  }, 'server');

  return (
    `<!doctype html>` +
    `<head>` +
    `<title>Server side rendering test</title>` +
    `<style>${css}</style>` +
    `</head>` +
    `<body>` +
    `<div id='content'>${html}</div>` +
    scripts +
    `</body>` +
    `</head>`
  );
}

app.listen(3003, () => console.log('listening on 3003'));
