"use strict";
// Type Assertions with DOM
// Non-null assert & Type assert selected elements
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
btn.addEventListener("click", function () {
    // Alternate Type Assertion syntax
    alert(input.value);
    input.value = "";
});
