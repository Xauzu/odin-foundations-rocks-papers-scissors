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
    let input = playerSelection.toLowerCase();
    let userInput = input.at(0).toUpperCase() + input.slice(1);

    // Tie
    if (userInput === computerSelection) {
        return "You Tied! Both of you chose " + computerSelection + ".";
    }

    // Lost
    else if (userInput === "Rock" && computerSelection === "Paper"
            || userInput === "Paper" && computerSelection === "Scissor"
            || userInput === "Scissor" && computerSelection === "Rock") {
                return "You Lose! " + computerSelection + " beats " + userInput + ".";
            } 

    // Won
    else {
        return "You Win! " + userInput + " beats " + computerSelection + "."; 
    }
}