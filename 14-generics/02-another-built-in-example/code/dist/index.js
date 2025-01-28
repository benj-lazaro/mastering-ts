"use strict";
// Another Example of a Built-In Generic
// Coerces .querySelector() method to return a HTMLInputElement (instead of an Element) or a null
// Uses Non-Null Assertion to inform TypeScript that the value will NEVER be a null
const inputElement = document.querySelector("#username");
console.log(inputElement);
// Access the property "value", assign a new value & update the DOM
inputElement.value = "Hacked Input";
console.log(inputElement);
console.log(inputElement.value);
// Informs TypeScript that a HTMLButtonElement type is expected to be returned
// Uses Non-Null Assertion to inform TypeScript that the value will NEVER be a null
const btn = document.querySelector(".btn");
console.log(btn);
