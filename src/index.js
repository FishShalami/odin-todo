// console.log('test!')
import './global.css'
import createProject from './projects'
import emptyContent from "./emptyContent.js";

const navBtns = document.querySelectorAll('.navBtns');

window.addEventListener("load", () => {
    createProject(1); 
  });


let n = 1;
navBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        console.log(this.id);
        if (this.id === 'newProj') {
            n++
            console.log
            createProject(n)
        } else if (this.id === 'home') {
            emptyContent();
            n = 0
        } else console.log('Error!');
    });
});

