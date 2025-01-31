// Generics, Arrow Functions & TSX Files

interface Cat {
  name: string;
  breed: string;
}

// Returns a random element from the array passed as argument
function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomElement([1, 2, 3, 4, 5]));

console.log(getRandomElement(["a", "b", "c", "d"]));

console.log(
  getRandomElement([
    { name: "Garfield", breed: "Orange" },
    { name: "Felix", breed: "Tux" },
    { name: "Void", breed: "Black" },
  ])
);
