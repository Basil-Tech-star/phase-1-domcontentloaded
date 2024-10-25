document.addEventListener('DOMContentLoaded', () => {
    console.log("The DOM has loaded");
});
console.log("This console.log fires when the index.js loads before DOMContentLoaded is triggered");
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    textElement.textContent = "This is really cool!";
});
