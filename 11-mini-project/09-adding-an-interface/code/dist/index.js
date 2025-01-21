"use strict";
// Working with Events
// Data structure to store individual to do item of type "Todo"
const todos = [];
// Non-null assert and then Type assert selected elements
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(event) {
    event.preventDefault();
    // Create a new Todo object
    const newTodo = {
        text: input.value,
        completed: false,
    };
    // Create a new Todo object
    createTodo(newTodo);
    // Push object into the array
    todos.push(newTodo);
}
function createTodo(todo) {
    // Create a new <li> and <input type="checkbox"> on the HTML document
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // Create a <li> inside the <ul>
    newLI.append(todo.text);
    newLI.append(checkbox);
    // Append <li> to the <ul>
    list.append(newLI);
    // Clear the content of the HTMLInputElement
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
