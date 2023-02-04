import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";
let currentPage = "home";

function navBar() {
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

    document.body.appendChild(nav);
    nav.appendChild(navDiv);
     navDiv.appendChild(homeBtn);
     navDiv.appendChild(menuBtn);
     navDiv.appendChild(contactBtn);

}; navBar();

export default function defaultPageFormat() {
    const content = document.getElementById("content");
    const dragonBackgroundImage = document.createElement("img");
    dragonBackgroundImage.id = "dragon-background-image";
    dragonBackgroundImage.src = "../src/img/epic-dragon.jpg";
    const textContainer = document.createElement("div");
    textContainer.id = "text-container";

    content.appendChild(dragonBackgroundImage);
    content.appendChild(textContainer);
};

function clearContainer() {
    document.getElementById("content").innerHTML = "";
};

homePage();

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", function(){
    if(currentPage !== "home"){
        clearContainer(); homePage(); currentPage = "home";
    };
});
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function(){
    if(currentPage !== "menu"){
        clearContainer(); menuPage(); currentPage = "menu";
    };
});
const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", function(){
    if(currentPage !== "contact"){
        clearContainer(); contactPage(); currentPage = "contact";
    };
});