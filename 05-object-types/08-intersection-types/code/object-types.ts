// Intersection Types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

// Direct intersection of the two previous types
type ColorfulCircle = Circle & Colorful;

const smiley: ColorfulCircle = { radius: 4, color: "Yellow" };

console.log(
  `You created a ${smiley.color} circle with a radius of ${smiley.radius}.`
);

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

// Intersection of two previous types with an additional property
type CatDog = Cat &
  Dog & {
    age: number;
  };

const mcruff: CatDog = {
  numLives: 9,
  breed: "Husky",
  age: 13,
};

console.log(
  ` McRuff is current ${mcruff.age} years old, known have ${mcruff.numLives} lives and came from a breed of ${mcruff.breed}`
);
