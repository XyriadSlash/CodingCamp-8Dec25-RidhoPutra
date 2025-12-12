let todos = JSON.parse(localStorage.getItem("todos")) || [];

const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const todoList = document.getElementById("todoList");

function renderTodos() {
    todoList.innerHTML = "";

    if (todos.length === 0) {
        todoList.innerHTML = `<div class="empty-text">No task found</div>`;
        return;
    }

    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <div class="todo-item">
                <div>${todo.task}</div>
                <div>${todo.date}</div>
                <div>${todo.completed ? "Completed" : "Pending"}</div>
                <div>
                    <button class="action-btn action-edit" onclick="toggleStatus(${index})">Status</button>
                    <button class="action-btn action-delete" onclick="deleteTodo(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}


function addTodo() {
    let task = taskInput.value.trim();
    let date = dateInput.value;

    if (!task || !date) {
        alert("Isi task dan tanggal terlebih dahulu!");
        return;
    }

    todos.push({
        task: task,
        date: date,
        completed: false
    });

    saveTodos();
    renderTodos();

    taskInput.value = "";
    dateInput.value = "";
}


function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}


function clearTodos() {
    if (confirm("Hapus semua tugas?")) {
        todos = [];
        saveTodos();
        renderTodos();
    }
}


function toggleStatus(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}


function filterTodos() {
    todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    saveTodos();
    renderTodos();
}


function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


document.getElementById("addBtn").addEventListener("click", addTodo);
document.getElementById("clearBtn").addEventListener("click", clearTodos);
document.getElementById("filterBtn").addEventListener("click", filterTodos);

renderTodos();
