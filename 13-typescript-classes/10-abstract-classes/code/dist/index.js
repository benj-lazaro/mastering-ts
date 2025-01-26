"use strict";
// Abstract Classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello!");
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const bill = new FullTimeEmployee("Bill", "Gates", 100);
bill.greet();
console.log(`${bill.first}'s take home pay is $${bill.getPay()}.00`);
const steve = new PartTimeEmployee("Steve", "Jobs", 20, 8);
steve.greet();
console.log(`${steve.first}'s take home pay is $${steve.getPay()}.00`);
