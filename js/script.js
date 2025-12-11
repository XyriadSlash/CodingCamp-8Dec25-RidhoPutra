/// Initial empty array to hold todo items
let todo = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");

    /// Validation to ensure both fields are filled
    if (todoInput.value === "" || todoDate.value === "") {
        alert("Please fill in both the todo item and the date.");
    } else {
        const todoObj = {
            task: todoInput.value,
            date: todoDate.value
        }

        todo.push(todoObj);

        renderTodos();

        /// Clear input fields after adding
        todoInput.value = "";
        todoDate.value = "";
    }
}

/// Function to reset the todo list
function resetTodos() {
    todo = [];

    /// Re-render the empty list
    renderTodos();
}

/// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todo.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

/// Placeholder for future filter functionality
function filterTodos() { }