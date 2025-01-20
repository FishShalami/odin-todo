import projectsArray from './data';
import { showTodoForm } from './todoPopup';
import './todoStyle.css'
import { differenceInDays, format } from "date-fns";



function createTodoElement(projectId, todoData) {

    const projectSelector = `#${projectId}`;
    const projectDiv = document.querySelector(projectSelector);

    if (!projectDiv) {
        console.error('Error: No project with that ID found in the DOM.');
        return;
      }


    const todoContainer = document.createElement('div')
    todoContainer.className = `${projectId}-todoContainer`
    // Add a data attribute for easy lookup on re-renders
    todoContainer.setAttribute('data-todo-id', todoData.todoId);
    
    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todoData.title || 'To-Do';

    const todoDesc = document.createElement('p');
    todoDesc.textContent = todoData.description || "Missing description"

    // Due date and days remaining
    const todoDate = document.createElement('p');
    const todoDaysRemaining = document.createElement('p');

    if (todoData.dueDate) {
    const dueDate = new Date(todoData.dueDate); // Convert to a Date object
    if (!isNaN(dueDate)) { // Check if the date is valid
        todoDate.textContent = `Due: ${format(dueDate, 'MMM d, yyyy')}`;
        const todayDate = new Date();
        const dateDiff = differenceInDays(dueDate, todayDate);
        todoDaysRemaining.textContent = `Days remaining: ${dateDiff}`;
    } else {
        todoDate.textContent = 'Invalid date set';
        todoDaysRemaining.textContent = 'Days remaining: Invalid date';
    }
    } else {
    todoDate.textContent = 'No date set';
    todoDaysRemaining.textContent = 'Days remaining: No date set';
    }
    //Days remaining
    // const todayDate = new Date();
    // const dateDiff = differenceInDays(todoData.dueDate, todayDate) || 'Enter date!'
    // todoDaysRemaining.textContent = `Days remaining: ${dateDiff}`

    // Priority
    const todoPriority = document.createElement('p');
    todoPriority.textContent = `Priority: ${todoData.priority || 'No priority'}`;

    //Buttons
    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.textContent = 'Delete';
    const todoEditBtn = document.createElement('button');
    todoEditBtn.textContent = 'Edit';
    todoEditBtn.className = 'edit-btn'

    //Checkbox for complete
    const todoCompleteLabel = document.createElement('label')
    todoCompleteLabel.textContent = 'Complete? ';
    const todoCompleteInput = document.createElement('input');
    todoCompleteInput.type = 'checkbox';
    todoCompleteInput.name = 'todoCheck';

    // delete event listener
    todoDeleteBtn.addEventListener('click', () => {
        const projectObj = projectsArray.find(proj => proj.id === projectId);
        if(projectObj) {
            const index = projectObj.todos.indexOf(todoData);
            if (index > -1) {
                projectObj.todos.splice(index, 1);
            }
        }
        todoContainer.remove()
        console.log('Delete clicked for', todoData)
    });

    //edit event listener
    todoEditBtn.addEventListener('click', () => {
        console.log('The edit button on', todoData);
        showTodoForm(projectId, todoData);
    });

    if (todoData.status === 'complete') {
        todoCompleteInput.checked = true;
        todoContainer.classList.add('collapsed');
      } else {
        todoCompleteInput.checked = false;
        todoContainer.classList.remove('collapsed');
      }

    todoCompleteInput.addEventListener('change', (e) => {
        
        if (todoData.status==='incomplete') {
            todoData.status = 'complete';
            todoContainer.classList.add('collapsed');
            todoCompleteInput.checked = true;
        } else {
            todoData.status = 'incomplete'
            todoContainer.classList.remove('collapsed');
            todoCompleteInput.checked = false;
        }
        console.log('Checkbox changed for', todoData);
    })

    //Append

        todoContainer.appendChild(todoTitle);
        todoContainer.appendChild(todoDesc);
        todoContainer.appendChild(todoDate);
        todoContainer.appendChild(todoDaysRemaining);
        todoContainer.appendChild(todoPriority);
        todoContainer.appendChild(todoDeleteBtn);
        todoContainer.appendChild(todoEditBtn);
        todoContainer.appendChild(todoCompleteLabel)
        todoContainer.appendChild(todoCompleteInput)

        projectDiv.appendChild(todoContainer)

    return todoContainer
}



function createTodo({ title, description, dueDate, priority }) {
    console.log(`${title} has id of ${Date.now().toString()}`);    
    return {
            title,
            description,
            dueDate,
            priority,
            todoId: Date.now().toString(),
            status: 'incomplete'
        };
   
}



export { createTodoElement, createTodo };


