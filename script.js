let todos = [];
const todoInput = document.querySelector(".todo-input");
const addTodoBtn = document.querySelector(".add-todo");

function addTodo() {
  const todoValue = todoInput.value.trim();

  if (todoValue === "") {
    alert("Veuillez entrer une tâche valide.");
    return;
  }

  todos.push(todoValue);
  todoInput.value = "";

  showTodos();
}
function completeTodo(textTodo) {
  textTodo.classList.toggle("completed");
}

function removeTodo(indexElement) {
  todos.splice(indexElement, 1);
  showTodos();
}

function showTodos() {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    const textTodo = document.createElement("span");
    textTodo.classList.add("todo-content");
    textTodo.textContent = todo;

    const buttonComplete = document.createElement("button");
    buttonComplete.textContent = "Terminé";
    buttonComplete.addEventListener("click", () => completeTodo(textTodo));

    const buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Supprimer";
    buttonRemove.addEventListener("click", () => removeTodo(index));

    todoItem.appendChild(textTodo);
    todoItem.appendChild(buttonComplete);
    todoItem.appendChild(buttonRemove);
    todoList.appendChild(todoItem);
  });
}

if (addTodoBtn != null && todoInput != null) {
  addTodoBtn.addEventListener("click", addTodo);
}
