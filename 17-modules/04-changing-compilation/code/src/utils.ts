// A collection of utility functions

// Returns the sum of two numbers
export function add(x: number, y: number): number {
  return x + y;
}

// Returns a random array element
export function sample<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
