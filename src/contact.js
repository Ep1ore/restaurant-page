import defaultPage from './index.js';

export default function createContactPage() {
    defaultPage();
    const contactTitle = document.createElement("h1");
    contactTitle.id = "contact-title";
    contactTitle.textContent = "Our contact information";

    const email = document.createElement("h2");
    email.classList.add("contact-item");
    email.textContent = "Email:";

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-item-container");

    const emailImg = document.createElement("img");
    emailImg.classList.add("contact-item-image");
    emailImg.src = "../src/img/email-logo.png";

    const emailText = document.createElement("p");
    emailText.classList.add("contact-item-text");
    emailText.textContent = "epicdragonturbomax123@realmail.com";

    const phoneNumber = document.createElement("h2");
    phoneNumber.classList.add("contact-item");
    phoneNumber.textContent = "Phone number:";

    const phoneNumberDiv = document.createElement("div");
    phoneNumberDiv.classList.add("contact-item-container");

    const phoneNumberImg = document.createElement("img");
    phoneNumberImg.classList.add("contact-item-image");
    phoneNumberImg.src = "../src/img/phone-logo.png";

    const phoneNumberText = document.createElement("p");
    phoneNumberText.classList.add("contact-item-text");
    phoneNumberText.textContent = "555-555-5555";

    const facebook = document.createElement("h2");
    facebook.classList.add("contact-item");
    facebook.textContent = "Facebook page:";

    const facebookDiv = document.createElement("div");
    facebookDiv.classList.add("contact-item-container");

    const facebookImg = document.createElement("img");
    facebookImg.classList.add("contact-item-image");
    facebookImg.src = "../src/img/facebook-logo.png";

    const facebookText = document.createElement("p");
    facebookText.classList.add("contact-item-text");
    facebookText.textContent = "The epic dragon turbomax 123's official page";

    const textContainer = document.getElementById("text-container");
    textContainer.appendChild(contactTitle);

    textContainer.appendChild(email);
    textContainer.appendChild(emailDiv);
     emailDiv.appendChild(emailImg);
     emailDiv.appendChild(emailText);

    textContainer.appendChild(phoneNumber);
    textContainer.appendChild(phoneNumberDiv);
     phoneNumberDiv.appendChild(phoneNumberImg);
     phoneNumberDiv.appendChild(phoneNumberText);

    textContainer.appendChild(facebook);
    textContainer.appendChild(facebookDiv);
     facebookDiv.appendChild(facebookImg);
     facebookDiv.appendChild(facebookText);
}