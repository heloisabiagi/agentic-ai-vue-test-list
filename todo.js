//todo app with add, remove and list functions
const todos = [];

function addTodo(todo) {
    todos.push(todo);
}

function removeTodo(todo) {
    const index = todos.indexOf(todo);
    if (index !== -1) {
        todos.splice(index, 1);
    }
}

function listTodos() {
    const container = document.getElementById('todo-list');
    if (!container) return;
    container.innerHTML = '';

    if (todos.length === 0) {
        container.textContent = 'No todos';
        return;
    }

    const ul = document.createElement('ul');
    todos.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}