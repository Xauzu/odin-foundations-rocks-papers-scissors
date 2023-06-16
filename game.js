function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
        return "Rock";
    }
    else if (rand === 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    let userInput = playerSelection.toLowerCase();
    let computerInput = computerSelection.toLowerCase();

    // Tie
    if (userInput === computerInput) {
        return "You Tied! Both of you chose " + computerSelection + ".";
    }

    // Lost
    else if (userInput === "rock" && computerInput === "paper"
            || userInput === "paper" && computerInput === "scissor"
            || userInput === "scissor" && computerInput === "rock") {
                return "You Lose! " + computerInput + " beats " + userInput + ".";
            } 

    // Won
    else {
        return "You Win! " + userInput + " beats " + computerInput + "."; 
    }
}