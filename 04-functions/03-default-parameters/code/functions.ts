// Default Parameters

// Normal function default parameter
function greet(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

console.log(greet("John Wick"));
console.log(greet());

// Error: Passed a value of type number
// console.log(greet(23));

// Arrow function default parameter
const greet2 = (person: string = "starnger") => {
  return `Howdy, ${person}!`;
};

console.log(greet2("John Wick"));
console.log(greet2());
