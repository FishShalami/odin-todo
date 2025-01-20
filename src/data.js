import { loadData } from "./storage";

let projectsArray = loadData();  // load from localStorage
if (!Array.isArray(projectsArray)) {
  projectsArray = [];
}

export default projectsArray;