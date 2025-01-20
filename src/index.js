import './global.css'
import emptyContent from "./emptyContent.js";
import { createProjectElement } from './projects';
import { showProjectForm } from './projectPopup.js';
import { createProject } from './projects';
import projectsArray from './data.js';


const navBtns = document.querySelectorAll('.navBtns');


// 1) On page load, `projectsArray` is already loaded from localStorage
// 2) If you want to display existing projects on initial load:
projectsArray.forEach((proj) => {
    createProjectElement(proj);
  });
// window.addEventListener("load", () => {
//     const title = 'Default Project'
//     const description = 'This is a default project, click to edit or add tasks!'
//     const startProj = createProject({ title, description });
//         projectsArray.push(startProj);
//         createProjectElement(startProj);
//   });


navBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        console.log(this.id);
        if (this.id === 'newProj') {
            showProjectForm();
        } else console.log('Error!');
    });
});

