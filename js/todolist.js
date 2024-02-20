const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];
const TODOS_KEY = "todos";

function saveTodoList() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodoList(e) {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodoList();
}

function paintTodo(todoValue) {
  const li = document.createElement("li");
  li.id = todoValue.id;
  const span = document.createElement("span");
  span.innerText = todoValue.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodoList);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  const newObjetTodo = {
    id: Date.now(),
    text: todoValue,
  };
  todos.push(newObjetTodo);
  paintTodo(newObjetTodo);
  saveTodoList();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const getSavedTodoList = localStorage.getItem(TODOS_KEY);

if (getSavedTodoList !== null) {
  const parsedTodoList = JSON.parse(getSavedTodoList);
  todos = parsedTodoList;
  parsedTodoList.forEach(paintTodo);
}
