"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const copy_1 = __importDefault(require("./copy"));
const mapObject = (obj, fn) => Object.entries(obj).reduce((newObj, [key, value]) => (Object.assign(Object.assign({}, newObj), { [key]: fn(value, key, obj) })), {});
const map = (arrayOrObject, fn) => Array.isArray(arrayOrObject)
    ? (0, copy_1.default)(arrayOrObject).map(fn)
    : mapObject((0, copy_1.default)(arrayOrObject), fn);
exports.default = map;
