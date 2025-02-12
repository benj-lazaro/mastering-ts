// A collection of utility functions
// Returns the sum of two numbers
export function add(x, y) {
    return x + y;
}
// Returns a random array element
export function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
