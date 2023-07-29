// variables initialization
const box = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let roundCount = 0;

// get computer's choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * box.length);

    // converts the computer's choice into respective icon
    function iconSelector() {
        if(randomIndex === 0) {
            return `<i class="fa-solid fa-hand-back-fist"></i>`;
        } else if(randomIndex === 1) {
            return `<i class="fa-solid fa-hand"></i>`;
        } else if(randomIndex === 2) {
            return `<i class="fa-solid fa-hand-scissors"></i>`;
        }   
    }

    return iconSelector();
};

// game logic
function playGame(playerSelection, computerSelection) {
    const userChoice = playerSelection;
    const computerChoice = computerSelection;

    if (userChoice === computerChoice) {
        return `It's a Tie!`;
    } else if (
        (userChoice === `<i class="fa-solid fa-hand-back-fist"></i>` && computerChoice === `<i class="fa-solid fa-hand-scissors"></i>`) ||
        (userChoice === `<i class="fa-solid fa-hand"></i>` && computerChoice === `<i class="fa-solid fa-hand-back-fist"></i>`) ||
        (userChoice === `<i class="fa-solid fa-hand-scissors"></i>` && computerChoice === `<i class="fa-solid fa-hand"></i>`)
    ) {
        userScore++;
        updateScore();
        return `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        updateScore();
        return `You Lose! ${computerChoice} beats ${userChoice}`;
    }
}

// update scores
function updateScore() {
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}



// handle the game logic after each round/loop
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

// display final result
function endGame() {
    document.getElementById("output").innerHTML = finalResult(); 
}

// final result logic
function finalResult() {
    if(userScore === computerScore) {
        return "It's a Tie! Try Again";
    } else if (userScore > computerScore) {
        return "Congratulations! You Win (" + userScore + " - " + computerScore +")";
    } else {
        return "Sorry! You Lost (" + userScore + " - " + computerScore +")";
    }
}

// game functions
document.querySelector("#rock").addEventListener("click", () => handleRound(`<i class="fa-solid fa-hand-back-fist"></i>`));
document.querySelector("#paper").addEventListener("click", () => handleRound(`<i class="fa-solid fa-hand"></i>`));
document.querySelector("#scissor").addEventListener("click", () => handleRound(`<i class="fa-solid fa-hand-scissors"></i>`));


// reset game button
document.querySelector("#reset").addEventListener("click", () => resetGame());

// reset logic
function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    updateScore();
    document.getElementById("output").innerHTML = "Choose Your Move";
}