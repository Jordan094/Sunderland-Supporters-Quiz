// Get references to the buttons and elements
const instructionsButton = document.getElementById("show-instructions");
const highScoresButton = document.getElementById("high-scores-button");
const instructionsElement = document.querySelector(".quiz-instructions");
const playGameButton = document.querySelector(".play-game");
const returnFromInstructionsButton = document.getElementById("return-from-instructions");
const returnFromHighScoresButton = document.getElementById("return-from-high-scores");
const highScoresTable = document.querySelector(".high-scores-table");

// Add a click event listener to the buttons
document.addEventListener("click", function (event) {
    if (event.target === instructionsButton) {
        event.preventDefault();

        // Hide other buttons and elements
        playGameButton.style.display = "none";
        highScoresButton.style.display = "none";
        instructionsButton.style.display = "none";
        highScoresTable.style.display = "none";

        // Show the instructions element
        instructionsElement.style.display = "block";
    } else if (event.target === highScoresButton) {
        event.preventDefault();

        // Hide other buttons and elements
        playGameButton.style.display = "none";
        highScoresButton.style.display = "none";
        instructionsButton.style.display = "none";
        instructionsElement.style.display = "none";

        // Show the high scores table
        highScoresTable.style.display = "block";

        // Call a function to populate the high scores table
        populateHighScoresTable();
    } else if (event.target === returnFromInstructionsButton || event.target === returnFromHighScoresButton) {
        event.preventDefault();

        // Show other buttons
        playGameButton.style.display = "inline";
        highScoresButton.style.display = "inline";
        instructionsButton.style.display = "inline";

        // Hide the instructions element or high scores table when the "Return" button is clicked
        instructionsElement.style.display = "none";
        highScoresTable.style.display = "none";
    }
});

// Function to populate the high scores table (replace with your actual data)
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
