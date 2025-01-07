// Exercise 01:
// Create an empty array of numbers called "ages":
const ages: number[] = [];

ages[0] = 1;
ages[1] = 2;

console.log(ages);

// Exercise 02:
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

gameBoard[0] = ["hey", "there"];
gameBoard[1] = ["hello", "there"];

console.log(gameBoard);
console.log(gameBoard[0][0]);
console.log(gameBoard[1][1]);

// Exercise 03:
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};

// Exercise 04:
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products: Product[]): number {
  let total = 0;

  for (let product of products) {
    total += product.price;
  }

  return total;
}

const productItems = [
  { name: "coffee mug", price: 11.5 },
  { name: "coffee maker", price: 20.5 },
];

console.log(productItems);

const totalCost = getTotal(productItems);
console.log(`Total Item(s) Cost: USD $${totalCost}`);
