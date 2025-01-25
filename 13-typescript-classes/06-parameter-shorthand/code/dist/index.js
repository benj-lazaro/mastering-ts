"use strict";
// Parameter Properties Shorthand
class Player {
    // Constructor Method using Parameter Properties Shorthand
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // Class Property with a hard-coded initial value
        this.score = 0;
    }
    secretMethod() {
        console.log("Secret Method");
    }
}
const wick = new Player("John", "Wick");
console.log(`Hi ${wick.first} ${wick.last}`);
