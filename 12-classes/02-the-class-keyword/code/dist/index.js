"use strict";
// The constructor

class Player {
  constructor() {
    console.log("Called from w/in constructor...");
  }

  taunt() {
    console.log("Booyah!");
  }
}

const player1 = new Player();
player1.taunt();

const player2 = new Player();
player2.taunt();
