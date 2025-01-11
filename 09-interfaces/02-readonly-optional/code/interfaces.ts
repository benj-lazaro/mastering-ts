// Readonly and Optional Interface Properties

// Optional & Read-Only Property
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
}

let person: Person = {
  id: 1,
  first: "John",
  last: "Wick",
  nickname: "Babayaga",
};
console.log(person);

person = { id: 2, first: "John", last: "Constantine" };
console.log(person);
