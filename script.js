// Game logic goes here

// Sample game variables
let score = 0;

// Function to start the game
function startGame() {
    console.log("Game started!");

    // Sample game logic: Increment the score
    score++;
    console.log("Score: " + score);

    // Update the game display
    updateGameDisplay();
}

// Function to update the game display
function updateGameDisplay() {
    // Sample: Display the score in the console
    console.log("Updated display - Score: " + score);

    // Update the HTML display
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = "Score: " + score;
    }
}

// Call the startGame function when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    startGame();
});
