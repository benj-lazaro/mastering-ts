// Introducting Union Types

// Working with union of primitive types
let age: number | string = 12;
console.log(`age: ${age}`);

age = "twelve";
console.log(`age: ${age}`);

// Working with union of custom types
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinate: Point | Loc = {
  x: 100,
  y: 200,
};
console.log(coordinate);

coordinate = {
  lat: 12312.23,
  long: 45643.34,
};
console.log(coordinate);
