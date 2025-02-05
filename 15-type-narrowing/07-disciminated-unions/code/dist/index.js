"use strict";
// Discriminated Unions
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Moo!";
        case "rooster":
            return "Cockadoodledoo!";
    }
}
const stevie = {
    name: "Steevie Chicks",
    weight: 2,
    age: 2,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
