// Return Type Annotations
// Normal function explicit return type annotations
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
// Arrow function explicit return type annotations
var addNumbers = function (x, y) {
    return x + y;
};
console.log(greet("John Wick"));
console.log(addNumbers(2, 2));
// Normal function that returns either type number or string
function rando(num) {
    if (Math.random() < 0.5)
        return num.toString();
    return num;
}
console.log(typeof rando(9));
