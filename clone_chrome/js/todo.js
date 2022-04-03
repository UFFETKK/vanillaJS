window.onload = function () {
  const toDoForm = document.querySelector("#todo");
  const toDoInput = document.getElementById("input");
  const toDoList = document.getElementById("todo-list");
  function paintToDo(newTodo) {
    const list = document.createElement("li");
    const sp = document.createElement("span");
    list.appendChild(sp);
    sp.innerText = newTodo;
    toDoList.appendChild(list);
  }
  toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
  });

  loginForm.addEventListener("submit", onLoginSubmit);
};
