// Extending Classes

"use strict";

// Parent Class
class Player {
  static description = "A player in the game";

  #score = 0;
  numLives = 10;

  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.#secret();
  }

  static randomPlayer() {
    return new Player("John", "Constantine");
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get score() {
    return this.#score;
  }

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

  taunt() {
    console.log("Booyah!");
  }

  loseLife() {
    this.numLives -= 1;
  }

  #secret() {
    console.log("Secret!");
  }
  getScore() {
    return this.#score;
  }

  setScore(newScore) {
    this.#score = newScore;
  }
}

// Child Class
class AdminPlayer extends Player {
  isAdmin = true;

  constructor(first, last, powers) {
    // References & pass values to the Parent Class' Contructor Method
    super(first, last);
    // Then pass remaining value for this class' Constructor Method
    this.powers = powers;
  }
}

// Instantiate Child Class; pass values for the Parent & Child Classes Constructor Methods
const admin = new AdminPlayer("John", "Constantine", [
  "create",
  "delete",
  "edit",
]);

console.log(`Hi there ${admin.firstName} ${admin.lastName}.`);
console.log(`Your number of lives is: ${admin.numLives}`);
console.log(`Current privileges; ${admin.powers} `);

// Peek into the Child class inherited & own properties
console.log(admin);
