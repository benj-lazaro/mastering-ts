// The protected Modifier

// Base / Parent Class
class Player {
  // Constructor Method using Parameter Properties Shorthand
  constructor(
    public first: string,
    public last: string,
    protected _score: number
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

// Sub / Child Class
class SuperPlayer extends Player {
  public isAdmin: boolean = true;

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
