"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const copy_1 = __importDefault(require("./copy"));
const pipe = (value, ...fns) => fns.reduce((output, fn) => fn((0, copy_1.default)(output)), value);
exports.default = pipe;
