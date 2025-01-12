// Reopening Interfaces

// Pretend this interface comes from a separate file / library
interface Dog {
  name: string;
  age: number;
}

// Pretend the following lines is the codebase of your app
interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Sheperd",
  bark() {
    return "Ello Mate... I mean Woof!";
  },
};

console.log(
  `The dog named ${elton.name}, a ${elton.age} years old ${
    elton.breed
  } dropped by say "${elton.bark()}" `
);
