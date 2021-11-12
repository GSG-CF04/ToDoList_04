//Theme Issues

//Start of the script to add the theme issues
const standardTheme = document.querySelector(".standard-theme");
const lightTheme = document.querySelector(".light-theme");
const title = document.querySelector(".title");
const toDoInput = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-btn");
const toDoList = document.querySelector(".todo-list");
const editBtn = document.querySelector(".edit-btn");
const todo = document.querySelectorAll(".todo");

document.addEventListener("DOMContentLoaded", getTodos);
lightTheme.addEventListener("click", changeLightTheme);
standardTheme.addEventListener("click", changeStandardTheme);

//// Check if one theme has been set and apply it
let theme = localStorage.getItem("theme");
theme === null
  ? changeStandardTheme()
  : changeTheme(localStorage.getItem("theme"));

function changeLightTheme() {
  document.body.classList.add("light-theme");
  document.body.classList.remove("standard-theme");
  title.style.color = "rgb(43, 43, 43)";
  localStorage.setItem("theme", "light-theme");
  toDoBtn.classList.add("light-button");
  toDoInput.classList.add("light-input");
  toDoInput.classList.remove("standard-input");
  toDoBtn.classList.remove("standard-button");
}

function changeStandardTheme() {
  document.body.classList.add("standard-theme");
  document.body.classList.remove("light-theme");
  title.style.color = "#f7e2df";
  toDoList.style.color = "black";
  localStorage.setItem("theme", "standard-theme");
  toDoBtn.classList.add("standard-button");
  toDoInput.classList.add("standard-input");
  toDoInput.classList.remove("light-input");
  toDoBtn.classList.remove("light-button");
}

function changeTheme(theme) {
  console.log(theme);
  localStorage.setItem("theme", theme);
  if (theme === "standard-theme") {
    changeStandardTheme();
  } else {
    changeLightTheme();
  }
}

//Input Field

//Add a new task issue
toDoBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //Create Div
  const toDoDiv = document.createElement("div");

  toDoDiv.classList.add("todo");

  //Create li
  newToDo = document.createElement("li");

  saveLocalTodos(toDoInput.value);

  if (toDoInput.value === "") {
    alert("You must write something!");
  } else {
    toDoDiv.innerHTML = `<p>${toDoInput.value}</p>`;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);

    //check button
    const checked = document.createElement("button");
    checked.innerHTML = `<button class="fa fa-check check-btn"></button>`;
    checked.classList.add("check-btn");
    toDoDiv.appendChild(checked);

    //Edit button

    const edited = document.createElement("button");
    edited.innerHTML = `<button class="fa fa-edit edit-btn"></button>`;
    edited.classList.add("edit-btn");
    toDoDiv.appendChild(edited);

    const deleted = document.createElement("button");
    deleted.innerHTML = `<button class="fa fa-trash delete-btn"></button>`;
    deleted.classList.add("delete-btn");
    toDoDiv.appendChild(deleted);

    toDoList.appendChild(toDoDiv);
    toDoInput.value = "";
  }
});

// function to toggle checked task and delete task

toDoList.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  const item = e.target;
  //Delete a task issue
  if (item.classList[2] === "delete-btn") {
    const toDo = item.parentElement;
    //Animation
    toDo.parentElement.classList.add("fall");
    //Transitionend means that it waits the animation to finish before removing the element
    toDo.addEventListener("transitionend", () => {
      toDo.parentElement.remove();
    });
  }

  //Check a task issue
  if (item.classList[2] === "check-btn") {
    item.parentElement.parentElement.classList.toggle("completed");
  }
}

//Save task to localStorage

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Get tasks from localStorage and display them
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const toDoDiv = document.createElement("div");
    document.body.classList.contains("standard-theme")
      ? toDoDiv.classList.add("todo")
      : toDoDiv.classList.add("todo-light");

    //Create li
    newToDo = document.createElement("li");

    toDoDiv.innerHTML = `<span>${todo}</span>`;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);

    //check button
    const checked = document.createElement("button");
    checked.innerHTML = `<button class="fa fa-check check-btn"></button>`;
    checked.classList.add("check-btn");
    toDoDiv.appendChild(checked);

    //Edit button

    const edited = document.createElement("button");
    edited.innerHTML = `<button class="fa fa-edit edit-btn"></button>`;
    edited.classList.add("edit-btn");
    toDoDiv.appendChild(edited);

    const deleted = document.createElement("button");
    deleted.innerHTML = `<button class="fa fa-trash delete-btn"></button>`;
    deleted.classList.add("delete-btn");
    toDoDiv.appendChild(deleted);

    toDoList.appendChild(toDoDiv);
  });
}
