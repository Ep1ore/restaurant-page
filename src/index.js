import homePage from "./home.js";
import menuPage from "./menu.js";
const content = document.getElementById("content");

export default function defaultPageFormat() {
    const dragonBackgroundImage = document.createElement("img");
    dragonBackgroundImage.id = "dragon-background-image";
    dragonBackgroundImage.src = "../src/img/epic-dragon.jpg";
    const nav = document.createElement("nav");
    const navDiv = document.createElement("div");
    const homeBtn = document.createElement("button");
    homeBtn.id = "home-btn";
    homeBtn.textContent = "Home";
    const menuBtn = document.createElement("button");
    menuBtn.id = "menu-btn";
    menuBtn.textContent = "Menu";
    const contactBtn = document.createElement("button");
    contactBtn.id = "contact-btn";
    contactBtn.textContent = "Contact";
    const textContainer = document.createElement("div");
    textContainer.id = "text-container";

    content.appendChild(dragonBackgroundImage);
    content.appendChild(nav);
     nav.appendChild(navDiv);
      navDiv.appendChild(homeBtn);
      navDiv.appendChild(menuBtn);
      navDiv.appendChild(contactBtn);
    content.appendChild(textContainer);
}

function clearContent() {
    document.getElementById("content").innerHTML = "";
}

// defaultPageFormat();
// homePage();

// const homeBtn = document.getElementById("home-btn");
// homeBtn.addEventListener("click", function(){
//     clearContent(); homePage();
// });
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function(){
    clearContent(); menuPage();
})
const contactBtn = document.getElementById("contact-btn");