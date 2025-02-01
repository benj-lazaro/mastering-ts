// Generics With Multiple Types

// Generic function that merges two objects
function merge<T, U>(object1: T, object2: U) {
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
