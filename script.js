var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
  todoList = "";
  todoCountSpan = 0;

  for (var i = 0; i < todos.length; i++) {
    var liElement = document.createElement("li");
    liElement.text;
  }
}

renderTodos();

// * Your goal is to create a function that will render our todos into a list in the browser.

//   * Initially set the text content of the todoList to an empty string.

//   * todoCountSpan should show the total count of todos on the page.

// * Inside of your render function you will also need a for loop.

//   * It should loop over the `todos` array creating an `li` element for each index of the array.

//   * It should set the content of the created `li` element to the value of the current array index.

//   * Finally the new `li` should be appended to the `ul` provided.
