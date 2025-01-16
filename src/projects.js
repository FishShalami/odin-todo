import projectsArray from "./data";
import { showTodoForm } from "./todoPopup";

function createProject(n) {
    const projectId = `proj${n}`;
    const contentContainer = document.querySelector('#content');
    
    if (!contentContainer) {
        console.error('Error: No element with ID "content" found in the DOM.');
        return;
      }

    const projContainer = document.createElement('div');
    projContainer.className = `projContainer`
    projContainer.id = projectId
    
    const projTitle = document.createElement('h2');
    projTitle.textContent = `Project ${n}`;

    const addTodoBtn = document.createElement('button');
    addTodoBtn.id = `proj${n}-addTodoBtn`
    addTodoBtn.textContent = 'Add To-do'

    addTodoBtn.addEventListener('click', function() {
        console.log(`Click of ${addTodoBtn.id}`);
        console.log(`Click of ${projContainer.id}`);
        showTodoForm(projContainer.id);
    });

    const projDescribe = document.createElement('p');
    projDescribe.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi corporis unde eos id ullam quos officia ex sunt sit, necessitatibus soluta nihil temporibus deleniti facere, impedit eligendi tempora error?"

    projContainer.appendChild(projTitle);
    projContainer.appendChild(addTodoBtn);
    projContainer.appendChild(projDescribe);
    contentContainer.appendChild(projContainer)
    
    // console.log(`project id is ${projectId}`);

    console.log("Looking for projectId in projectsArray:", projectId, projectsArray);


    const existing = projectsArray.find((p) => p.id === projectId);
    if (!existing) {
        const newProjectObj = {
            id: projectId,
            name: `Project ${n}`,
            todos: []
        };
        projectsArray.push(newProjectObj);
        console.log(`Created new project in data store:`, newProjectObj);
    }
    

    return contentContainer
}

export default createProject;

