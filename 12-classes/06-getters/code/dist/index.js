"use strict";
// Constructors

class Player {
  // Class properties (private & public, respectively)
  #score = 0;
  numLives = 10;

  // Constructor method
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.#secret(); // Access private method
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get score() {
    // Returns a Private property (field); has a better "call" syntax than getScore()
    return this.#score;
  }

  // Class Methods
  taunt() {
    console.log("Booyah!");
  }

  loseLife() {
    this.numLives -= 1;
  }

  // Prviate Class Method
  #secret() {
    console.log("Secret!");
  }

  // Class methods that access & update private property, respectively
  getScore() {
    return this.#score;
  }

  setScore(newScore) {
    this.#score = newScore;
  }
}

// Instantiate class Player into objects
const player = new Player("Blue", "Steele");

console.log(`Hi there ${player.firstName} ${player.lastName}.`);
console.log(`Your current score is: ${player.getScore()}`);

player.taunt();

// Update value of Private property
player.setScore(100);
console.log(`Your current score is: ${player.getScore()}`);

// Call the Getter
console.log(`Your full name is ${player.fullName}`);
console.log(`Your current score is: ${player.score}`);
