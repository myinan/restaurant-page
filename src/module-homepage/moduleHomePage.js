import cookingIcon from "./cooking.png";
import diningTableIcon from "./dining-table.png";
import foodDeliveryIcon from "./food-delivery.png";

const contentDiv = document.getElementById("main-container");

function addHeader() {
    const welcomeHeader = document.createElement("div");
    welcomeHeader.innerText = "Welcome to our great Restaurant!";
    contentDiv.appendChild(welcomeHeader);
}

function addMiddlePara() {
    const welcomePara = document.createElement("div");
    welcomePara.innerText = "You can find a vast list of choices avaliable to you in our beatiful Restaurant!";
    contentDiv.appendChild(welcomePara);
}

function addBottomStrip() {
    const bottomStrip = document.createElement("div");
    const leftBox = document.createElement("div");
    const middleBox = document.createElement("div");
    const rightBox = document.createElement("div");

    const leftmostIcon = new Image();
    leftmostIcon.src = cookingIcon;
    const leftmostParaf = document.createElement("p");
    leftmostParaf.innerText = "Experience tasty and fresh food, made by our talented chefs."
    leftBox.append(leftmostIcon, leftmostParaf);

    const middleIcon = new Image();
    middleIcon.src = diningTableIcon;
    const middleParaf = document.createElement("p");
    middleParaf.innerText = "Come with your friends, come with your family."
    middleBox.append(middleIcon, middleParaf);

    const rightmostIcon = new Image();
    rightmostIcon.src = foodDeliveryIcon;
    const rightmostParaf = document.createElement("p");
    rightmostParaf.innerText = "Regular prices for premium service."
    rightBox.append(rightmostIcon, rightmostParaf);

    bottomStrip.append(leftBox, middleBox, rightBox);
    contentDiv.appendChild(bottomStrip);
}

function addStyling() {
    contentDiv.classList.add("content-bg-homepage");
    contentDiv.classList.add("main-container-homepage");
}

export function addMainContentHomepage() {
    document.addEventListener("DOMContentLoaded",() => {
        addHeader();
        addMiddlePara();
        addBottomStrip();
        addStyling();
    });
};