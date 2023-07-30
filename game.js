// variables initialization
const box = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let roundCount = 0;

// get computer's choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * box.length);
    return iconSelector(randomIndex);
};

// converts the index value into icons
function iconSelector(randomIndex) {
    if(randomIndex === 0) {
        return `<i class="fa-solid fa-hand-back-fist"></i>`;
    } else if(randomIndex === 1) {
        return `<i class="fa-solid fa-hand"></i>`;
    } else if(randomIndex === 2) {
        return `<i class="fa-solid fa-hand-scissors"></i>`;
    }   
}

// game logic
function playGame(playerSelection, computerSelection) {
    const userChoice = playerSelection;
    const computerChoice = computerSelection;

    if (userChoice === computerChoice) {
        return `${userChoice} = ${computerChoice}`;
    } else if (
        (userChoice === `<i class="fa-solid fa-hand-back-fist"></i>` && computerChoice === `<i class="fa-solid fa-hand-scissors"></i>`) ||
        (userChoice === `<i class="fa-solid fa-hand"></i>` && computerChoice === `<i class="fa-solid fa-hand-back-fist"></i>`) ||
        (userChoice === `<i class="fa-solid fa-hand-scissors"></i>` && computerChoice === `<i class="fa-solid fa-hand"></i>`)
    ) {
        userScore++;
        updateScore();
        return `<span style="color: #20C20E">${userChoice} > ${computerChoice}<br>W</span>`;
    } else {
        computerScore++;
        updateScore(); 
        return `<span style="color: red">${userChoice} < ${computerChoice}<br>L</span>`;
    }
}

// update scores
function updateScore() {
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

// update rounds
function updateRoundCounter() {
    document.getElementById("current-round").innerHTML = roundCount;
}

// handle the game logic after each round/loop
function handleRound(playerSelection) {
    if (roundCount < 5) {
        const computerSelection = getComputerChoice();
        let result = playGame(playerSelection, computerSelection);
        document.getElementById("console").innerHTML = result;
        roundCount++;
        updateRoundCounter();
    }

    if (roundCount === 5) {
        setTimeout(endGame, 1000);
    }
}

// display final result
function endGame() {
    document.getElementById("console").innerHTML = finalResult(); 
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
    updateRoundCounter();
    document.getElementById("console").innerHTML = "Choose Your Move";
}