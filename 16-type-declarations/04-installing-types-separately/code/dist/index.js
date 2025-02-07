"use strict";
// Installing Types Separately
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const sampleResult = lodash_1.default.sample([12, 23, 34, 45, 56, 67, 89, 90]);
console.log(sampleResult);
