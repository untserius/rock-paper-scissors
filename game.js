// variables initialization
const box = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let roundCount = 0;

// function to get computer's choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * box.length);
    return box[randomIndex];
};

// function to play the game
function playGame(playerSelection, computerSelection) {
    const userChoice = playerSelection;
    const computerChoice = computerSelection;

    if (userChoice === computerChoice) {
        return "It's a Tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        updateScore();
        return "You Win! " + userChoice + " beats " + computerChoice;
    } else {
        computerScore++;
        updateScore();
        return "You Lose! " + computerChoice + " beats " + userChoice;
    }
}

// function to update scores
function updateScore() {
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

// function to reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    updateScore();
    document.getElementById("output").innerHTML = "";
}

// function to handle the game logic after each round
function handleRound(playerSelection) {
    if (roundCount < 5) {
        const computerSelection = getComputerChoice();
        let result = playGame(playerSelection, computerSelection);
        document.getElementById("output").innerHTML = result;
        roundCount++;
    }

    if (roundCount === 5) {
        endGame();
    }
}

function endGame() {
    document.getElementById("output").innerHTML = "Final Result: " + 
    (userScore > computerScore) ?
        "Congratulations! You scored " + userScore + " points and the computer scored " + computerScore + " points." + " You Win!" : 
        "Sorry! You scored " + userScore + " points and the computer scored " + computerScore + " points." + " You Lose!";
}

// game functions
document.querySelector("#rock").addEventListener("click", () => handleRound("rock"));
document.querySelector("#paper").addEventListener("click", () => handleRound("paper"));
document.querySelector("#scissor").addEventListener("click", () => handleRound("scissors"));


// reset game
document.querySelector("#reset").addEventListener("click", () => resetGame());