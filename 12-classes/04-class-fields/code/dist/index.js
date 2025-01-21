"use strict";
// Constructors

class Player {
  // Class properties (fields) with hard-coded initial values
  score = 0;
  numLives = 10;

  // Constructor method
  constructor(first, last) {
    // Properties with dynamic initial values
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
}

// Instantiate class Player into objects
const player1 = new Player("Blue", "Steele");
player1.taunt();
console.log(`Hi there ${player1.firstName} ${player1.lastName}.`);
console.log(
  `You have ${player1.numLives} lives & a current score of ${player1.score}`
);

const player2 = new Player("Charlie", "Brown");
player2.taunt();
player2.loseLife();
console.log(`Hi there ${player2.firstName} ${player2.lastName}.`);
console.log(
  `You have ${player2.numLives} lives & a current score of ${player2.score}`
);
