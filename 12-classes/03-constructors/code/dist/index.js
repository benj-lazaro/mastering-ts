"use strict";
// Constructors

class Player {
  // Constructor
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // Class Method
  taunt() {
    console.log("Booyah!");
  }
}

const player1 = new Player("Blue", "Steele");
player1.taunt();
console.log(`Hi there ${player1.firstName} ${player1.lastName}.`);

const player2 = new Player("Charlie", "Brown");
player2.taunt();
console.log(`Hi there ${player2.firstName} ${player2.lastName}.`);
