// Importing Types
import { add, sample as randomSample, pi } from "./utils.js";
import { userHelper } from "./User.js";
const sample = 12312312;
const sampleArrayElement = randomSample([1, 2, 3, 4, 5]);
console.log(`Sample Element: ${sampleArrayElement}`);
const sum = add(12, 34);
console.log(`Sum: ${sum}`);
console.log(`Pi: ${pi}`);
userHelper();
