// Adding Type Constraints

// Constraints the parameter type values (i.e. arguments) to be something of type object
function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge(
  { name: "John Wick" },
  { weapons: ["gun", "pencil", "knife", "hardcover book", "playing card"] }
);

console.log(comboObj);

// Flags an error when attempting to pass that does NOT conform to the declared constraints
// const comboObj1 = merge({ name: "John Doh"}, 9);

interface Length {
  length: number;
}

// Function that accepts a string returns the value returned by the .length method twice
function printDoubleLength<T extends Length>(thing: T): number {
  return thing.length * 2;
}

const result = printDoubleLength("test");
console.log(result);
