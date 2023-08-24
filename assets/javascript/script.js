/**
 * Declare constants for the DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/* Add event listener to all the buttons*/
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/* The playGame function */
function playGame(playerChoice) {
    const playerIndex = parseInt(playerChoice);
    playerImage.src = `assets/images/${choices[playerIndex]}.webp`;
    playerImage.alt = choices[playerIndex];

    const computerChoiceIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerChoiceIndex];
    computerImage.src = `assets/images/${computerChoice}.webp`;
    computerImage.alt = computerChoice;

    const result = checkWinner(playerIndex, computerChoiceIndex);
    updateScores(result);
}

/** 
 * The checkWinner function:
 * if both choose the same item the result is going to be tie
 * otherwise the player or the computer wins 
 */
function checkWinner(playerChoiceIndex, computerChoiceIndex) {
    if (playerChoiceIndex === computerChoiceIndex) {
        return "tie";
    } else if ((playerChoiceIndex === 0 && computerChoiceIndex === 2) || (playerChoiceIndex === 1 && computerChoiceIndex === 0) || (playerChoiceIndex === 2 && computerChoiceIndex === 1)) {
        return "player";
    } else {
        return "computer";
    }
}

/* The updateScores function*/
function updateScores(result) {
    if (result === "player") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        messages.textContent = "Great! You Win! :D";
    } else if (result === "computer") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        messages.textContent = "Sorry! Computer Wins! :(";
    } else {
        messages.textContent = "Opps! It's a tie!";
    }
}