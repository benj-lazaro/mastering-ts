// Introducing Tuples

// Tuple of an array of two elements
// 1st element is of number type and 2nd element is of string type
let myTuple: [number, string];
myTuple = [47, "Hello"];

// Reversing the order, TypeScript flags an error
// myTuple = ["Hello", 47];

// Representing an RGB color
// An array of strictly 3 items of type number
let rgbColor: [number, number, number];
rgbColor = [255, 56, 255];
