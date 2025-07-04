
/* const taskInput1 = document.getElementById('taskInput1');
const addBtn1 = document.getElementById('addBtn1');
const taskList1 = document.getElementById('taskList1');

// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => createTask(task.text, task.completed));
};

function createTask(text, completed = false) {
  const li = document.createElement('li');
  li.className = 'task';
  if (completed) li.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = text;

  span.onclick = () => {
    li.classList.toggle('completed');
    saveTasks();
  };

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList1.appendChild(li);

  saveTasks();
}

addBtn.onclick = () => {
  const taskText = taskInput1.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput1.value = '';
  }
};

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.task').forEach(task => {
    tasks.push({
      text: task.querySelector('span').textContent,
      completed: task.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


const taskInput2 = document.getElementById('taskInput2');
const addBtn2 = document.getElementById('addBtn2');
const taskList2 = document.getElementById('taskList2');

// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => createTask(task.text, task.completed));
};

function createTask(text, completed = false) {
  const li = document.createElement('li');
  li.className = 'task';
  if (completed) li.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = text;

  span.onclick = () => {
    li.classList.toggle('completed');
    saveTasks();
  };

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  saveTasks();
}

addBtn.onclick = () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
};

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.task').forEach(task => {
    tasks.push({
      text: task.querySelector('span').textContent,
      completed: task.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


const taskInput3 = document.getElementById('taskInput3');
const addBtn3 = document.getElementById('addBtn3');
const taskList3 = document.getElementById('taskList3');

// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => createTask(task.text, task.completed));
};

function createTask(text, completed = false) {
  const li = document.createElement('li');
  li.className = 'task';
  if (completed) li.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = text;

  span.onclick = () => {
    li.classList.toggle('completed');
    saveTasks();
  };

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  saveTasks();
}

addBtn.onclick = () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
};

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.task').forEach(task => {
    tasks.push({
      text: task.querySelector('span').textContent,
      completed: task.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


const taskInput4 = document.getElementById('taskInput4');
const addBtn4 = document.getElementById('addBtn4');
const taskList4 = document.getElementById('taskList4');

// Load tasks from localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => createTask(task.text, task.completed));
};

function createTask(text, completed = false) {
  const li = document.createElement('li');
  li.className = 'task';
  if (completed) li.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = text;

  span.onclick = () => {
    li.classList.toggle('completed');
    saveTasks();
  };

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '🗑️';
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  saveTasks();
}

addBtn.onclick = () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
  }
};

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.task').forEach(task => {
    tasks.push({
      text: task.querySelector('span').textContent,
      completed: task.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


*/


const boards = [
  { inputId: 'taskInput1', btnId: 'addBtn1', listId: 'taskList1', key: 'tasks1' },
  { inputId: 'taskInput2', btnId: 'addBtn2', listId: 'taskList2', key: 'tasks2' },
  { inputId: 'taskInput3', btnId: 'addBtn3', listId: 'taskList3', key: 'tasks3' },
  { inputId: 'taskInput4', btnId: 'addBtn4', listId: 'taskList4', key: 'tasks4' }
];

function initBoard(board) {
  const input = document.getElementById(board.inputId);
  const button = document.getElementById(board.btnId);
  const list = document.getElementById(board.listId);

  // Load existing tasks
  const savedTasks = JSON.parse(localStorage.getItem(board.key)) || [];
  savedTasks.forEach(task => addTask(list, input, board.key, task.text, task.completed));

  // Add button event
  button.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
      addTask(list, input, board.key, text);
      input.value = '';
    }
  });
}

function addTask(list, input, storageKey, text, completed = false) {
  const li = document.createElement('li');
  li.className = 'task';
  if (completed) li.classList.add('completed');

  const span = document.createElement('span');
  span.textContent = text;
  span.onclick = () => {
    li.classList.toggle('completed');
    saveTasks(list, storageKey);
  };

  const delBtn = document.createElement('button');
  delBtn.textContent = '🗑️';
  delBtn.onclick = () => {
    li.remove();
    saveTasks(list, storageKey);
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  saveTasks(list, storageKey);
}

function saveTasks(list, storageKey) {
  const tasks = [];
  list.querySelectorAll('.task').forEach(task => {
    tasks.push({
      text: task.querySelector('span').textContent,
      completed: task.classList.contains('completed')
    });
  });
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

// Initialize all boards
window.onload = () => {
  boards.forEach(initBoard);
};
