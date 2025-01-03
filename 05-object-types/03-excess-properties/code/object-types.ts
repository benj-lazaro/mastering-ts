// Excess Properties

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

// An object with excess properties passed as inline argument value to a function
// TypeScript flags it as an error
// printName({ first: "John", last: "Wick", age: 56, isAlive: true });

// The same object argument stored in a constant
// Pass the constant as argument value to the same function
// TypeScript does NOT flag an error; it just IGNORES the excess properties
const assassin = { first: "John", last: "Wick", age: 56, isAlive: true };
printName(assassin);
