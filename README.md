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
  -p, --prefix <prefix>  The enviroment variable prefix - DEFAULT npm_package_config_
  -h, --help             output usage information
```

## Example
```
export npm_package_config_foo=bar
export npm_package_config_mung=face
```

```
$> ipce my-awesome-package

my-awesome-package:mung=face
my-awesome-package:foo=bar
```

To put config straight in to a `.npmrc` file:

```
$> ipce my-awesome-package > .npmrc
$> cat .npmrc

my-awesome-package:mung=face
my-awesome-package:foo=bar
```
