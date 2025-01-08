// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = 100;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [];
stuff[0] = 1;
stuff[1] = 2;
console.log(stuff);
var skill;
skill = "Advanced";
console.log(skill);
skill = "Expert";
console.log(skill);
var student = {
    name: "Tony",
    age: 57,
    sport: "ski",
    level: "Expert",
};
console.log(student);
var colors = [];
colors.push({ r: 1, g: 2, b: 3 });
colors.push({ h: 10, s: 20, l: 30 });
console.log(colors);
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(person) {
    if (Array.isArray(person)) {
        for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
            var name_1 = person_1[_i];
            console.log("Hello ".concat(name_1));
        }
    }
    else {
        console.log("Hello ".concat(person));
    }
}
greet("Babayaga");
greet(["Colt", "Blue"]);
