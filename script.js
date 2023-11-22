// Game logic goes here

// Game variables
let score = 0;
let shipSpeed = 5; // Adjust the ship's speed as needed
let gameInterval;

// Function to start the game
function startGame() {
    console.log("Game started!");

    // Set initial score
    score = 0;

    // Clear any existing game interval
    clearInterval(gameInterval);

    // Start the game loop
    gameInterval = setInterval(updateGame, 20);

    // Update the game display
    updateGameDisplay();
}

// Function to update the game display
function updateGameDisplay() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = "Score: " + score;
    }
}

// Function to update the game state
function updateGame() {
    // Sample game logic: Move the ship
    const shipElement = document.getElementById("ship");
    if (shipElement) {
        const currentBottom = parseInt(window.getComputedStyle(shipElement).bottom);
        shipElement.style.bottom = currentBottom + shipSpeed + "px";
    }

    // Sample: Check for collision with the top of the game screen
    if (currentBottom > 250) {
        // Handle collision (e.g., end the game or deduct points)
        endGame();
    }
}

// Function to end the game
function endGame() {
    console.log("Game over!");

    // Clear the game interval
    clearInterval(gameInterval);

    // Optionally, perform additional end game logic
}

// Call the startGame function when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    startGame();
});
