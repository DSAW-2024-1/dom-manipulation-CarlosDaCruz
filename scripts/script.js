document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.querySelector('.addTaskButton');
    const taskInput = document.querySelector('.taskInput');
    const taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const li = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        const taskLabel = document.createElement('label');
        const deleteButton = document.createElement('button');
  
        taskCheckbox.type = 'checkbox';
        taskLabel.textContent = taskText;
        deleteButton.textContent = 'Delete';
  

        li.classList.add('taskItem');
        taskCheckbox.classList.add('taskCheckbox');
        taskLabel.classList.add('taskLabel');
        deleteButton.classList.add('deleteButton');
  

        li.appendChild(taskCheckbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
  

        taskInput.value = '';
      }
    });
  

    taskList.addEventListener('click', function(event) {
      if (event.target.classList.contains('deleteButton')) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
      }
    });
  });
  