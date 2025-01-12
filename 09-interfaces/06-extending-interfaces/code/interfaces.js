// Extending Interfaces
var brutus = {
    name: "Brutis",
    age: 10,
    breed: "German Sheperd",
    bark: function () {
        return "Pixie, no!";
    },
    job: "bomb disposal",
};
console.log("".concat(brutus.name, " is a ").concat(brutus.age, " years old ").concat(brutus.breed, " and a retired ").concat(brutus.job, " dog has dropped by to say \"").concat(brutus.bark(), "\" "));
