// Classes and Interfaces

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

// Implments Interface on a Class
class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike = new Bike("Red");

const jacket = new Jacket("Prada", "Black");
jacket.print();
