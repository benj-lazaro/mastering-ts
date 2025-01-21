"use strict";
// Working with Events
// Non-null assert and then Type assert selected elements
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
}
// Listen for a "submit" event on form & prevents the default behavior
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
