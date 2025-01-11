// Readonly and Optional Interface Properties

// Optional & Read-Only Property
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}

const person: Person = {
  id: 123,
  first: "John",
  last: "Wick",
  sayHi: () => {
    return "Hello!";
  },
};

let result = person.sayHi();
console.log(result);
