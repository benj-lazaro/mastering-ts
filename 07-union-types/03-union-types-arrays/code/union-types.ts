// Union Types & Arrays

// Custom types using Type Alias
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

// Array of Union Type
let coordinate: (Point | Loc)[] = [];

// Push custom type items into the array
coordinate.push({ x: 10, y: 10 });
coordinate.push({ lat: 10.2, long: 203.2 });

console.log(coordinate);
