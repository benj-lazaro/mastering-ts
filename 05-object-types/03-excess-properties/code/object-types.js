// Excess Properties
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "John", last: "Wick" });
var assassin = { first: "John", last: "Wick", age: 56 };
printName(assassin);
