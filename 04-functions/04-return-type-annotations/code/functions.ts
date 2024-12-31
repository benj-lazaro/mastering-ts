// Return Type Annotations

// Normal function explicit return type annotations
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

// Arrow function explicit return type annotations
const addNumbers = (x: number, y: number): number => {
  return x + y;
};

console.log(greet("John Wick"));
console.log(addNumbers(2, 2));

// Normal function that returns a value that could either a type number or string
function rando(num: number): number | string {
  if (Math.random() < 0.5) return num.toString();
  return num;
}

console.log(typeof rando(9));
