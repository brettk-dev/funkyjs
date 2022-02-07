"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry = (fn, args = []) => fn.length === 0
    ? () => fn()
    : args.length === fn.length
        ? fn(...args)
        : (arg) => curry(fn, [...args, arg]);
exports.default = curry;
