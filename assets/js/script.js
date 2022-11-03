/**
 * Declare constants for DOM elements and possible choices.
 */

 const playerScore = document.getElementById("player-score");
 const computerScore = document.getElementById("computer-score");
 const choices = ["rock", "paper", "scissors"]
 
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
 /* const choices = ["rock", "paper", "scissors"] */
    let randomSelection = Math.floor(Math.random() * choices.length);
    return choices[randomSelection];
 }
 
 function playGame(playerSelection) {
    const computerChoice = generateComputerChoice();
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerChoice}`);
 }
 
 function decideWinner () {
    if (playerSelection === computerChoice) {
       resultMessage.textContent = 'Both chose the same, its a draw'
    }else if (playerSelection === 'rock' && computerChoice === "paper") {
          resultMessage.textContent = 'The player lost!'
          incrementComputerScore();
    } else if (playerSelection === 'rock' && computerChoice === "scissors") {
          resultMessage.textContent = 'The player won!'
          incrementPlayerScore();
        } else if (playerSelection === 'paper' && computerChoice === "scissors") {
             resultMessage.textContent = 'The player lost!'
             incrementComputerScore();
        } else if (playerSelection === 'paper' && computerChoice === "rock") {
                resultMessage.textContent = 'The player won!'
                incrementPlayerScore();
        } else if (playerSelection === 'scissors' && computerChoice === "rock") {
                   resultMessage.textContent = 'The player lost!'
                   incrementComputerScore();
         } else if (playerSelection === 'scissors' && computerChoice === "paper") {
                      resultMessage.textContent = 'The player won!'
                      incrementPlayerScore();
    } else {
       resultMessage.textContent = 'The player won!'
       incrementPlayerScore();
    }
 }
 
 function incrementPlayerScore() {
 
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
 }
 
 function incrementComputerScore() {
 
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
 }