const path = require('path')
require('babel-register')
require('babel-polyfill')
require(path.join(__dirname, '/src/app.js'))