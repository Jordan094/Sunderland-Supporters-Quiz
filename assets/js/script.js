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
const muteButton = document.getElementById("mute-button");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

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
    },
    {
        "question": "Who is Sunderland AFC's all-time top scorer?",
        "options": ["Niall Quinn", "Kevin Phillips", "Darren Bent", "Raich Carter"],
        "correctAnswer": "Kevin Phillips"
    },
    {
        "question": "Which English league is Sunderland AFC currently playing in?",
        "options": ["Premier League", "Championship", "League One", "League Two"],
        "correctAnswer": "Championship"
    },
    {
        "question": "Who is the current manager of Sunderland AFC?",
        "options": ["Sam Allardyce", "Tony Mowbray", "Lee Johnson", "Gus Poyet"],
        "correctAnswer": "Tony Mowbray"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0; // Track the number of correct answers

// Add a click event listener to the buttons
document.addEventListener("click", function (event) {
    if (event.target === instructionsButton) {
        event.preventDefault();
        toggleButtonsAndElements();
        instructionsElement.style.display = "block";
    } else if (event.target === highScoresButton) {
        event.preventDefault();
        toggleButtonsAndElements();
        highScoresTable.style.display = "block";
        populateHighScoresTable();
    } else if (event.target === returnFromInstructionsButton || event.target === returnFromHighScoresButton) {
        event.preventDefault();
        toggleButtonsAndElements();
    } else if (event.target === playGameButton) {
        event.preventDefault();
        toggleButtonsAndElements();
        usernameInputContainer.style.display = "block";
    } else if (event.target === returnFromUsernameInputButton) {
        event.preventDefault();
        toggleButtonsAndElements(); 
    }
});

// Function to toggle buttons and elements visibility
function toggleButtonsAndElements() {
    playGameButton.style.display = playGameButton.style.display === "none" ? "inline" : "none";
    highScoresButton.style.display = highScoresButton.style.display === "none" ? "inline" : "none";
    instructionsButton.style.display = instructionsButton.style.display === "none" ? "inline" : "none";
    instructionsElement.style.display = "none";
    highScoresTable.style.display = "none";
    usernameInputContainer.style.display = "none";
    questionContainer.style.display = "none";
}

// Function to check if the username input is empty
function checkUsernameInput() {
    shuffleQuestions(questions);
    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter a username.");
    } else {
        usernameInputContainer.style.display = "none";
        displayQuestion();
    }
}


// Function to display a question
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
            choiceElement.className = "menu-button";
            choiceElement.addEventListener("click", () => checkAnswer(choice));
            questionContainer.appendChild(choiceElement);
        });
    } else {
        const gameOverSection = document.querySelector(".game-over");
        const totalScore = document.getElementById("total-score");
        totalScore.textContent = correctAnswers;
        gameOverSection.style.display = "block";
    }
}

// Function to check the answer and proceed to the next question
function checkAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedChoice === correctAnswer) {
        playCorrectSound();
        correctAnswers++;
    } else {
        playWrongSound();
    }

    const questionToRemove = document.querySelector(".question-container");
    questionToRemove.innerHTML = "";
    questionToRemove.style.display = "none";

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        const totalScore = correctAnswers;
        displayQuestion();
    } else {
        const gameOverSection = document.querySelector(".game-over");
        const totalScore = document.getElementById("total-score");
        totalScore.textContent = correctAnswers;
        gameOverSection.style.display = "block";
        logHighScore(usernameInput.value, totalScore);
    }
}
// Function to shuffle the questions array
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions array
shuffleQuestions(questions);

// Function to log high scores
function logHighScore(username, score) {
    const highScoresTable = document.getElementById("high-scores-table");

    const newRow = document.createElement("tr");


    const usernameCell = document.createElement("td");
    usernameCell.textContent = username;

    const scoreCell = document.createElement("td");
    scoreCell.textContent = score;

    // Append cells to the new row
    newRow.appendChild(usernameCell);
    newRow.appendChild(scoreCell);

    // Append the new row to the high scores table
    highScoresTable.appendChild(newRow);
}

// Function to play correct sound
function playCorrectSound() {
    correctSound.play();
}

// Function to play wrong sound
function playWrongSound() {
    wrongSound.play();
}

// Event listener for starting the game
startGameButton.addEventListener("click", checkUsernameInput);

// Event listener for returning to the main menu
const returnToMainMenuButton = document.getElementById("return-to-main-menu");
returnToMainMenuButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    const gameOverSection = document.querySelector(".game-over");
    gameOverSection.style.display = "none";
    toggleButtonsAndElements();
});

// Event listener for the mute button
muteButton.addEventListener("click", toggleMute);

// Function to toggle mute/unmute state
function toggleMute() {
    if (correctSound.muted !== undefined) {
        // Check if the 'muted' property is supported
        correctSound.muted = !correctSound.muted;
        wrongSound.muted = !wrongSound.muted;

        // Toggle display of icons if muted
        const unmutedIcon = document.querySelector("#mute-button .fa-volume-up");
        const mutedIcon = document.querySelector("#mute-button .fa-volume-mute");

        unmutedIcon.style.display = correctSound.muted ? "none" : "inline";
        mutedIcon.style.display = correctSound.muted ? "inline" : "none";

        // Change the mute button's appearance when muted
        if (correctSound.muted) {
            muteButton.classList.add('muted'); 
        } else {
            muteButton.classList.remove('muted'); 
        }
    } else {
        alert("Mute functionality not supported in your browser.");
    }
}