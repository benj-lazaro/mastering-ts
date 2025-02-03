"use strict";
// Default Type Parameters
// Generic Type Paramter defaults to number
function makeEmptyArray() {
    return [];
}
// Returns a string array
const stringArray = makeEmptyArray();
stringArray.push("first");
stringArray.push("second");
console.log(stringArray);
// Calls the Generic Function without an explicit Type Parameter
// Returns a number array
const numberArray = makeEmptyArray();
numberArray.push(1);
numberArray.push(2);
console.log(numberArray);
// Returns a boolean array
const booleanArray = makeEmptyArray();
booleanArray.push(false);
booleanArray.push(true);
console.log(booleanArray);
