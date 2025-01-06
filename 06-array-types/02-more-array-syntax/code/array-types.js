// Alternative Array Syntax
// Constant activeUsers is annotated as an array of string & assigned with an empty array
var activeUsers = [];
activeUsers.push("John Wick");
console.log(activeUsers);
// Constant agelist ia annotated as an array of numbers with initial items
var ageList = [45, 56, 13];
ageList.push(47);
console.log(ageList);
var coordinates = [
    { x: 1, y: 2 },
    { x: 33, y: 52 },
];
// Array with custom types (alternate syntax)
// const coordinates: Array<Point> = [
//   { x: 1, y: 2 },
//   { x: 33, y: 52 },
// ];
coordinates.push({ x: 456, y: 123 });
console.log(coordinates);
