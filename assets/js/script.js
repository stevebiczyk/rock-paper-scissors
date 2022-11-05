/**
 * Declare constants for DOM elements.
 */

 const playerSelection = document.getElementById("player-selection");
 const computerChoice = document.getElementById("computer-choice");
 const playerScore = document.getElementById("player-score");
 const computerScore = document.getElementById("computer-score");
 const resultMessage = document.getElementById("result-message");
 /* var roundsLeft = parseInt(document.getElementById("rounds-left").innerText);
 const restartGame = document.getElementById("restart");*/
 
 /**
  * Add event listeners and get player selection.
  */
  let selections = document.getElementsByClassName("selection");
     for (let selection of selections) {
         selection.addEventListener("click", function() {
 let playerSelection = this.getAttribute("data-selection");
playGame(playerSelection);
         });
     }
    
 function generateComputerChoice() {
   const choices = ["rock", "paper", "scissors"] 
    let randomSelection = Math.floor(Math.random() * choices.length);
    return choices[randomSelection];
 }
 
 function playGame(playerSelection) {
    const computerChoice = generateComputerChoice();
    decideWinner(playerSelection, computerChoice);
    roundCount();
    gameFinished(roundsLeft,0);
 }

/**
 * Compares the player and  computer selection and declares the winner.
 * Also increments the score for the wiiner.
 */
 
 function decideWinner (playerSelection, computerChoice) {
   /* console.log(`Player chose ${playerSelection}`);
   console.log(`Computer chose ${computerChoice}`); */
   document.getElementById("player-selection").innerText = playerSelection;
   document.getElementById("computer-choice").innerText = computerChoice;
   if (playerSelection === computerChoice) {
      resultMessage.textContent = "Both players chose the same, it's a draw!";   
          }
         else if (playerSelection === 'rock') {
              if (computerChoice === 'paper') {
                  resultMessage.textContent = "Paper beats rock, the computer won!";
                  incrementComputerScore();
   
              }else {
                  resultMessage.textContent = "Rock beats scissors, you beat the computer!"
                  incrementPlayerScore(playerScore);
              }
          }

          else if (playerSelection === 'scissors') {
              if (computerChoice === 'rock') {
                  resultMessage.textContent = "Rock beats scissors, the computer won!";
                  incrementComputerScore();
              }else {
                  resultMessage.textContent = "Scissors beats paper, you beat the computer!";
                  incrementPlayerScore();
              }
          }

          else if (playerSelection === 'paper') {
              if (computerChoice === 'scissors') {
                  resultMessage.textContent = "Scissors beats paper, the computer won!";
                  incrementComputerScore();
              }else {
                  resultMessage.textContent = "Paper beats rock, you beat the computer!";
                  incrementPlayerScore();
              }
          }
         }
         /* function playGame(playerSelection) {
            const computerChoice = generateComputerChoice();
            console.log(`Player chose ${playerSelection}`);
            console.log(`Computer chose ${computerChoice}`); 
            decideWinner();
         }   */


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

function  roundCount() {
let roundsLeft = parseInt(document.getElementById("rounds-left").innerText); 
document.getElementById("rounds-left").innerText = --roundsLeft;
}

function gameFinished(roundsLeft) {
if (roundsLeft === 0 && playerScore == computerScore) {
   resultMessage.textContent = 'Your scores are the same, the game is a draw.'
}else if (roundsLeft === 0 && playerScore > computerScore) {
      resultMessage.textContent = 'The players score is higher, the player wins!'
} else { (roundsLeft === 0 && playerScore > computerScore)
   resultMessage.textContent = 'The computers score is higher, the player lost!';
}
roundsLeft.style.display = 'none';  
}

/**
 * Gives the option to restart the game after a certain number of rounds played.
 */

function restartGame(event) {
   window.location.reload();
}
 let restartBtn = document.getElementById("btn-restart");
 restartBtn.addEventListener('click', restartGame);