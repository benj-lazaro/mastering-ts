"use strict";
// Typeof Guards
function triple(value) {
    if (typeof value === "number")
        return value * 3;
    return value.repeat(3);
}
// Pass a number arguement
console.log(triple(3));
// Pass a string argument
console.log(triple("hi "));
