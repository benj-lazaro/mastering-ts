// Getters and Setters

class Player {
  // Constructor Method using Parameter Properties Shorthand
  constructor(
    public first: string,
    public last: string,
    private _score: number
  ) {}

  // Method
  private secretMethod(): void {
    console.log("Secret Method");
  }

  // Getter
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  // Setter
  set score(newScore: number) {
    if (newScore < 0) throw new Error("Score MUST NOT be negative.");
    this._score = newScore;
  }
}

const player = new Player("John", "Wick", 100);
console.log(`Your fullname is ${player.fullName}`);
console.log(`Current Score: ${player.score}`);

player.score = 500;

console.log(`Current Score: ${player.score}`);
