import { places } from "../data/places.mjs";

const cardsContainer = document.querySelector("#discover-cards");

// Build the 8 cards
function displayPlaces() {
    places.forEach(place => {

        const card = document.createElement("section");
        card.classList.add("discover-card");

        card.innerHTML = `
            <h2>${place.name}</h2>

            <figure>
                <img
                    src="${place.image}"
                    alt="${place.name}"
                    width="300"
                    height="200"
                    loading="lazy">
            </figure>

            <address>${place.address}</address>

            <p>${place.description}</p>

            <button type="button">Learn More</button>
        `;

        cardsContainer.appendChild(card);
    });
}

displayPlaces();

// ----------------------
// Last Visit Message
// ----------------------

const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");

const today = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysBetween = Math.floor(
        (today - Number(lastVisit)) / 86400000
    );

    if (daysBetween < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", today);