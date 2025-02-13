// Safer way of importing a defined Type
import type { Person } from "./types.js";

// Implements the export interface Person to this class
export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out`);
  }
}

// Named export
export function userHelper() {
  console.log("User helper!");
}
