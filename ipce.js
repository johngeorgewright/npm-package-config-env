#!/usr/bin/env node

const program = require('commander')
const {version} = require('./package.json')
const log = require('./behaviour/log')
const save = require('./behaviour/save')

program
  .version(version)
  .arguments('<name>')
  .option('-s, --save', 'Save the config directly to your global NPM config')
  .option('-p, --prefix <prefix>', 'The enviroment variable prefix', 'npm_package_config_')
  .parse(process.argv)

const [name] = program.args
const exec = program.save ? save : log

if (!name) {
  program.help()
}

Object.keys(process.env).forEach(key => {
  if (key.startsWith(program.prefix)) {
    exec(name, key.slice(program.prefix.length), process.env[key])
  }
})
