function getComputerChoice() {

    const randomnr = Math.random();
    const range = 1 / 3;

    if (randomnr < range) {
        return "Rock";
    } else if (randomnr < 2 * range) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

let wins = 0;
let cp_wins = 0;
let ties = 0;

function setPlayerSelection(input) {
    const playerSelection = input.toLowerCase();
    playGame(playerSelection);
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result_of_round = playRound(playerSelection, computerSelection);

    const winsDiv = document.querySelector(".wins");
    const cpWinsDiv = document.querySelector(".cp-wins");
    const resultround = document.querySelector(".resultround");
    const result = document.querySelector(".result");

    resultround.textContent = result_of_round;

    if (result_of_round.includes("You won!")) {
        wins++;
    } else if (result_of_round.includes("You lost!")) {
        cp_wins++;
    } else {
        ties++;
    }

    winsDiv.textContent = wins;
    cpWinsDiv.textContent = cp_wins;

    if (wins >= 5) {
        winsDiv.textContent = "";
        cpWinsDiv.textContent = "";
        resultround.textContent = "";
        result.textContent = "Congratulations! You won the game!";
    } else if (cp_wins >= 5) {
        winsDiv.textContent = "";
        cpWinsDiv.textContent = "";
        resultround.textContent = "";
        result.textContent = "Sorry, the computer won the game.";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return ("It's a tie! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return ("You won! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        return ("You lost! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        return ("You lost! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        return ("You Won! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        return ("You lost! The Computer chose: " + computerSelection);
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        return ("You Won! The Computer chose: " + computerSelection);
    }
}