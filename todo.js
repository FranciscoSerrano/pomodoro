// this array will hold the items
let todoItems = [];
// each item should be an object with three  properties:
// String: text, Number : Unique ID, Boolean : isCompleted\

// Select the form element
const form = document.querySelector('.js-form');
// Add a submit event listener
form.addEventListener('submit', event => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector('.js-todo-input');

  // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

function addTodo(text) {
  const todo = {
    id : Date.now(),
    checked : false,
    item: text,
  }
  todoItems.push(todo);
  console.log(todoItems);
}