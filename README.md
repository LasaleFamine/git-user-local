# git-user-local

[![Build Status](https://travis-ci.com/LasaleFamine/git-user-local.svg?branch=master)](https://travis-ci.com/LasaleFamine/git-user-local) [![codecov](https://codecov.io/gh/LasaleFamine/git-user-local/badge.svg?branch=master)](https://codecov.io/gh/LasaleFamine/git-user-local?branch=master)

> Get Git user info from local git config


## Install

```
$ yarn add git-user-local
```


## Usage

```js
const gitUserLocal = require('git-user-local');

gitUserLocal();
//=> {user: {email: 'awesome@unicorn.com', name: 'Phi'}}
```


## API

### gitUserLocal(path)

#### path

Type: `string`

You can pass a specific path for searching there instead of the homedir.

## License

MIT © [LasaleFamine](https://godev.space)
