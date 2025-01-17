// Working with Events

// Non-null assert and then Type assert selected elements
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")! as HTMLUListElement;

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  // Handle the value of entry, create a new <li> and <input type="checkbox">
  const newTodoText = input.value;
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create a <li> inside the <ul>
  newLI.append(newTodoText);
  newLI.append(checkbox);

  // Append <li> to the <ul>
  list.append(newLI);

  // Clear the value of HTMLInputElement
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
