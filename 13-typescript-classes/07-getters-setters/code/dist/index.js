"use strict";
// Getters and Setters
class Player {
    // Constructor Method using Parameter Properties Shorthand
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    // Method
    secretMethod() {
        console.log("Secret Method");
    }
    // Getter
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    // Setter
    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score MUST NOT be negative.");
        this._score = newScore;
    }
}
const player = new Player("John", "Wick", 100);
console.log(`Your fullname is ${player.fullName}`);
console.log(`Current Score: ${player.score}`);
player.score = 500;
console.log(`Current Score: ${player.score}`);
