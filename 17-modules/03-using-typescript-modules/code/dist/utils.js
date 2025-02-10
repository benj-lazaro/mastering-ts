"use strict";
// A collection of utility functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.sample = sample;
// Returns the sum of two numbers
function add(x, y) {
    return x + y;
}
// Returns a random array element
function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
