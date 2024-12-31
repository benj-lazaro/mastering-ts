// Default Parameters
// Normal function default parameter
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
console.log(greet("John Wick"));
console.log(greet());
// Arrow function default parameter
var greet2 = function (person) {
    if (person === void 0) { person = "starnger"; }
    return "Howdy, ".concat(person, "!");
};
console.log(greet2("John Wick"));
console.log(greet2());
