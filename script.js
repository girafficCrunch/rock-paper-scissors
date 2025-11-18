console.log("Let's Play!");

function getComputerChoice() {
    //generate a random number between 0-2
    let genChoice = Math.floor(Math.random() * 100) % 3;
    console.log(genChoice);
    if (genChoice === 0) {
        return "paper";
    }
    if (genChoice === 1) {
        return "scissors";
    }
    if (genChoice === 2) {
        return "rock";
    }
}

console.log(getComputerChoice());