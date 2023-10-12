// Get references to the buttons for the event listeners
const instructionsButton = document.getElementById("show-instructions");
const instructionsElement = document.querySelector(".quiz-instructions");
const playGameButton = document.querySelector(".play-game");
const highScoresButton = document.querySelector(".high-scores");

// Add a click event listener to the "Instructions" button
instructionsButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Hide other buttons
    playGameButton.style.display = "none";
    highScoresButton.style.display = "none";
    instructionsButton.style.display = "none";

    // Show the instructions element
    instructionsElement.style.display = "block";
});
 
// Add a click event listener to the "Return" button within the instructions element
const returnButton = document.getElementById("return-button");
returnButton.addEventListener("click", function () {
    // Show other buttons
    playGameButton.style.display = "block";
    highScoresButton.style.display = "block";
    instructionsButton.style.display = "inline";

    // Hide the instructions element when the "Return" button is clicked
    instructionsElement.style.display = "none";
});
