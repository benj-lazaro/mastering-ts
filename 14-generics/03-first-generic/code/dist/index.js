"use strict";
// Writing Out First Generic
// Whatever the type of the argument value is, that will be the return type
function identity(item) {
    return item;
}
// A string type
console.log(identity("Hi there!"));
console.log(typeof identity("Hi there!"));
// A number type
console.log(identity(123));
console.log(typeof identity(123));
// An interface Cat type
console.log(identity({ name: "Garfield", breed: "Orange Tabby" }));
console.log(typeof identity({ name: "Garfield", breed: "Orange Tabby" }));
