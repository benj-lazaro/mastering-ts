// Readonly and Optional Interface Properties
var person = {
    id: 123,
    first: "John",
    last: "Wick",
    sayHi: function () {
        return "Hello!";
    },
};
var result = person.sayHi();
console.log(result);
