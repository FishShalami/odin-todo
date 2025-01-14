

function emptyContent() {
    const contentContainer = document.querySelector('#content');
    if (!contentContainer) {
        console.error('Error: No element with ID "content" found in the DOM.');
        return;
      }
    
    contentContainer.innerHTML = "";

    return contentContainer
}

export default emptyContent;