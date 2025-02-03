// Default Type Parameters

// Generic Type Paramter defaults to number
function makeEmptyArray<T = number>(): T[] {
  return [];
}

// Returns a string array
const stringArray = makeEmptyArray<string>();
stringArray.push("first");
stringArray.push("second");
console.log(stringArray);

// Calls the Generic Function without an explicit Type Parameter
// Returns a number array
const numberArray = makeEmptyArray();
numberArray.push(1);
numberArray.push(2);
console.log(numberArray);

// Returns a boolean array
const booleanArray = makeEmptyArray<boolean>();
booleanArray.push(false);
booleanArray.push(true);
console.log(booleanArray);
