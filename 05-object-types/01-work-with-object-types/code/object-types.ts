// Working With object Types

// An arrow function that accepts an argument value with a type of object
const printName = (person: { first: string; last: string }): string => {
  return `Your fullname is ${person.first} ${person.last}`;
};

let fullName = printName({ first: "John", last: "Wick" });
console.log(fullName);

// A normal function that accepts an argument value with a type of object
function printName2(person: { first: string; last: string }): void {
  console.log(`Your fullname is ${person.first} ${person.last}`);
}

printName2({ first: "John", last: "Constantine" });
