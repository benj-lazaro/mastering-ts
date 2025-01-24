"use strict";
// The public Modifier
class Player {
    // Constructor Method
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
}
const wick = new Player("John", "Wick");
console.log(`Hi ${wick.first} ${wick.last}`);
wick.score = 100;
console.log(`Your current score is ${wick.score}`);
