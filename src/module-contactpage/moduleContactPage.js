const contentDiv = document.getElementById("main-container");

const overlayContainer = document.createElement("div");

const parafFirst = document.createElement("p");
const parafSecond = document.createElement("p");

const infoContainer = document.createElement("div");
for (let i = 0; i < 3; i++) {
    let infoItem = document.createElement("div");
    infoContainer.appendChild(infoItem);
}

parafFirst.innerText = "Perfectly Balanced";
parafSecond.innerText = "QUALITY & TASTE";

function addContent() {
    overlayContainer.append(parafFirst, parafSecond, infoContainer);
    contentDiv.appendChild(overlayContainer);
}

function addStyling() {
    contentDiv.classList.add("main-bg-contactpage");
    contentDiv.classList.add("main-container-contactpage");

    overlayContainer.classList.add("overlay-container");
    infoContainer.classList.add("info-container");
}

export function addMainContentContactpage() {
    addContent();
    addStyling();
}