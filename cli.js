#!/usr/bin/env node

let { run } = require('gogen')

run(
  [__dirname, ...process.argv.slice(2)],
  'Usage: npx postapl-plugin-boilerplate <directory>',
  { boolean: ['install', 'npm'] }
)
