// Type Alias
// Annotate a variable with the created object type alias
var coordinate = { x: 10, y: 20 };
console.log(coordinate);
// Annotate the function's return value with the object type alias
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doubleCoordinates(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var randomCoords = randomCoordinate();
console.log(randomCoords);
var doubleCoords = doubleCoordinates(coordinate);
console.log(doubleCoords);
// Variable annotated with a primitive type alias
var mobileNumber = 123456;
console.log(mobileNumber);
