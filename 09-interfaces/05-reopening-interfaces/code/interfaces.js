// Reopening Interfaces
var elton = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Sheperd",
    bark: function () {
        return "Ello Mate... I mean Woof!";
    },
};
console.log("The dog named ".concat(elton.name, ", a ").concat(elton.age, " years old ").concat(elton.breed, " dropped by say \"").concat(elton.bark(), "\" "));
