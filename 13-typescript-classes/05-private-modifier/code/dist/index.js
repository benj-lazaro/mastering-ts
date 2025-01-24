"use strict";
// The private Modifier
class Player {
    // Constructor Method
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret Method");
    }
}
const wick = new Player("John", "Wick");
console.log(`Hi ${wick.first} ${wick.last}`);
// Accessing a private property & methodflags an error
// wick.score = 100;
// console.log(`Your current score is ${wick.score}`);
// wick.secretMethod();
