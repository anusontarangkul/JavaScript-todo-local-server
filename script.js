// DOM variables
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// Global variables
var count = 0;
var todos = [];

// when tasks is type, it's added to the lists

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Nothing was entered");
  } else {
    tallyCount();
    todos.push(todoText);
    todoInput.value = "";

    storeTodos();
    renderTodos();
  }
});

function tallyCount() {
  count++;
  todoCountSpan.innerHTML = count;
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

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
