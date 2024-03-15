function getComputerChoice() {
    const rock = "Rock";
    const scissors = "Scissors";
    const paper = "Paper";

    let randomnr = Math.random();

    if (randomnr < (1/3)) {
        return rock;
    } else if (randomnr <= (2/3)){
        return scissors;
    } else if (randomnr > (2/3)){
        return paper;
    }
}

console.log(getComputerChoice());