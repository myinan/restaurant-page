import phonecallIcon from "./phone-call.png";
import locationIcon from "./location.png";
import emailIcon from "./email.jpg";

const contentDiv = document.getElementById("main-container");

const overlayContainer = document.createElement("div");

const parafFirst = document.createElement("p");
const parafSecond = document.createElement("p");

const infoContainer = document.createElement("div");
let infoItems = [];
for (let i = 0; i < 3; i++) {
    let infoItem = document.createElement("div");
    infoItems.push(infoItem);
    infoContainer.appendChild(infoItem);
}

parafFirst.innerText = "Perfectly Balanced";
parafSecond.innerText = "QUALITY & TASTE";

function populateInfoItems() {
    function populateLeftmostDiv() {
        const leftmostIcon = new Image();
        leftmostIcon.src = phonecallIcon;
        const callUsText = document.createElement("p");
        callUsText.innerText = "Call us";
        const phoneNumber = document.createElement("p");
        phoneNumber.innerText = "+90 123 456 78 90";
        infoItems[0].append(leftmostIcon, callUsText, phoneNumber);
    }

    function populateMiddleDiv() {
        const middleIcon = new Image();
        middleIcon.src = locationIcon;
        const locationText = document.createElement("p");
        locationText.innerText = "Location";
        const adress = document.createElement("p");
        adress.innerText = "Kentmeydanı AVM, Bursa";
        infoItems[1].append(middleIcon, locationText, adress);
    }

    function populateRightmostDiv() {
        const rightmostIcon = new Image();
        rightmostIcon.src = emailIcon;
        const emailText = document.createElement("p");
        emailText.innerText = "Email";
        const mail = document.createElement("p");
        mail.innerText = "restadelux@gmail.com";
        infoItems[2].append(rightmostIcon, emailText, mail);
    }

    populateLeftmostDiv();
    populateMiddleDiv();
    populateRightmostDiv();
}

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
    populateInfoItems();

    addContent();
    addStyling();
}