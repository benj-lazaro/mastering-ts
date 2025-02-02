"use strict";
// Adding Type Constraints
// Constraints the parameter type values (i.e. arguments) to be something of type object
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "John Wick" }, { weapons: ["gun", "pencil", "knife", "hardcover book", "playing card"] });
console.log(comboObj);
// Function that accepts a string returns the value returned by the .length method twice
function printDoubleLength(thing) {
    return thing.length * 2;
}
const result = printDoubleLength("test");
console.log(result);
