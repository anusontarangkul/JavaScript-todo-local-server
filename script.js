// DOM variables
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// Global variables
var count = 0;
var todos = [];

// Submit todo
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Nothing was entered");
  } else {
    todos.push(todoText);
    todoInput.value = "";

    storeTodos();
    renderTodos();
  }
});

// Add todo to local storage
function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// create lists of todos
function renderTodos() {
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// Cancel todo
todoList.addEventListener("click", function (event) {
  var cancel = event.target;
  if (cancel.matches("button") === true) {
    var index = cancel.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    storeTodos();
    renderTodos();
  }
});

// Opening saved todos
function initial() {
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  if (storedTodos !== null) {
    todos = storedTodos;
  }
  renderTodos();
}

initial();
