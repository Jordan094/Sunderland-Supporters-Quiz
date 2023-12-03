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
        "options": ["The Villagers", "The Black Cats", "The Hammers", "The Canaries"],
        "correctAnswer": "The Black Cats"
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
    },
    {
        "question": "What is the capacity of the Stadium of Light?",
        "options": ["39,000", "41,000", "53,000", "49,000"],
        "correctAnswer": "49,000"
    },
    {
        "question": "Sunderland AFC's main rivalry is with which club?",
        "options": ["Newcastle United", "Middlesbrough", "Leeds United", "Sheffield Wednesday"],
        "correctAnswer": "Newcastle United"
    },
    {
        "question": "Which manager took Sunderland AFC to the League Cup final in 2014, where they were runners-up to Manchester City?",
        "options": ["Sam Allardyce", "Roy Keane", "Gus Poyet", "Dick Advocaat"],
        "correctAnswer": "Gus Poyet"
    },
    {
        "question": "What was the previous name of the Stadium of Light before its renaming in 1997?",
        "options": ["Roker Park", "Stadium of the North", "Sunderland Stadium", "Sunderland Arena"],
        "correctAnswer": "Roker Park"
    },
    {
        "question": "Which manager succeeded Roy Keane as the manager of Sunderland AFC in 2009?",
        "options": ["Steve Bruce", "Sam Allardyce", "Gus Poyet", "Martin O'Neill"],
        "correctAnswer": "Steve Bruce"
    },
    {
        "question": "Who scored Sunderland AFC's winning goal in the 1973 FA Cup final against Leeds United?",
        "options": ["Bob Stokoe", "Billy Hughes", "Ian Porterfield", "Dennis Tueart"],
        "correctAnswer": "Ian Porterfield"
    },
    {
        "question": "Who is known as 'The King' among Sunderland AFC fans for his legendary status at the club?",
        "options": ["Charlie Hurley", "Stan Anderson", "Gary Rowell", "Lee Barry Cattermole"],
        "correctAnswer": "Charlie Hurley"
    },
    {
        "question": "Which player holds the record for the most appearances for Sunderland AFC?",
        "options": ["Len Shackleton", "Gary Bennett", "Jimmy Montgomery", "Jim Baxter"],
        "correctAnswer": "Jimmy Montgomery"
    },
    {
        "question": "Which manager led Sunderland AFC to their famous 'Great Escape' from relegation in the 2013-2014 Premier League season?",
        "options": ["Steve Bruce", "Gus Poyet", "Dick Advocaat", "Roy Keane"],
        "correctAnswer": "Gus Poyet"
    },
    {
        "question": "Which country is Jordan Henderson, a former Sunderland AFC player and current Liverpool captain, from?",
        "options": ["Wales", "Ireland", "Scotland", "England"],
        "correctAnswer": "England"
    },
    {
        "question": "How many times has Sunderland AFC won the FA Cup?",
        "options": ["1", "2", "3", "4"],
        "correctAnswer": "2"
    },
    {
        "question": "What year did Sunderland AFC win their first top-flight league title?",
        "options": ["1935", "1954", "1973", "1990"],
        "correctAnswer": "1935"
    },
    {
        "question": "What rank is Sunderland AFCs  highest-ever Premier League finish?",
        "options": ["7th", "8th", "9th", "10th"],
        "correctAnswer": "7th"
    },
    {
        "question": "The 2003/04 season saw Sunderland lose on penalties in the play-off semi-finals against which club?",
        "options": ["Newcastle United", "Fulham", "Leeds United", "Crystal Palace"],
        "correctAnswer": "Crystal Palace"
    },
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
        displayQuestion();
    } else {
        const gameOverSection = document.querySelector(".game-over");
        const totalScore = document.getElementById("total-score");
        totalScore.textContent = correctAnswers;
        logHighScore(usernameInput.value, parseInt(totalScore.textContent));
        gameOverSection.style.display = "block";
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

    // Create a new row for the high score
    const newRow = document.createElement("tr");

    // Create cells for username and score
    const usernameCell = document.createElement("td");
    usernameCell.textContent = username;

    const scoreCell = document.createElement("td");
    scoreCell.textContent = score;

    // Append cells to the new row
    newRow.appendChild(usernameCell);
    newRow.appendChild(scoreCell);

    // Insert the new row at the correct position based on the score
    insertAtCorrectPosition(highScoresTable, newRow);
}

// Function to insert a new row at the correct position in the table
function insertAtCorrectPosition(table, newRow) {
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const currentScore = parseInt(rows[i].getElementsByTagName('td')[1].textContent, 10);

        if (currentScore < parseInt(newRow.getElementsByTagName('td')[1].textContent, 10)) {
            table.insertBefore(newRow, rows[i]);
            return;
        }
    }

    // If the new score is the lowest, append it at the end
    table.appendChild(newRow);
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

// Share Button with help from https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
document.addEventListener('DOMContentLoaded', function () {
    // Get the share button element
    const shareButton = document.getElementById('share-button');

    // Add a click event listener to the share button
    shareButton.addEventListener('click', function () {
        // Create a temporary input element
        const tempInput = document.createElement('input');

        // Set the value of the input to the current URL
        tempInput.value = window.location.href;

        // Append the input element to the document
        document.body.appendChild(tempInput);

        // Select the input element's content
        tempInput.select();

        try {
            // Attempt to copy the content to the clipboard
            document.execCommand('copy');
            alert('URL copied to clipboard: ');
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
            alert('Copy to clipboard failed. Please copy the URL manually.');
        } finally {
            document.body.removeChild(tempInput);
        }
    });
});