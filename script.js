let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push({ id: Date.now(), text: task, completed: false });
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        li.classList.add(task.completed ? "completed" : "active");
        li.addEventListener("click", () => toggleTaskStatus(task.id));
        taskList.appendChild(li);
    });
}

function toggleTaskStatus(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        displayTasks();
    }
}

function filterTasks() {
    const filterOption = document.getElementById("filterOption").value;
    const filteredTasks = tasks.filter(task => {
        if (filterOption === "completed") {
            return task.completed;
        } else if (filterOption === "active") {
            return !task.completed;
        }
        return true;
    });
    tasks = filteredTasks;
    displayTasks();
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

displayTasks();
