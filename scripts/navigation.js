const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.innerHTML = "✖";
        menuButton.setAttribute("aria-label", "Close Menu");
    } else {
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Open Menu");
    }
});