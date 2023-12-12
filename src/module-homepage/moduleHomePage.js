

const contentDiv = document.getElementById("main-container");

function addStyling() {
    contentDiv.classList.add("content-bg");
    contentDiv.classList.add("main-container");
}

function addHeader() {
    const welcomeHeader = document.createElement("div");
    welcomeHeader.innerText = "Welcome to our great Restaurant!";
    contentDiv.appendChild(welcomeHeader);
}

function addPara() {
    const welcomePara = document.createElement("div");
    welcomePara.innerText = "You can find a vast list of choices avaliable to you in our beatiful Restaurant!";
    contentDiv.appendChild(welcomePara);
}

export function addMainContentHomepage() {
    document.addEventListener("DOMContentLoaded",() => {
        addStyling();
        addHeader();
        addPara();
    });
};