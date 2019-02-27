# get-file-path

[![npm version][npm-badge]][npm]

Retrieve a file path from an initial path.
A common example is to get the path of a package.json.

**How it works?**
If the file isn't at the initial path, it will search in the parent folder, etc.

## Installation

```shell
npm i get-file-path
```

## Usage

```js
getFilePath(initialPath, fileToReach)
```

> By default `initialPath` = `./` and `fileToReach` = `package.json`

e.g

```js
import getFilePath from "get-file-path"

const packagePath = getFilePath("./", "package.json")

// packagePath: '/Users/username/Desktop/getFile/package.json'
```

## License

get-file-path is [MIT-licensed].

[npm-badge]: https://badge.fury.io/js/get-file-path.svg
[npm]: https://www.npmjs.com/package/get-file-path
