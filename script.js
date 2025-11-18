console.log("Let's Play!");

function getComputerChoice() {
    //generate a random number between 0-2
    let genChoice = Math.floor(Math.random() * 100) % 3;
    //console.log(genChoice);
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

//console.log(getComputerChoice());

function getHumanChoice() {
    let getChoice = prompt("Rock, Paper, Scissors?");
    return getChoice.toLowerCase();
}

//console.log(getHumanChoice());

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Player: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`)
    //IF tie declare a draw
    if (humanChoice == computerChoice) {
        console.log("It's a draw!")
    }

    //IF human wins
    if ((humanChoice == "rock" & computerChoice == "scissors") ||
    (humanChoice == "scissors" & computerChoice == "paper") ||
    (humanChoice == "paper" & computerChoice == "rock")) {
        console.log("Player wins!");
        humanScore ++;
    }
    //IF computer wins
    if ((humanChoice == "rock" & computerChoice == "paper") ||
    (humanChoice == "scissors" & computerChoice == "rock") ||
    (humanChoice == "paper" & computerChoice == "scissors")){
        console.log("Computer wins!");
        computerScore ++;
    }
    console.log(`Score: ${humanScore} - ${computerScore}`)
}


function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("YOU WIN!!!")
    } else {
        console.log("Better luck next time...")
    }
}

playGame()