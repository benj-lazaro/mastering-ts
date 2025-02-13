// A collection of utility functions

// Exported functions
export function add(x: number, y: number): number {
  return x + y;
}

export function sample<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Exported const variable
export const pi = 3.14;
