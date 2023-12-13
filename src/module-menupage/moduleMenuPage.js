import menuImage1 from "./assets/roasted-chicken.jpeg";

const contentDiv = document.getElementById("main-container");

function addMenuItems() {
    for (let i = 0; i < 8; i++) {
        const imageCopy = new Image();
        imageCopy.src = menuImage1;

        let newItem = document.createElement("div");
        let newItemHeader = document.createElement("p");
        newItemHeader.innerText = "Rotisserie chicken";
        let newItemParaf = document.createElement("p");
        newItemParaf.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Phasellus dignissim tristique arcu sed hendrerit. 
        Nullam mollis ex quis tellus efficitur, eget blandit sapien rutrum. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Sed bibendum auctor nisi ac convallis. Nam vitae quam sagittis, sollicitudin turpis nec, interdum dui.`;
        newItem.append(imageCopy, newItemHeader, newItemParaf);
        contentDiv.appendChild(newItem);
    }
}

function addStyling() {
    contentDiv.classList.add("main-bg-menupage");
    contentDiv.classList.add("main-container-menupage");
}

export function addMainContentMenupage() {
    addMenuItems();
    addStyling();
};