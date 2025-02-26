import projectsArray from "./data";
import { showTodoForm } from "./todoPopup";
import { showProjectForm } from "./projectPopup";
import { createTodoElement } from "./todo";
import './projectStyle.css'

function createProjectElement(projData) {
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
        showProjectForm(projData);
    });

    projContainer.appendChild(projTitle);
    projContainer.appendChild(projDescribe);
    projContainer.appendChild(addTodoBtn);
    projContainer.appendChild(editProjectBtn);
    contentContainer.appendChild(projContainer)
    
    
    // console.log(`project id is ${projectId}`);

    // console.log("Looking for projectId in projectsArray:", projectId, projectsArray);


    const existingProject = projectsArray.find((p) => p.id === projData.id);
    if (existingProject && existingProject.todos) {
        existingProject.todos.forEach((todoItem) => {
            createTodoElement(existingProject.id, todoItem);
        });
    } else if (!existingProject) {
        // If the project doesn’t exist in the array yet, create it
        const newProjectObj = {
            id: projData.id,
            title: projData.title,
            description: projData.description,
            todos: []
        };
        projectsArray.push(newProjectObj);
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
