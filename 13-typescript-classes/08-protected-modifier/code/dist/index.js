"use strict";
// The protected Modifier
// Base / Parent Class
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
// Sub / Child Class
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999;
    }
}
const player = new Player("John", "Wick", 100);
console.log(`Your fullname is ${player.fullName}`);
console.log(`Current Score: ${player.score}`);
const admin = new SuperPlayer("John", "Constantine", 100);
console.log(`Your fullname is ${admin.fullName}`);
admin.maxScore();
console.log(`Current Score: ${admin.score}`);
