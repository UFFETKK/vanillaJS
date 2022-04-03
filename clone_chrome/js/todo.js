const toDoForm = document.querySelector("#todo");
const toDoInput = document.getElementById("input");
const toDoList = document.getElementById("todo-list");

var todoarr = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoarr));
}

function deleteTodo(event) {
  const item = event.target.parentElement;
  todoarr = todoarr.filter((todo) => todo.id !== parseInt(item.id));
  saveTodos();
  item.remove();
}

function paintToDo(newTodoObj) {
  const list = document.createElement("li");
  list.id = newTodoObj.id;
  const sp = document.createElement("span");
  sp.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  list.appendChild(sp);
  list.appendChild(button);
  toDoList.appendChild(list);

  button.addEventListener("click", deleteTodo);
}
function handleTodo(event) {
  event.preventDefault();
  const newTodoObj = {
    id: Date.now(),
    text: toDoInput.value,
  };
  todoarr.push(newTodoObj);
  console.log(todoarr);
  paintToDo(newTodoObj);
  saveTodos();
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleTodo);
const savedTodos = localStorage.getItem("todos");
if (savedTodos !== null) {
  const parsed = JSON.parse(savedTodos);
  todoarr = savedTodos;
  console.log(todoarr);
  parsed.forEach((item) => paintToDo(item));
}
