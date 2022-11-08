# Rock, Paper, Scissors

- This is my take on the ancient game of Rock, Paper, Scissors. The game was designed to provide the user with a simple, pleasant and enjoyable user experience. It incorporates all the necessary features to keep track of what's happening in the game without being cluttered or confusing.
The game is usually played between to people, or in this case between the Player and the Computer. The game is played as follows: At the start of each round both players simultaneously form one of three different shapes with their hand. Rock is a closed fist, paper is a flat hand and scissors are the index finger and middle finger extended, in the shape of a V.
The rules of the game are simple. Each hand shape beats one of the remaining shapes and is beaten by the other one. Choosing identical shapes results in a draw. The combinations are: Rock beats scissors and is beaten by paper. Paper beats rock and is beaten by scissors. Scissors beat paper and are beaten by the rock symbol. 

 - In the game the shapes are represented with icons containing an image of a hand showing the corresponding shape. The player makes his or her selection by clicking on the icon with the corresponding image. The computer's choice is randomly generated. Both choices are displayed on the screen in a text format, they are compared and the winner of the round is named. A game consists of 10 rounds, after which the scores are compared and the overall winner is displayed. The game stops and a restart button appears with a message instructing the player to restart the game.

![Homepage Image](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-devices.png)

## Features 

### Existing Features

- The website consists of a single page. The game has three distinct stages. After loading the page the user is greeted by the first screen containing the selection images, the player prompt instructing the user to start the game by clicking on one of the icons, the player and computer score counters and the rounds remaining counter. 

 - Once the game is started two new lines of text appear, the top line displaying the player's and the computer's choice. The line beneath that compares the selections and declares the winner of the round. The corresponding score counter is then incremented. 
 
 - Upon completing the 10th round the final scores are compared and the winner is declared. The click function of the selction icons is deactivated and the restart button is displayed. The player prompt also changes, instructing the player to start a new game by clicking the restart button.

- __Main Game area__

  - 
  - 
  ![Main Game Area Image](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-devices.png)


- __The Footer__ 

  - The footer section contains the copyright disclaimer.


### Features Left to Implement

- Rock, Paper, Scissors is a game of chance, however the individual players might want to track their scores and possibly compete with one another.
A score tracking and leaderboard section could be added to achieve these goals.

## Testing 

The html, css and javascript files were checked for correct indentation and the text was checked for typos numerous times, both in the source code and on the finished webpage.

The website was opened both in Google Chrome and Microsoft Edge browsers and all features displayed correctly.
The responsiveness of the page was checked on desktop, simulated tablet and mobile devices.

The performance of all pages was also checked in Lighthouse and the scores were very good.

![Lighthouse Scores](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-lighthouse.jpg)