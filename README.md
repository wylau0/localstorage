# localstorage

> A simple local storage wrapper

## Usage

```js
import ls from "@wylau/localstorage";

ls.set('name', 'wylau');
ls.get('name'); //=> 'wylau'
ls.remove('name');
ls.get('name'); //=>  null
ls.clear(); // remove all
```

Copyright © 2024, [wylau0](https://github.com/wylau0).
Released under the [MIT License](LICENSE).
