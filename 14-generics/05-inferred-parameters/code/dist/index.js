"use strict";
// Inferred Generic Type Parameters
// Returns a random element from the array passed as argument
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
console.log(getRandomElement([1, 2, 3, 4, 5]));
console.log(getRandomElement(["a", "b", "c", "d"]));
console.log(getRandomElement([
    { name: "Garfield", breed: "Orange" },
    { name: "Felix", breed: "Tux" },
    { name: "Void", breed: "Black" },
]));
