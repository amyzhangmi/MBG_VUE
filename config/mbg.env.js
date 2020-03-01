'use strict'
const merge = require('webpack-merge')
const mbgEnv = require('./mbg.env')

module.exports = merge(mbgEnv, {
  NODE_ENV: '"mbg"',
  base_url : '""'
})
