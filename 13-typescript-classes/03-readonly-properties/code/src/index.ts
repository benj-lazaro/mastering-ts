// readonly Class Properties

class Player {
  // Class Fields
  readonly first: string;
  readonly last: string;
  score: number = 0;

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
