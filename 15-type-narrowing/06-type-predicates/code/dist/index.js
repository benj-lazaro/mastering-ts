"use strict";
// Working With Type Predicates
// Returns a boolean true (i.e. type of Cat) if property "numLives" is detected
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return `${animal.name} says "Meow"!`;
    }
    else {
        return `${animal.name} says "Woof!"`;
    }
}
console.log(makeNoise({ name: "Garfield", numLives: 10 }));
console.log(makeNoise({ name: "Odie", breed: "aspin" }));
