import projectsArray from './data';
import './todoStyle.css'

function createTodoElement(project, todoData) {

    const projectSelector = `#${project}`;
    const projectDiv = document.querySelector(projectSelector);

    if (!projectDiv) {
        console.error('Error: No project with that ID found in the DOM.');
        return;
      }


    const todoContainer = document.createElement('div')
    todoContainer.className = `${project}-todoContainer`
    
    const todoTitle = document.createElement('h3');
    todoTitle.textContent = todoData.title || 'To-Do';

    const todoDesc = document.createElement('p');
    todoDesc.textContent = todoData.description || "Missing description"

    // Due date
    const todoDate = document.createElement('p');
    todoDate.textContent = `Due: ${todoData.dueDate || 'No date set'}`;

    // Priority
    const todoPriority = document.createElement('p');
    todoPriority.textContent = `Priority: ${todoData.priority || 'No priority'}`;

    //Buttons
    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.textContent = 'Delete';
    const todoEditBtn = document.createElement('button');
    todoEditBtn.textContent = 'Edit';

    //Checkbox for complete
    const todoCompleteLabel = document.createElement('label')
    todoCompleteLabel.textContent = 'Complete? ';
    const todoCompleteInput = document.createElement('input');
    todoCompleteInput.type = 'checkbox';
    todoCompleteInput.name = 'todoCheck';

    // delete event listener
    todoDeleteBtn.addEventListener('click', () => {
        const projectObj = projectsArray.find(proj => proj.id === project.id);
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
    });

    todoCompleteInput.addEventListener('change', (e) => {
        todoData.status==='incomplete' ? todoData.status = 'complete' : todoData.status = 'incomplete' 
        console.log('Checkbox changed for', todoData);
    })

    //Append
    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(todoDesc);
    todoContainer.appendChild(todoDate);
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


function deleteTodo({ title, description, dueDate, priority }) {
    delete {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
    };

}


export { createTodoElement, createTodo };

