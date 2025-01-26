// Abstract Classes

abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number;

  greet(): void {
    console.log("Hello!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private salary: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const bill = new FullTimeEmployee("Bill", "Gates", 100);
bill.greet();
console.log(`${bill.first}'s take home pay is $${bill.getPay()}.00`);

const steve = new PartTimeEmployee("Steve", "Jobs", 20, 8);
steve.greet();
console.log(`${steve.first}'s take home pay is $${steve.getPay()}.00`);
