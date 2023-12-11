const contentDiv = document.getElementById("main-container");

function addBgImage() {
    contentDiv.classList.add("content-bg");
}

function addHeader() {
    const welcomeHeader = document.createElement("h1");
    welcomeHeader.innerText = "Welcome to our great Restaurant!";
    contentDiv.appendChild(welcomeHeader);
}

function addPara() {
    const welcomePara = document.createElement("p");
    welcomePara.innerText = "You can find a vast list of choices avaliable to you in our beatiful Restaurant!";
    contentDiv.appendChild(welcomePara);
}

export function addMainContentHomepage() {
    document.addEventListener("DOMContentLoaded",() => {
        addBgImage();
        addHeader();
        addPara();
    });
};