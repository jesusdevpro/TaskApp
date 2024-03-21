"use strict";
import createTaskLi from "./createTaskLi.js";

const form = document.querySelector("form");
const noTasksP = document.querySelector(".noTasks");
const ul = document.querySelector("ul");
const cleanTasksBtn = document.querySelector(".cleanTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (tasks.length === 0) {
  noTasksP.classList.remove("hidden");
}

for (const task of tasks) {
  createTaskLi(task);
}

cleanTasksBtn.addEventListener("click", () => {
  tasks = tasks.filter((task) => {
    return !task.done;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  ul.innerHTML = "";

  for (const task of tasks) {
    createTaskLi(task);
  }
  if (tasks.length === 0) {
    noTasksP.classList.remove("hidden");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = form.elements.text.value;
  const priority = form.elements.priority.checked;

  const newTask = {
    text: text,
    priority: priority,
    done: false,
    createdAt: new Date().getTime(),
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTaskLi(newTask);

  form.reset();

  noTasksP.classList.add("hidden");
});
export default tasks;
