import { places } from "../data/place.mjs";

const cardsContainer = document.querySelector("#discover-cards");
const visitMessage = document.querySelector("#visit-message");


// Display the places
function displayPlaces(placeList) {

    cardsContainer.innerHTML = "";

    placeList.forEach((place, index) => {

        const card = document.createElement("section");

        card.classList.add("discover-card");
        card.classList.add(`card-${index + 1}`);

        card.innerHTML = `
            <h2>${place.name}</h2>

            <figure>
                <img
                    src="${place.image}"
                    alt="${place.name}"
                    width="300"
                    height="200"
                    loading="${index === 0 ? "eager" : "lazy"}"
                >
            </figure>

            <address>${place.address}</address>

            <p>${place.description}</p>

            <button
                type="button"
                class="learn-more"
                aria-label="Learn more about ${place.name}">
                Learn More
            </button>
        `;

        cardsContainer.appendChild(card);

    });
}


// Display the visitor message
function displayVisitMessage() {

    const currentDate = Date.now();

    const lastVisit =
        localStorage.getItem("discoverLastVisit");

    const millisecondsPerDay =
        1000 * 60 * 60 * 24;


    if (lastVisit === null) {

        visitMessage.textContent =
            "Welcome! Let us know if you have any questions.";

    } else {

        const previousDate =
            Number(lastVisit);

        const difference =
            currentDate - previousDate;


        if (difference < millisecondsPerDay) {

            visitMessage.textContent =
                "Back so soon! Awesome!";

        } else {

            const days =
                Math.floor(
                    difference / millisecondsPerDay
                );


            if (days === 1) {

                visitMessage.textContent =
                    "You last visited 1 day ago.";

            } else {

                visitMessage.textContent =
                    `You last visited ${days} days ago.`;

            }

        }

    }


    localStorage.setItem(
        "discoverLastVisit",
        currentDate
    );
}


// Display the places
displayPlaces(places);

// Display the visit message
displayVisitMessage();