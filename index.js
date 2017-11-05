const path = require('path')

// Requiring the babel packages to
// transpile the ES6 code to ES5
require('babel-register')
require('babel-polyfill')

require(path.join(__dirname, '/src/app.js'))