// Contextual Typing
// An array of colors
var colors = ["red", "blue", "yellow"];
// Call .map() method on colors & uppercase elements of the array "colors"
// Parameter "color" is inferred to be of type "string"
var result = colors.map(function (color) {
    return color.toUpperCase();
});
console.log(result);
console.log(colors);
