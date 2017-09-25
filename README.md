# npm-package-config-env
Imports environment variables in to NPM's package config

## Installation
```
npm i [-g] npm-package-config-env
```

## Usage
```
Usage: ipce [options] <name>


Options:

  -V, --version          output the version number
  -s, --save             Save the config directly to your global NPM config
  -p, --prefix <prefix>  The enviroment variable prefix - DEFAULT = `npm_package_config_`
  -h, --help             output usage information
```

## Example
```
$> export npm_package_config_foo=bar
$> export npm_package_config_mung=face
```

```
$> ipce my-awesome-package

my-awesome-package:mung=face
my-awesome-package:foo=bar
```

### To put config straight in to a `.npmrc` file:
```
$> ipce my-awesome-package > .npmrc
$> cat .npmrc

my-awesome-package:mung=face
my-awesome-package:foo=bar
```

### Save the config in to you global settings:
```
$> ipce -s my-awesome-package
$> npm config list

; userconfig /Users/johnwright/.npmrc
my-awesome-package:mung = "face"
my-awesome-package:foo = "bar"
```

### Use a different prefix
```
$> export my_awesome_package_foo=bar
$> export my_awesome_package_mung=face
$> ipce -p my_awesome_package_ my-awesome-package

my-awesome-package:mung=face
my-awesome-package:foo=bar
```
