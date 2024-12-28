/*!
 * localstorage <https://github.com/wylau0/localstorage>
 *
 * Copyright (c) 2024, WY Lau.
 * Released under the MIT License.
 */

'use strict';

const set = <T = unknown>(key: string, value: T) : void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key: string) => {
  const value = localStorage.getItem(key);

  if (value === null) return null;
  return JSON.parse(value);
};

const remove = (key: string) : void => {
  localStorage.removeItem(key);
}

const clear = () : void => {
  localStorage.clear();
}

export default {
  set,
  get,
  remove,
  clear
};