//Create header
const headerDiv = document.getElementById("header-container");
const containerDiv = document.createElement("div");

function appendButtons() {
    const name = document.createElement("p");
    name.innerText = "RestaDelux";
    headerDiv.appendChild(name);

    // Array to store references to the buttons
    const buttons = [];

    for (let i = 0; i < 3; i++) {
        let newButton = document.createElement("button");
        containerDiv.appendChild(newButton);
        buttons.push(newButton);
    }

    headerDiv.appendChild(containerDiv);
    buttons[0].innerText = "Home";
    buttons[1].innerText = "Menu";
    buttons[2].innerText = "Contact";
}

function styleHeader() {
    headerDiv.classList.add("header-top-container");
    containerDiv.classList.add("header-buttons-container");
}

export function addHeaderFooterContent() {
    document.addEventListener("DOMContentLoaded",() => {
        appendButtons();
        styleHeader();
    });
};