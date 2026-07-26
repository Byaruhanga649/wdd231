// Set the hidden timestamp field when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});
document.getElementById("openNP").addEventListener("click", () => {
    document.getElementById("npModal").showModal();
});

document.getElementById("closeNP").addEventListener("click", () => {
    document.getElementById("npModal").close();
});

document.getElementById("openBronze").addEventListener("click", () => {
    document.getElementById("bronzeModal").showModal();
});

document.getElementById("closeBronze").addEventListener("click", () => {
    document.getElementById("bronzeModal").close();
});

document.getElementById("openSilver").addEventListener("click", () => {
    document.getElementById("silverModal").showModal();
});

document.getElementById("closeSilver").addEventListener("click", () => {
    document.getElementById("silverModal").close();
});

document.getElementById("openGold").addEventListener("click", () => {
    document.getElementById("goldModal").showModal();
});

document.getElementById("closeGold").addEventListener("click", () => {
    document.getElementById("goldModal").close();
});