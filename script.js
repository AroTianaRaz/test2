// JavaScript function to change the text color
function changeColor() {
    const textElement = document.getElementById('text');
    const colors = ['red', 'blue', 'green', 'purple', 'orange']; // Array of colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color
    textElement.style.color = randomColor; // Change the color of the text
}