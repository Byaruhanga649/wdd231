const members = document.querySelector("#members");

async function getMembers() {
    const response = await fetch("data/members.json");

    const data = await response.json();

    displayMembers(data);
}

function displayMembers(companyList) {
    members.innerHTML = "";

    companyList.forEach(company => {
        let card = document.createElement("section");

        card.innerHTML = `
            <img src="${company.image}" alt="${company.name}">
            <h2>${company.name}</h2>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <p><a href="${company.website}" target="_blank">${company.website}</a></p>
            <p>Membership Level: ${company.membership}</p>
        `;

        members.appendChild(card);
    });
}


getMembers();


document.querySelector("#grid").addEventListener("click", () => {
    members.className = "grid";
});


document.querySelector("#list").addEventListener("click", () => {
    members.className = "list";
});


document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;