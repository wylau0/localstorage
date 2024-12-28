<h1>localstorage.js</h1>
<p>
  <a href="https://www.npmjs.com/package/localstorage.js" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/localstorage.js.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A simple local storage wrapper

## Install

```sh
npm install @wylau/localstorage
```

## Usage

```js
import ls from "@wylau/localstorage";

ls.set('hello', 'world!');
ls.set('data', {name: 'Le Sserafim', members: ['Chaewon', 'Sakura', 'Yunjin', 'Kazuha', 'Eunchae']});

console.log(ls.get('hello')); //=> 'world!'
console.log(ls.count()) //=> 2
console.log(ls.getAll()) //=> [
// {key: 'hello', value: 'world!'},
// {key: 'data', value: {name: 'Le Sserafim', members: ['Chaewon', 'Sakura', 'Yunjin', 'Kazuha', 'Eunchae']}}
// ]
ls.clear();
console.log(ls.count()) //=> 0
```

## Author

👤 **[@wylau0](https://github.com/wylau0)**

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_