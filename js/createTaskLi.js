"use strict";

import tasks from "./main.js";

const ul = document.querySelector("ul");

const createTaskLi = (task) => {
  const li = document.createElement("li");
  const taskP = document.createElement("p");
  const dateP = document.createElement("p");
  const checkbox = document.createElement("input");
  const div = document.createElement("div");

  taskP.classList.add("taskText");
  taskP.textContent = task.text;
  dateP.textContent = new Date(task.createdAt).toLocaleDateString();
  dateP.classList.add("taskDate")
  checkbox.type = "checkbox";
  div.classList.add("taskRow")

  checkbox.addEventListener("change", () => {
    task.done = checkbox.checked;
    li.classList.toggle("done");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  if (task.done) {
    checkbox.checked = task.done;
    li.classList.add("done");
  }

  if (task.priority) {
    li.classList.add("important");
  }

  div.append(checkbox, taskP);
  li.append(div, dateP);
  ul.append(li);
};

export default createTaskLi;
