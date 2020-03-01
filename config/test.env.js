'use strict'
const merge = require('webpack-merge')
const testEnv = require('./test.env')

module.exports = merge(testEnv, {
  NODE_ENV: '"test"',
  base_url : '"http://localhost:18001"'
})
