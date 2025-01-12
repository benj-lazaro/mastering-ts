// Interface Multiple Inheritance
var johnny = {
    name: "Johnny",
    id: 12345,
    email: "jmnemonic@roomservices.org",
    level: "Senior Console Cowboy",
    languages: [
        " English",
        " JavaScript",
        " Rust",
        " C/C++",
        " Python",
        " TypeScript",
    ],
};
console.log("My name is ".concat(johnny.name, ", a ").concat(johnny.level, " with ID #").concat(johnny.id, ". My work email is ").concat(johnny.email, ". Fluent with the following languages:").concat(johnny.languages));
