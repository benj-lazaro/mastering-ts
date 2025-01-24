// The public Modifier

class Player {
  // Class Fields
  public readonly first: string;
  public readonly last: string;
  public score: number = 0;

  // Constructor Method
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const wick = new Player("John", "Wick");
console.log(`Hi ${wick.first} ${wick.last}`);

wick.score = 100;
console.log(`Your current score is ${wick.score}`);
