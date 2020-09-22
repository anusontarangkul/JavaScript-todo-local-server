// DOM variables
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// Global variables
var count = 0;
var tasks = [];

// when tasks is type, it's added to the lists

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("No task was entered");
  } else {
    tallyCount();
    tasks.push(todoText);
    todoInput.value = "";

    storeTodos();
    renderTodos();
  }
});

function tallyCount() {
  count++;
  todoCountSpan.innerHTML = count;
}
