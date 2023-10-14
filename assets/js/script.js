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

// Add a click event listener to the "High Scores" button
highScoresButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Hide other buttons and elements
    playGameButton.style.display = "none";
    highScoresButton.style.display = "none";
    instructionsButton.style.display = "none";
    instructionsElement.style.display = "none";

    // Show the high scores table
    const highScoresTable = document.querySelector(".high-scores-table");
    highScoresTable.style.display = "block";

    // Call a function to populate the high scores table
    populateHighScoresTable();
});

// Add a click event listener to the "Return" button within the high scores table
const returnFromHighScoresButton = document.getElementById("return-from-high-scores");
returnFromHighScoresButton.addEventListener("click", function () {
    // Show other buttons
    playGameButton.style.display = "block";
    highScoresButton.style.display = "block";
    instructionsButton.style.display = "inline";

    // Hide the high scores table when the "Return" button is clicked
    const highScoresTable = document.querySelector(".high-scores-table");
    highScoresTable.style.display = "none";
});

// Function to populate the high scores table Placeholder data used at moment.
function populateHighScoresTable() {
    const highScoresTable = document.getElementById("high-scores-table");
    const highScoresData = [
        { username: "User1", score: 10 },
        { username: "User2", score: 8 },
        { username: "User3", score: 12 },
    ];

    // Clear existing table rows
    highScoresTable.innerHTML = "<tr><th>Username</th><th>Score</th></tr>";

    // Add rows for each high score entry
    highScoresData.forEach((entry) => {
        const row = document.createElement("tr");
        const usernameCell = document.createElement("td");
        usernameCell.textContent = entry.username;
        const scoreCell = document.createElement("td");
        scoreCell.textContent = entry.score;

        row.appendChild(usernameCell);
        row.appendChild(scoreCell);
        highScoresTable.appendChild(row);
    });
}
