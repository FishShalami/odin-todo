// console.log('test!')
import './global.css'
import emptyContent from "./emptyContent.js";
import { createProjectElement } from './projects';
import { showProjectForm } from './projectPopup.js';
import { createProject } from './projects';
import projectsArray from './data.js';


const navBtns = document.querySelectorAll('.navBtns');

window.addEventListener("load", () => {
    const title = 'Default Project'
    const description = 'This is a default project, click to edit!'
    const startProj = createProject({ title, description });
        projectsArray.push(startProj);
        createProjectElement(startProj);
  });

// let n = 1;
navBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        console.log(this.id);
        if (this.id === 'newProj') {
            // n++
            showProjectForm();
        } else if (this.id === 'home') {
            emptyContent();
            // n = 0
        } else console.log('Error!');
    });
});

