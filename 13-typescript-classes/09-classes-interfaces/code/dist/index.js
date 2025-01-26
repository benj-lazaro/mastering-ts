"use strict";
// Classes and Interfaces
// Implments Interface on a Class
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike = new Bike("Red");
const jacket = new Jacket("Prada", "Black");
jacket.print();
