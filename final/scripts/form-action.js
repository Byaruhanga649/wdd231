import "./navigation.js";


const servicesContainer =
    document.querySelector("#services-container");

const categoryFilter =
    document.querySelector("#category-filter");

const searchInput =
    document.querySelector("#service-search");

const statusMessage =
    document.querySelector("#service-status");

const modal =
    document.querySelector("#service-modal");

const modalBody =
    document.querySelector("#modal-body");

const modalClose =
    document.querySelector("#modal-close");

const yearElement =
    document.querySelector("#current-year");


let allServices = [];


if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


async function loadServices() {

    try {

        const response =
            await fetch("data/services.json");

        if (!response.ok) {
            throw new Error(
                `Unable to load services: ${response.status}`
            );
        }

        const data =
            await response.json();

        allServices = data;

        createCategoryOptions(data);

        displayServices(data);

    } catch (error) {

        console.error(
            "Error loading service data:",
            error
        );

        if (servicesContainer) {

            servicesContainer.innerHTML = `
                <div class="error-message">

                    <h2>Services unavailable</h2>

                    <p>
                        We could not load the service information.
                        Please try again later.
                    </p>

                </div>
            `;

        }

    }

}


function createCategoryOptions(data) {

    if (!categoryFilter) {
        return;
    }

    const categories = [
        ...new Set(
            data.map(
                (service) => service.category
            )
        )
    ];

    categories.sort();

    categories.forEach((category) => {

        const option =
            document.createElement("option");

        option.value = category;

        option.textContent = category;

        categoryFilter.appendChild(option);

    });

}


function displayServices(data) {

    if (!servicesContainer) {
        return;
    }

    if (data.length === 0) {

        servicesContainer.innerHTML = `
            <div class="empty-message">
                <h2>No services found</h2>
                <p>
                    Try another search or category.
                </p>
            </div>
        `;

        if (statusMessage) {
            statusMessage.textContent =
                "No matching services found.";
        }

        return;
    }


    servicesContainer.innerHTML = data
        .map(
            (service) => `
                <article class="service-card">

                    <div class="service-card-top">

                        <span class="service-number">
                            ${String(service.id).padStart(2, "0")}
                        </span>

                        <span class="service-category">
                            ${service.category}
                        </span>

                    </div>


                    <h2>${service.name}</h2>

                    <p>
                        ${service.description}
                    </p>


                    <div class="service-properties">

                        <p>
                            <strong>Technology</strong>
                            <span>
                                ${service.technology}
                            </span>
                        </p>

                        <p>
                            <strong>Duration</strong>
                            <span>
                                ${service.duration}
                            </span>
                        </p>

                        <p>
                            <strong>Level</strong>
                            <span>
                                ${service.level}
                            </span>
                        </p>

                    </div>


                    <button
                        class="text-button"
                        data-id="${service.id}">

                        View Details →

                    </button>

                </article>
            `
        )
        .join("");


    if (statusMessage) {

        statusMessage.textContent =
            `Showing ${data.length} service${data.length === 1 ? "" : "s"}.`;

    }


    servicesContainer
        .querySelectorAll("[data-id]")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    const service =
                        allServices.find(
                            (item) => item.id === id
                        );

                    if (service) {
                        openModal(service);
                    }

                }
            );

        });

}


function openModal(service) {

    if (!modal || !modalBody) {
        return;
    }


    modalBody.innerHTML = `
        <p class="eyebrow">
            ${service.category}
        </p>

        <h2>
            ${service.name}
        </h2>

        <p>
            ${service.description}
        </p>

        <div class="modal-details">

            <p>
                <strong>Technology</strong>
                ${service.technology}
            </p>

            <p>
                <strong>Estimated Duration</strong>
                ${service.duration}
            </p>

            <p>
                <strong>Project Level</strong>
                ${service.level}
            </p>

        </div>

        <button
            id="choose-service"
            class="button primary-button">

            Choose This Service

        </button>
    `;


    const chooseButton =
        document.querySelector("#choose-service");


    if (chooseButton) {

        chooseButton.addEventListener(
            "click",
            () => {

                localStorage.setItem(
                    "preferredService",
                    service.name
                );

                window.location.href =
                    "contact.html";

            }
        );

    }


    modal.showModal();

}


function filterServices() {

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";

    const searchTerm =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const filteredServices =
        allServices.filter(
            (service) => {

                const matchesCategory =
                    selectedCategory === "all" ||
                    service.category === selectedCategory;

                const searchableText =
                    `${service.name}
                    ${service.description}
                    ${service.technology}
                    ${service.category}`.toLowerCase();

                const matchesSearch =
                    searchableText.includes(searchTerm);

                return matchesCategory &&
                    matchesSearch;

            }
        );


    displayServices(filteredServices);

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterServices
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterServices
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        () => modal.close()
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {
                modal.close();
            }

        }
    );

}


loadServices();