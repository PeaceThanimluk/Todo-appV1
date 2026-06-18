const todoList = document.querySelector("#todo-list");

export function renderTodo(todo) {
    const li = document.createElement("li");

    li.classList.add("list");
    li.dataset.id = todo.id;

    li.innerHTML = `
        <div class="box-container">

            <div class="checkbox-container">
                <button class="checkbox ${todo.complete ? "complete" : ""}">${todo.complete ? '<i class="fa-solid fa-check"></i>' : ""}</button>
            </div>

            <div class="text-container">
                <p class="list-text ${
                    todo.complete ? "complete" : ""
                }">
                    ${todo.text}
                </p>
            </div>

            <div class="deleteBtn-container">
                <button class="delete-btn">
                    X
                </button>
            </div>

        </div>
    `;

    todoList.appendChild(li);
}

export function renderTodos(todos) {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        renderTodo(todo);
    });
}