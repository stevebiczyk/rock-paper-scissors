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
 
 }
 
 function incrementPlayerScore() {
 
 }
 function incrementComputerScore() {
     
 }