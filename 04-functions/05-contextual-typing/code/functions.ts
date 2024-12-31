// Contextual Typing

// An array of colors
const colors = ["red", "blue", "yellow"];

// Store uppcased elements of the array
// Parameter "color" inferred to be of type "string"
const result = colors.map((color) => {
  return color.toUpperCase();
});

console.log(result);
