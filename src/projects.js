import projectsArray from "./data";
import { showTodoForm } from "./todoPopup";

function createProjectElement(projData) {
    // const projIndex = projectsArray.indexOf(projData.title)
    // const projectId = `proj${projIndex}`;
    const contentContainer = document.querySelector('#content');
    
    if (!contentContainer) {
        console.error('Error: No element with ID "content" found in the DOM.');
        return;
      }

    const projContainer = document.createElement('div');
    projContainer.className = `projContainer`
    projContainer.id = projData.id
    
    const projTitle = document.createElement('h2');
    projTitle.textContent = projData.title || 'Untitled Project';

    const addTodoBtn = document.createElement('button');
    addTodoBtn.id = `proj${projData.id}-addTodoBtn`
    addTodoBtn.textContent = 'Add To-do'

    addTodoBtn.addEventListener('click', function() {
        console.log(`Click of ${addTodoBtn.id}`);
        console.log(`Click of ${projContainer.id}`);
        showTodoForm(projData.id);
    });

    const projDescribe = document.createElement('p');
    projDescribe.textContent = projData.description || 'No description provided'

    // "Edit Project" button
    const editProjectBtn = document.createElement('button');
    editProjectBtn.textContent = 'Edit Project';
    editProjectBtn.addEventListener('click', () => {
        // showProjectForm with existingProject
        showProjectForm(projData);
    });

    projContainer.appendChild(projTitle);
    projContainer.appendChild(projDescribe);
    projContainer.appendChild(addTodoBtn);
    projContainer.appendChild(editProjectBtn);
    contentContainer.appendChild(projContainer)
    
    // console.log(`project id is ${projectId}`);

    // console.log("Looking for projectId in projectsArray:", projectId, projectsArray);


    const existing = projectsArray.find((p) => p.id === projData.id);
    if (!existing) {
        const newProjectObj = {
            id: projData.id,
            name: `Project ${projData.id}`,
            todos: []
        };
        projectsArray.push(newProjectObj);
        console.log(`Created new project in data store:`, newProjectObj);
    }
    

    return contentContainer
}


let projectCounter = 0;  // Not exported
 function createProject({ title, description }) {
    projectCounter++;
    const newID = `proj${projectCounter}`;
    return {
        id: newID,
        title,
        description,
        todos: [],
    };
}



export  { createProjectElement, createProject };
