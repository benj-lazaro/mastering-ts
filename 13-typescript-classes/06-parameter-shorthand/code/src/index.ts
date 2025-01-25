// Parameter Properties Shorthand

class Player {
  // Class Property with a hard-coded initial value
  private score: number = 0;

  // Constructor Method using Parameter Properties Shorthand
  constructor(public first: string, public last: string) {}

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const wick = new Player("John", "Wick");
console.log(`Hi ${wick.first} ${wick.last}`);
