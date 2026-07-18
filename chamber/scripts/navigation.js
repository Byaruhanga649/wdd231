const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});