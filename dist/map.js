"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapObject = (obj, fn) => Object.entries(obj).reduce((newObj, [key, value]) => (Object.assign(Object.assign({}, newObj), { [key]: fn(value, key, obj) })), {});
const map = (arrayOrObject, fn) => Array.isArray(arrayOrObject)
    ? arrayOrObject.map(fn)
    : mapObject(arrayOrObject, fn);
exports.default = map;
