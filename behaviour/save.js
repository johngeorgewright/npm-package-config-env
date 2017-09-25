const {exec} = require('child_process')
const appRootPath = require('app-root-path')

module.exports = (name, key, value) => {
  exec(
    `npm config set ${name}:${key} ${value}`,
    {cwd: appRootPath.toString()},
    (error, stdout, stderr) => {
      if (error) {
        console.error(error)
      }
      if (stdout) {
        console.log(stdout)
      }
      if (stderr) {
        console.error(stderr)
      }
    }
  )
}
