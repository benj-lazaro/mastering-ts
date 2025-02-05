// instanceof Narrowing

// Operator instanceof working with Date
function printFullDate(date: Date | string) {
  if (date instanceof Date) {
    return date.toUTCString();
  } else {
    return new Date(date).toDateString();
  }
}

console.log(printFullDate("9/11/2025"));

// Operator instanceof working with Classes
class User {
  constructor(public userName: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    return entity.userName;
  } else {
    return entity.name;
  }
}

let entity1 = new User("Victor Vom Doom");
console.log(printName(entity1));

let entity2 = new Company("Future Foundation");
console.log(printName(entity2));
