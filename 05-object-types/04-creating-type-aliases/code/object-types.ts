// Type Alias

// Object type alias
type Point = {
  x: number;
  y: number;
};

// Primitive type alias
type MyNumber = number;

// Annotate a variable with the created object type alias
let coordinate: Point = { x: 10, y: 20 };
console.log(coordinate);

// Annotate the function's return value with the object type alias
function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doubleCoordinates(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

let randomCoords = randomCoordinate();
console.log(randomCoords);

let doubleCoords = doubleCoordinates(coordinate);
console.log(doubleCoords);

// Variable annotated with a primitive type alias
let mobileNumber: MyNumber = 123456;
console.log(mobileNumber);
