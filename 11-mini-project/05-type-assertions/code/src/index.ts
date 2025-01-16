// Type Assertions

// Annontate string literal as type unknown stored in a variable
let mystery: unknown = "Hello World";

// Assert that 'mystery' is of type string
const numChars = (mystery as string).length;
console.log(numChars);
