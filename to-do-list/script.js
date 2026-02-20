function loadTask(task, key, done) {
  let li = document.createElement("li");
  if (done) {
    document.getElementById("completedTasks").appendChild(li);
    li.classList.add("done");
  } else {
    document.getElementById("tasks").appendChild(li);
  }
  let btnrmv = document.createElement("button");
  btnrmv.classList.add("remove");
  btnrmv.innerHTML =
    "<img src='https://img.icons8.com/?size=25&id=X3PpUHcCmmeD&format=png&color=000000'>";
  btnrmv.onclick = function () {
    removeTask(key);
    li.remove();
  };
  let btncmpl = document.createElement("button");
  btncmpl.classList.add("complete");
  btncmpl.onclick = function () {
    completeTask(key);
    let done = JSON.parse(localStorage.getItem(key)).done;
    if (done) {
      document.getElementById("completedTasks").appendChild(li);
    } else {
      document.getElementById("tasks").appendChild(li);
    }
    li.classList.toggle("done");
  };
  li.textContent = task;
  li.appendChild(btnrmv);
  li.prepend(btncmpl);
}

const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    addNewTask();
  }
});

function addNewTask() {
  let newTask = document.getElementById("taskInput").value;
  newTask = String(newTask).trim();
  if (newTask != "") {
    let taskObj = {
      task: newTask,
      done: false,
    };

    let key = `task${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(taskObj));
    loadTask(newTask, key, taskObj.done);
    document.getElementById("taskInput").value = "";
  }
}

function removeTask(key) {
  localStorage.removeItem(key);
}

function completeTask(key) {
  let taskObj = JSON.parse(localStorage.getItem(key));
  taskObj.done = !taskObj.done;
  localStorage.setItem(key, JSON.stringify(taskObj));
}

let tasks = [];

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key.startsWith("task")) {
    let taskObj = JSON.parse(localStorage.getItem(key));
    tasks.push({
      key: key,
      time: key.replace("task", ""),
      task: taskObj.task,
      done: taskObj.done,
    });
  }
}

tasks.sort((a, b) => a.time - b.time);
tasks.forEach((t) => {
  loadTask(t.task, t.key, t.done);
});
