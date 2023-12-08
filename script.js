const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText
    };
    tasks.push(task);
    displayTasks();
    taskInput.value = '';
  }
});

function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach(function(task) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.text}</td>
      <td><button onclick="deleteTask(${task.id})">Удалить</button></td>
    `;
    taskList.appendChild(row);
  });
}

function deleteTask(id) {
  tasks = tasks.filter(function(task) {
    return task.id !== id;
  });
  displayTasks();
}