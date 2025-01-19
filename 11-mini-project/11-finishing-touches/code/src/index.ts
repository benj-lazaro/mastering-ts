// Connect to localStorage

// Interface of a Todo item
interface Todo {
  text: string;
  completed: boolean;
}

// Non-null assert & Type assert targeted elements in the DOM
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")! as HTMLUListElement;

// Define array that stores the Todo items
const todos: Todo[] = readTodos();

// Render an empty array or read items from localStorage in the DOM
todos.forEach(createTodo);

// Handles loading saved item(s) localStorage
function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON == null) return [];
  return JSON.parse(todosJSON);
}

// Saves Todo item & checkbox state in localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Creates a new Todo object & render a list item in the DOM
function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  // Creates a new Todo object
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  // Renders the object as a new list item in the DOM
  createTodo(newTodo);

  // Push the new object into the array
  todos.push(newTodo);

  // Store the new object (& checkbox state) in localStorage
  saveTodos();

  // Clear the DOM's "input" element
  input.value = "";
}

// Renders a Todo object as a list item in the DOM
function createTodo(todo: Todo) {
  // Render a new <li> and <input> elements
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  // Attach an event listener to each Todo item's chechbox
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });

  // Add the assigned value & checkbox state to the new <li> element
  newLI.append(todo.text);
  newLI.append(checkbox);

  // Append the <li> as a child of the <ul> element
  list.append(newLI);
}

// Add an event listener on the "form" element
form.addEventListener("submit", handleSubmit);
