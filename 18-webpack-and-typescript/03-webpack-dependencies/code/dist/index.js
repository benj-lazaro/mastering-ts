// Setting Up A Project
import Dog from "./Dog.js";
import ShelterDog from "./ShelterDog.js";
import { add, multiply, divide } from "./utils.js";
console.log("From index file");
const bantay = new Dog("Bantay", "Aspin", 9);
bantay.bark();
console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));
const spot = new ShelterDog("Spot", "Aspin", 5, "Bantay Salakay Shelter");
