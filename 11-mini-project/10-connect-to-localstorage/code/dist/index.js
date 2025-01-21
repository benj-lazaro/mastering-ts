"use strict";
// Connect to localStorage
// Non-null assert & Type assert targeted elements in the DOM
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
// Define array that stores the Todo items
const todos = readTodos();
// Render an empty array or read items from localStorage in the DOM
todos.forEach(createTodo);
// Handles loading saved item(s) localStorage
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON == null)
        return [];
    return JSON.parse(todosJSON);
}
// Handles the "submit" event
function handleSubmit(event) {
    event.preventDefault();
    // Create a new Todo object
    const newTodo = {
        text: input.value,
        completed: false,
    };
    // Render the created Todo item in the DOM
    createTodo(newTodo);
    // Push the created Todo object into the array
    todos.push(newTodo);
    // Convert Todo object & store to localStorage under the key "todos"
    localStorage.setItem("todos", JSON.stringify(todos));
    // Clear the content of the HTMLInputElement (i.e. input)
    input.value = "";
}
// Handles rendering of a Todo item in the DOM
function createTodo(todo) {
    // Create a new <li> and <input type="checkbox">
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Create a new <li> element
    newLI.append(todo.text);
    newLI.append(checkbox);
    // Append the created <li> as a child of the <ul> element
    list.append(newLI);
}
// Add an event listener for a "Submit" event in the HTMLElementForm (i.e. form)
form.addEventListener("submit", handleSubmit);
