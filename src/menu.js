import defaultPage from './index.js';

export default function createMenuPage() {
    defaultPage();
    const menuTitle = document.createElement("h1");
    menuTitle.id = "menu-title";
    menuTitle.textContent = "The Epic dragon turbomax 123 restaurant's menu";

    const menuParagraph1 = document.createElement("p");
    menuParagraph1.classList.add = "menu-paragraph";
    menuParagraph1.textContent = `Here's our delicious meals made definitely here, never
    frozen:`;

    const itemTitle1 = document.createElement("h2");
    itemTitle1.classList.add = "item-title";
    itemTitle1.textContent = "Surprise taco ($10)";

    const tacoPng = document.createElement("img");
    tacoPng.classList.add = "item-image";
    tacoPng.src = "../src/img/taco.png";
    tacoPng.alt = "Taco PNG";

    const menuParagraph2 = document.createElement("p");
    menuParagraph2.classList.add = "menu-paragraph";
    menuParagraph2.textContent = "One taco, we don't really know what's inside, so it's kind of a surprise.";

    const itemTitle2 = document.createElement("h2");
    itemTitle2.classList.add = "item-title";
    itemTitle2.textContent = "THE BURG ($20), with fries ($30)";

    const burguerPng = document.createElement("img");
    burguerPng.classList.add = " item-image";
    burguerPng.src = "../src/img/burguer.png";
    burguerPng.alt = "Burguer with fries";

    const menuParagraph3 = document.createElement("p");
    menuParagraph3.classList.add = "menu-paragraph";
    menuParagraph3.textContent = "Bread, meat, cheese, some vegetables or whatever and another bread, not too hard to do.";

    const itemTitle3 = document.createElement("h2");
    itemTitle3.classList.add = "item-title";
    itemTitle3.textContent = "One watah ($75)";

    const waterPng = document.createElement("img");
    waterPng.classList.add = " item-image";
    waterPng.src = "../src/img/water.png";
    waterPng.alt = "Glass of water";

    const menuParagraph4 = document.createElement("p");
    menuParagraph4.classList.add = "menu-paragraph";
    menuParagraph4.textContent = "One of our finest water from our less gross tap";

    const textContainer = document.getElementById("text-container");
    textContainer.appendChild(menuTitle);
    textContainer.appendChild(menuParagraph1);

    textContainer.appendChild(itemTitle1);
    textContainer.appendChild(tacoPng);
    textContainer.appendChild(menuParagraph2);

    textContainer.appendChild(itemTitle2);
    textContainer.appendChild(burguerPng);
    textContainer.appendChild(menuParagraph3);
    
    textContainer.appendChild(itemTitle3);
    textContainer.appendChild(waterPng);
    textContainer.appendChild(menuParagraph4);
}