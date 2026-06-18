const storageKey = "todos";

export function saveTodos(todos) {
    localStorage.setItem(storageKey, JSON.stringify(todos));
}

export function loadTodos() {
    const todos = localStorage.getItem(storageKey);

    if (!todos) {
        return [];
    }

    return JSON.parse(todos);
}

