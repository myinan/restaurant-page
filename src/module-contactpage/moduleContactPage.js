import phonecallIcon from "./phone-call.png";
import locationIcon from "./location.png";
import emailIcon from "./email.jpg";

const contentDiv = document.getElementById("main-container");

const overlayContainer = document.createElement("div");

const parafFirst = document.createElement("p");
const parafSecond = document.createElement("p");

const infoContainer = document.createElement("div");

parafFirst.innerText = "Perfectly Balanced";
parafSecond.innerText = "QUALITY & TASTE";

function populateInfoItems() {
    infoContainer.innerHTML = "";

    function createInfoItem() {
        const infoItem = document.createElement("div");
        infoContainer.appendChild(infoItem);
        return infoItem;
    }

    function populateLeftmostDiv() {
        const infoItem = createInfoItem();
        const leftmostIcon = new Image();
        leftmostIcon.src = phonecallIcon;
        const callUsText = document.createElement("p");
        callUsText.innerText = "Call us";
        const phoneNumber = document.createElement("p");
        phoneNumber.innerText = "+90 123 456 78 90";
        infoItem.append(leftmostIcon, callUsText, phoneNumber);
    }

    function populateMiddleDiv() {
        const infoItem = createInfoItem();
        const middleIcon = new Image();
        middleIcon.src = locationIcon;
        const locationText = document.createElement("p");
        locationText.innerText = "Location";
        const address = document.createElement("p");
        address.innerText = "Kentmeydanı AVM, Bursa";
        infoItem.append(middleIcon, locationText, address);
    }

    function populateRightmostDiv() {
        const infoItem = createInfoItem();
        const rightmostIcon = new Image();
        rightmostIcon.src = emailIcon;
        const emailText = document.createElement("p");
        emailText.innerText = "Email";
        const mail = document.createElement("p");
        mail.innerText = "restadelux@gmail.com";
        infoItem.append(rightmostIcon, emailText, mail);
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