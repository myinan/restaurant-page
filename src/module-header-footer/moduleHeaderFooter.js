//Create header
const headerDiv = document.getElementById("header-container");

function appendButtons() {
    const name = document.createElement("p");
    name.innerText = "RestaDelux";
    headerDiv.appendChild(name);

    // Array to store references to the buttons
    const buttons = [];

    for (let i = 0; i < 3; i++) {
        let newButton = document.createElement("button");
        headerDiv.appendChild(newButton);
        buttons.push(newButton);
    }

    buttons[0].innerText = "Home";
    buttons[1].innerText = "Menu";
    buttons[2].innerText = "Contact";
}

export function addHeaderFooterContent() {
    document.addEventListener("DOMContentLoaded", appendButtons);
};