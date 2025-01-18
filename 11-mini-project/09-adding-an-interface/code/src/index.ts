// Adding an Interface

// Interface for individual "To Do" items
interface Todo {
  text: string;
  completed: boolean;
}

// Data structure to store individual to do item of type "Todo"
const todos: Todo[] = [];

// Non-null assert and then Type assert selected elements
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")! as HTMLUListElement;

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  // Create a new Todo object
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  // Create a new Todo object
  createTodo(newTodo);

  // Push object into the array
  todos.push(newTodo);
}

function createTodo(todo: Todo) {
  // Create a new <li> and <input type="checkbox"> on the HTML document
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Append a new <li> within the <ul> element
  newLI.append(todo.text);
  newLI.append(checkbox);

  // Append <li> to the <ul>
  list.append(newLI);

  // Clear the content of the HTMLInputElement (i.e. input)
  input.value = "";
}

// Add an event listener for a "Submit" event on the HTMLElementForm (i.e. form)
form.addEventListener("submit", handleSubmit);
