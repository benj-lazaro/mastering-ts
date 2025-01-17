// Type Assertions with DOM

// Non-null assert & Type assert selected elements
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")!;

btn.addEventListener("click", function () {
  // Alternate Type Assertion syntax
  alert((<HTMLInputElement>input).value);
  (<HTMLInputElement>input).value = "";
});
