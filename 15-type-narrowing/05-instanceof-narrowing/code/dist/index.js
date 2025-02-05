"use strict";
// instanceof Narrowing
// Operator instanceof working with Date
function printFullDate(date) {
    if (date instanceof Date) {
        return date.toUTCString();
    }
    else {
        return new Date(date).toDateString();
    }
}
console.log(printFullDate("9/11/2025"));
// Operator instanceof working with Classes
class User {
    constructor(userName) {
        this.userName = userName;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        return entity.userName;
    }
    else {
        return entity.name;
    }
}
let entity1 = new User("Victor Vom Doom");
console.log(printName(entity1));
let entity2 = new Company("Future Foundation");
console.log(printName(entity2));
