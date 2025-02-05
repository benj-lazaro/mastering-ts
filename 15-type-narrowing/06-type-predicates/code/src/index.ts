// Working With Type Predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// Returns a boolean true (i.e. type of Cat) if property "numLives" is detected
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return `${animal.name} says "Meow"!`;
  } else {
    return `${animal.name} says "Woof!"`;
  }
}

console.log(makeNoise({ name: "Garfield", numLives: 10 }));
console.log(makeNoise({ name: "Odie", breed: "aspin" }));
