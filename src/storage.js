function saveData(projectsArray) {
    try {
        const projectsDataString = JSON.stringify(projectsArray);
        localStorage.setItem('projectsData', projectsDataString);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        
    }
}

function loadData() {
    try {
        const projectsDataString = localStorage.getItem('projectsData');
        if (!projectsDataString) {
            // Nothing was saved yet
            return [];
        }
    return JSON.parse(projectsDataString)
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return [];
    }
}

export { saveData, loadData}