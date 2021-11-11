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
