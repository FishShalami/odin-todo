import { createProjectElement } from "./projects";
import { createProject } from "./projects";
import projectsArray from "./data";

function showProjectForm(existingProject = null) {
    // Create a div that will act as a backdrop for the pop-up
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');

    // Create the form container
   const formContainer = document.createElement('div');
   formContainer.classList.add('modal-container');

   // Build your form
   const form = document.createElement('form');
   form.classList.add('project-form');

   // Title input
   const titleLabel = document.createElement('label');
   titleLabel.textContent = 'Title: ';
   const titleInput = document.createElement('input');
   titleInput.type = 'text';
   titleInput.name = 'title';
   titleInput.required = true;

   // Description input
   const descLabel = document.createElement('label');
   descLabel.textContent = " Project Description:";
   const descInput = document.createElement('textarea');
   descInput.name = 'description';


   // Submit button
   const submitBtn = document.createElement('button');
   submitBtn.type = 'submit';
   submitBtn.textContent = 'Add Project';

   //Cancel
   const cancelBtn = document.createElement('button');
   cancelBtn.type = 'button';
   cancelBtn.textContent = 'Cancel';

   if (existingProject) {
       titleInput.value = existingProject.title || '',
       descInput.value = existingProject.description || '';
       submitBtn.textContent = 'Save Changes'; // Make button text more explicit
   } else {
       submitBtn.textContent = 'Add Project';
   }

   // Append all form elements
   form.appendChild(titleLabel);
   form.appendChild(titleInput);
   form.appendChild(descLabel);
   form.appendChild(descInput);
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
    

    // const projectObj = projectsArray.find((proj) => proj.id === projectId);
//    if (!projectObj) {
//        console.error(`Project with ID ${projectId} not found in data array!`);
//        return;
//    }

   if (existingProject) {
        existingProject.title = title;
        existingProject.description = description;
    
        // Remove old DOM
        const oldDOM = document.getElementById(existingProject.id);
        if (oldDOM) oldDOM.remove();
            // Re-render
            createProjectElement(existingProject);
        } else {
        // Creating new
        const newProj = createProject({ title, description });
        projectsArray.push(newProj);
        createProjectElement(newProj);
        }
   console.log(projectsArray);


   // Remove the modal after submission
   document.body.removeChild(modalBackdrop);
   });
}




export  { showProjectForm }; 