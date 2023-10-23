// Get references to the buttons and elements
const instructionsButton = document.getElementById("show-instructions");
const highScoresButton = document.getElementById("high-scores-button");
const instructionsElement = document.querySelector(".quiz-instructions");
const playGameButton = document.getElementById("play-game-button");
const returnFromInstructionsButton = document.getElementById("return-from-instructions");
const returnFromHighScoresButton = document.getElementById("return-from-high-scores");
const usernameInputContainer = document.querySelector(".username-input");
const startGameButton = document.getElementById("start-game-button");
const returnFromUsernameInputButton = document.getElementById("return-from-username-input");
const usernameInput = document.getElementById("username-input");
const highScoresTable = document.querySelector(".high-scores-table");
const questionContainer = document.querySelector(".question-container");

// Array of quiz questions and answers
const questions = [
    {
        "question": "In which year was Sunderland AFC founded?",
        "options": ["1879", "1905", "1920", "1943"],
        "correctAnswer": "1879"
    },
    {
        "question": "What is the nickname of Sunderland AFC?",
        "options": ["The Villagers", "The Lads", "The Hammers", "The Canaries"],
        "correctAnswer": "The Lads"
    },
    {
        "question": "Which stadium is the home ground of Sunderland AFC?",
        "options": ["St. James' Park", "Riverside Stadium", "Stadium of Light", "Goodison Park"],
        "correctAnswer": "Stadium of Light"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0; // Track the number of correct answers

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
    } else if (event.target === playGameButton) {
        event.preventDefault();

        // Hide other buttons
        playGameButton.style.display = "none";
        highScoresButton.style.display = "none";
        instructionsButton.style.display = "none";

        // Show the username input container
        usernameInputContainer.style.display = "block";
    } else if (event.target === returnFromUsernameInputButton) {
        event.preventDefault();

        // Show other buttons
        playGameButton.style.display = "inline";
        highScoresButton.style.display = "inline";
        instructionsButton.style.display = "inline";

        // Hide the username input container
        usernameInputContainer.style.display = "none";
    }
});

// Function to check if the username input is empty
function checkUsernameInput() {
    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter a username.");
    } else {
        // If a username is entered, you can proceed with the game or other actions here.
        usernameInputContainer.style.display = "none";

        // Start the game by displaying the first question
        displayQuestion();
    }
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionContainer.style.display = "block";

        const question = document.createElement("div");
        question.textContent = questions[currentQuestionIndex].question;
        questionContainer.appendChild(question);

        const options = questions[currentQuestionIndex].options;
        options.forEach((choice, index) => {
            const choiceElement = document.createElement("button");
            choiceElement.textContent = choice;
            choiceElement.className = "menu-button"; // Add the menu-button class
            choiceElement.addEventListener("click", () => checkAnswer(choice));
            questionContainer.appendChild(choiceElement);
        });

    } else {
        // All questions have been answered, show the "Game Over" section
        const gameOverSection = document.querySelector(".game-over");
        const totalScore = document.getElementById("total-score");
        totalScore.textContent = correctAnswers; // Display the total score as the number of correct answers
        gameOverSection.style.display = "block";
    }
}

function checkAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedChoice === correctAnswer) {
        playCorrectSound();
        correctAnswers++; // Increase the count of correct answers
    } else {
        playWrongSound();
    }

    const questionToRemove = document.querySelector(".question-container");
    questionToRemove.innerHTML = "";
    questionToRemove.style.display = "none";

    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        displayQuestion(); // Move to the next question
    } else {
        // All questions have been answered, show the "Game Over" section
        const gameOverSection = document.querySelector(".game-over");
        const totalScore = document.getElementById("total-score");
        totalScore.textContent = correctAnswers; // Display the total score as the number of correct answers
        gameOverSection.style.display = "block";
    }
}

function playCorrectSound() {
    const correctSound = document.getElementById("correctSound");
    correctSound.play();
}

function playWrongSound() {
    const wrongSound = document.getElementById("wrongSound");
    wrongSound.play();
}

startGameButton.addEventListener("click", checkUsernameInput);

const returnToMainMenuButton = document.getElementById("return-to-main-menu");
returnToMainMenuButton.addEventListener("click", () => {
    // Reset the game state and return to the main menu
    currentQuestionIndex = 0;
    correctAnswers = 0; // Reset the correct answers count
    const gameOverSection = document.querySelector(".game-over");
    gameOverSection.style.display = "none";
    playGameButton.style.display = "inline";
    highScoresButton.style.display = "inline";
    instructionsButton.style.display = "inline";
});
