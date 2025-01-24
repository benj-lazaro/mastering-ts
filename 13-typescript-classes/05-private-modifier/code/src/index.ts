// The private Modifier

class Player {
  // Class Fields
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  // Constructor Method
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const wick = new Player("John", "Wick");
console.log(`Hi ${wick.first} ${wick.last}`);

// Accessing a private property & methodflags an error
// wick.score = 100;
// console.log(`Your current score is ${wick.score}`);

// wick.secretMethod();
