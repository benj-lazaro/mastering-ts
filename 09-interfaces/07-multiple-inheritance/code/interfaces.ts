// Interface Multiple Inheritance

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// Extends previously declared interfaces
interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const johnny: Engineer = {
  name: "Johnny",
  id: 12345,
  email: "jmnemonic@roomservices.org",
  level: "Senior Console Cowboy",
  languages: [
    " English",
    " JavaScript",
    " Rust",
    " C/C++",
    " Python",
    " TypeScript",
  ],
};

console.log(
  `My name is ${johnny.name}, a ${johnny.level} with ID #${johnny.id}. My work email is ${johnny.email}. Fluent with the following languages:${johnny.languages}`
);
