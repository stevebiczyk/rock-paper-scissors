# Rock, Paper, Scissors

- This is my take on the ancient game of Rock, Paper, Scissors. The game was designed to provide the user with a simple, pleasant, and enjoyable user experience. It incorporates all the necessary features to keep track of what's happening in the game without being cluttered or confusing.

- It was also my aim to use as much of the material and techniques that I have learnt during the module as possible, within the limitations of the project.

- The game is usually played between two people, or in this case between the Player and the Computer. The game is played as follows: at the start of each round both players simultaneously form one of three different shapes with their hand. Rock is represented by a closed fist, paper is a flat hand and scissors are the index finger and middle finger extended, in the shape of a V.
The rules of the game are simple. Each hand shape beats one of the remaining two shapes, and in turn can be beaten by the other shape. Choosing identical shapes results in a draw. The combinations are: rock beats scissors and is beaten by paper; paper beats rock and is beaten by scissors; scissors beats paper and is beaten by rock. 

 - In the game the hand shapes are represented with icons containing an image of a hand showing the corresponding shape. The player makes his or her selection by clicking on the icon with the corresponding image. The computer's choice is randomly generated. Both choices are then displayed on the screen in a text format. They are compared, and the winner of the round is named. A game consists of 10 rounds, after which the scores are compared, and the overall winner is displayed. If the scores are the same the game will be declared a draw. The game stops and a restart button appears with a message instructing the player to click on the button to restart the game.

![Responsiveness Image](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-devices.png)

## Features 

The user interface is simple and uncluttered, yet it displays all the information required to enjoy the game.

### Existing Features

__Main Game Area__

- The website of the game consists of a single page. The game has three distinct stages. After loading the page the user is greeted by the first screen containing the selection images, the player prompt instructing the user to start the game by clicking on one of the icons, the player and computer score counters and the rounds remaining counter. 

 - Once the game commences two new lines of text appear, the top line displaying the player's and the computer's choice. The line beneath that compares the selections and declares the winner of the round. The winner's score counter is then incremented. 
 
 - Upon completing the 10th round the final scores are compared and the winner is declared. If the scores are the same the game will be declared a draw. The click function of the selection icons is deactivated and the restart button is displayed. The player prompt also changes, instructing the player to start a new game by clicking the restart button.



  ![Main Game Area Image 1](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-main.jpg)
  ![Main Game Area Image 2](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-main-2.jpg)
  ![Main Game Area Image 3](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-main-3.jpg)

 __The Footer__ 

  - The footer section contains the copyright disclaimer.

  ## Accesibility

  - Alt labels were added to the images to help with accessibility issues.

### Features Left to Implement

- Rock, Paper, Scissors is a game of chance, however the individual players might want to track their scores and possibly compete with one another.
A score tracking and leader board section could be added to achieve these goals.
- The player could be asked to input their name before starting the game and their name could be displayed as the player.

## Technologies Used

### Languages Used

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Programs Used

- [Gitpod](https://www.gitpod.io/) for writing down the code and creating the website.
- [Github](https://github.com/) to save and store the progress and files used on the website.
- [Google Fonts](https://fonts.google.com/) to import the fonts used on the website.
- [W3C Validator](https://validator.w3.org/) to validate the HTML.
- [W3C Jigsaw Validator](https://jigsaw.w3.org/css-validator/) to validate the CSS.
- [JSHint](https://jshint.com/) to validate the JavaScript code.

## Testing 

- The HTML, CSS and JavaScript files were checked for correct indentation and validated. The text was checked for typos numerous times, both in the source code and on the finished webpage, including the Readme file. The website was opened both in Google Chrome and Microsoft Edge browsers and all features displayed correctly. The responsiveness of the page was checked on desktop, simulated tablet and mobile devices. Several hundred rounds of the game were played to test every possible outcome multiple times.

__Validator Testing__

- No errors were returned when passing through the official W3C validator

![HTML Validation Report](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-html-validation.jpg)

- No errors were found when passing through the official (Jigsaw) validator

![CSS Validation Report](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-css-validation.jpg)

- No errors were found when passing through the official JShint validator
The following metrics were returned:

There are 10 functions in this file.
Function with the largest signature take 2 arguments, while the median is 0.5.
Largest function has 19 statements in it, while the median is 2.
The most complex function has a cyclomatic complexity value of 8 while the median is 1.

- The performance of all pages was also checked in Lighthouse and the scores were 90% or above in all categories.

![Lighthouse Scores](https://github.com/stevebiczyk/rock-paper-scissors/blob/main/media/rps-lighthouse.jpg)

__Unfixed Bugs__

- All the bugs found by the testing described above were fixed. Testing was repeated until no further errors were found.

## Deployment

- The site was deployed to GitHub pages. 
The live link can be found here - https://stevebiczyk.github.io/rock-paper-scissors/

## Credits

__Content__

- Some of the ideas for the layout and structure came from this tutorial: https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/

- The styling and the code structure was also influenced by the Love Maths walkthrough project.

- The idea of clickable images instead of buttons came from this YouTube video: https://www.youtube.com/watch?v=jaVNP3nIAv0

- Tutor help was sought to find a way to disable the event listeners for the selection icons at the end of the 10th round.

- The description of the gameplay is based on the game's Wikipedia article: https://en.wikipedia.org/wiki/Rock_paper_scissors

- The resources contained in the course material, on [W3Schools](https://www.w3schools.com/) and on [Stack Overflow](https://stackoverflow.com/) were used to better understand the basic concepts requred to write the code. No code was directly taken from any of these websites.

__Images__

- The three images used for the selection icons are from https://icons8.com/

## Acknowledgements

- I would also like to thank my mentor, Dick Vlaanderen for his helpful and valuable input and ideas.

- I would also like to thank the tutors and my fellow students who helped and answered my questions.