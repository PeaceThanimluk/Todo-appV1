import {
    createTodo,
    removeTodo,
    toggleTodo,
    getTodos,
    setTodos,
} from "./todo.js";

import {
    saveTodos,
    loadTodos,
} from "./storage.js";

import {
    renderTodo,
    renderTodos,
} from "./ui.js";

const form = document.querySelector("#input-container");
const input = document.getElementById("listText");
const todoListElement = document.getElementById("todo-list");

const todos = loadTodos();

setTodos(todos);
console.log(getTodos());
renderTodos(getTodos());

//add to do list

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();

    const newList = createTodo(text);

    saveTodos(getTodos());
    renderTodo(newList);

    input.value = "";
})

//remove to do list
todoListElement.addEventListener("click", (event) => {
    const li = event.target.closest(".list");

    if (!li) return;

    const id = Number(li.dataset.id);

    if (event.target.classList.contains("delete-btn")) {
        removeTodo(id);
        saveTodos(getTodos());
        renderTodos(getTodos());
    }
    //toggle

    if (event.target.classList.contains("checkbox")) {
        toggleTodo(id);
        saveTodos(getTodos());
        renderTodos(getTodos());
    }
})

