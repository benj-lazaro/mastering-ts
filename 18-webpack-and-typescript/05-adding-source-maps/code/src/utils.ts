import _ from "lodash";

export function add(x: number, y: number): number {
  // To demonstrate dependency from a 3rd party library i.e. lodash
  // Triggers an error when served, looking for lodash
  return _.add(x, y);
}

export function multiply(x: number, y: number): number {
  return x * y;
}

export function divide(x: number, y: number): number {
  return x / y;
}
