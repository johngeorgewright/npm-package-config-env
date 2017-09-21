const program = require('commander')
const {version} = require('./package.json')

program
  .name(name)
  .version(version)
  .arguments('<name>')
  .option('-p, --prefix <prefix>', 'The enviroment variable prefix', 'npm_package_config_')
  .parse(process.argv)

const [name] = program.args

if (!name) {
  program.help()
}

Object.keys(process.env).forEach(key => {
  if (key.startsWith(program.prefix)) {
    console.log(`${name}:${key.slice(program.prefix.length)}=${process.env[key]}`)
  }
})
