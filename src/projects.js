import createTodo from "./todo";

function createProject(n) {

    const contentContainer = document.querySelector('#content');
    if (!contentContainer) {
        console.error('Error: No element with ID "content" found in the DOM.');
        return;
      }

    const projContainer = document.createElement('div');
    projContainer.className = `projContainer`
    projContainer.id = `proj${n}`
    
    const projTitle = document.createElement('h2');
    projTitle.textContent = `Project ${n}`;

    projTitle.addEventListener('click', function() {
        console.log(`Navigating to project ${n}`);
        // Logic to navigate to a new page
    });

    const addTodoBtn = document.createElement('button');
    addTodoBtn.id = `proj${n}-addTodoBtn`
    addTodoBtn.textContent = '+'

    addTodoBtn.addEventListener('click', function() {
        console.log(`Click of ${addTodoBtn.id}`);
        createTodo(projContainer.id)
        // Logic to navigate to a new page
    });

    const projDescribe = document.createElement('p');
    projDescribe.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi corporis unde eos id ullam quos officia ex sunt sit, necessitatibus soluta nihil temporibus deleniti facere, impedit eligendi tempora error?"

    projContainer.appendChild(projTitle);
    projContainer.appendChild(addTodoBtn);
    projContainer.appendChild(projDescribe);
    contentContainer.appendChild(projContainer)
    

    return contentContainer
}

export default createProject;

