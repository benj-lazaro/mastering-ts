// More Object Types

// Annotate a variable with an object type & assign an initial value (object)
let coordinates: { x: number; y: number } = { x: 34, y: 2 };

console.log(`X: ${coordinates.x}, Y:${coordinates.y}`);

// Annotate a return value of a function
function randomCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

let randomCoords = randomCoordinates();
console.log(randomCoords);
