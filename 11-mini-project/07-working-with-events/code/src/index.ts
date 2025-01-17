// Working with Events

// Non-null assert and then Type assert selected elements
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  console.log("Submitted!");
}

// Listen for a "submit" event on form & prevents the default behavior
form.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
