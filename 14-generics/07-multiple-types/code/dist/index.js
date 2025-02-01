"use strict";
// Generics With Multiple Types
// Generic function that merges two objects
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "John Wick" }, { weapons: ["gun", "pencil", "knife", "hardcover book", "playing card"] });
console.log(comboObj);
