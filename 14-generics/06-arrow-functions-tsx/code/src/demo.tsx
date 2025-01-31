// Generics, Arrow Functions & TSX Files

// Generic function implemented using the Arrow function syntax
const getRandomEl = <T,>(list: T[]): T => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
