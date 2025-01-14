function createTodo(project) {

    let projectId = `#${project}`;

    const projectDiv = document.querySelector(projectId);

    if (!projectDiv) {
        console.error('Error: No project with that ID found in the DOM.');
        return;
      }


    const todoContainer = document.createElement('div')
    todoContainer.className = `${project}-todoContainer`
    
    const todoTitle = document.createElement('h3');
    todoTitle.textContent = 'To-do';

    todoContainer.appendChild(todoTitle);
    projectDiv.appendChild(todoContainer)
    

    return todoContainer
}

export default createTodo;