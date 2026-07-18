// OpenWeather API Key
const apiKey = "ce17cf2ab8aee1ad4b4aedb63c0814cf";

// Kampala Coordinates
const lat = 0.3476;
const lon = 32.5825;

// Current Weather URL
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Forecast URL
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
// Get Current Weather
async function getCurrentWeather() {
    try {
        const response = await fetch(currentURL);

        if (!response.ok) {
            throw new Error("Weather data could not be loaded.");
        }

        const data = await response.json();

        document.querySelector("#weather-info").innerHTML = `
            <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error(error);
        document.querySelector("#weather-info").textContent =
            "Unable to load weather data.";
    }
}
// Get 3-Day Forecast
async function getForecast() {
    try {
        const response = await fetch(forecastURL);

        if (!response.ok) {
            throw new Error("Forecast data could not be loaded.");
        }

        const data = await response.json();

        const forecast = document.querySelector("#forecast");
        forecast.innerHTML = "";

        // Forecast at 12:00 PM each day
        const noonForecasts = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        noonForecasts.slice(0, 3).forEach(day => {
            const date = new Date(day.dt_txt);

            forecast.innerHTML += `
                <p>
                    <strong>${date.toLocaleDateString("en-US", {
                weekday: "long"
            })}</strong>:
                    ${Math.round(day.main.temp)}°C
                </p>
            `;
        });

    } catch (error) {
        console.error(error);
        document.querySelector("#forecast").textContent =
            "Unable to load forecast.";
    }
}
getCurrentWeather();
getForecast();
// Display Company Spotlights

async function getSpotlights() {

    const response = await fetch("data/members.json");

    const members = await response.json();


    const qualifiedMembers = members.filter(member =>
        member.membership === 2 ||
        member.membership === 3
    );


    const selectedMembers = qualifiedMembers
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);


    document.querySelector("#spotlights").innerHTML =
        selectedMembers.map(member => `

        <div class="spotlight-card">

            <img src="${member.image}" 
            alt="${member.name} logo">

            <h3>${member.name}</h3>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}">
                Visit Website
            </a>

            <p>
                Membership:
                ${member.membership === 2 ? "Gold" : "Silver"}
            </p>

        </div>

        `).join("");

}

getSpotlights();