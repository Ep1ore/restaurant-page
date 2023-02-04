import defaultPage from './index.js';

export default function createHomePage() {
    defaultPage();
    const homeTitle = document.createElement("h1");
    homeTitle.id = "home-title";
    homeTitle.textContent = "Welcome to the Epic dragon turbomax 123's restaurant";
    const homeParagraph = document.createElement("p");
    homeParagraph.id = "home-paragraph";
    homeParagraph.innerHTML = `The only restaurant in which we make all types of food
    and we <strong>LITERALLY</strong> sell it to you, not even as a joke, like,
    for real <strong>WE</strong> make it and then sell it, they are made with
    ingredients, you know? Kind of cool honestly, anyway if
    you feel too sick from the food we are not really responsible,
    those are bad vibes, and we're not up for that tbh.`;
    const homeDragon = document.createElement("img");
    homeDragon.src = "../src/img/epic-dragon.jpg";
    homeDragon.id = "home-dragon";
    homeDragon.alt = "An epic dragon";

    const textContainer = document.getElementById("text-container");
    textContainer.appendChild(homeTitle);
    textContainer.appendChild(homeParagraph);
    textContainer.appendChild(homeDragon);
}