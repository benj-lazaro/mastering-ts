"use strict";
// Constructors

class Player {
  // Static properties
  static description = "A player in the game";

  // Class properties (private & public, respectively)
  #score = 0;
  numLives = 10;

  // Constructor method
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.#secret(); // Access private method
  }

  // Static method
  static randomPlayer() {
    return new Player("John", "Constantine");
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get score() {
    // Returns a Private property (field); has a better "call" syntax than getScore()
    return this.#score;
  }

  // Setter
  set score(newScore) {
    if (newScore < 0) throw new Error("Score MUST be a positive number!");
    this.#score = newScore;
  }

  set fullName(newName) {
    if (newName.length === 0) throw new Error("Fullname MUST NOT be blank");

    const [first, last] = newName.split(" ");
    this.firstName = first;
    this.lastName = last;
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

// Call the Setter
player.fullName = "John Wick";
console.log(`Your full name is ${player.fullName}`);

player.score = 500;
console.log(`Your current score is: ${player.score}`);

// Attempt to access a Static property
console.log(player.description);

// Call Static method
const newPlayer = Player.randomPlayer();
console.log(`Your full name is ${newPlayer.fullName}`);
