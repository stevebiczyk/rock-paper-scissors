/**
 * Declare constants for DOM elements.
 */

const playerSelection = document.getElementById("player-selection");
const computerChoice = document.getElementById("computer-choice");
var pScore = document.getElementById("player-score");
var cScore = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");
/**
 * Add event listeners and get player selection.
 */
let selections = document.getElementsByClassName("selection");
for (let selection of selections) {
  selection.addEventListener("click", function () {
    let playerSelection = this.getAttribute("data-selection");
    playGame(playerSelection);
  });
}

/**
 * Generates a random selection for the computer.
 */
function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomSelection = Math.floor(Math.random() * choices.length);
  return choices[randomSelection];
}

/**
 * The main function of the game.
 */
function playGame(playerSelection) {
  const computerChoice = generateComputerChoice();
  choicesDiv = document.getElementById("choice-area");
  choicesDiv.style.display = 'inline-block';
  decideWinner(playerSelection, computerChoice);
  roundCount();
  gameFinished();
}

/**
 * Compares the player and  computer selection and declares the winner.
 * Also increments the score for the winner.
 */
function decideWinner(playerSelection, computerChoice) {
  document.getElementById("player-selection").innerText = playerSelection;
  document.getElementById("computer-choice").innerText = computerChoice;
  if (playerSelection === computerChoice) {
    resultMessage.textContent = "Both players chose the same, it's a draw!";
  } else if (playerSelection === "rock") {
    if (computerChoice === "paper") {
      resultMessage.textContent = "Paper beats rock, the computer won!";
      incrementComputerScore();
    } else {
      resultMessage.textContent = "Rock beats scissors, you beat the computer!";
      incrementPlayerScore();
    }
  } else if (playerSelection === "scissors") {
    if (computerChoice === "rock") {
      resultMessage.textContent = "Rock beats scissors, the computer won!";
      incrementComputerScore();
    } else {
      resultMessage.textContent =
        "Scissors beats paper, you beat the computer!";
      incrementPlayerScore();
    }
  } else if (playerSelection === "paper") {
    if (computerChoice === "scissors") {
      resultMessage.textContent = "Scissors beats paper, the computer won!";
      incrementComputerScore();
    } else {
      resultMessage.textContent = "Paper beats rock, you beat the computer!";
      incrementPlayerScore();
    }
  }
}

/**
 * Gets the current player score from the DOM and increments it by 1 if the player wins
 */
function incrementPlayerScore() {
  pScore = parseInt(document.getElementById("player-score").innerText);
  document.getElementById("player-score").innerText = ++pScore;
}

/**
 * Gets the current computer score from the DOM and increments it by 1 if the computer wins
 */
function incrementComputerScore() {
  cScore = parseInt(document.getElementById("computer-score").innerText);
  document.getElementById("computer-score").innerText = ++cScore;
}

/**
 * Counts the rounds played.
 */
function roundCount() {
  roundsLeft = parseInt(document.getElementById("rounds-left").innerText);
  document.getElementById("rounds-left").innerText = --roundsLeft;
}

/**
 * Check if game is finished, compare final scores and display the appropriate message.
 * 
 */
function gameFinished(roundsLeft) {
  roundsLeft = parseInt(document.getElementById("rounds-left").innerText);

  if (roundsLeft === 0) {
    restartBtn.style.display = 'inline-block';
    document.getElementById("player-prompt").innerText = "Click restart to start a new game";
    document.getElementById("choice-area").style.display = 'none';
    const icons = document.querySelectorAll('.selection');
    icons.forEach(function (icon) {
      icon.style.pointerEvents = "none";
    });
    if (pScore > cScore) {
      resultMessage.textContent =
        "The player's score is higher, the player wins!";
    } else if (pScore < cScore) {
      resultMessage.textContent =
        "The computer's score is higher, the computer wins!";
    } else {
      resultMessage.textContent =
        "Your scores are the same, the game is a draw.";
    }
  }
}

/**
 * Gives the option to restart the game after a certain number of rounds played.
 * Activates the restart button.
 */
function restartGame(event) {
  window.location.reload();
}
let restartBtn = document.getElementById("btn-restart");
restartBtn.addEventListener("click", restartGame);