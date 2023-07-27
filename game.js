// variables initialization
const box = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

// function to get computer's choice
getComputerChoice = () => {
    const randomIndex =  Math.floor(Math.random() * box.length);
    return box[randomIndex];
}

// reassign computer's choice
computerSelection = getComputerChoice();

// loop to play 5 rounds
for (let i = 1; i < 5; i++) {
    playerSelection = prompt("Enter your move");
    computerSelection = getComputerChoice();
    alert(playGame(playerSelection, computerSelection));
}

// to determine the winner
if (userScore > computerScore) {
    alert("Congratulations! You scored " + userScore + " points and the computer scored " + computerScore + " points." + " You Win!");
} else if (userScore < computerScore) {
    alert("Sorry! You scored " + userScore + " points and the computer scored " + computerScore + " points." + " You Lose!");
} else {
    alert("Its a Tie! Both scored " + userScore + " points.");
}

// function to play the game
function playGame(playerSelection, computerSelection) {
    
    const userChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (userChoice === computerChoice) {
        return "Its a Tie!";
    } else if (
        userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "scissors" && computerChoice === "paper"
    ) {
        userScore++;
        return "You Win! " + userChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        return "You Lose! " + computerChoice + " beats " + userChoice;
    }
}



