// Working With object Types
// An arrow function that accepts an argument value with a type of object
var printName = function (person) {
    return "Your fullname is ".concat(person.first, " ").concat(person.last);
};
// A normal function that accepts an argument value with a type of object
function printName2(person) {
    console.log("Your fullname is ".concat(person.first, " ").concat(person.last));
}
var fullName = printName({ first: "John", last: "Wick" });
console.log(fullName);
printName2({ first: "John", last: "Constantine" });
