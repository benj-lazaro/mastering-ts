// More Object Types
// Annotate a variable with an object type & assign an initial value (object)
var coordinates = { x: 34, y: 2 };
console.log("X: ".concat(coordinates.x, ", Y:").concat(coordinates.y));
// Annotate a return value of a function
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
var randomCoords = randomCoordinates();
console.log(randomCoords);
