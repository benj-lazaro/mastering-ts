// Extending Interfaces

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

// Extends the interface Dog
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb disposal" | "guide";
}

const brutus: ServiceDog = {
  name: "Brutis",
  age: 10,
  breed: "German Sheperd",
  bark() {
    return "Pixie, no!";
  },
  job: "bomb disposal",
};

console.log(
  `${brutus.name} is a ${brutus.age} years old ${brutus.breed} and a retired ${
    brutus.job
  } dog has dropped by to say "${brutus.bark()}" `
);
