/*!
 * localstorage <https://github.com/wylau0/localstorage>
 *
 * Copyright (c) 2024, WY Lau.
 * Released under the MIT License.
 */

'use strict';

const set = <T = unknown>(key: string, value: T) : void => {
  if (typeof value !== 'string') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

const count = () : number => {
  return localStorage.length;
}

const get = (key: string) => {
  const value = localStorage.getItem(key);

  if (value === null) return null;
  try {
    const val = JSON.parse(value);
    return val;
  } catch (e) {
    return value;
  }
};

const getAll = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const value = get(key);
        items.push({ key, value });
      }
    }
    return items;
}

const all = getAll;

const remove = (key: string) : void => {
  localStorage.removeItem(key);
}

const clear = () : void => {
  localStorage.clear();
}

export default {
  set,
  count,
  get,
  getAll,
  all,
  remove,
  clear
};
