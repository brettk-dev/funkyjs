"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nativeTypes = ['number', 'bigint', 'string', 'boolean', 'undefined'];
const copy = (input) => {
    if (input === null || nativeTypes.includes(typeof input))
        return input;
    if (Array.isArray(input))
        return input.reduce((a, v) => [...a, copy(v)], []);
    return Object.entries(input).reduce((obj, [k, v]) => (Object.assign(Object.assign({}, obj), { [k]: copy(v) })), input);
};
const pipe = (value, ...fns) => fns.reduce((output, fn) => fn(copy(output)), value);
exports.default = pipe;
