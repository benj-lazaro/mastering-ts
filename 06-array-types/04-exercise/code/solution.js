// Exercise 01:
// Create an empty array of numbers called "ages":
var ages = [];
ages[0] = 1;
ages[1] = 2;
console.log(ages);
// Exercise 02:
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
gameBoard[0] = ["hey", "there"];
gameBoard[1] = ["hello", "there"];
console.log(gameBoard);
console.log(gameBoard[0][0]);
console.log(gameBoard[1][1]);
// Exercise 04:
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
var productItems = [
    { name: "coffee mug", price: 11.5 },
    { name: "coffee maker", price: 20.5 },
];
console.log(productItems);
var totalCost = getTotal(productItems);
console.log("Total Item(s) Cost: USD $".concat(totalCost));
