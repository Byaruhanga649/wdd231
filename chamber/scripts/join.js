// Set timestamp
const timestamp = document.getElementById("timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}


// NP Dialog
const openNP = document.getElementById("openNP");
const npModal = document.getElementById("npModal");
const closeNP = document.getElementById("closeNP");

if (openNP && npModal) {
    openNP.addEventListener("click", () => {
        npModal.showModal();
    });
}

if (closeNP && npModal) {
    closeNP.addEventListener("click", () => {
        npModal.close();
    });
}


// Bronze Dialog
const openBronze = document.getElementById("openBronze");
const bronzeModal = document.getElementById("bronzeModal");
const closeBronze = document.getElementById("closeBronze");

if (openBronze && bronzeModal) {
    openBronze.addEventListener("click", () => {
        bronzeModal.showModal();
    });
}

if (closeBronze && bronzeModal) {
    closeBronze.addEventListener("click", () => {
        bronzeModal.close();
    });
}


// Silver Dialog
const openSilver = document.getElementById("openSilver");
const silverModal = document.getElementById("silverModal");
const closeSilver = document.getElementById("closeSilver");

if (openSilver && silverModal) {
    openSilver.addEventListener("click", () => {
        silverModal.showModal();
    });
}

if (closeSilver && silverModal) {
    closeSilver.addEventListener("click", () => {
        silverModal.close();
    });
}


// Gold Dialog
const openGold = document.getElementById("openGold");
const goldModal = document.getElementById("goldModal");
const closeGold = document.getElementById("closeGold");

if (openGold && goldModal) {
    openGold.addEventListener("click", () => {
        goldModal.showModal();
    });
}

if (closeGold && goldModal) {
    closeGold.addEventListener("click", () => {
        goldModal.close();
    });
}