// "any" Type

// Disables TypeScript's type checking feature
let thing: any = "hello";

// Variable can accept any value without the TypeScript compiler complaining
thing = 123;
thing = true;
thing = [];
thing();
thing.toUpperCase();
