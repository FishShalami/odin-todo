import { createTodoElement, createTodo } from './todo.js';
import projectsArray from './data.js';
import './todoPopupStyle.css'


 function showTodoForm(projectId, existingTodo = null) {
     // Create a div that will act as a backdrop for the pop-up
     const modalBackdrop = document.createElement('div');
     modalBackdrop.classList.add('modal-backdrop');

     // Create the form container
    const formContainer = document.createElement('div');
    formContainer.classList.add('modal-container');

    // Build your form
    const form = document.createElement('form');
    form.classList.add('todo-form');

    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title: ';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.required = true;

    // Description input
    const descLabel = document.createElement('label');
    descLabel.textContent = "Description:";
    const descInput = document.createElement('textarea');
    descInput.name = 'description';

    // Due Date input
    const dateLabel = document.createElement('label');
    dateLabel.textContent = "Due Date:";
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'dueDate';

    // Priority input (could be radio, dropdown, etc.)
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = "Priority:";
    const prioritySelect = document.createElement('select');
    prioritySelect.name = 'priority';
    const priorities = ['Low', 'Medium', 'High'];
    priorities.forEach(p => {
        const option = document.createElement('option');
        option.value = p;
        option.textContent = p;
        prioritySelect.appendChild(option);
    });

    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add To-do';

    //Cancel
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    if (existingTodo) {
        titleInput.value = existingTodo.title,
        descInput.value = existingTodo.description;
        dateInput.value = existingTodo.dueDate;
        prioritySelect.value = existingTodo.priority;
        submitBtn.textContent = 'Save Changes'; // Make button text more explicit
    } else {
        submitBtn.textContent = 'Add To-do';
    }

    // Append all form elements
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descLabel);
    form.appendChild(descInput);
    form.appendChild(dateLabel);
    form.appendChild(dateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);

    formContainer.appendChild(form);
    modalBackdrop.appendChild(formContainer);
    document.body.appendChild(modalBackdrop);

    //handle cancel
    cancelBtn.addEventListener('click', () => {
        document.body.removeChild(modalBackdrop);
    });

    //handle submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = titleInput.value.trim(); //remove white space
        const description = descInput.value.trim();
        const dueDate = dateInput.value;
        const priority = prioritySelect.value;
        


    const projectObj = projectsArray.find((proj) => proj.id === projectId);
    if (!projectObj) {
        console.error(`Project with ID ${projectId} not found in data array!`);
        return;
    }

    if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
        existingTodo.dueDate = dueDate;
        existingTodo.priority = priority;

        const todoContainer = document.querySelector(
            `#${projectId} [data-todo-id="${existingTodo.todoId}"]`
          );
          if (todoContainer) {
            todoContainer.remove(); 
          }
          // Re-create and append fresh DOM for the updated to-do:
          createTodoElement(projectId, existingTodo);
    } else {
    //create todo object:
    const newTodo = createTodo({ title, description, dueDate, priority });
    projectObj.todos.push(newTodo);
    createTodoElement(projectId, newTodo);
    }
    
    console.log(projectsArray);


    // Remove the modal after submission
    document.body.removeChild(modalBackdrop);
    });
}




export  { showTodoForm }; 