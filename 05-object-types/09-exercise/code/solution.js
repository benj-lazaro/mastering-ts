// Exercise 01:
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
var cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
// Exercise 02:
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652
function getProfit(_a) {
    var _b = _a.boxOffice, grossWorldwide = _b.grossWorldwide, budget = _b.budget;
    return grossWorldwide - budget;
}
// Exercise 01 test code
console.log("The movie ".concat(dune.title, " originally titled \"").concat(dune.originalTitle, "\" was directed by ").concat(dune.director));
console.log("The movie ".concat(cats.title, " was directed by ").concat(cats.director));
// Exercise 02 test code
var profit = getProfit(dune);
console.log("".concat(dune.title, " released on ").concat(dune.releaseYear, " had profitted ").concat(profit, " USD"));
profit = getProfit(cats);
console.log("".concat(cats.title, " released on ").concat(cats.releaseYear, " had profitted ").concat(profit, " USD"));
