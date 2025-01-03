// Optional Properties

// Define an object type with an optional property using Type Alias
type Point = {
  x: number;
  y: number;
  z?: number;
};

const coordinate: Point = { x: 10, y: 20 };
const myPoint: Point = { x: 10, y: 20, z: 30 };

console.log(coordinate);
console.log(myPoint);
