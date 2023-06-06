/**
 * Declare constants for the DOM elements
 * and possible choices
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = documnet.getElementById("computer-score");
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
    playerImage.src = `assets/images/${choices[playerChoice]}.webp`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src = `assets/images/${choices[computerChoice]}.webp`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    updateScores(result);
}

/** 
 * The checkWinner function:
 * if both choose the same item the result is going to be tie
 * otherwise the player or the computer wins 
 */
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return tie;
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    } else {
        return "computer";
    }
}