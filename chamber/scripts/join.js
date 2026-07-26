// Set the hidden timestamp field when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }
});