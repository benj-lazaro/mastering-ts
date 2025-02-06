"use strict";
// Exhaustiveness Checks With never
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Moo!";
        case "rooster":
            return "Cockadoodledoo!";
        case "sheep":
            return "Baa!";
        default:
            // Should NEVER EVER make it here, if handled all cases correctly
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Steevie Chicks",
    weight: 2,
    age: 2,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
