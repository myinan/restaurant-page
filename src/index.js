import './style.css';
import * as headerFooterModule from './module-header-footer/moduleHeaderFooter.js';
import * as homepageModule from './module-homepage/moduleHomePage.js';
import * as menupageModule from './module-menupage/moduleMenuPage.js';
import * as contactpageModule from './module-contactpage/moduleContactPage.js';

// Render homepage with initial access to app
document.addEventListener("DOMContentLoaded", () => {
    headerFooterModule.addHeaderFooterContent();
    homepageModule.addMainContentHomepage();
});

// Function to clear content
function clearContent() {
    const mainContent = document.getElementById('main-container');
    
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }

    while (mainContent.classList.length > 0) {
        mainContent.classList.remove(mainContent.classList[0]);
    }
}

// "Home" button clicked
document.addEventListener("click", (event) => {
    if (event.target.innerText == "Home") {
        clearContent();
        homepageModule.addMainContentHomepage();
    }
});

//"Menu" button clicked
document.addEventListener("click", (event) => {
    if (event.target.innerText == "Menu") {
        clearContent();
        menupageModule.addMainContentMenupage();
    }
});

//"Contact" button clicked
document.addEventListener("click", (event) => {
    if (event.target.innerText == "Contact") {
        clearContent();
        contactpageModule.addMainContentContactpage();
    }
});

// "Github" icon clicked