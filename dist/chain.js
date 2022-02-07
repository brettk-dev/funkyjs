"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chain = (value) => {
    Object.freeze(value);
    return {
        value,
        pipe: (cb, ...args) => chain(cb(value, ...args)),
        effect: (cb, ...args) => {
            cb(value, ...args);
            return chain(value);
        },
    };
};
exports.default = chain;
