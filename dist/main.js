"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.map = exports.curry = exports.chain = void 0;
const chain_1 = __importDefault(require("./chain"));
exports.chain = chain_1.default;
const curry_1 = __importDefault(require("./curry"));
exports.curry = curry_1.default;
const map_1 = __importDefault(require("./map"));
exports.map = map_1.default;
const pipe_1 = __importDefault(require("./pipe"));
exports.pipe = pipe_1.default;
