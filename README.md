# trim-char

[![Travis](https://img.shields.io/travis/vutran/trim-char/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/vutran/trim-char) [![Coveralls branch](https://img.shields.io/coveralls/vutran/trim-char/master.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/vutran/trim-char) [![license](https://img.shields.io/github/license/vutran/trim-char.svg?maxAge=2592000&style=flat-square)](LICENSE)

> Trim characters from a string.

## Install

```bash
$ npm install --save trim-char
```

## Usage

```js
import trim from 'trim-char';

trim('foobar', 1); // -> ooba
trim('foobar', 2); // -> ob

```

## API

### trim(value, length)

Trims the value on both ends.

#### value

Type: `String`

The string to trim.

#### length

Type: `Number`

How much characters to cut off on each end.

## License

MIT © [Vu Tran](https://github.com/vutran/)
