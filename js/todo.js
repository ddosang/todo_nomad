const todoList = document.querySelector(".todo__list");
const todoForm = document.querySelector(".todo__form");
const todoInput = todoForm.querySelector(".todo__input");
const todoListBtn = todoForm.querySelector(".todo__list-btn");

let todos = [];

const TODO_ITEM = "todo__item";
const TODO_TEXT = "todo__text";
const TODO_BTN = "todo__list-btn";

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter(item => item.id !== parseInt(li.id));
    saveTodo();
    li.remove();
}

function paintTodo(todo) {
    const li = document.createElement("li");
    li.className = TODO_ITEM;
    li.id = todo.id;
    const button = document.createElement("button");
    button.className = TODO_BTN;
    button.addEventListener("click", deleteTodo);
    button.innerText = "❌"
    const span = document.createElement("span");
    span.className = TODO_TEXT;
    span.innerText = todo.text;
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}

function submitTodoForm(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    const newTodo = {
        id: Date.now(),
        text: todo
    };
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
}

const storedTodo = localStorage.getItem("todos");
if (storedTodo) {
    const parsedTodo = JSON.parse(storedTodo);
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}


todoForm.addEventListener("submit", submitTodoForm); 