// Writing Another Generic Function

interface Cat {
  name: string;
  breed: string;
}

// Returns a random element from the array passed as argument
function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

console.log(getRandomElement<number>([1, 2, 3, 4, 5]));

console.log(getRandomElement<string>(["a", "b", "c", "d"]));

console.log(
  getRandomElement<Cat>([
    { name: "Garfield", breed: "Orange" },
    { name: "Felix", breed: "Tux" },
    { name: "Void", breed: "Black" },
  ])
);
