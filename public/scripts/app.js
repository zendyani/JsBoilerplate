'use strict';

console.log('App.js is running');

// JSX - javascript XML
var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js.'
);
var appRoot = document.getElementById('app');

ReactDom.render(template, appRoot);
