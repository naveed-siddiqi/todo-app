function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    const newTodo = todoInput.value;

    if (newTodo) {
        const li = document.createElement('li');
        li.innerHTML = newTodo + ' <span onclick="deleteTodo(this)">x</span>';
        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function deleteTodo(element) {
    element.parentElement.remove();
}
