function setBackground() {
    const body = document.getElementById("content");
    body.classList.add("home-background");
}


export function setHomepageBg() {
    document.addEventListener("DOMContentLoaded", setBackground);
};