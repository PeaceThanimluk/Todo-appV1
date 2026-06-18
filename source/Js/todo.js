let todoList = []


export function createTodo(text) {
    const todo = {
        id: Date.now(),
        text: text,
        complete: false,
    }

    todoList.push(todo);
    return todo;
}

export function removeTodo(id) {
    todoList = todoList.filter(todo => todo.id !== id);
}

export function toggleTodo(id) {
    const todo = todoList.find(todo => todo.id === id);

    if(todo) {
        todo.complete = !todo.complete;
        console.log(todo.complete);
    }

    return todo;
}

export function getTodos() {
    return todoList;
}

export function setTodos(todos) {
    todoList = todos;
}