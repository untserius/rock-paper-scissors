# Rock Paper Scissors Game

A simple Rock Paper Scissors game implemented in JavaScript. Play against the computer and see if you can beat it!

## How to Play

1. Clone or download this repository.
2. Open the `index.html` file in your web browser.
3. An alert box will prompt you to enter your move (rock, paper, or scissors).
4. The computer will randomly select its move.
5. The winner of each round will be displayed in an alert box.
6. After 5 rounds, the final winner will be determined and displayed.

## Gameplay Details

The JavaScript code in the `game.js` file handles the game mechanics. The game consists of the following components:

### Variables

- `box`: An array containing the choices for the game (rock, paper, scissors).
- `userScore`: Keeps track of the player's score.
- `computerScore`: Keeps track of the computer's score.

### Functions

- `getComputerChoice()`: A function to get the computer's choice randomly from the `box` array.
- `playGame(playerSelection, computerSelection)`: A function that takes the player's and computer's choices as input and determines the winner of the round.
- `startGame()`: The main function to play the game. It runs 5 rounds, gets the player's move using a prompt, and displays the results.

## How the Winner is Determined

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to use, modify, and distribute the code as you like!

Have fun playing Rock Paper Scissors!